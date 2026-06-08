import {
  IsEmail,
  IsPhoneNumber,
  IsStrongPassword,
  IsNotEmpty,
  IsOptional,
  IsAlphanumeric,
  IsEnum,
  IsPositive,
} from 'class-validator';
import { unitPref } from '@/src/utils/enums';

import { EitherOr } from '@/src/utils/validators';

export class SignUpDto {
  @IsNotEmpty()
  @IsAlphanumeric()
  firstName: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @IsPhoneNumber()
  @IsOptional()
  phone?: string;

  @IsNotEmpty()
  @EitherOr(['number', 'array'], {
    ArrayValueTypes: ['number'],
  })
  height: number | number[];

  @IsNotEmpty()
  @IsPositive()
  weight: number;

  // this will always be set as in the signup form, display unit preference will have a default of 'kg'
  @IsNotEmpty()
  @IsEnum(unitPref)
  unitPref: unitPref;
}
