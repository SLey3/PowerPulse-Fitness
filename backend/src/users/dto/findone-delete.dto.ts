import {
    IsEmail,
    IsNotEmpty
} from 'class-validator'

export class FindOneDeleteDto {
    @IsEmail()
    @IsNotEmpty()
    email: string
}
