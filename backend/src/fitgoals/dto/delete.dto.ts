import { IsInt, IsArray, IsNotEmpty, ArrayNotEmpty } from "class-validator"


export class DeleteDto {
    @IsNotEmpty()
    @IsInt()
    id: number;
}

export class DeleteManyDto {
    @ArrayNotEmpty()
    @IsArray()
    @IsInt({ each: true })
    ids: number[];
}
