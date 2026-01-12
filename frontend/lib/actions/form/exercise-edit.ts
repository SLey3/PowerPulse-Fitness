'use server'

import { editFormSchema } from "@/lib/schemas/exercise"
import type { ApiErrProps } from "@/lib/actions/types"

import { cookies } from "next/headers"
import { unauthorized } from "next/navigation"
import axios, { type AxiosResponse, type AxiosError } from "axios"
import z from "zod"

type SuccessResponse = {
    updated: string;
}

type defaultErr = {
    defaultErr: string;
}

export async function ex_edit_submit(values: z.infer<typeof editFormSchema>): Promise<SuccessResponse | defaultErr | ApiErrProps> {
    const cookieStore = await cookies()
    const auth_token = cookieStore.get('t')

    if (!auth_token) {
        unauthorized()
    }

    const res = await axios.patch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/fitexercise/edit`,
        values,
        {
            headers: {
                'Authorization': `Bearer ${auth_token.value}`
            }
        }
    ).then((res: AxiosResponse<{updated: string}>) => {
        return res.data
    }).catch((err: AxiosError<ApiErrProps>) => {
        const res =  err.response?.data


        if (!res) {
            return {'defaultErr': 'An Unexpected error occurred! Please try again later.'}
        }

        return res
    })

    return res
}