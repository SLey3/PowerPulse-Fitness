import { getLogs } from "@/lib/actions"
import { determineFetchedList } from "@/lib/utils"
import { Suspense } from "react"
import { cookies } from "next/headers"

import { DataTable } from "@/components/ui/data-table"
import { columns } from "./data-table/columns"
import { TableNotFound } from "./data-table/data-not-found"






export const experimental_ppr = true

export default async function LogsHomePage() {
    const cookieStore = await cookies()
    const token = cookieStore.get("t")?.value

    const logs = await getLogs(token!)
    const determinedLogs = determineFetchedList(logs)

    return (
        <>
            <div className="container px-4 py-8 mx-auto space-y-8">
                <h1 className="text-3xl font-bold text-white">Fitness Logs</h1>
                <Suspense fallback={<p>loading..</p>}>
                    <DataTable 
                        columns={columns} 
                        data={determinedLogs} 
                        notfound={(
                            <TableNotFound columns={columns} />
                        )}
                        />
                </Suspense>
            </div>
        </>
    )
}

