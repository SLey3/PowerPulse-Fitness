import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/src/prisma_m/prisma.service';
import { FitGoalsService } from '@/src/fitgoals/fitgoals.service';

@Injectable()
export class FitAnalyticsService {
  constructor(
    private prisma: PrismaService,
    private readonly fitGoalsService: FitGoalsService,
  ) {}
}
