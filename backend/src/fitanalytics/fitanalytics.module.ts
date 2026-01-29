import { Module } from '@nestjs/common'

import { FitAnalyticsService } from './fitanalytics.service'
import { FitGoalsModule } from 'src/fitgoals/fitgoals.module'


@Module({
    imports: [
        FitGoalsModule
    ],
    controllers: [],
    providers: [FitAnalyticsService]
})
export class FitAnalyticsModule {}