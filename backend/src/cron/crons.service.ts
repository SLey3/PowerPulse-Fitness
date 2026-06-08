import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import dayjs from 'dayjs';
import { PrismaService } from '@/src/prisma_m/prisma.service';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  constructor(private prisma: PrismaService) {}

  @Cron('0 0 * * *') // Run daily at midnight
  async deleteUnverifiedAccounts() {
    const twoDaysAgoStart = dayjs()
      .subtract(2, 'days')
      .startOf('day')
      .toISOString();
    const twoDaysAgoEnd = dayjs()
      .subtract(2, 'days')
      .endOf('day')
      .toISOString();

    const deleted = await this.prisma.user.deleteMany({
      where: {
        isVerified: false,
        createdAt: {
          gte: twoDaysAgoStart,
          lt: twoDaysAgoEnd,
        },
      },
    });

    this.logger.log(
      `[CRON DELETE UNVERIFIED] Deleted ${deleted.count} accounts created exactly two days ago`,
    );
  }

  @Cron('0 0 * * *')
  async updateFitnessGoalsDays() {
    const goals = await this.prisma.fitnessGoal.findMany({
      where: {
        status: { notIn: ['FAILED', 'COMPLETED'] },
      },
    });

    if (goals.length === 0) {
      this.logger.log(
        '[CRON Fitness Goals DaysRemaining Updater] All User Goals are either completed or failed. No Updates were made.',
      );

      return;
    }

    this.logger.log(
      '[CRON Fitness Goals DaysRemaining Updater] Updating user goals...',
    );

    for (const goal of goals) {
      if (['FAILED', 'COMPLETED'].includes(goal.status)) {
        continue;
      }

      const completeBy = dayjs(goal.completeBy);
      const today = dayjs();

      const date_diff = completeBy.diff(today, 'day');

      await this.prisma.fitnessGoal.update({
        where: {
          id: goal.id,
        },
        data: {
          status: date_diff < 0 ? 'FAILED' : goal.status,
          daysRemaining: date_diff,
        },
      });
    }

    this.logger.log(
      '[CRON Fitness Goals DaysRemaining Updater] All goals have been updated.',
    );
  }
}
