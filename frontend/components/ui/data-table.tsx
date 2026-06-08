'use client'


import { executeToast, createSonnerCookie, formatItemsCrUpdCbDate } from '@/lib/utils'
import type { TableDeleteReturnApiType } from '@/lib/actions/types'

import React from 'react'
import { unauthorized, useRouter, usePathname } from 'next/navigation'
import { toast } from 'sonner'
import {
    type ColumnDef,
    type ColumnFiltersState,
    type SortingState,
    type ColumnDefTemplate,
    type CellContext,
    type Table as TanstackTable,
    type Row,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable
} from '@tanstack/react-table'
import { ArrowRight, ArrowLeft, LucideTrash2, Trash2 } from 'lucide-react'
import Cookies from 'js-cookie'
import dayjs from 'dayjs'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table'
import { DeleteInterface } from './delete-interface'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Progress } from '@/components/ui/progress'



interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}


export function createColumns<T extends { id: number }>(
    setActionsDropdown: ColumnDefTemplate<CellContext<T, unknown>>, 
    columns: ColumnDef<T>[],
    del_api_path: string,
    del_header_suffix: string
): ColumnDef<T>[] {
    return [
        {
            id: 'select',
            header: ({ table }: {table: TanstackTable<T>}) => (
                <Checkbox
                    checked={
                        table.getIsAllPageRowsSelected() ||
                        (table.getIsSomePageRowsSelected() && "indeterminate")
                    }
                    onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
                    aria-label="Select all"
                />
            ),
            cell: ({ row }: { row: Row<T> }) => (
                <Checkbox
                    checked={row.getIsSelected()}
                    onCheckedChange={value => row.toggleSelected(!!value)}
                    aria-label="Select Row"
                />
            )
        },
        {
            accessorKey: 'id',
            header: 'ID'
        },
        ...columns]
        .concat([
            {
                accessorKey: 'actions',
                cell: setActionsDropdown

            },
            {
                id: 'delete',
                header: () => {
                    return (
                        <p className="line-clamp-1">
                            Delete {del_header_suffix}
                        </p>
                    )
                },
                cell: ({ row }: { row: Row<T>}) => {
                    const log = row.original
                    const pathname = usePathname()

                    return (
                        <DeleteInterface 
                            api_url_path={del_api_path}
                            cur_url={pathname}
                            item_id={log.id}
                            triggerBody={
                                <div className="bg-inherit! translate-x-[25%]">
                                    <LucideTrash2 className="text-red-400 cursor-pointer size-3 hover:brightness-75" />
                                </div>
                            }
                        />
                    )
                }
            }
        ])
}

interface DataTableArgs<TData, TValue> extends DataTableProps<TData, TValue> {
    notfound: React.ReactElement;
    postDeleteAllFunc: (token: string, cur_url: string) => Promise<TableDeleteReturnApiType<{confirmation: string}>>;
    postDeleteManyFunc: (token: string, ids: number[], cur_url: string) => Promise<TableDeleteReturnApiType<{confirmation: string}>>;
}


