import {
  IsOptional,
  IsAlphanumeric,
  IsEmail,
  IsPhoneNumber,
  IsStrongPassword,
  IsEnum,
} from 'class-validator';
import { unitPref } from '@/src/utils/enums';

export class EditUserDto {
  @IsOptional()
  @IsAlphanumeric()
  firstName?: string;

  @IsOptional()
  @IsAlphanumeric()
  lastName?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsStrongPassword()
  password?: string;

  @IsOptional()
  @IsOptional()
  @IsPhoneNumber()
  phone?: string;

  @IsOptional()
  weight?: number;

  @IsOptional()
  @IsEnum(unitPref)
  unitPref?: unitPref;
}
