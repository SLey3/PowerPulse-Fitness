import { 
    IsOptional,
    IsNotEmpty,
    IsString,
    IsInt
} from "class-validator"
import { Contains } from "src/utils/validators";

export class UpdateDto {
    @IsNotEmpty()
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
    met?: string;
}

export class UpdateUseCountDto {
    @IsNotEmpty()
    @IsInt()
    id: number;

    @IsNotEmpty()
    @IsString()
    @Contains(Promise.all(["pos", "neg"]))
    dir: string;
}