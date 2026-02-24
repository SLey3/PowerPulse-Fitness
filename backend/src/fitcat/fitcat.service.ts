import { Injectable, ForbiddenException, ImATeapotException, InternalServerErrorException, BadRequestException } from '@nestjs/common'
import { PrismaClientKnownRequestError } from 'generated/prisma/runtime/client'
import { PrismaService } from 'src/prisma_m/prisma.service'
import { DeleteManyDto } from 'src/utils/dtos'
import { CategoryDto, UpdateCategoryDto } from './dto'

@Injectable()
export class FitcatService {
    constructor(private prisma: PrismaService) {}

    findAll(uid: number) {
        return this.prisma.workoutCategory.findMany({
            select: {
                id: true,
                name: true
            },
            where: {
                userId: uid
            }
        });
    }

    findOne(uid: number, cid: number) {
        return this.prisma.workoutCategory.findUnique({
            select: {
                id: true,
                name: true
            },
            where: {
                id: cid,
                userId: uid
            }
        });
    }

    async createCat(catDto: CategoryDto) {
        try {
            const { name } = await this.prisma.workoutCategory.create({
                data: {
                    name: catDto.name,
                    userId: catDto.userId
                },
                select: {
                    name: true
                }
            });

            return {"message": `${name} has been added to your workout Categories`}
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException("Workout Category Already Exists");
                }
            }

            throw new Error(error);
        }
    }

    async updateCat(updateCatDto: UpdateCategoryDto, uid: number) {
        try {
            const { name } = await this.prisma.workoutCategory.update({
                where: {
                    userId: uid,
                    name: updateCatDto.oldName
                },
                data: {
                    name: updateCatDto.name
                },
                select: {
                    name: true
                }
            });

            return {"updated": `Category Updated with new name: ${name}`};
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ForbiddenException("Provided name already exists");
                }
            }

            throw new Error(error);
        }
    }

    async deleteCat(id: number, uid: number) {
        const { name } = await this.prisma.workoutCategory.delete({
            select: {
                name: true
            },
            where: {
                id: id,
                userId: uid
            }
        });

        return {"confirmation": `Workout category with name ${name} has been deleted!`};
    }

    async deleteManyCategories(deleteManyDto: DeleteManyDto, userId: number) {

        try {
            const { count: delCount } = await this.prisma.workoutCategory.deleteMany({
                where: {
                    id: {
                        in: deleteManyDto.ids
                    },
                    userId: userId
                }
            })
    
            if (delCount === deleteManyDto.ids.length) {
                return {"confirmation": "Requested categories have been deleted!"}
            }
    
            throw new InternalServerErrorException({
                goalIds: deleteManyDto.ids,
                msg: "Something wrong has occurred. Please try again later."
            })
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

    async deleteAll(uid: number) {
        try {            
            await this.prisma.workoutCategory.deleteMany({
                where: {
                    userId: uid
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

        return {"confirmation": "All Categories have been deleted!"}
    }
}
