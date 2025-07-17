'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MoreHorizontal, ArrowUpDown, Plus } from 'lucide-react'
import type { LogsFindAllProps } from '../types'

import { formatItemsCrUpdDate } from '@/lib/utils'
import { createColumns } from '@/components/ui/data-table'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const columns = createColumns<LogsFindAllProps>(
    ({ row }) => {
        const log = row.original
        const pathname = usePathname()

        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="p-0 size-8">
                        <div className="sr-only">Open menu</div>
                        <MoreHorizontal className="size-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                        onClick={() => navigator.clipboard.writeText(`${pathname}/${log.id}`)}
                    >
                        Copy Log Url
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link
                            href={{
                                pathname: '/edit',
                                query: { id: log.id }
                            }}
                        >
                            Edit Log
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    },
    [
        {
            accessorKey: 'title',
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={(() => column.toggleSorting(column.getIsSorted() === "asc"))}
                        className="cursor-pointer"
                    >
                        Title
                        <ArrowUpDown className="ml-2 size-4" />
                    </Button>
                )
            }
        },
        {
            accessorKey: 'createdAt',
            header: 'Created At',
            cell: ({ row }) => {
                const formattedDate = formatItemsCrUpdDate({ createdAt: row.getValue("createdAt"), updatedAt: row.getValue("updatedAt") }, 'createdAt')

                return <div className="font-medium text-right">{formattedDate}</div>
            }
        },
        {
            accessorKey: 'updatedAt',
            accessorFn: row => formatItemsCrUpdDate(row, 'updatedAt'),
            header: 'Updated At',
            cell: ({ row }) => {
                const formattedDate = formatItemsCrUpdDate({ createdAt: row.getValue("createdAt"), updatedAt: row.getValue("updatedAt") }, 'updatedAt')

                return <div className="font-medium text-right">{formattedDate}</div>
            }
        },
        {
            id: 'create-btn',
            header: () => {
                const pathname = usePathname()
                return (
                    <Button
                        asChild
                        variant="ghost"
                        className="cursor-pointer"
                    >
                        <Link href={`${pathname}/create`}>
                            <Plus className="size-4" /> Create Log
                        </Link>
                    </Button>
                )
            }
        }
    ]
)
