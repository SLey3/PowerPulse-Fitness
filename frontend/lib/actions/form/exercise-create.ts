'use server'

import formSchema from "@/lib/schemas/exercise"
import { getSSRCookie } from "@/lib/utils/ssu"
import { revalidatePath } from "next/cache"
import axios, { type AxiosResponse, type AxiosError } from "axios"
import { z } from "zod"

import type { ApiErrProps } from "../types"

// exercise create
export async function ec_submit_request(values: z.infer<typeof formSchema>) {
    const auth_token = await getSSRCookie("t")

    if (!auth_token) {
        return
    }

    const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/fitexercise/create`,
        values,
        {
            headers: {
                'Authorization': `Bearer ${auth_token.value}`
            }
        }
    ).then((res: AxiosResponse<{ created: string }>) => {
        revalidatePath("/fit/exercises")

        return res.data
    }).catch((err: AxiosError<ApiErrProps>) => {
        return err.response?.data
    })

    return res
}
