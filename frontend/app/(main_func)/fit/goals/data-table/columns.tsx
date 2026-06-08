'use client'

import Link from 'next/link'
import { usePathname, useRouter, unauthorized } from 'next/navigation'
import { MoreHorizontal, ArrowUpDown, Plus, X, Check } from 'lucide-react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { toast } from 'sonner'

import { revalidateFitGoalsTag } from '@/lib/actions/client/revalidations'

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
import { cn, handleTableCellURLCopy } from '@/lib/utils'



export const columns = createColumns<GoalMainPageProps>(
    ({ row }) => {
        const goal = row.original
        const pathname = usePathname()
        const router = useRouter()

        function handleMarkCompletion() {
            const token = Cookies.get("t")

            if (!token) {
                return unauthorized()
            }

            axios.post(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/fitgoals/prog`,
                {
                    goalId: goal.id,
                    num: goal.progress === 100 ? 0 : 100
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            .then(async () => {
                await revalidateFitGoalsTag()
                router.refresh()
            })
        }

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
                        onClick={() => handleTableCellURLCopy(goal.id)}
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
                    <DropdownMenuItem
                        className={cn(
                            "cursor-pointer",
                            goal.progress === 100 ? "text-red-500 hover:bg-lime-200/45" : "text-lime-300 hover:bg-red-400/45"
                        )}
                        onClick={() => handleMarkCompletion()}
                    >
                        {goal.progress === 100 ? (
                            <>
                                <p className="indent-5">                          
                                    <span>
                                        <X className="absolute pt-1 text-red-500" />
                                    </span>
                                    Unmark Complete
                                </p>
                            </>
                        ) : (
                            <>
                                <p className="indent-5">                          
                                    <span>
                                        <Check className="absolute pt-1 text-lime-300" />
                                    </span>
                                    Mark Complete
                                </p>
                            </>
                        )}
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        )
    },
    [
        {
            id: 'title',
            accessorKey: 'title',
            sortingFn: (rowA, rowB) => {
                const a = rowA.getValue<string>('title')
                const b = rowB.getValue<string>('title')

                const res = a.localeCompare(b)

                if (res < 0) return -1
                if (res > 0) return 1

                return 0
            },
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
            id: 'progress',
            accessorKey: 'progress',
            sortingFn: (rowA, rowB) => {
                const a = rowA.getValue<number>('progress')
                const b = rowB.getValue<number>('progress')

                const aComplete = a === 100
                const bComplete = b === 100


                if (aComplete && bComplete) return 0;
                if (aComplete) return -1;
                if (bComplete) return 1;  

                return b - a; // incomplete: sort high → low by default
            },
            header: ({ column }) => {
                return (
                    <Button
                        variant="ghost"
                        onClick={() => {
                            const current = column.getIsSorted();
                            if (current === false) {
                                column.toggleSorting(false);
                            } else if (current === "asc") {
                                column.toggleSorting(true); 
                            } else {
                                column.clearSorting();
                            }
                        }}
                        className="cursor-pointer"
                    >
                        Progress
                    </Button>
                )
            }
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
