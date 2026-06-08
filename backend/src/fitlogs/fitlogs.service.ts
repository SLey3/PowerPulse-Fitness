import {
  Injectable,
  ImATeapotException,
  BadRequestException,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';
import { Prisma } from '@/generated/prisma';
import { tidy, sum, summarize, groupBy } from '@tidyjs/tidy';
import dayjs from 'dayjs';

import { hr2m, vals2ints, formatDto, m2hr } from '@/src/utils';
import { PrismaService } from '@/src/prisma_m/prisma.service';
import { CompendiumMService } from '@/src/compendium_m/compendium_m.service';
import { FitexerciseService } from '@/src/fitexercise/fitexercise.service';
import { CreateDto, UpdateDto } from './dto';

@Injectable()
export class FitlogsService {
  constructor(
    private prisma: PrismaService,
    private compendium: CompendiumMService,
    private fitexercises: FitexerciseService,
  ) {}

  findAll(userId: number) {
    return this.prisma.workoutLog.findMany({
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
      },
      where: {
        userId: userId,
      },
    });
  }

  async findOne(id: number, userId: number) {
    const log = await this.prisma.workoutLog.findFirst({
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        description: true,
        routine: true,
        duration: true,
        notes: true,
        estimatedCalorieBurn: true,
        categories: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      where: {
        id: id,
        userId: userId,
      },
    });

    if (!log) throw new NotFoundException(`Could not find log with id: ${id}`);

    return log;
  }

  findDashboard(userId: number) {
    return this.prisma.workoutLog.findMany({
      take: 5,
      select: {
        title: true,
        description: true,
        estimatedCalorieBurn: true,
      },
      where: {
        userId: userId,
      },
    });
  }

  async createLog(createDto: CreateDto, userId: number) {
    let created_log: {
      title: string;
    };
    const user = await this.prisma.user.findUnique({
      select: {
        weight: true,
      },
      where: {
        id: userId,
      },
    });

    if (!user)
      throw new BadRequestException('User with provided id does not exist');
    const { weight } = user;

    // calculate estimated total calorie burned
    const mets: number[] = [];

    await Promise.all(
      createDto.routine.map(async (val) => {
        const { type, name, custom } = val.exercise;
        const met = await this.compendium.findMET(type, name);

        if (!met && custom) {
          mets.push(parseFloat(val.exercise.met as string));
        } else {
          mets.push(parseFloat(met!));
        }

        if (val.time_format === 'hrm') {
          const [hour, minutes] = vals2ints(
            (val.duration as string).split(':'),
          );
          val.duration = hr2m(hour, minutes);
        }

        await this.fitexercises.updateUseCount({ name, dir: 'pos' }, userId);
      }),
    );

    // set total workout duration
    const duration = tidy(
      createDto.routine,
      groupBy('duration', [
        summarize({
          totalDuration: sum('duration'),
        }),
      ]),
    )[0].totalDuration;

    // calculate estimated total calories burned
    const withSumMETS = tidy(
      [{ mets: mets }],
      summarize({
        sumMETS: sum('mets'),
      }),
    );

    // done this way to workaround typescript error "Property 'sumMETS' does not exist on type..."
    const estimatedCalorieBurn = tidy(
      withSumMETS,
      summarize({
        estimatedCalorieBurn: (d) => (duration * d[0].sumMETS * weight) / 200,
      }),
    )[0].estimatedCalorieBurn;

    try {
      created_log = await this.prisma.workoutLog.create({
        select: {
          title: true,
        },
        data: {
          title: createDto.title,
          description: createDto.description,
          routine: createDto.routine as unknown as Prisma.JsonArray,
          duration: duration,
          notes: createDto.notes,
          estimatedCalorieBurn: estimatedCalorieBurn,
          userId: userId,
        },
      });
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Log already exists!');
        }
      }

      throw new Error(error as string);
    }

    return { created: `Log: ${created_log.title} added to your logs!` };
  }

  async updateLog(updateDto: UpdateDto, userId: number) {
    const { logId, ...filteredDto } = formatDto<UpdateDto>(updateDto);

    if (Object.keys(filteredDto).length === 0)
      throw new BadRequestException('No Fields to Edit');

    const { title } = await this.prisma.workoutLog.update({
      select: {
        title: true,
      },
      where: {
        id: logId!,
        userId: userId,
      },
      data: {
        ...filteredDto,
      },
    });

    return { updated: `Log: ${title} has been updated!` };
  }

  async deleteLog(id: number, userId: number) {
    const { title } = await this.prisma.workoutLog.delete({
      select: {
        title: true,
      },
      where: {
        id: id,
        userId: userId,
      },
    });

    return { confirmation: `Account with email of ${title} is now deleted` };
  }

  async deleteAll(userId: number) {
    const res = await this.prisma.workoutLog.deleteMany({
      where: {
        userId: userId,
      },
    });

    if (res.count > 0) {
      return { success: 'Deleted All logs' };
    }

    throw new ImATeapotException('No workout logs to delete');
  }
}
