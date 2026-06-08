'use client'

import { partial, cn } from "@/lib/utils"
import { getExercisesExcerpt, getCategories } from "@/lib/actions"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Cookies from "js-cookie"
import { useQuery } from "@tanstack/react-query"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
import { MoveLeft } from "lucide-react"

import type { CategoriesProps } from "../types"
import type { ExerciseExcerptProps } from "../../exercises/types"

import { 
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ComboBox } from "@/components/ui/combobox"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { MultiSelect } from "@/components/ui/multiselect"

// form schema
const formSchema = z.object({
    title: z.string().min(3, 'Title must be at least 3 characters').max(20, 'Title must be at most 20 characters'),
    description: z.string().min(10, 'Description must be at least 10 characters').max(50, 'Description must be at most 50 characters'),
    routine: z.object({
        exercise: z.string().min(1, 'Exercise name cannot be empty'),
        sets: z.number({ coerce: true }).gt(0, 'Must have more than 0 sets'),
        reps: z.number({ coerce: true }).gt(0, 'Must have more than 0 reps'),
        weight: z.number({ coerce: true }).gt(0, 'Weight can not be 0 kg (lbs)'),
        weightUnit: z.string().min(1, 'Weight unit cannot be empty').default('kg'),
        duration: z.union([
            z.number({ coerce: true })
            .min(1, 'Exercise duration cannot be blank')
            .gt(0, 'Exercise duration must be greater than 0 minutes'),
            z.string()
            .min(1, 'Exercise duration cannot be blank')
            .regex(/^([0-9]{1,2}):([0-5][0-9])$/, 'Time format must be hh:mm.')
            .refine(arg => arg !== "00:00", 'Exercise duration must be greater than 0 minutes')
        ]),
        time_format: z.string().default('m')
    })
    .array()
    .min(1, 'Must include at least one exercise in your Routine'),
    notes: z.string()
            .min(10, 'Notes must be at least 10 characters')
            .max(60, 'Notes must be at most 60 characters')
            .optional(),
    categories: z.array(z.string()).min(1, 'At least one category is required'),
    saveAsTemplate: z.boolean(),
})

