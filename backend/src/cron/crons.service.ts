import { Injectable, Logger } from '@nestjs/common'
import { Cron } from "@nestjs/schedule"
import dayjs from 'dayjs'
import { PrismaService } from 'src/prisma_m/prisma.service'

@Injectable()
export class TasksService {
    private readonly logger = new Logger(TasksService.name);

    constructor(private prisma: PrismaService) {}

    @Cron('0 0 * * *') // Run daily at midnight
    async deleteUnverifiedAccounts() {
        const twoDaysAgoStart = dayjs().subtract(2, 'days').startOf('day').toISOString();
        const twoDaysAgoEnd = dayjs().subtract(2, 'days').endOf('day').toISOString();

        const deleted = await this.prisma.user.deleteMany({
            where: {
                isVerified: false,
                createdAt: { 
                    gte: twoDaysAgoStart,
                    lt: twoDaysAgoEnd
                }
            },
        });

        this.logger.log(`[CRON DELETE UNVERIFIED] Deleted ${deleted.count} accounts created exactly two days ago`);
    }
}
