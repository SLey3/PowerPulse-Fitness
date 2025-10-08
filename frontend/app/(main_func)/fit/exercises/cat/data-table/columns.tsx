'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MoreHorizontal, ArrowUpDown, Plus } from 'lucide-react'

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
import { CategoriesProps } from '../types'

export const columns = createColumns<CategoriesProps>(
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
                    <DropdownMenuItem>
                        <Link
                            href={{
                                pathname: `${pathname}/edit`,
                                query: { id: log.id }
                            }}
                        >
                            Edit Category
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    },
    [
        {
            id: 'title',
            accessorKey: 'name',
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                        className="cursor-pointer"
                    >
                        Name
                        <ArrowUpDown className="ml-2 size-4" />
                    </Button>
                )
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
                            <Plus className="size-4" /> Create Exercise
                        </Link>
                    </Button>
                )
            }
        },
    ]
)