// page
export default function CreateLog() {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [prevIndex, setPrevIndex] = useState(0)
    const router = useRouter()
    const { isPending: exerciseIsPending, error: exerciseError, data: exercises } = useQuery({
        queryKey: ['exercise'],
        queryFn: async () => {
            return await getExercisesExcerpt(Cookies.get("t") as string)
        },
        initialData: []
    })
    const { isPending: categoriesIsPending, error: categoriesError, data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: partial<CategoriesProps[] | undefined>(getCategories, Cookies.get("t"))
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            routine: [{
                exercise: "",
                sets: 0,
                reps: 0,
                weight: 0,
                weightUnit: 'kg',
                duration: "",
                time_format: 'm'
            }],
            notes: undefined,
            categories: [],
            saveAsTemplate: false,
        }
    })

    const { fields, append: exerciseAppendRow, remove: removeExerciseRow } = useFieldArray({
        control: form.control,
        name: "routine"
    })



    if (exerciseIsPending || categoriesIsPending) return 'loading Form...'

    if (exerciseError || categoriesError) return 'An error occurred'

    console.log("should be a json: ", typeof exercises)
    
    const exercise_searchable_terms = exercises
        ? exercises.map((exercise: { name: string, muscle: string }) => {
            return {
                value: exercise.name,
                label: exercise.name.toUpperCase(),
                hoverLabel: exercise.muscle
            }
        })
        : []

    const setExerciseComboboxValue = (curIndex: number, e: string) => {
        console.log("e: ", e)
        form.setValue(`routine.${curIndex}.exercise`, e)
    }
    const setExerciseWeightUnitValue = (curIndex: number) => {return partial<typeof form.setValue>(form.setValue, `routine.${curIndex}.weightUnit`)}
    const setExerciseTimeFormat = (curIndex: number) => {return partial<typeof form.setValue>(form.setValue, `routine.${curIndex}.time_format`)}
    const setFormCategories = partial<typeof form.setValue>(form.setValue, "categories")

    async function onExerciseAddMore(index: number) {
        const exValid = await form.trigger(`routine.${index}.exercise`)
        const setValid = await form.trigger(`routine.${index}.sets`)
        const repValid = await form.trigger(`routine.${index}.reps`)
        const weightValid = await form.trigger(`routine.${index}.weight`)
        let durationValid = await form.trigger(`routine.${index}.duration`)
        
        if (durationValid) {
            if (form.getValues(`routine.${index}.time_format`) === 'hrm') {
                if (!RegExp(/^([0-9]{1,2}):([0-5][0-9])$/).test(form.getValues(`routine.${index}.duration`).toString())) {
                    durationValid = false
                    form.setError(`routine.${index}.duration`, { type: 'custom', message: 'Time format must be hh:mm.' })
                }
            }
        }

        if (exValid && setValid && repValid && weightValid && durationValid) {
            setPrevIndex(index => index + 1)
            exerciseAppendRow({ exercise: "", sets: 0, reps: 0, weight: 0, weightUnit: 'kg', duration: "", time_format: 'm' })
        } 
            
    }

    function onExerciseSubstract(index: number) {
        setPrevIndex(index => index - 1)
        removeExerciseRow(index)
    }

    function onSubmit(values: z.infer<typeof formSchema>) {

    }

    return (
        <div className="container px-4 py-8 mx-auto space-y-8">
            <Link href=".">
                <Button variant="link">
                    <MoveLeft className="size-4" /> Back to Logs
                </Button>
            </Link>
            <h1 className="text-3xl font-bold text-white">Create Fitness Log</h1>
            <div className="content-center w-auto h-12 bg-yellow-100">
                <p className="px-12 text-center text-yellow-600">Note: Create exercises and categories first before creating logs</p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Log Title <span className="text-red-400">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter title" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Log Description <span className="text-red-400">*</span></FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Summarize the workout"
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription className="text-slate-300">
                                    Minimum Characters: 10 | Maximum characters: 50
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Separator />
                    <FormField
                        control={form.control}
                        name="routine"
                        render={({ field }) => (
                            <FormItem className="space-y-4">          
                                <FormLabel className="text-2xl">Workout Routine</FormLabel>
                                <FormControl>
                                    <Dialog
                                        open={dialogOpen} 
                                        onOpenChange={setDialogOpen} 
                                        {...field}
                                    >
                                        <DialogTrigger 
                                            type="button"
                                            className={cn(
                                                'ring-red-400 bg-white text-black min-w-1/2 md:w-1/2 max-w-full',
                                                form.getFieldState('routine').error ? 'ring-2' : 'ring-0'
                                            )}
                                        >
                                            Create Routine
                                        </DialogTrigger>
                                        <DialogContent 
                                            onPointerDownOutside={e => e.preventDefault()}
                                            className="max-h-full overflow-y-auto"
                                        >
                                            <DialogHeader>
                                                <DialogTitle>Create Routine</DialogTitle>
                                                <DialogDescription>
                                                    Create the workout routine for today's workout
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="flex flex-col gap-y-8">
                                                {fields.map((field, index) => (
                                                    <div key={field.id} className="space-y-4">
                                                        {index > 0 && <Separator className="my-4" />}
                                                        <FormField
                                                            control={form.control}
                                                            name={`routine.${index}.exercise`}
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel className="text-black">Exercise <span className="text-red-400">*</span></FormLabel>
                                                                    <FormControl>
                                                                        <ComboBox
                                                                            searchable_terms={exercise_searchable_terms}
                                                                            defaultLabels={[
                                                                                "Select Exercises...",
                                                                                "Search Exercises...",
                                                                                "No exercises found."
                                                                            ]}
                                                                            currentValue={field.value}
                                                                            setValue={e => setExerciseComboboxValue(index, e.toString())}
                                                                        />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                                )}  
                                                        />
                                                        <FormField
                                                            control={form.control}
                                                            name={`routine.${index}.sets`}
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel className="text-black">Sets <span className="text-red-400">*</span></FormLabel>
                                                                    <FormControl>
                                                                        <Input 
                                                                            type="number"
                                                                            className="w-1/4 text-muted-foreground"
                                                                            placeholder="# of sets"
                                                                            {...field} 
                                                                        />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                        <FormField
                                                            control={form.control}
                                                            name={`routine.${index}.reps`}
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel className="text-black">Reps <span className="text-red-400">*</span></FormLabel>
                                                                    <FormControl>
                                                                        <Input
                                                                            type="number"
                                                                            className="w-1/4 text-muted-foreground"
                                                                            placeholder="# of reps per set"
                                                                            {...field}
                                                                        />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                        <FormField
                                                            control={form.control}
                                                            name={`routine.${index}.weight`}
                                                            render={({ field }) => (
                                                                <div className="flex flex-row gap-x-4">
                                                                    <FormItem>
                                                                        <FormLabel className="text-black">Weight <span className="text-red-400">*</span></FormLabel>
                                                                        <FormControl>
                                                                            <Input
                                                                                type="number"
                                                                                className="text-muted-foreground min-w-1/2"
                                                                                placeholder="Enter weight..."
                                                                                {...field}
                                                                            />
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                    <FormField
                                                                        control={form.control}
                                                                        name={`routine.${index}.weightUnit`}
                                                                        render={({ field }) => (
                                                                            <FormItem>
                                                                                <FormControl>
                                                                                    <Select onValueChange={setExerciseWeightUnitValue(index)} {...field}>
                                                                                        <SelectTrigger className="w-[180px] text-muted-foreground self-center">
                                                                                            <SelectValue placeholder="Select weight unit" />
                                                                                        </SelectTrigger>
                                                                                        <SelectContent>
                                                                                            <SelectItem value="kg">kg</SelectItem>
                                                                                            <SelectItem value="lbs">lbs</SelectItem>
                                                                                        </SelectContent>
                                                                                    </Select>
                                                                                </FormControl>
                                                                            </FormItem>
                                                                        )}
                                                                    />
                                                                </div>
                                                            )}
                                                        />
                                                        <FormField
                                                            control={form.control}
                                                            name={`routine.${index}.duration`}
                                                            render={({ field }) => (
                                                                <div className="flex flex-row gap-x-4">
                                                                    <FormItem>
                                                                        <FormLabel className="text-black">Duration of Exercise <span className="text-red-400">*</span></FormLabel>
                                                                        <FormControl>
                                                                            <Input
                                                                                className="min-w-1/2 text-muted-foreground"
                                                                                {...field}
                                                                            />
                                                                        </FormControl>
                                                                        <FormMessage />
                                                                    </FormItem>
                                                                    <FormField
                                                                        control={form.control}
                                                                        name={`routine.${index}.time_format`}
                                                                        render={({ field }) => (
                                                                            <FormItem>
                                                                                <FormControl>
                                                                                    <Select onValueChange={setExerciseTimeFormat(index)} {...field}>
                                                                                        <SelectTrigger className="w-[180px] text-muted-foreground self-center">
                                                                                            <SelectValue placeholder="Select time format..." />
                                                                                        </SelectTrigger>
                                                                                        <SelectContent>
                                                                                            <SelectItem value="m">minutes</SelectItem>
                                                                                            <SelectItem value="hrm">hours:minutes</SelectItem>
                                                                                        </SelectContent>
                                                                                    </Select>
                                                                                </FormControl>
                                                                            </FormItem>
                                                                        )}
                                                                    />
                                                                </div>
                                                            )}
                                                        />
                                                        <Button
                                                            type="button"
                                                            className={`relative left-[calc(100%*1/7.8)] w-3/4 text-muted-foreground mt-5 ${index !== prevIndex && 'hidden'}`}
                                                            variant="outline"
                                                            onClick={() => onExerciseAddMore(index)}
                                                        >
                                                            Add More
                                                        </Button>
                                                        {index > 0 && (
                                                            <Button
                                                                type="button"
                                                                variant="destructive"
                                                                onClick={() => onExerciseSubstract(index)}
                                                                className={`relative left-[calc(100%*1/2.8)] mt-2 ${index !== prevIndex && 'hidden'}`}
                                                            >
                                                                Remove Routine
                                                            </Button>
                                                        )}
                                                    </div>
                                                ))}
                                                <DialogClose asChild>
                                                    <Button type="button" variant="secondary">
                                                        Close
                                                    </Button>
                                                </DialogClose>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Separator />
                    <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Workout Notes</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Write notes (optional)..."
                                        className="resize-y"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="categories"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Categories <span className="text-red-400">*</span></FormLabel>
                                <FormControl>
                                    <MultiSelect
                                        options={categories?.map(cat => cat.name)}
                                        selected={field.value}
                                        onChange={setFormCategories}
                                        placeholder="Select Categories..."
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="saveAsTemplate"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>
                                <FormDescription className="text-slate-300">
                                    Save as a template?
                                </FormDescription>
                            </FormItem>
                        )}
                    />
                    <div className="pt-5 pb-20">
                        <Button type="submit" variant="secondary">
                            Log Workout
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

