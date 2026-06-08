import { z } from "zod";
import dayjs from "dayjs";

export type Goal = {
  title: string;
  description: string;
  weightLoss?: unknown;
  weightLossUnit?: "LBS" | "KGS";
  calorieBurn?: unknown;
  calorieBurnUnit?: "LBS" | "KGS";
  distance?: unknown;
  distanceUnit?: "MI" | "KM";
  completeBy: Date;
  status: "NOT_STARTED" | "IN_PROGRESS";
  subgoals?: Goal[];
};

type GoalInput = {
  title: string;
  description: string;
  weightLoss?: unknown;
  weightLossUnit?: "LBS" | "KGS";
  calorieBurn?: unknown;
  calorieBurnUnit?: "LBS" | "KGS";
  distance?: unknown;
  distanceUnit?: "MI" | "KM";
  completeBy: Date | string;
  status?: "NOT_STARTED" | "IN_PROGRESS";
  subgoals?: GoalInput[];
};

const formSchema: z.ZodType<Goal, z.ZodObjectDef, GoalInput> = z.object({
    title: z.string()
        .min(11, "Goal Title should be more than 10 characters")
        .max(99, "Goal Title should be less than 100 characters"),
    description: z.string().min(11, "Description should be more than 10 characters"),
    weightLoss: z.preprocess(
        (val) => (val === "" || val === null || val === undefined ? undefined : val),
        z.number({ coerce: true }).optional()
    ),
    weightLossUnit: z.enum(["LBS", "KGS"])
                    .optional()
                    .default("KGS"),
    calorieBurn: z.preprocess(
        (val) => (val === "" || val === null || val === undefined ? undefined : val),
        z.number({ coerce: true }).optional()
    ),
    calorieBurnUnit: z.enum(["LBS", "KGS"])
                        .optional()
                        .default("KGS"),
    distance: z.preprocess(
        (val) => (val === "" || val === null || val === undefined ? undefined : val),
        z.number({ coerce: true }).optional()
    ),
    distanceUnit: z.enum(["MI", "KM"])
                    .optional()
                    .default("KM"),
    completeBy: z.date({ coerce: true }).refine(
        (date) => dayjs(date).isAfter(dayjs().endOf('day'), 'day'),
        {
        message: `Complete By date must be set after today (${dayjs().format("MM/DD/YY")})`
        }
    ),
    status: z.enum(["NOT_STARTED", "IN_PROGRESS"])
        .default("NOT_STARTED"),
        
    get subgoals(): z.ZodOptional<z.ZodArray<typeof formSchema>> {
        return z.preprocess(
            (val) => {
                if (val === undefined || val === null) return undefined
                if (val === "" || val === "[]") return undefined
                if (Array.isArray(val) && val.length === 0) return undefined

                return val
            },
            z.optional(z.array(formSchema))
        ) as unknown as z.ZodOptional<z.ZodArray<typeof formSchema>>;
    }
})

export default formSchema
