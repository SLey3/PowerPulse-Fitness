import type { Metadata } from "next"
import CreateExerciseForm from "./form"

export const metadata: Metadata = {
    title: "Create Exercise"
}

export default async function CreateExercisePage() {
    return (
        <>
            <CreateExerciseForm />
        </>
    )
}
