/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  IsNotEmpty,
  IsBoolean,
  IsOptional,
  ValidateIf,
  IsString,
} from 'class-validator';
import { Contains } from '@/src/utils/validators';
import { getTypes, getNames } from '@/src/compendium';

export class CreateDto {
  @IsBoolean()
  @IsNotEmpty()
  custom: boolean;

  @ValidateIf((o) => o.custom === false)
  @Contains(getNames())
  @IsString()
  @IsNotEmpty()
  name: string;

  @ValidateIf((o) => o.custom === false)
  @IsNotEmpty()
  @IsString()
  @Contains(getTypes())
  type: string;

  @IsNotEmpty()
  @IsString()
  muscle: string;

  @IsNotEmpty()
  @IsString()
  equipment: string;

  @IsOptional()
  @IsString()
  notes?: string;

  // field to be used if user is creating a custom exercise
  @IsOptional()
  @IsString()
  met?: string;
}
