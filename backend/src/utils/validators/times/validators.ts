import {
  registerDecorator,
  type ValidationOptions,
  type ValidationArguments,
} from 'class-validator';
import dayjs from 'dayjs';

import * as TimeTypes from './types';

export function TimeGt(
  args: TimeTypes.TimeGt,
  validationOptions?: ValidationOptions,
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      async: true,
      name: 'TimeGt',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [args],
      options: validationOptions,
      validator: {
        async validate(value: string, args: ValidationArguments) {
          const [timeGtArgs]: Promise<TimeTypes.TimeGt>[] = args.constraints;
          const { strict } = await timeGtArgs;
          const today = dayjs();
          const cmpr = dayjs(value);

          return strict ? cmpr > today : cmpr >= today;
        },
      },
    });
  };
}

/**
 * Validates whether a time value falls within a specified range.
 *
 * @param args - The time length validation parameters
 * @param args.value - The time value to validate
 * @param args.minDate - The minimum date/time boundary
 * @param args.maxDate - The maximum date/time boundary (optional)
 * @param args.strict - If true, uses strict comparison (exclusive min, inclusive max);
 *                      if false, uses inclusive comparison for both boundaries
 *
 * @returns `true` if the value falls within the specified range according to the strict flag,
 *          `false` otherwise
 */
export function TimeLength(args: TimeTypes.TimeLength): boolean {
  const { value, minDate, maxDate, strict } = args;

  const min: dayjs.Dayjs = dayjs.isDayjs(minDate) ? minDate : dayjs(minDate);
  const val: dayjs.Dayjs = dayjs.isDayjs(value) ? value : dayjs(value);
  const max: dayjs.Dayjs | null = dayjs.isDayjs(maxDate)
    ? maxDate instanceof dayjs.Dayjs
      ? maxDate
      : dayjs(maxDate)
    : null;

  return strict
    ? max
      ? min < val && val <= max
      : min < val
    : max
      ? min <= val && val <= max
      : min <= val;
}
