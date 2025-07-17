import { 
    IsEmail, 
    IsPhoneNumber, 
    IsStrongPassword, 
    IsNotEmpty,
    IsOptional,
    IsAlphanumeric,
    IsPositive
} from 'class-validator'

export class SignUpDto {
    @IsNotEmpty()
    @IsAlphanumeric()
    firstName: string

    @IsNotEmpty()
    @IsAlphanumeric()
    lastName: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsNotEmpty()
    @IsStrongPassword()
    password: string

    @IsPhoneNumber()
    @IsOptional()
    phone?: string

    @IsNotEmpty()
    @IsPositive()
    weight: number

    // this will always be set as in the signup form, display unit preference will have a default of 'kg'
    unitPref: 'lbs' | 'kg'
}
