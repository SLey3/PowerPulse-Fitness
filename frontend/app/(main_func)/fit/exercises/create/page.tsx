'use client'

import { getCompendiumNames, getCompendiumTypes } from "@/lib/actions"
import { ec_submit_request } from "@/lib/actions/form/exercise-create"
import formSchema from "@/lib/schemas/exercise"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"
import { useQuery } from '@tanstack/react-query'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { MoveLeft } from "lucide-react"
import { toast } from "sonner"

import Loading from "./loading"


import { 
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ComboBox } from "@/components/ui/combobox"

export default function CreateExercise() {
    const router = useRouter()
    const { isPending: compendiumNamesIsPending, error: compendiumNamesError, data: compendiumNames } = useQuery({
        queryKey: ['compendium-names'],
        queryFn: getCompendiumNames
    })
    const { isPending: compendiumTypesIsPending, error: compendiumTypesError, data: compendiumTypes } = useQuery({
        queryKey: ['compendium-types'],
        queryFn: getCompendiumTypes
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            custom: false
        }
    })

    const custom = form.watch("custom")

    if (compendiumNamesIsPending || compendiumTypesIsPending) return <Loading />

    if (compendiumNamesError || compendiumTypesError) return 'An error occurred'

    const exercise_searchable_terms = compendiumNames!.map((val, index) => {
        return {
            value: val,
            label: val.toUpperCase(),
            hoverLabel: compendiumTypes![index]
        }
    })

    function setExerciseComboboxValue(e: string) {
        const entry = exercise_searchable_terms.filter(val => val.value === e)[0]

        form.setValue('name', entry.value)
        form.setValue('type', entry.hoverLabel)
    }

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const res = await ec_submit_request(values)

        if ('statusCode' in res) {
            console.log(res)
            if(res.message.startsWith('Exercise type')) {
                form.setError('type', { type: 'custom', message: res.message})
            } else {
                form.setError('name', { type: 'custom', message: res.message })
            }
            return
        } else {
            toast.success("Exercise Created Successfully", {
                dismissible: false,
                description: res.created
            })

            router.push('.')
        }
    }


    return (
        <div className="container px-4 py-8 mx-auto space-y-8">
            <Link href=".">
                <Button variant="link">
                    <MoveLeft className="size-4" /> Back to Exercises
                </Button>
            </Link>
            <h1 className="text-3xl font-bold text-white">Create Exercise</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="custom"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>
                                    Custom Exercise?
                                </FormLabel>
                                <FormControl>
                                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    {!custom ? (
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Exercise <span className="text-red-400">*</span></FormLabel>
                                    <FormControl>
                                        <ComboBox
                                            searchable_terms={exercise_searchable_terms}
                                            defaultLabels={compendiumNames}
                                            currentValue={field.value as string}
                                            setValue={setExerciseComboboxValue}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Select the exercise closest or exactly to what your looking for. If you still dont think any matches, select custom
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    ) : (
                        <>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name of Exercise <span className="text-red-400">*</span></FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter name..." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="type"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Type of Exercise <span className="text-red-400">*</span></FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter exercise type..." {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            e.g. "bicycling", "conditional", etc
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="met"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>MET Value <span className="text-red-400">*</span></FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter met value..." {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            MET (Metabolic Equivalent of Task) is a required field. If you're
                                            unsure please search up the MET value of the exercise you did.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </>
                    )}
                    <FormField
                        control={form.control}
                        name="muscle"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Muscle Worked out <span className="text-red-400">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter muscle name..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    e.g. biceps, hamstrings, abs, etc
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="equipment"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Equipment Used <span className="text-red-400">*</span></FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter name of equipment..." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Exercise Notes</FormLabel>
                                <FormControl>
                                    <Textarea
                                        className="resize-y" 
                                        placeholder="Write notes (optional)..."
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="pt-5 pb-20">
                        <Button type="submit" variant="secondary">
                            Add Exercise
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
