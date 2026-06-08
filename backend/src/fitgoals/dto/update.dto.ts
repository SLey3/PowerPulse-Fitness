import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsInt,
  IsJSON,
  Length,
  IsISO8601,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { TimeGt } from '@/src/utils/validators/times';
import { UpdateSubGoalsDto } from './subgoals.dto';

import type { GoalStatus } from '@/generated/prisma';

export class UpdateDto {
  @IsNotEmpty()
  @IsInt()
  goalId: number;

  @IsOptional()
  @IsString()
  @Length(3, 20)
  title?: string;

  @IsOptional()
  @IsString()
  @Length(15, 45)
  description?: string;

  @IsOptional()
  @IsISO8601({ strict: true })
  @TimeGt(
    { strict: false },
    { message: "Complete By Date must be on or after Today's date" },
  )
  completeBy?: string;

  @IsOptional()
  @IsString()
  status?: GoalStatus;

  @IsOptional()
  @IsJSON()
  @ValidateNested({ each: true })
  @Type(() => UpdateSubGoalsDto)
  subgoals?: UpdateSubGoalsDto[];
}
