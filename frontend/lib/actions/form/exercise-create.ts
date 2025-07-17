'use server'

import formSchema from "@/lib/schemas/exercise"
import { cookies } from "next/headers"
import axios, {type AxiosResponse, type AxiosError} from "axios"
import { z } from "zod"

import type { ApiErrProps } from "../types"

// exercise create
export async function ec_submit_request(values: z.infer<typeof formSchema>) {
    const cookieStore = await cookies()
    const auth_token = cookieStore.get('t')!.value

    const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/fitexercise/create`,
        values,
        {
            headers: {
                'Authorization': `Bearer ${auth_token}`
            }
        }
    ).then((res: AxiosResponse<{ created: string }>) => {
        return res.data
    }).catch((err: AxiosError<ApiErrProps>) => {
        return err.response?.data
    })

    return res!
}
