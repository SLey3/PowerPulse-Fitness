import type { Dayjs } from "dayjs"

export interface TimeGt {
    strict?: boolean;
}

export interface TimeLength {
    value: string | Date | Dayjs;
    minDate: string | Date | Dayjs;
    maxDate?: string | Date | Dayjs;
    strict?: boolean
}