"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import type { ColumnDef } from "@tanstack/react-table"
import { LogsFindAllProps } from "../types"

import {
    TableRow,
    TableCell
} from '@/components/ui/table'

export function TableNotFound({ columns }: { columns: ColumnDef<LogsFindAllProps>[]}) {
    const pathname = usePathname()
    
    return (
        <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center whitespace-pre-line">
                No Logs to Show. {"\n"}
                <Link
                    href={`${pathname}/create`}
                    className='hover:text-blue-400'
                >
                    Create First Log?
                </Link>
            </TableCell>
        </TableRow>
    )
}
