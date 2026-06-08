import {
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  IsISO8601,
} from 'class-validator';

export default class SubGoalsDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 15)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Length(7, 23)
  description: string;

  @IsNotEmpty()
  @IsISO8601({ strict: true })
  completeBy: string;
}

export class UpdateSubGoalsDto {
  @IsOptional()
  @IsString()
  @Length(3, 15)
  name?: string;

  @IsOptional()
  @IsString()
  @Length(7, 23)
  description?: string;

  @IsOptional()
  @IsISO8601({ strict: true })
  completeBy?: string;
}
