import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsEnum,
  Length,
  MinLength,
  IsISO8601,
  ValidateNested,
  IsNumber,
  IsPositive,
} from 'class-validator';
import { Type } from 'class-transformer';
import { MeasurementUnits, DistanceUnits, Status } from '@/src/utils/enums';
import { TimeGt } from '@/src/utils/validators/times';

export class CreateDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 99)
  title: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(11, {
    message: 'Description should be more than 10 characters',
  })
  description: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  weightLoss?: number;

  @IsOptional()
  @IsEnum(MeasurementUnits)
  weightLossUnit?: MeasurementUnits;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  calorieBurn?: number;

  @IsOptional()
  @IsEnum(MeasurementUnits)
  calorieBurnUnit?: MeasurementUnits;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  distance?: number;

  @IsOptional()
  @IsEnum(DistanceUnits)
  distanceUnit?: DistanceUnits;

  @IsNotEmpty()
  @IsISO8601({ strict: true })
  @TimeGt(
    { strict: true },
    { message: "Complete By Date must be after Today's date" },
  )
  completeBy: string;

  @IsOptional()
  @IsEnum(Status)
  status?: Status;

  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => CreateDto)
  subgoals?: CreateDto[];
}
