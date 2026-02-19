'use server'

import { unauthorized } from 'next/navigation'
import axios, { type AxiosResponse, type AxiosError } from 'axios'
import type { LogsFindAllProps } from '@/app/(main_func)/fit/logs/types'
import type { ExerciseExcerptProps, ExerciseProps } from '@/app/(main_func)/fit/exercises/types'
import type { CategoriesProps } from '@/app/(main_func)/fit/exercises/cat/types'
import type { GoalMainPageProps } from '@/app/(main_func)/fit/goals/types'
import { ApiErrProps, ReturnApiType } from './types'


const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL



export async function getExercises(token: string): ReturnApiType<ExerciseProps[]> {
    "use cache"

    return await axios.get(`${API_URL}/fitexercise`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then((res: AxiosResponse<ExerciseProps[]>) => {
        return res.data
    })
    .catch((err: AxiosError<ApiErrProps>) => {
        return err.response?.data
    })
}

export async function getExercise(token: string | undefined, eid: string | null): ReturnApiType<ExerciseProps> {
    "use cache"

    if (!token) {
        unauthorized()
    }

    if (!eid) {
        throw new Error('Did not find required URL Parameter "id"')
    }

    return await axios.get(`${API_URL}/fitexercise/${eid}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then((res: AxiosResponse<ExerciseProps>) => {
        return res.data
    })
    .catch((err: AxiosError<ApiErrProps>) => {
        return err.response?.data
    })
}

export async function getExercisesExcerpt(token: string): ReturnApiType<ExerciseExcerptProps[]> {
    "use cache"

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
    .catch((err: AxiosError<ApiErrProps>) => {
        return err.response?.data
    })
}

export async function getGoalsHomePage(token: string): ReturnApiType<GoalMainPageProps[]> {
    "use cache"
    return axios.get(
        `${API_URL}/fitgoals`,
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
    )
    .then((res: AxiosResponse<(GoalMainPageProps & { subgoals: any })[]>) => {
        const props = res.data.map(({ subgoals, ...rest }) => rest)
        return props
    })
    .catch((err: AxiosError<ApiErrProps>) => {
        return err.response?.data
    })
}


export async function getCategories(token: string): ReturnApiType<CategoriesProps[]> {
    "use cache"

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
    .catch((err: AxiosError<ApiErrProps>) => {
        return err.response?.data
    })
}

export async function getCategory(token: string | undefined, cid: number | string | null): ReturnApiType<CategoriesProps> {
    "use cache"

    if (!token) {
        unauthorized()
    }

    if (!cid) {
        throw new Error('Did not find required URL Parameter "cid"')
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
    .catch((err: AxiosError<ApiErrProps>) => {
        return err.response?.data
    })
}

export async function getCompendiumNames(): ReturnApiType<string[]> {
    "use cache"

    return await axios.get(`${API_URL}/compendium-m/names`)
    .then((res: AxiosResponse<string[]>) => {
        return res.data
    })
    .catch((err: AxiosError<ApiErrProps>) => {
        return err.response?.data
    })
}

export async function getCompendiumTypes(): ReturnApiType<string[]> {
    "use cache"

    return await axios.get(`${API_URL}/compendium-m/types`)
    .then((res: AxiosResponse<string[]>) => {
        return res.data
    })
    .catch((err: AxiosError<ApiErrProps>) => {
        return err.response?.data
    })
}

export async function getLogs(token: string): ReturnApiType<LogsFindAllProps[]> {
    "use cache"
    
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

export async function getUserInfo<T>(query: string, token: string): ReturnApiType<T> {
    return await axios.get(`${API_URL}/users/userinfo`, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        params: {
            'q': encodeURIComponent(query)
        }
    })
    .then((res: AxiosResponse<T>) => {
        return res.data
    })
    .catch((err: AxiosError<ApiErrProps>) => {
        return err.response?.data
    })
}
