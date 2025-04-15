import { registerDecorator, type ValidationOptions, type ValidationArguments } from "class-validator"



/**
 * Decorator function that validates a property to ensure it has a specific set of types.
 * This decorator checks if the type of the property matches one of the specified types in the values array.
 *
 * @param values - Array of primitive type names to check against the decorated property
 * @param validationOptions - Optional validation options to customize validation behavior
 * @returns A decorator function that registers validation rules for the decorated property
 */
export function EitherOr(
    values: Array<'string' | 'number' | 'boolean' | 'object' | 'function' | 'undefined' | 'symbol' | 'bigint'>, 
    validationOptions?: ValidationOptions
) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'EitherOr',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [...values],
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    return args.constraints.includes(typeof value);
                }
            }
        });
    };
}
