'use server'

import formSchema from "@/lib/schemas/categories"
import type { ApiErrProps } from "@/lib/actions/types"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { unauthorized } from "next/navigation"
import axios, { type AxiosResponse, type AxiosError } from "axios"
import z from "zod"


export async function ex_cat_submit_request(values: z.infer<typeof formSchema>, userId: number) {
    const cookieStore = await cookies()
    const auth_token = cookieStore.get('t')

    if (!auth_token) {
        return unauthorized()
    }

    const payload = {
        name: values.name,
        userId: userId
    }

    const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/fitcat/add`,
        payload,
        {
            headers: {
                'Authorization': `Bearer ${auth_token.value}`
            }
        }
    ).then(( res: AxiosResponse<{ message: string }> ) => {
        revalidatePath("/fit/exercises/cat")

        return res.data
    }).catch((err: AxiosError<ApiErrProps>) => {
        return err.response?.data
    })

    return res!
}