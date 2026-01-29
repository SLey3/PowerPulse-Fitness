import { 
    IsNotEmpty,
    IsOptional,
    IsString,
    IsJSON,
    Length,
    IsISO8601,
    ValidateNested
} from "class-validator"
import { Type } from "class-transformer"
import { Contains } from "src/utils/validators"
import { TimeGt } from "src/utils/validators/times"
import SubGoalsDto from "./subgoals.dto"


export class CreateDto {
    @IsNotEmpty()
    @IsString()
    @Length(3, 20)
    title: string;

    @IsNotEmpty()
    @IsString()
    @Length(15, 45)
    description: string;

    @IsNotEmpty()
    @IsISO8601({ strict: true })
    @TimeGt({ strict: true }, { message: "Complete By Date must be after Today's date"})
    completeBy: string;

    @IsOptional()
    @IsString()
    @Contains(Promise.all(['DEFAULT', 'NOT_STARTED', 'IN_PROGRESS']))
    status?: string;

    @IsOptional()
    @IsJSON()
    @ValidateNested({ each: true })
    @Type(() => SubGoalsDto)
    subgoals?: SubGoalsDto[];
}
