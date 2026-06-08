import {
  Injectable,
  BadRequestException,
  ForbiddenException,
  InternalServerErrorException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from '@/src/prisma_m/prisma.service';
import { Prisma, $Enums } from '@/generated/prisma';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';
import { CreateDto, UpdateDto, uProgressDto } from './dto';
import { DeleteDto, DeleteManyDto } from '@/src/utils/dtos';
import dayjs from 'dayjs';

import { formatDto, kg2lbs, km2mi, lbs2kg, mi2km } from '@/src/utils';
import { TimeLength } from '@/src/utils/validators/times';
import { DistanceUnits, MeasurementUnits, Status } from '@/src/utils/enums';

@Injectable()
export class FitGoalsService {
  constructor(private prisma: PrismaService) {}

  async findAll(userId: number) {
    return this.prisma.fitnessGoal.findMany({
      select: {
        id: true,
        title: true,
        createdAt: true,
        updatedAt: true,
        progress: true,
        status: true,
        completeBy: true,
      },
      where: {
        userId: userId,
      },
    });
  }

  async findOne(id: number, userId: number) {
    const goal = await this.prisma.fitnessGoal.findFirstOrThrow({
      where: {
        id: id,
        userId: userId,
      },
    });

    const { unitPref: userMeasurementPreference } =
      await this.prisma.user.findUniqueOrThrow({
        select: {
          unitPref: true,
        },
        where: {
          id: userId,
        },
      });

    if (userMeasurementPreference === $Enums.UserUnitPreference.IMPERIAL) {
      if (goal.weightLoss) {
        goal.weightLoss = kg2lbs(goal.weightLoss);
      }

      if (goal.calorieBurn) {
        goal.calorieBurn = kg2lbs(goal.calorieBurn);
      }

      if (goal.distance) {
        goal.distance = km2mi(goal.distance);
      }
    }

    return goal;
  }

  findDashboard(userId: number) {
    return this.prisma.fitnessGoal.findMany({
      take: 5,
      select: {
        id: true,
        title: true,
        status: true,
        daysRemaining: true,
        description: true,
      },
      where: {
        userId: userId,
      },
    });
  }

  findGoalTblList(userId: number) {
    return this.prisma.fitnessGoal.findMany({
      select: {
        id: true,
        title: true,
        progress: true,
        completeBy: true,
        daysRemaining: true,
        status: true,
      },
      where: {
        userId: userId,
      },
    });
  }

  async findGoalAnalyticsData(
    userId: number,
    all: boolean,
    opts: Prisma.FitnessGoalSelect | undefined,
  ) {
    const blacklist = {
      description: true,
      userId: true,
      completeBy: true,
      progress: true,
      subgoals: true,
      title: true,
      createdAt: true,
      updatedAt: true,
    };

    const statuslbl = ['Not Started', 'In Progress', 'Completed', 'Failed'];

    if (all) {
      const prismaResult = await this.prisma.fitnessGoal.findMany({
        omit: { ...blacklist },
        where: {
          userId: userId,
        },
      });

      return prismaResult
        ? {
            statusLabels: statuslbl,
            result: prismaResult,
          }
        : {};
    } else {
      if (!opts)
        throw new BadRequestException(
          'Options is a required parameter if not requesting all available parameters',
        );

      // check for any not permitted keys being set in opts
      const optKeys = Object.keys(opts);
      const blacklistKeys = Object.keys(blacklist);

      optKeys.forEach((key) => {
        if (blacklistKeys.includes(key)) {
          throw new BadRequestException(
            `${key} is not permitted for analytics operations`,
          );
        }
      });

      const prismaResult = await this.prisma.fitnessGoal.findMany({
        select: { ...opts },
        where: {
          userId: userId,
        },
      });

      return prismaResult
        ? 'status' in prismaResult
          ? {
              statusLabels: statuslbl,
              result: prismaResult,
            }
          : prismaResult
        : {};
    }
  }

  async createGoal(dto: CreateDto, userId: number) {
    const {
      status,
      subgoals,
      weightLossUnit,
      distanceUnit,
      calorieBurnUnit,
      ...create_dto
    } = dto;
    const today = dayjs();

    let goal: {
      title: string;
    };

    let confirmedStatus: $Enums.GoalStatus = $Enums.GoalStatus.NOT_STARTED;

    if (status && status !== Status.DEFAULT) {
      const mapped =
        $Enums.GoalStatus[status as keyof typeof $Enums.GoalStatus];

      if (!mapped) {
        throw new UnprocessableEntityException(
          `Invalid status value: ${status}`,
        );
      }

      confirmedStatus = mapped;
    }

    // process subgoals if user submitted subgoals
    const processedSubGoals =
      subgoals?.map((subgoal) => {
        const valid_date = TimeLength({
          value: subgoal.completeBy,
          minDate: today,
          maxDate: dto.completeBy,
          strict: true,
        });

        if (!valid_date) {
          throw new BadRequestException({
            subgoals: {
              id: subgoal.title,
              completeBy: `Subgoal "${subgoal.title}" Complete By date is Either today or before. 
                                    It is also possible it is set to after the goals set Complete By date.`,
            },
          });
        }

        return {
          name: subgoal.title,
          desc: subgoal.description,
          completeBy: subgoal.completeBy,
        };
      }) ?? null;

    // process weight adjustments if needed
    if (create_dto.weightLoss && weightLossUnit) {
      if ((weightLossUnit as MeasurementUnits) === MeasurementUnits.LBS) {
        create_dto.weightLoss = lbs2kg(create_dto.weightLoss);
      }
    }

    if (create_dto.calorieBurn && calorieBurnUnit) {
      if ((calorieBurnUnit as MeasurementUnits) === MeasurementUnits.LBS) {
        create_dto.calorieBurn = lbs2kg(create_dto.calorieBurn);
      }
    }

    if (create_dto.distance && distanceUnit) {
      if ((distanceUnit as DistanceUnits) === DistanceUnits.MI) {
        create_dto.distance = mi2km(create_dto.distance);
      }
    }

    // push to db
    try {
      goal = await this.prisma.fitnessGoal.create({
        select: {
          title: true,
        },
        data: {
          userId: userId,
          status: confirmedStatus,
          progress: 0.0,
          daysRemaining: dayjs(dto.completeBy).diff(today, 'days'),
          subgoals: processedSubGoals
            ? processedSubGoals
            : Prisma.NullableJsonNullValueInput.JsonNull,
          ...create_dto,
        },
      });

      return { created: `${goal.title} has been added!` };
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Goal already exists!');
        }
        throw new BadRequestException(error, {
          cause: error.cause,
          description: error.message,
        });
      }

      throw new Error(error as string);
    }
  }

  async updateGoalProgress(dto: uProgressDto, userId: number) {
    const { goalId, num } = dto;

    const { title } = await this.prisma.fitnessGoal.update({
      select: {
        title: true,
      },
      where: {
        id: goalId,
        userId: userId,
      },
      data: {
        progress: num,
        status: num === 100 ? 'COMPLETED' : 'IN_PROGRESS',
      },
    });

    return { success: `${title} progress has been updated` };
  }

  async updateGoal(dto: UpdateDto, userId: number) {
    const { goalId, ...filteredDto } = formatDto<UpdateDto>(dto);

    if (Object.keys(filteredDto).length === 0)
      throw new BadRequestException('No fields to edit');

    const currentGoal = await this.findOne(goalId!, userId);
    const today = dayjs();
    const data: {
      title: string | undefined;
      description: string | undefined;
      completeBy: Date | undefined;
      status: $Enums.GoalStatus | undefined;
      subgoals:
        | Prisma.InputJsonValue
        | Prisma.NullableJsonNullValueInput
        | undefined;
    } = {
      title: filteredDto.title ?? undefined,
      description: filteredDto.description ?? undefined,
      completeBy: dayjs(filteredDto.completeBy).toDate() ?? undefined,
      status: filteredDto.status ?? undefined,
      subgoals: Prisma.NullableJsonNullValueInput.JsonNull,
    };

    if (data.subgoals !== currentGoal.subgoals) {
      const updatedSubgoals =
        filteredDto.subgoals?.map((subgoal, i) => {
          const payload: Record<string, any> = {};

          if (subgoal.completeBy) {
            const valid_date = TimeLength({
              value: subgoal.completeBy,
              minDate: today,
              maxDate: currentGoal.completeBy,
            });

            if (!valid_date) {
              throw new BadRequestException({
                subgoals: {
                  id: i,
                  completeBy:
                    "Complete By Date is either before today or after the goal's Complete By Date",
                },
              });
            }

            payload['completeBy'] = subgoal.completeBy;
          }

          if (subgoal.name) payload['name'] = subgoal.name;
          if (subgoal.description) payload['desc'] = subgoal.description;

          return payload;
        }) ?? Prisma.NullableJsonNullValueInput.JsonNull;

      data.subgoals = updatedSubgoals;
    }

    const { title } = await this.prisma.fitnessGoal.update({
      select: {
        title: true,
      },
      where: {
        id: goalId!,
        userId: userId,
      },
      data: {
        ...data,
      },
    });

    return { updated: `${title} has been updated!` };
  }

  async deleteGoal(deleteDto: DeleteDto, userId: number) {
    const { title } = await this.prisma.fitnessGoal.delete({
      select: {
        title: true,
      },
      where: {
        id: deleteDto.id,
        userId: userId,
      },
    });

    return { success: `${title} has been deleted!` };
  }

  async deleteManyGoals(deleteManyDto: DeleteManyDto, userId: number) {
    try {
      const { count: delCount } = await this.prisma.exercises.deleteMany({
        where: {
          id: {
            in: deleteManyDto.ids,
          },
          userId: userId,
        },
      });

      if (delCount === deleteManyDto.ids.length) {
        return { confirmation: 'Requested goals have been deleted!' };
      }

      throw new InternalServerErrorException({
        goalIds: deleteManyDto.ids,
        msg: 'Something wrong has occurred. Please try again later.',
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new BadRequestException(
            'Operation failed: No records found to delete',
          );
        }

        throw new BadRequestException(error.message, {
          cause: error.cause,
          description: error.code,
        });
      }

      throw new Error(error as string);
    }
  }

  async deleteAll(userId: number) {
    try {
      await this.prisma.fitnessGoal.deleteMany({
        where: {
          userId: userId,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new BadRequestException(
            'Operation failed: No records found to delete',
          );
        }

        throw new BadRequestException(error.message, {
          cause: error.cause,
          description: error.code,
        });
      }

      throw new Error(error as string);
    }

    return { confirmation: 'All Exercises have been deleted!' };
  }
}
