"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ColumnDef } from "@tanstack/react-table"
import { GoalMainPageProps } from "../types"

import {
    TableRow,
    TableCell
} from '@/components/ui/table'

export function TableNotFound({ columns }: { columns: ColumnDef<GoalMainPageProps>[]}) {
    const pathname = usePathname()
    
    return (
        <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center whitespace-pre-line text-sm/6">
                No Fitness Goals to Show. {"\n"}
                <Link
                    href={`${pathname}/create`}
                    className='text-gray-400 hover:text-blue-400'
                >
                    Create First Fitness Goal?
                </Link>
            </TableCell>
        </TableRow>
    )
}
