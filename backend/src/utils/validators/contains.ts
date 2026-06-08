import {
  registerDecorator,
  type ValidationOptions,
  type ValidationArguments,
} from 'class-validator';

/**
 * validator decorator that checks if a string value is contained in a given array.
 *
 * This decorator supports asynchronous validation by accepting a Promise of string array.
 * It validates that the property value is a string and is included in the resolved array.
 *
 * @param allowedValues - A Promise that resolves to an array of strings to check against
 * @param validationOptions - See class-validator docs
 */
export function Contains(
  allowedValues: string[] | Promise<string[]>,
  validationOptions?: ValidationOptions,
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      async: true,
      name: 'Contains',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [allowedValues],
      options: validationOptions,
      validator: {
        async validate(value: string, args: ValidationArguments) {
          const [allowedValues] = args.constraints;
          const av =
            allowedValues instanceof Promise
              ? await allowedValues
              : allowedValues;

          return typeof value === 'string' && (av as string[]).includes(value);
        },
      },
    });
  };
}
