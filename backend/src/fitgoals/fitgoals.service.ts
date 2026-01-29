import { 
    Injectable,
    BadRequestException,
    NotFoundException,
    ForbiddenException,
    ImATeapotException,
    InternalServerErrorException
} from "@nestjs/common"
import { PrismaService } from "src/prisma_m/prisma.service"
import { Prisma, $Enums, type GoalStatus } from "generated/prisma"
import { PrismaClientKnownRequestError } from "generated/prisma/runtime/client"
import { CreateDto, UpdateDto, DeleteDto, DeleteManyDto } from "./dto"
import dayjs from "dayjs"

import { formatDto } from "src/utils"
import { TimeLength } from "src/utils/validators/times"

@Injectable()
export class FitGoalsService {

    constructor(private prisma: PrismaService) {}

    async findAll(userId: number) {
        return this.prisma.fitnessGoal.findMany({
            select: {
                title: true,
                daysRemaining: true,
                progress: true,
                status: true,
                completeBy: true,
                subgoals: true
            },
            where: {
                userId: userId
            }
        })
    }

    async findOne(id: number, userId: number) {
        const goal = await this.prisma.fitnessGoal.findFirst({
            where: {
                id: id,
                userId: userId
            },
        })

        if (!goal) throw new NotFoundException(`Goal with ID ${id} Not Found.`)

        return goal
    }

    findDashboard(userId: number) {
        return this.prisma.fitnessGoal.findMany({
            take: 5,
            select: {
                id: true,
                title: true,
                status: true,
                daysRemaining: true,
                description: true
            },
            where: {
                userId: userId
            }
        })
    }

    findGoalTblList(userId: number) {
        return this.prisma.fitnessGoal.findMany({
            select: {
                id: true,
                title: true,
                progress: true,
                completeBy: true,
                daysRemaining: true,
                status: true
            },
            where: {
                userId: userId
            }
        })
    }

    async findGoalAnalyticsData(userId: number, all: boolean, opts: Prisma.FitnessGoalSelect | undefined) {
        const blacklist = {
            description: true,
            userId: true,
            completeBy: true,
            progress: true,
            subgoals: true,
            title: true,
            createdAt: true,
            updatedAt: true
        }

        const statuslbl = [
            "Not Started",
            "In Progress",
            "Completed",
            "Failed"
        ]

        if (all) {
            const prismaResult = await this.prisma.fitnessGoal.findMany({
                omit: {...blacklist},
                where: {
                    userId: userId
                }
            })

            return prismaResult ? {
                statusLabels: statuslbl,
                ...prismaResult
            } : {}
        } else {
            if (!opts) throw new BadRequestException("Options is a required parameter if not requesting all available parameters")

            // check for any not permitted keys being set in opts
            const optKeys = Object.keys(opts)
            const blacklistKeys = Object.keys(blacklist)

            optKeys.forEach(key => {
                if (blacklistKeys.includes(key)) {
                    throw new BadRequestException(`${key} is not permitted for analytics operations`)
                }
            })

            const prismaResult = await this.prisma.fitnessGoal.findMany({
                select: {...opts},
                where: {
                    userId: userId
                }
            })

            return prismaResult ?
                "status" in prismaResult
                    ? {
                        statusLabels: statuslbl,
                        ...prismaResult
                    } : prismaResult
                : {}
        }

        
    }

    async createGoal(dto: CreateDto, userId: number) {
        let goal: {
            title: string;
        };
        const { status, subgoals, ...create_dto } = dto
        const today = dayjs()

        // process subgoals if user submitted subgoals
        const processedSubGoals = subgoals?.map(subgoal => {
            const valid_date = TimeLength({ value: subgoal.completeBy, minDate: today, maxDate: dto.completeBy, strict: true })

            if (!valid_date) {
                throw new BadRequestException({
                    subgoals: {
                        id: subgoal.name,
                        completeBy: `Subgoal "${subgoal.name}" Complete By date is Either today or before. 
                                    It is also possible it is set to after the goals set Complete By date.`
                    }
                })
            }

            return {
                name: subgoal.name,
                desc: subgoal.description,
                completeBy: subgoal.completeBy
            }
        }) ?? null

        try {
            goal = await this.prisma.fitnessGoal.create({
                select : {
                    title: true
                },
                data : {
                    userId: userId,
                    status: status !== 'DEFAULT' ? status as GoalStatus  : 'NOT_STARTED',
                    progress: 0.0,
                    daysRemaining: dayjs(dto.completeBy).diff(today, 'days'),
                    subgoals: processedSubGoals ? processedSubGoals : Prisma.NullableJsonNullValueInput.JsonNull,
                    ...create_dto
                }
            })
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException("Goal already exists!")
                }
            }

