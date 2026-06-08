import { IsOptional, IsNotEmpty, IsString, IsInt, IsIn } from 'class-validator';

export class UpdateDto {
  @IsNotEmpty()
  @IsInt()
  exerciseId: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  muscle?: string;

  @IsOptional()
  @IsString()
  equipment?: string;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @IsString()
  met?: string;
}

export class UpdateUseCountDto {
  @IsOptional()
  @IsInt()
  id?: number;

  @IsOptional()
  @IsString()
  name?: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(['pos', 'neg'])
  dir: string;
}
