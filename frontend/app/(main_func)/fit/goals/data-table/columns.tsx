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

import { GoalMainPageProps } from '../types'



export const columns = createColumns<GoalMainPageProps>(
    ({ row }) => {
        const goal = row.original
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
                        onClick={() => navigator.clipboard.writeText(`${window.location.href}/view/${goal.id}`)}
                    >
                        Copy Goal Url
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href={`${pathname}/view/${goal.id}`} className="overflow-hidden text-ellipsis">
                            View {goal.title.length > 20 ? `${goal.title.slice(0, 20)}...` : goal.title}
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link
                            href={{
                                pathname: `${pathname}/edit`,
                                query: { id: goal.id }
                            }}
                        >
                            Edit Goal
                        </Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    },
    [
        {
            id: 'title',
            accessorKey: 'title',
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
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
            header: 'Created At'
        },
        {
            accessorKey: 'updatedAt',
            header: 'Updated At'
        },
        {
            accessorKey: 'completeBy',
            header: 'Complete By'
        },
        {
            accessorKey: 'progress',
            header: 'Current Progress (from 0-100)'
        },
        {
            accessorKey: 'status',
            header: 'Goal Status'
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
        }
    ],
    "fitgoals",
    "Goal"
)
