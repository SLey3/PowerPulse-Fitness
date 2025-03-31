// Unit Conversions
export function lbs2kg(x: number): number {
    return x / 2.205; // formula to convert lbs --> kg: lbs/2.205 
}

export function kg2lbs(x: number): number {
    return x * 2.205; // formula to convert kg --> lbs: kg * 2.205
}
