'use server'

import formSchema from "@/lib/schemas/categories"
import type { ApiErrProps } from "@/lib/actions/types"
import { cookies } from "next/headers"
import { unauthorized } from "next/navigation"
import axios, { type AxiosResponse, type AxiosError } from "axios"
import z from "zod"

// internal types
type successResponse = {
    updated: string;
}

type defaultErr = {
    default_err: string;
}

export async function ex_cat_edit_submit(
    values: z.infer<typeof formSchema>, 
    oldName: string): Promise<successResponse | ApiErrProps | defaultErr> 
{
    const cookieStore = await cookies()
    const auth_token = cookieStore.get('t')

    if (!auth_token) {
        return unauthorized()
    }

    const payload = {
        name: values.name,
        oldName: oldName
    }

    const res = await axios.patch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/fitcat/edit`, 
        payload, 
        {
            headers: {
                'Authorization': `Bearer ${auth_token.value}`
            }
        }
    )
    .then((res: AxiosResponse<successResponse>) => {
        return res.data
    })
    .catch((err: AxiosError<ApiErrProps>) => {
        const res = err.response?.data

        if (!res) {
            return {'default_err': 'An Unexpected error occurred! Please try again later.'}
        }

        return res
    })

    return res!
}
