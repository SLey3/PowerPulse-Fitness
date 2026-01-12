'use client'

import { getCategory } from "@/lib/actions"
import { ex_cat_edit_submit } from "@/lib/actions/form/category-edit"
import formSchema from "@/lib/schemas/categories"
import { createSonnerCookie } from "@/lib/utils"

import { zodResolver } from "@hookform/resolvers/zod"
import { useQuery } from "@tanstack/react-query"
import Cookies from "js-cookie"
import { MoveLeft } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import z from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Loading from "../loading"



export default function CatEditPage() {
    const searchParams = useSearchParams()    
    const router = useRouter()
    const {isPending, error, data } = useQuery({
        queryKey: ['category-edit-d'],
        queryFn: async () => await getCategory(Cookies.get("t"), searchParams.get("cid"))
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: ""
        }
    })


    if (isPending && !data) return <Loading />
    if (error) return "The following Fatal Error occurred: " + error.message
    if (data && 'statusCode' in data) return `An unexpected Error occurred (Code: ${data.statusCode})`

    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (!data || ('statusCode' in data)) return

        const res = await ex_cat_edit_submit(values, data.name)

        if ('statusCode' in res || 'default_err' in res) {
            const msg = 'message' in res
                            ? res.message // Error came from API
                            : res.default_err

            form.setError('name', {
                type: 'custom',
                message: msg
            })
        } else {
            createSonnerCookie({
                type: 'success',
                msg: `Category "${data.name}" has been updated too: "${values.name}"`
            })

            router.push(".")
        }
    }


    return (
        <>
            <div className="container px-4 py-8 mx-auto space-y-8">
                <Link href=".">
                    <Button variant="link">
                        <MoveLeft className="size-4" /> Back To Exercise Categories
                    </Button>
                </Link>
                <h1 className="text-3xl font-bold text-white">
                    Edit Exercise Category
                </h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Category Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder={data!.name}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="pb-20">
                            <Button type="submit" variant="outline">
                                Confirm Edit
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </>
    )

}
