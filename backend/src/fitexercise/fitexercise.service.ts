import { Injectable, ForbiddenException, BadRequestException, Logger } from '@nestjs/common'
import { tidy, sliceMax, groupBy, arrange, desc } from '@tidyjs/tidy'
import { Prisma } from '@prisma/client'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { PrismaService } from 'src/prisma_m/prisma.service'
import { CompendiumMService } from 'src/compendium_m/compendium_m.service'
import { CreateDto } from './dto'

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

    findOne(name: string, userId: number) {
        return this.prisma.exercises.findFirst({
            where: {
                name: name,
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

    async deleteExercise(name: string, userId: number) {
        // First find the exercise to get its ID
        const exercise = await this.prisma.exercises.findFirst({
            where: {
                name: name,
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
