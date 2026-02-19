import { Injectable, ForbiddenException, BadRequestException, Logger, InternalServerErrorException } from '@nestjs/common'
import { tidy, sliceMax, groupBy, arrange, desc } from '@tidyjs/tidy'
import { Prisma } from 'generated/prisma'
import { PrismaClientKnownRequestError } from 'generated/prisma/runtime/client'
import { PrismaService } from 'src/prisma_m/prisma.service'
import { CompendiumMService } from 'src/compendium_m/compendium_m.service'
import { DeleteManyDto } from 'src/utils/dtos'
import { CreateDto, UpdateDto, UpdateUseCountDto } from './dto'

import { formatDto } from 'src/utils'

@Injectable()
export class FitexerciseService {
    private readonly logger = new Logger(FitexerciseService.name)

    constructor(private prisma: PrismaService, private compendium: CompendiumMService) {}

    findAll(userId: number) {
        return this.prisma.exercises.findMany({
            where: {
                userId: userId
            }
        })
    }

    findOne(eid: number, userId: number) {
        return this.prisma.exercises.findFirst({
            where: {
                id: eid,
                userId: userId
            }
        })
    }

    async findExcerpt(userId: number) {
        this.logger.log(`[DEBUG] userId: ${userId}`)
        const excerpts = await this.prisma.exercises.findMany({
            select: {
                id: true,
                name: true,
                type: true,
                muscle: true
            },
            where: {
                userId: userId
            }
        })

        this.logger.log(`[DEBUG] returned prisma value: ${excerpts}`)

        return excerpts
    }

    async findDashboard(userId: number) {
        const results = await this.findAll(userId)

        if (results.length === 0) return [] // no need to throw an exception just break the operation here

       return tidy(
        results,
        groupBy(['useCount', 'id', 'name', 'type'], [
            sliceMax(5, 'useCount'),
            arrange(desc('useCount'))
        ])
       )
    }

    findByFilter(queries: Prisma.ExercisesWhereInput, userId: number) {
        try {
            return this.prisma.exercises.findMany({
                where: {
                    userId: userId,
                    ...queries
                }
            })
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                throw new ForbiddenException(error.message, {
                    cause: error.cause,
                    description: error.code
                })
            }

            throw new Error(error)
        }
    }

    findNames(userId: number) {
        return this.prisma.exercises.findMany({
            select: {
                name: true
            },
            where: {
                userId: userId,
            },
            orderBy: {
                id: 'desc'
            }
        })
    }

    async findExerciseAnalyticsData(userId: number, all: boolean, opts: Prisma.ExercisesSelect | undefined) {
        const blacklist = {
            userId: true,
            notes: true,
            custom: true
        }

        if (all) {
            return this.prisma.exercises.findMany({
                omit: {...blacklist},
                where: {
                    userId: userId
                }
            })
        } else {
            if (!opts) throw new BadRequestException("Options is a required parameter if not requesting all available parameters")

            // check for any not permitted keys being set in opts
            const optsKeys = Object.keys(opts)
            const blacklistKeys = Object.keys(blacklist)

            optsKeys.forEach(key => {
                if (blacklistKeys.includes(key)) {
                    throw new BadRequestException(`${key} is not permitted for analytics operations`)
                }
            })

            return this.prisma.exercises.findMany({
                select: {...opts},
                where: {
                    userId: userId
                }
            })
        }
    }

    async createExercise(createDto: CreateDto, userId: number) {
        // first get met value from the Compendium service
        const met = await this.compendium.findMET(createDto.type, createDto.name) || createDto.met || "1"

        // create the entry
        try {
            const { name } = await this.prisma.exercises.create({
                select: {
                    name: true
                },
                data: {
                    name: createDto.name,
                    custom: createDto.custom,
                    type: createDto.type,
                    muscle: createDto.muscle,
                    equipment: createDto.equipment,
                    notes: createDto.notes,
                    met: met,
                    userId: userId
                }
            })

            return {"created": `${name} has been added to your exercise records!`}
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException('Exercise Entry Already Exists')
                }
            }

            throw new Error(error)
        }
    }

    async updateUseCount(updateUseCountDto: UpdateUseCountDto, userId: number) {
        const check_num = (check: string) => updateUseCountDto.dir === check ? 1 : 0

        await this.prisma.exercises.findUniqueOrThrow({
            where: {
                id: updateUseCountDto.id,
                userId: userId
            }
        })

        await this.prisma.exercises.update({

            data: {
                useCount: {
                    increment: check_num("pos"),
                    decrement: check_num("neg")
                }
            },
            where: {
                id: updateUseCountDto.id,
                userId: userId
            }
        })
    }

    async updateExercise(updateDto: UpdateDto, userId: number) {
        // process data sorting out undefined parameters
        const {exerciseId, ...filteredDto} = formatDto<UpdateDto>(updateDto)

        if(Object.keys(filteredDto).length === 0) throw new BadRequestException("All Values remained the same. Update not Required")

        const { name } = await this.prisma.exercises.update({
            select: {
                name: true
            },
            where: {
                id: exerciseId,
                userId: userId
            },
            data: {
                ...filteredDto
            }
        })

        return {"updated": `${name} has been successfully updated!`}
    }    

    async deleteExercise(eid: number, userId: number) {
        // First find the exercise to get its ID
        const exercise = await this.prisma.exercises.findFirst({
            where: {
                id: eid,
                userId: userId
            }
        })

        if (!exercise) {
            throw new BadRequestException(`Exercise with name "${name}" not found`)
        }

        const { name: exercise_name } = await this.prisma.exercises.delete({
            select: {
                name: true
            },
            where: {
                id: exercise.id
            }
        })

        return {"confirmation": `${exercise_name} has been deleted!`}
    }

    async deleteManyExercises(deleteManyDto: DeleteManyDto, userId: number) {
        try {
            const { count: delCount } = await this.prisma.exercises.deleteMany({
                where: {
                    id: {
                        in: deleteManyDto.ids
                    },
                    userId: userId
                }
            })


            
            if (delCount === deleteManyDto.ids.length) {
                return {"confirmation": "Requested exercises have been deleted!"}
            } else {
                throw new InternalServerErrorException({
                    goalIds: deleteManyDto.ids,
                    message: "Something wrong has occurred. Please try again later."
                })
            }   
        }  catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new BadRequestException('Operation failed: No records found to delete')
                }

                throw new BadRequestException(error.message, {
                    cause: error.cause,
                    description: error.code
                })
            }

            throw new Error(error)
        }
    }

    async deleteAll(userId: number) {
        try {            
            await this.prisma.exercises.deleteMany({
                where: {
                    userId: userId
                }
            })
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new BadRequestException('Operation failed: No records found to delete')
                }

                throw new BadRequestException(error.message, {
                    cause: error.cause,
                    description: error.code
                })
            }

            throw new Error(error)
        }

        return {"confirmation": "All Exercises have been deleted!"}
    }
}
