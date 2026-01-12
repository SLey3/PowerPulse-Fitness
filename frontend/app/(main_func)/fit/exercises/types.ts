export interface ExerciseProps {
    id: number
    custom: boolean
    name: string
    type: string
    useCount: number
    muscle: string
    equipment: string
    notes?: string
    met: string 
}

export interface ExerciseExcerptProps {
    id: number 
    name: string 
    type: string 
    muscle: string
}