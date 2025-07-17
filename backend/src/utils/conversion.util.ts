import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)

// Unit Conversions
export function lbs2kg(x: number): number {
    return x / 2.205 // formula to convert lbs --> kg: lbs/2.205 
}

export function kg2lbs(x: number): number {
    return x * 2.205 // formula to convert kg --> lbs: kg * 2.205
}

export function vals2ints(vals: string[]): number[] {
    return vals.map((val: string) => parseInt(val))
}

// Hour to Minute
export function hr2m(hours: number, minutes: number = 0): number {
    const time = hours + m2hr(minutes)
    return dayjs.duration(time, 'hours').asMinutes()
}

// Minute to Hour
export function m2hr(minutes: number): number {
    return dayjs.duration(minutes, 'minutes').asHours()
}
