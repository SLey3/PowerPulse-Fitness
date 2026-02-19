import { getGoalsHomePage, postFitGoalDeleteAll, postFitGoalDeleteMany } from "@/lib/actions"
import { determineFetchedList } from "@/lib/utils"

import { Suspense } from "react"
import { cookies } from "next/headers"
import { unauthorized } from "next/navigation"

import { DataTable } from "@/components/ui/data-table"
import { columns } from "./data-table/columns"
import { TableNotFound } from "./data-table/data-not-found"
import Loading from "./loading"


export default async function GoalsHomePage() {
    const cookieStore = await cookies()
    const token = cookieStore.get("t")?.value
    let goals

    if (token) {
        goals = await getGoalsHomePage(token)
    } else {
        unauthorized()
    }

    const determinedGoals = determineFetchedList(goals)

    return (
        <>
            <div className="container px-4 py-8 mx-auto space-y-8">
                <h1 className="text-3xl font-bold text-white">Your Fitness Goals</h1>
                <Suspense fallback={<Loading />}>
                    <DataTable 
                        columns={columns} 
                        data={determinedGoals} 
                        notfound={(
                            <TableNotFound columns={columns} />
                        )}
                        postDeleteAllFunc={postFitGoalDeleteAll}
                        postDeleteManyFunc={postFitGoalDeleteMany}
                        />
                </Suspense>
            </div>
        </>
    )
}

