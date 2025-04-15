import { IsNotEmpty } from "class-validator"

export class CategoryDto {
    @IsNotEmpty()
    name: string;
    
    userId: number;
}

export class UpdateCategoryDto {
    @IsNotEmpty()
    name: string;

    oldName: string;
}