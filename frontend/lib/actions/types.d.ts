import type { MakeOptional } from "../utils/types";


export interface ValidationErr {
    field: string;
    error: string;
}
export interface ApiErrProps {
    statusCode: number;
    message: string | ValidationErr[];
}

export interface TableDeleteApiErrProps extends MakeOptional<ApiErrProps, "statusCode"> {
    goalIds?: number[];

}

export type ReturnApiType<P> = Promise<P | ApiErrProps | undefined>
export type TableDeleteReturnApiType<P> =  Promise<P | TableDeleteApiErrProps | undefined>
