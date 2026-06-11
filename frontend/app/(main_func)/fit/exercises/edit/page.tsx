import type { Metadata, ResolvingMetadata } from "next"
import { cookies } from "next/headers"

import { getExercise } from "@/lib/actions"

import ExerciseEditForm from "./form"

type Prop = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined}>
}

export async function generateMetadata(
    { searchParams }: Prop,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { id } = await searchParams
    const cookieStore = await cookies()

    if (typeof id === "string" && cookieStore.has("t")) {
        const exercise = await getExercise(cookieStore.get("t")!.value, id)

        if (exercise && "name" in exercise) {
            return {
                title: exercise.custom ? `Edit ${exercise.name}` : "Not Allowed"
            }
        }
    }

    return {
        title: (await parent).title
    }
}

export default async function ExerciseEditPage() {
    return (
        <>
            <ExerciseEditForm />
        </>
    )
}
