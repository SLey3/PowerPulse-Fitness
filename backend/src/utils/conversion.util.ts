import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

// Unit Conversions
export function lbs2kg(x: number): number {
  return x / 2.205; // formula to convert lbs --> kg: lbs / 2.205kgs
}

export function kg2lbs(x: number): number {
  return x * 2.205; // formula to convert kg --> lbs: kg * 2.205lbs
}

export function ftinch2m(x: number, y: number): number {
  // formula to convert ft'inch" --> m: (ft * 0.3048) + (inch * 0.0254)
  return parseFloat((x * 0.3048 + y * 0.0254).toFixed(2));
}

export function m2ftinch(x: number): number[] {
  // formula to convert m --> ft.inch: m * 3.28084inch
  // Returns [feet, inches] as whole numbers, e.g. 1.75m → [5, 7] = 5'7"
  const ft = (x * 3.28084)
    .toFixed(1)
    .split('.')
    .map((x) => parseInt(x));
  return ft;
}

export function mi2km(x: number): number {
  return x * 1.60934; // formula to convert mi --> km: mi * 1.60934km
}

export function km2mi(x: number): number {
  return x / 1.60934; // formula to convert km --> mi: km / 0.621371mi
}

export function vals2ints(vals: string[]): number[] {
  return vals.map((val: string) => parseInt(val));
}

// Hour to Minute
export function hr2m(hours: number, minutes: number = 0): number {
  const time = hours + m2hr(minutes);
  return dayjs.duration(time, 'hours').asMinutes();
}

// Minute to Hour
export function m2hr(minutes: number): number {
  return dayjs.duration(minutes, 'minutes').asHours();
}
