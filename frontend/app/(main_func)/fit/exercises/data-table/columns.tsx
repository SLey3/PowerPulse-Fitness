'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MoreHorizontal, ArrowUpDown, Plus } from 'lucide-react'

import { handleTableCellURLCopy } from '@/lib/utils'

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

import { ExerciseProps } from '../types'



export const columns = createColumns<ExerciseProps>(
    ({ row }) => {
        const exercise = row.original
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
                        onClick={() => handleTableCellURLCopy(exercise.id)}
                    >
                        Copy Exercise Url
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href={`${pathname}/view/${exercise.id}`} className="overflow-hidden text-ellipsis">
                            View {exercise.name.length > 20 ? `${exercise.name.slice(0, 20)}...` : exercise.name}
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem disabled={!exercise.custom} aria-disabled={!exercise.custom}>
                        <Link
                            href={{
                                pathname: `${pathname}/edit`,
                                query: { id: exercise.id }
                            }}
                            aria-disabled={!exercise.custom}
                        >
                            Edit Exercise
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
            accessorKey: 'type',
            header: 'Exercise Type'
        },
        {
            accessorKey: 'muscle',
            header: 'Muscle'
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
    "fitexercise",
    "Exercise"
)
