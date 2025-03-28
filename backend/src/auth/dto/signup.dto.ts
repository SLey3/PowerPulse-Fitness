import { 
    IsEmail, 
    IsPhoneNumber, 
    IsStrongPassword, 
    IsNotEmpty,
    IsOptional,
    IsAlphanumeric
} from 'class-validator'

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

    @IsOptional()
    @IsNotEmpty()
    @IsPhoneNumber()
    phone?: string;

    @IsNotEmpty()
    weight: number;
    weightUnit: 'lbs' | 'kg';
}
