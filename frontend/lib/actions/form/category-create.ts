'use server'

import formSchema from "@/lib/schemas/categories"
import { cookies } from "next/headers"
import axios, { type AxiosResponse, type AxiosError } from "axios"
import z from "zod"

import type { ApiErrProps } from "../types"

export async function ex_cat_submit_request(values: z.infer<typeof formSchema>) {
    const cookieStore = await cookies()
    const auth_token = cookieStore.get('t')!.value

    const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/fitcat/add`,
        values,
        {
            headers: {
                'Authorization': `Bearer ${auth_token}`
            }
        }
    ).then(( res: AxiosResponse<{ message: string }> ) => {
        return res.data
    }).catch((err: AxiosError<ApiErrProps>) => {
        return err.response?.data
    })

    return res!
}