import { ValidateIf, IsOptional, IsNotEmpty, IsBoolean } from 'class-validator';
import { Prisma } from '@/generated/prisma';

export class AnalyticsDto {
  @IsNotEmpty()
  @IsBoolean()
  all: boolean;

  @IsOptional()
  @ValidateIf((o: AnalyticsDto) => !o.all)
  opts?: Prisma.FitnessGoalSelect;
}
