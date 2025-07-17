"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ColumnDef } from "@tanstack/react-table"
import { ExerciseProps } from "../types"

import {
    TableRow,
    TableCell
} from '@/components/ui/table'

export function TableNotFound({ columns }: { columns: ColumnDef<ExerciseProps>[]}) {
    const pathname = usePathname()
    
    return (
        <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center whitespace-pre-line">
                No Exercises to Show. {"\n"}
                <Link
                    href={`${pathname}/create`}
                    className='hover:text-blue-400'
                >
                    Create First Exercise?
                </Link>
            </TableCell>
        </TableRow>
    )
}
