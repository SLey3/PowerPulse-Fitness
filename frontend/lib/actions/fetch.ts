'use server'

import { unauthorized } from 'next/navigation'
import axios, { type AxiosResponse, type AxiosError } from 'axios'
import type { LogsFindAllProps } from '@/app/(main_func)/fit/logs/types'
import type { ExerciseExcerptProps, ExerciseProps } from '@/app/(main_func)/fit/exercises/types'
import type { CategoriesProps } from '@/app/(main_func)/fit/exercises/cat/types'
import { ApiErrProps } from './types'


const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL

export async function getExercises(token: string): Promise<ExerciseProps[] | ApiErrProps | undefined> {
    return await axios.get(`${API_URL}/fitexercise`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((res: AxiosResponse<ExerciseProps[]>) => {
        return res.data
    }).catch((err: AxiosError<ApiErrProps>) => {
        return err.response?.data
    })
}

export async function getExercisesExcerpt(token: string): Promise<ExerciseExcerptProps[] | undefined> {
    return await axios.get(
        `${API_URL}/fitexercise/excerpt`
    , {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then((res: AxiosResponse<ExerciseExcerptProps[] | undefined>) => {
        return res.data
    })
}


export async function getCategories(token: string): Promise<CategoriesProps[] | undefined> {
    return await axios.get(
        `${API_URL}/fitcat`,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    )
    .then((res: AxiosResponse<CategoriesProps[] | undefined>) => {
        return res.data
    })
}

export async function getCategory(token: string | undefined, cid: number | string | null): Promise<CategoriesProps | undefined> {

    if (!token) {
        unauthorized()
    }

    if (!cid) {
        throw new Error('Did not find required URL Parameter "CID"')
    }

    return await axios.get(
        `${API_URL}/fitcat/${cid}`,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    )
    .then((res: AxiosResponse<CategoriesProps>) => {
        return res.data
    })
}

export async function getCompendiumNames(): Promise<string[]> {
    return await axios.get(`${API_URL}/compendium-m/names`).then((res: AxiosResponse<string[]>) => {
        return res.data
    })
}

export async function getCompendiumTypes(): Promise<string[]> {
    return await axios.get(`${API_URL}/compendium-m/types`).then((res: AxiosResponse<string[]>) => {
        return res.data
    })
}

export async function getLogs(token: string): Promise<LogsFindAllProps[] | ApiErrProps | undefined> {
    return await axios.get(`${API_URL}/fitlogs`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }).then((res: AxiosResponse<LogsFindAllProps[]>) => {
        return res.data
    }).catch((err: AxiosError<ApiErrProps>) => {
        return err.response?.data
    })
}

export async function getUserInfo<T>(query: string, token: string): Promise<T> {
    return await axios.get(`${API_URL}/users/userinfo`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        params: {
            'q': encodeURIComponent(query)
        }
    }).then((res: AxiosResponse<T>) => {
        return res.data
    })
}
