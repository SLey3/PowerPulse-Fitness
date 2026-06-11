'use client'

import { createSonnerCookie } from "@/lib/utils"
import { ex_cat_edit_submit } from "@/lib/actions/form/category-edit"
import formSchema from "@/lib/schemas/categories"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"

import { 
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CategoryEditForm({
    currentName
} : {
    currentName: string;
}) {
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: ""
        }
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const res = await ex_cat_edit_submit(values, currentName)

        if ('statusCode' in res || 'default_err' in res) {
            const msg = 'message' in res
                            ? res.message // Error came from API
                            : res.default_err

            form.setError('name', {
                type: 'custom',
                message: msg as string
            })
        } else {
            createSonnerCookie({
                type: 'success',
                msg: `Category "${currentName}" has been updated too: "${values.name}"`
            })

            router.push("..")
        }
    }

    return (
        <>
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
                                        placeholder={currentName}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="pb-20">
                        <Button type="submit">
                            Confirm Edit
                        </Button>
                    </div>
                </form>
            </Form>
        </>
    )
}
