import { registerDecorator, type ValidationOptions, type ValidationArguments } from "class-validator"


/**
 * validator decorator that checks if a string value is contained in a given array.
 * 
 * This decorator supports asynchronous validation by accepting a Promise of string array.
 * It validates that the property value is a string and is included in the resolved array.
 * 
 * @param allowedValues - A Promise that resolves to an array of strings to check against
 * @param validationOptions - Optional validation options to customize the validation behavior
 * @returns A PropertyDecorator function that registers the validation decorator
 */
export function Contains(allowedValues: Promise<string[]>, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            async: true,
            name: 'Contains',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [allowedValues],
            options: validationOptions,
            validator: {
                async validate(value: any, args: ValidationArguments) {
                    const [allowedValues] = args.constraints
                    const resolvedArr: string[] = await allowedValues

                    return typeof value === 'string' && resolvedArr.includes(value)
                }
            }
        })
    }
}
