import { 
    IsOptional,
    IsString,
    IsInt
} from "class-validator"

export class UpdateDto {
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
    met?: string
}