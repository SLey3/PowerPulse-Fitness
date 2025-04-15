import { 
    IsOptional,
    IsNotEmpty,
    IsInt,
    IsString
} from "class-validator"


export class UpdateDto {
    @IsNotEmpty()
    @IsInt()
    logId: number;

    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    notes?: string;
}