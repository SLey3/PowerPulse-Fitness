import { 
    IsNotEmpty,
    IsNumber,
    IsOptional,
    ValidateIf
} from "class-validator"
import { Contains } from "src/utils/validators"
import { getTypes, getNames } from "src/compendium"

export class CreateDto {
    custom: boolean;

    @ValidateIf(o => o.custom === false)
    @IsNotEmpty()
    @Contains(getNames())
    name: string;

    @ValidateIf(o => o.custom === false)
    @IsNotEmpty()
    @Contains(getTypes())
    type: string;

    @IsNotEmpty()
    muscle: string;

    @IsNotEmpty()
    equipment: string;

    @IsOptional()
    notes?: string;


    // field to be used if user is creating a custom exercise
    @IsOptional()
    @IsNumber()
    met?: number;
}