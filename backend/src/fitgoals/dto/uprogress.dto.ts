import { IsInt, IsNotEmpty, Min, Max } from 'class-validator';

export class uProgressDto {
  @IsNotEmpty()
  @IsInt()
  goalId: number;

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  @Max(100)
  num: number;
}
