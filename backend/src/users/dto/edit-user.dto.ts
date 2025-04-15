import {
    IsOptional,
    IsAlphanumeric,
    IsEmail, 
    IsPhoneNumber, 
    IsStrongPassword
} from 'class-validator'

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
    unitPref?: 'lbs' | 'kg';
}