export function DataTable<TData, TValue>({
    columns,
    data,
    notfound,
    postDeleteAllFunc,
    postDeleteManyFunc
}: DataTableArgs<TData, TValue>) {
    const { refresh } = useRouter()
    const pathname = usePathname()

    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [rowSelection, setRowSelection] = React.useState({});

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            rowSelection
        },
    });
    const usertz = dayjs.tz.guess()
    const bread = Cookies.get('bread')

    if (bread) {
        executeToast(bread)
    }

    async function executeSelectedRowDeletion(all: boolean) {
        const selectedRows = table.getGroupedSelectedRowModel()
        const goal_ids: number[] = []
        const t = Cookies.get("t")

        if (!t) {
            unauthorized()
        }

        
        if (all) {
            const res = await postDeleteAllFunc(t, pathname)

            if (typeof res !== 'undefined') {
                if ('confirmation' in res) {
                    createSonnerCookie({
                        type: 'success',
                        msg: res.confirmation
                    })
                }

                if ('statusCode' in res || 'goalIds' in res) {
                    toast.error(res.message as string)
                } 
            } else {
                toast.error("Something went wrong. Try again")
            }
        } else {
            selectedRows.rows.forEach((row) => {
                const { id } = row.original as { id: number; [key: string]: any }
    
                goal_ids.push(id)
            })

            const res = await postDeleteManyFunc(t, goal_ids, pathname)


            console.log(res)


            if (typeof res !== 'undefined') {
                if ('confirmation' in res) {
                    createSonnerCookie({
                        type: 'success',
                        msg: res.confirmation
                    })
                }

                if ('statusCode' in res || 'goalIds' in res) {
                    toast.error(res.message as string)
                } 
            } else {
                toast.error("Something went wrong. Try again")
            }
        }

        refresh()
    }

    return (
        <div className="absolute pr-10">
            <div className="flex items-center py-4 gap-x-4">
                <h3>Search By Title:</h3>
                <Input
                    placeholder='Search title...'
                    value={(table.getColumn('title')?.getFilterValue() as string) ?? ""}
                    onChange={(e) => {table.getColumn('title')?.setFilterValue(e.target.value)}}
                    className="max-w-sm placeholder:text-white caret-amber-600"
                />
            </div>
            <div className="border rounded-md">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead
                                        key={header.id}
                                        className="text-white"
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => {
                                        if (cell.column.id) {
                                            switch (cell.column.id) {
                                                case "createdAt":
                                                    return (
                                                        <TableCell 
                                                            key={cell.id}
                                                            className="text-white"
                                                        >
                                                            <p>{formatItemsCrUpdCbDate(cell.getValue() as string, "createdAt")}</p>
                                                        </TableCell>
                                                    )
                                                case "updatedAt":
                                                    return (
                                                        <TableCell 
                                                            key={cell.id}
                                                            className="text-white"
                                                        >
                                                            <p>{formatItemsCrUpdCbDate(cell.getValue() as string, "updatedAt")}</p>
                                                        </TableCell>                                                        
                                                    )

                                                case "completeBy":
                                                    const progressCell = cell.row.getAllCells().filter(cell => {
                                                        const header = cell.column.columnDef.header

                                                        if (header) {
                                                            return header.toString().includes("Progress")
                                                        }
                                                    })[0]

                                                    return (
                                                        <TableCell
                                                            key={cell.id}
                                                            className="text-white"
                                                        >
                                                            <p>{progressCell.getValue() as number === 100 
                                                                    ? "\u2714" 
                                                                    : formatItemsCrUpdCbDate(cell.getValue() as string, "completeBy")}</p>
                                                        </TableCell>
                                                    )
                                                case "progress":
                                                    return (
                                                        <TableCell 
                                                            key={cell.id}
                                                            className="min-w-[50%] w-full"
                                                        >
                                                            <Progress classNameIndicator="bg-amber-400" value={cell.getValue() as number} />
                                                        </TableCell>
                                                    )
                                            }
                                        }

                                        return (
                                            <TableCell 
                                                key={cell.id}
                                                className="text-white"
                                            >
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
                            ))
                        ) : (
                            <>
                                {notfound}
                            </>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center py-4 space-x-2 justify-evenly">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    <span className="sr-only">Go to Previous Page</span>
                    <ArrowLeft className="size-4" />
                    Previous
                </Button>
                {(table.getIsSomeRowsSelected() || table.getIsAllPageRowsSelected()) ? (
                    <Button
                        variant="outline"
                        size="sm"
                        onDoubleClick={() => executeSelectedRowDeletion(table.getIsAllRowsSelected())}
                        disabled={!table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()}
                    >
                        <span className="sr-only">
                            {table.getIsSomeRowsSelected()
                                ? "Delete Selected Rows"
                                : "Delete All Rows"
                            }
                        </span>
                        <Trash2 className="size-4" />
                        {table.getIsSomeRowsSelected()
                            ? "Delete Selected Rows"
                            : "Delete All Rows"
                        }
                    </Button>
                ) : null}
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    <span className="sr-only">Go to Next Page</span>
                    <ArrowRight className="size-4" />
                    Next
                </Button>
            </div>
        </div>
    );
}