            throw new Error(error)
        }

        return {"created" : `${goal.title} has been added!`}
    }

    async updateGoal(dto: UpdateDto, userId: number) {
        const { goalId, ...filteredDto } = formatDto<UpdateDto>(dto)
        
        if (Object.keys(filteredDto).length === 0) throw new BadRequestException("No fields to edit")
            
            const currentGoal = await this.findOne(goalId!, userId)
            const today = dayjs()
            const data: {
                title: string | undefined;
                description: string | undefined;
                completeBy: Date | undefined;
                status: $Enums.GoalStatus | undefined;
                subgoals: Prisma.InputJsonValue | Prisma.NullableJsonNullValueInput | undefined;
            } = {
                title: filteredDto.title ?? undefined,
                description: filteredDto.description ?? undefined,
                completeBy: dayjs(filteredDto.completeBy).toDate() ?? undefined,
                status: filteredDto.status ?? undefined,
                subgoals: Prisma.NullableJsonNullValueInput.JsonNull
            };
            
        if (data.subgoals !== currentGoal.subgoals) {
            const updatedSubgoals = filteredDto.subgoals?.map((subgoal, i) => {
                const payload: Record<string, any> = {}
                
                if (subgoal.completeBy) {
                    const valid_date = TimeLength({ value: subgoal.completeBy, minDate: today, maxDate: currentGoal.completeBy })

                    if (!valid_date) {
                        throw new BadRequestException({
                            subgoals: {
                                id: i,
                                completeBy: "Complete By Date is either before today or after the goal's Complete By Date"
                            }
                        })
                    }

                    payload["completeBy"] = subgoal.completeBy
                }

                if (subgoal.name) payload["name"] = subgoal.name
                if (subgoal.description) payload["desc"] = subgoal.description

                return payload
            }) ?? Prisma.NullableJsonNullValueInput.JsonNull

            data.subgoals = updatedSubgoals
        }

        const { title } = await this.prisma.fitnessGoal.update({
            select : {
                title: true
            },
            where: {
                id: goalId!,
                userId: userId
            },
            data: {
                ...data
            }
        })

        return { "updated": `${title} has been updated!` }
    }
    
    async deleteGoal(deleteDto: DeleteDto, userId: number) {
        const { title } = await this.prisma.fitnessGoal.delete({
            select: {
                title: true
            },
            where: {
                id: deleteDto.id,
                userId: userId
            }
        })

        return {"success": `${title} has been deleted!`}
    }

    async deleteManyGoals(deleteManyDto: DeleteManyDto, userId: number) {
        const totalCountAfterDel = await this.prisma.fitnessGoal.count({
            where: {
                id: {
                    notIn: deleteManyDto.ids
                },
                userId: userId
            }
        })

        const { count: delCount } = await this.prisma.fitnessGoal.deleteMany({
            where: {
                id: {
                    in: deleteManyDto.ids
                },
                userId: userId
            }
        })

        if (delCount === totalCountAfterDel) {
            return {"success": "Requested goals have been deleted!"}
        }

        throw new InternalServerErrorException({
            goalIds: deleteManyDto.ids,
            msg: "Something wrong has occurred. Please try again later."
        })
    }

    async deleteAll(userId: number) {
        const totalGoals = await this.prisma.fitnessGoal.count({
            where: { userId: userId }
        })

        const { count } = await this.prisma.fitnessGoal.deleteMany({
            where: { userId: userId }
        })

        if (count === totalGoals) {
            return {"success": "All goals have been deleted!"}
        }

        throw new ImATeapotException("Either no goals have been created or something wrong has occurred")
    }


}
