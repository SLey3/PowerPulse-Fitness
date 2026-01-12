import { getCategories } from "@/lib/actions"
import { determineFetchedList } from "@/lib/utils"
import { Suspense } from "react"
import { cookies } from "next/headers"

import { DataTable } from "@/components/ui/data-table"
import { columns } from "./data-table/columns"
import { TableNotFound } from "./data-table/data-not-found"
import Loading from "./loading"

export default async function ExerciseCategoriesHomePage() {
    const cookieStore = await cookies()
    const token = cookieStore.get("t")?.value

    const categories = await getCategories(token!);
    const determinedCategories = determineFetchedList(categories)

    return (
        <>
            <div className="container px-4 py-8 mx-auto space-y-8">
                <h1 className="text-3xl font-bold text-white">Your Exercise Categories</h1>
                <Suspense fallback={<Loading />}>
                    <DataTable 
                        columns={columns} 
                        data={determinedCategories} 
                        notfound={(
                            <TableNotFound columns={columns} />
                        )}
                    />
                </Suspense>
            </div>
        </>
    )
}
