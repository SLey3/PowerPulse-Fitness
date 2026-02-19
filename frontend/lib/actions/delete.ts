'use server'

import { createSonnerCookie } from '../utils'
import { ApiErrProps, ReturnApiType } from './types'

import { revalidatePath } from 'next/cache'
import axios, { type AxiosResponse, type AxiosError } from 'axios'


const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL
type AxiosSuccessOnlyResponse = AxiosResponse<{confirmation: string}>
type AxiosErr = AxiosError<ApiErrProps>


async function DeleteAll(token: string, section: string, cur_url: string) {
    return await axios.delete(`${API_URL}/${section}/del/m/a`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then((res: AxiosSuccessOnlyResponse) => {
        revalidatePath(cur_url)

        return res.data
    })
    .catch((err: AxiosErr) => {
        return err.response?.data
    })  
}

async function DeleteMany(token: string, ids: number[], section: string, cur_url: string) {
    return await axios.delete(`${API_URL}/${section}/del/m`, {
        data: {
            ids: ids
        },
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then((res: AxiosSuccessOnlyResponse) => {
        revalidatePath(cur_url)

        return res.data
    })
    .catch((err: AxiosErr) => {
        return err.response?.data
    })
}

export async function postFitGoalDeleteAll(token: string, cur_url: string): Promise<ReturnApiType<{confirmation: string}>> {
    return await DeleteAll(token, "fitgoals", cur_url)
}

export async function postFitGoalDeleteMany(token: string, goalIds: number[], cur_url: string): Promise<ReturnApiType<{confirmation: string}>> {
    return await DeleteMany(token, goalIds, "fitgoals", cur_url)
}

export async function postFitExerciseDeleteAll(token: string, cur_url: string): Promise<ReturnApiType<{confirmation: string}>> {
    return await DeleteAll(token, "fitexercise", cur_url)
}

export async function postFitExerciseDeleteMany(token: string, exerciseIds: number[], cur_url: string): Promise<ReturnApiType<{confirmation: string}>> {
    return await DeleteMany(token, exerciseIds, "fitexercise", cur_url)
}


export async function DeleteInterfaceYesResponse({
    cur_url,
    baseApiURL,
    api_url_path,
    apiToken,
    item_id,
    create_cookie
} : {
    cur_url: string,
    baseApiURL: string,
    api_url_path: string,
    apiToken: string,
    item_id: number,
    create_cookie?: boolean
}): Promise<{type: string, msg: string}> {
    return await axios.delete(`${baseApiURL}/${api_url_path}/${item_id}`, {
                headers: {
                    'Authorization': `Bearer ${apiToken}`
                }
        })
        .then((res: AxiosResponse<{ confirmation: string }>) => {
            if (create_cookie) {
                createSonnerCookie({
                    type: 'success',
                    msg: res.data.confirmation
                })
            }

            revalidatePath(cur_url)

            return {
                type: "success",
                msg: res.data.confirmation
            }
        })
        .catch(() => {
            if (create_cookie) {
                createSonnerCookie({
                    type: 'err',
                    msg: 'An unexpected error occurred!'
                })
            }

            return {
                type: 'err',
                msg: "An unexpected error occurred!"
            }
        })
}
