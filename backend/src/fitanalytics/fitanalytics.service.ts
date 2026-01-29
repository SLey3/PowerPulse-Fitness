import { Injectable } from "@nestjs/common"
import { 
    tidy, 
    summarize, 
    sum, 
    groupBy
} from "@tidyjs/tidy"

import { PrismaService } from "src/prisma_m/prisma.service"
import { FitGoalsService } from "src/fitgoals/fitgoals.service"


@Injectable()
export class FitAnalyticsService {
    constructor(
        private prisma: PrismaService,
        private readonly fitGoalsService: FitGoalsService
    ) {}


}
