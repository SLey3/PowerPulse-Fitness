'use client'

import { createSonnerCookie, defaultUndefinedMsg } from "@/lib/utils"
import { ex_edit_submit } from "@/lib/actions/form/exercise-edit"
import { editFormSchema } from "@/lib/schemas/exercise"

import { getExercise } from "@/lib/actions"

import { zodResolver } from "@hookform/resolvers/zod"
import { useQuery } from "@tanstack/react-query"
import Cookies from "js-cookie"
import Link from "next/link"
import { MoveLeft, OctagonXIcon } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import Loading from "../loading"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription,
    FormControl
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { ExerciseProps } from "../types"

export default function ExerciseEditPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const { isPending: dataPending, error: dataError, data } = useQuery({
        queryKey: ['exercise-edit-v'],
        queryFn: async () => await getExercise(Cookies.get('t'), searchParams.get('id'))
    })

    const form = useForm<z.infer<typeof editFormSchema>>({
        resolver: zodResolver(editFormSchema)
    })

    if (dataPending && !data) return <Loading />
    if (dataError) return "The following Fatal Error occurred: " + dataError.message
    if (data && 'statusCode' in data) return `Required data could not be fetched (Code: ${data.statusCode})`
    if (data && !data.custom || !data) return (
        <>
            <div className="antialiased overscroll-none overflow-x-hidden min-h-screen text-white">
                <div className="absolute top-1/4 md:top-[37%] left-0 md:left-[1.5%] lg:left-[5%] xl:left-1/5 bg-gray-900 border border-gray-800 shadow-2xl rounded-2xl p-20 md:py-20 md:px-[calc(10rem_-_(5rem_/_2))]">
                    <OctagonXIcon className="md:absolute md:top-[40%] text-red-700 size-11" /> 
                    <h1 className="md:relative md:left-1/6 lg:left-1/12 font-bold text-2xl md:text-4xl tracking-tighter md:tracking-normal">
                        {!data
                            ? 'Exercise does not exist. Check ID.'
                            : 'Operation not allowed on a preset exercise'}
                    </h1>
                </div>
            </div>
        </>
    )

    if (!form.formState.isDirty) {
        form.setValue("name", data?.name || "")
        form.setValue("type", data?.type || "")
        form.setValue("met", data?.met || "")
        form.setValue("muscle", data?.muscle || "")
        form.setValue("equipment", data?.equipment || "")
        form.setValue("notes", data?.notes)
    }

    async function onSubmit(values: z.infer<typeof editFormSchema>) {
        const payload: Record<string, any> = { exerciseId: parseInt(searchParams.get('id')!)}
        const checked_data = data as Partial<ExerciseProps>

        // check if a field was edited and check if it isnt the old value
        for (const val in values) {

            if (typeof values[val as keyof typeof values] === 'undefined') {
                continue
            }
            
            if (values[val as keyof typeof values] === checked_data[val as keyof typeof data]) {
                continue
            }

            payload[val as keyof typeof values] = values[val as keyof typeof values]
        }

        if (Object.keys(payload).length === 1) {
            toast.warning("All Fields remain the same. Submission cancelled.")
            return
        }

        const res = await ex_edit_submit(payload)

        if ('defaultErr' in res) {
            toast.warning(res.defaultErr as string)
        } else {
            createSonnerCookie({
                type: 'statusCode' in res ? 'err' : 'success',
                msg: 'statusCode' in res ? res.message : res.updated
            })

            router.push('.')
        }
    }

    return (
        <>
            <div className="container px-4 py-8 mx-auto space-y-8">
                <Link href=".">
                    <Button variant="link">
                        <MoveLeft className="size-4" /> Back To Exercise's
                    </Button>
                </Link>
                <h1 className="text-3xl font-bold text-white">
                    Edit Exercise
                </h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Exercise Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder={data ? data.name : defaultUndefinedMsg("name")}
                                            required={false}
                                            {...field}
                                        />
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
                                    <FormLabel>Type of Exercise</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder={data ? data.type : defaultUndefinedMsg("type")}
                                            required={false}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        e.g. bicycling, conditional, etc
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
                                    <FormLabel>MET Value</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder={data ? data.met : defaultUndefinedMsg("met")}
                                            required={false}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription className="md:w-1/6">
                                        MET (Metabolic Equivalent of Task) is a required field as it is used for important calculations (such as estimated calorie burned metric). If you're
                                        unsure estimate a default met value using the following table of basic MET Values:
                                    </FormDescription>
                                    <Table>
                                        <TableCaption>A table of basic MET Values based on suggested intensity</TableCaption>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Intensity</TableHead>
                                                <TableHead>Examples</TableHead>
                                                <TableHead>MET Value Scale</TableHead>
                                                <TableHead>Suggested MET Value (Sitting = 1.0 MET)</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell className="font-semibold">Light Intensity</TableCell>
                                                <TableCell>
                                                    <ul className="list-['-']">
                                                        <li>Light Walking</li>
                                                        <li>Yoga</li>
                                                    </ul>
                                                </TableCell>
                                                <TableCell>
                                                    {"<3.0"}
                                                </TableCell>
                                                <TableCell>
                                                    {(1.0 + 2.9) / 2 /* take the median value as the suggested */}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-semibold">Moderate Intensity</TableCell>
                                                <TableCell>
                                                    <ul className="list-['-']">
                                                        <li>Brisk Walking</li>
                                                        <li>Stationary cycling</li>
                                                    </ul>
                                                </TableCell>
                                                <TableCell>
                                                    3.0-6.0
                                                </TableCell>
                                                <TableCell>
                                                    {(6.0 + 3.0) / 2}
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-semibold">High Intensity</TableCell>
                                                <TableCell>
                                                    <ul className="list-['-']">
                                                        <li>Hiking Hills</li>
                                                        <li>Vigorous Running</li>
                                                    </ul>
                                                </TableCell>
                                                <TableCell>
                                                    {">6.0"}
                                                </TableCell>
                                                <TableCell>
                                                    7.0 {/* can't calculate a median without a maximum so suggest 6 + 1 */}
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="muscle"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Muscle Worked Out</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder={data ? data.muscle : defaultUndefinedMsg("muscle")}
                                            required={false}
                                            {...field}
                                        />
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
                                    <FormLabel>Equipment Used</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder={data ? data.equipment : defaultUndefinedMsg("equipment")}
                                            required={false}
                                            {...field}
                                        />
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
                                            placeholder="Enter notes..."
                                            required={false}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="pt-5 pb-20">
                            <Button type="submit" variant="secondary">
                                Confirm Edits
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </>
    )
}