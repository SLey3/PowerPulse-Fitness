'use server'

import formSchema from "@/lib/schemas/goal"
import { getSSRCookie } from "@/lib/utils/ssu"
import { revalidatePath } from "next/cache"
import { unauthorized } from "next/navigation"
import axios, { type AxiosResponse, type AxiosError } from "axios"
import { z } from 'zod'
import dayjs from "dayjs"
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

import type { ApiErrProps } from "../types"

// goal create
export async function gl_create_request(values: z.infer<typeof formSchema>) {
    let mod_subgoals = null;
    const auth_token = await getSSRCookie("t")
    const { completeBy, subgoals, ...payload_values } = values


    if (!auth_token) {
        unauthorized()
    }

    if (subgoals) {
        mod_subgoals = subgoals.map(sg => ({
            ...sg,
            completeBy: dayjs(sg.completeBy).utc().toDate()
        }))
    }

    // all dates should be set to utc for more streamlined processing and checks
    const payload = {
        completeBy: dayjs(values.completeBy).utc().toDate(),
        ...payload_values
    }

    if (mod_subgoals) {
        console.log("adding mod_subgoals")
        Object.assign(payload, { subgoals: mod_subgoals })
    }

    const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/fitgoals/new`,
        payload,
        {
            headers: {
                'Authorization': `Bearer ${auth_token.value}`
            }
        }
    ).then((res: AxiosResponse<{created: string }>) => {
        revalidatePath("/fit/goals")

        return res.data
    }).catch((err: AxiosError<ApiErrProps>) => {
        return err.response?.data
    })

    return res
}
