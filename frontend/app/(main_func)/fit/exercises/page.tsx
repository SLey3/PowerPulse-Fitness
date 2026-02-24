import { getExercises, postFitExerciseDeleteAll, postFitExerciseDeleteMany } from "@/lib/actions"
import { determineFetchedList } from "@/lib/utils"

import { Suspense } from "react"
import { cookies } from "next/headers"
import { unauthorized } from "next/navigation"

import { DataTable } from "@/components/ui/data-table"
import { columns } from "./data-table/columns"
import { TableNotFound } from "./data-table/data-not-found"
import Loading from "./loading"


export default async function ExercisesHomePage() {
    const cookieStore = await cookies()
    const token = cookieStore.get("t")?.value
    let exercises
    
        if (token) {
            exercises = await getExercises(token)
        } else {
            unauthorized()
        }
    
    const determinedExercises = determineFetchedList(exercises)

    return (
        <>
            <div className="container px-4 py-8 mx-auto space-y-8">
                <h1 className="text-3xl font-bold text-white">Your Exercises</h1>
                <Suspense fallback={<Loading />}>
                    <DataTable 
                        columns={columns} 
                        data={determinedExercises} 
                        notfound={(
                            <TableNotFound columns={columns} />
                        )}
                        postDeleteAllFunc={postFitExerciseDeleteAll}
                        postDeleteManyFunc={postFitExerciseDeleteMany}
                        />
                </Suspense>
            </div>
        </>
    )
}

