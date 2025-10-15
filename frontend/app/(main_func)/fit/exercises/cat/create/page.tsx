'use client'

import { createSonnerCookie } from "@/lib/utils"
import { ex_cat_submit_request } from "@/lib/actions/form/category-create"
import { getUserInfo } from "@/lib/actions"
import { MoveLeft } from "lucide-react"
import formSchema from "@/lib/schemas/categories"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"
import { toast } from "sonner"
import Cookies from "js-cookie"
import { useQuery } from "@tanstack/react-query"


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
import Loading from "../loading"

export default function CreateCategory() {
    const router = useRouter()
    const { isPending, error, data } = useQuery({
        queryKey: ['category-uid'],
        queryFn: async () => await getUserInfo<{id: number}>('id', Cookies.get('t')!),
    }) 
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: ""
        }
    })

    if (!data) return 'Failed to load required data. Please try again later.'
    if (isPending) return <Loading />
    if (error) return 'An unexpected error occurred. If this persists, contact support.'

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const res = await ex_cat_submit_request(values, data!.id)

        if ('statusCode' in res) {
            toast.error("An unexpected error occurred!")
        } else {
            createSonnerCookie({
                type: 'success',
                msg: "Category Created Successfully"
            })    
        
            router.push('.')
        }
    }

    return (
        <div className="container px-4 py-8 mx-auto space-y-8">
            <Link href=".">
                <Button variant="link">
                    <MoveLeft className="size-4" /> Back To Exercises Categories
                </Button>
            </Link>
            <h1 className="text-3xl font-bold text-white">Create Exercise Category</h1>
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
                                    <Input placeholder="Enter category name..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    Category name must be unique
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="pt-5 pb-20">
                        <Button type="submit" variant="secondary">
                            Add Category
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}
