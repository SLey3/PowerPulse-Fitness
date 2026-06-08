import {
  registerDecorator,
  type ValidationOptions,
  type ValidationArguments,
} from 'class-validator';

interface EitherOrValidationOptions extends ValidationOptions {
  ArrayValueTypes?: Array<
    | 'string'
    | 'number'
    | 'boolean'
    | 'object'
    | 'function'
    | 'undefined'
    | 'symbol'
    | 'bigint'
    | 'any'
  >;
}

/**
 * Decorator function that validates a property to ensure it has a specific set of types.
 * This decorator checks if the type of the property matches one of the specified types in the values array.
 *
 * @param values - Array of primitive type names to check against the decorated property
 * @param validationOptions - Optional validation options to customize validation behavior
 * @returns A decorator function that registers validation rules for the decorated property
 */
export function EitherOr(
  values: Array<
    | 'string'
    | 'number'
    | 'boolean'
    | 'object'
    | 'function'
    | 'undefined'
    | 'symbol'
    | 'bigint'
    | 'array'
  >,
  validationOptions?: EitherOrValidationOptions,
) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'EitherOr',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [...values],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          let ArrayValueTypes:
            | Array<
                | 'string'
                | 'number'
                | 'boolean'
                | 'object'
                | 'function'
                | 'undefined'
                | 'symbol'
                | 'bigint'
                | 'any'
              >
            | undefined;

          if (validationOptions) {
            ArrayValueTypes = validationOptions.ArrayValueTypes;
          }

          if (args.constraints.includes('array')) {
            if (Array.isArray(value)) {
              if (ArrayValueTypes && !ArrayValueTypes.includes('any')) {
                return !value
                  .map((val) => ArrayValueTypes.includes(typeof val))
                  .includes(false);
              }

              return true;
            }
          }

          return args.constraints.includes(typeof value);
        },
      },
    });
  };
}
