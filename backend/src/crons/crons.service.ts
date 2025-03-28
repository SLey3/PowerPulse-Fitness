import { Injectable, Logger } from '@nestjs/common'
import { Cron } from "@nestjs/schedule"
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class TasksService {
    private prisma: PrismaService;
    private readonly logger = new Logger(TasksService.name);

    @Cron('0 0 */2 * *')
    async deleteUnverifiedAccounts() {
        const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60**2 * 1000).toISOString();

        const deleted = await this.prisma.user.deleteMany({
            where: {
                isVerified: false,
                createdAt: { lt: twoDaysAgo }
            },
        });

        this.logger.log(`[CRON DELETE UNVERIFIED] today's deletion count: ${deleted.count}`);
    }
}
