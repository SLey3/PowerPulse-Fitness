import {
  IsNotEmpty,
  IsInt,
  IsString,
  IsArray,
  IsPositive,
  ValidateNested,
  ArrayMinSize,
} from 'class-validator';
import { Contains, EitherOr } from '@/src/utils/validators';
import { Type } from 'class-transformer';
import { CreateDto as ExerciseDto } from '@/src/fitexercise/dto';
import { CategoryDto } from '@/src/fitcat/dto';

class routineInnerDto {
  @IsString()
  @Contains(['m', 'hrm'])
  time_format: 'm' | 'hrm'; // hrm: hoursminutes (ex: 1:36 (1hr 36m))

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ExerciseDto)
  exercise: ExerciseDto;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  sets: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  reps: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  weight: number;

  @IsString()
  @IsNotEmpty()
  weightUnit: string;

  @IsNotEmpty()
  @EitherOr(['number', 'string'])
  duration: number | string;
}

export class CreateDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => routineInnerDto)
  routine: routineInnerDto[];

  @IsNotEmpty()
  @IsString()
  notes: string;

  @IsNotEmpty()
  @ValidateNested({ each: true })
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => CategoryDto)
  categories: CategoryDto[];
}
