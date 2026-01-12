import { z } from "zod"

const baseSchema = z.object({
    custom: z.boolean().optional(),
    equipment: z.string()
        .min(1, 'Equipment must not be empty!')
        .max(30, 'Equipment must be at most 30 characters'),
    notes: z.string()
        .max(1000, 'Notes must be at most 1000 characters')
        .optional(),
    name: z.string(), // always required
    type: z.string().optional(),
    muscle: z.string()
        .min(1, 'Muscle must not be empty!')
        .max(20, 'Muscle must be at most 20 characters'),
    met: z.string().optional(),
})

const formSchema = baseSchema.superRefine((data, ctx) => {
    if (data.custom) {
        // When custom is true:

        if (data.name.length < 5) {
            ctx.addIssue({
                code: z.ZodIssueCode.too_small,
                minimum: 5,
                type: "string",
                inclusive: true,
                path: ["name"],
                message: "Name must be at least 5 characters",
            });
        }
        if (data.name.length > 30) {
            ctx.addIssue({
                code: z.ZodIssueCode.too_big,
                maximum: 30,
                type: "string",
                inclusive: true,
                path: ["name"],
                message: "Name must be at most 30 characters",
            });
        }

        if (!data.type || data.type.length === 0) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["type"],
                message: "Exercise type must not be empty!",
            });
        } else if (data.type.length > 30) {
            ctx.addIssue({
                code: z.ZodIssueCode.too_big,
                maximum: 30,
                type: "string",
                inclusive: true,
                path: ["type"],
                message: "Exercise type must be at most 30 characters",
            });
        }

        if (data.met === undefined || data.met === null) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["met"],
                message: "MET value is required",
            });
        } else {
            if (parseFloat(data.met) <= 0) {
                ctx.addIssue({
                    code: z.ZodIssueCode.too_small,
                    minimum: 0,
                    type: "string",
                    inclusive: false,
                    path: ["met"],
                    message: "MET value must be positive",
                });
            }
        }

    } else {
        if (!data.name || data.name.length === 0) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ["name"],
                message: "Name is required",
            });
        }
    }
});

const editFormSchema = baseSchema.omit({
    custom: true,
}).partial()

export default formSchema
export { editFormSchema }
