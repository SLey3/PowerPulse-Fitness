import { Injectable, ForbiddenException, ImATeapotException } from '@nestjs/common'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { PrismaService } from 'src/prisma_m/prisma.service'
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

    findOne(uid: number, name: string) {
        return this.prisma.workoutCategory.findUnique({
            select: {
                name: true
            },
            where: {
                name: name,
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

    async deleteCat(cat_name: string, uid: number) {
        const { name } = await this.prisma.workoutCategory.delete({
            select: {
                name: true
            },
            where: {
                name: cat_name,
                userId: uid
            }
        });

        return {"confirmation": `Workout category with name ${name} has been deleted!`};
    }

    async deleteAll(uid: number) {
        const res = await this.prisma.workoutCategory.deleteMany({
            where: {
                userId: uid
            }
        });

        if (res.count > 0) {
            return {"success": "Deleted All workout categories"}
        }

        throw new ImATeapotException("No workout categories to delete");
    }
}
