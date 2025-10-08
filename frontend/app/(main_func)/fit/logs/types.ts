import type { ExerciseProps } from "../exercises/types"
import type { CategoriesProps } from "../exercises/cat/types"

export interface RoutineProps {
    time_format: string
    exercise: ExerciseProps
    sets: number
    reps: number
    weight: number
    duration: number | string
}


export interface LogsProps {
    id: number
    createdAt: Date
    updatedAt: Date
    title: string
    description: string
    routine: RoutineProps
    duration: number
    notes?: string
    estimatedCalorieBurn: number
    categories: CategoriesProps
}

export interface LogsFindAllProps {
    id: number
    createdAt: Date
    updatedAt: Date
    title: string
}