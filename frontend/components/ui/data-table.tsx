'use client'

import React from 'react'
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
import { ArrowRight, ArrowLeft } from 'lucide-react'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Checkbox } from './checkbox'


interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}


export function createColumns<T>(setActionsDropdown: ColumnDefTemplate<CellContext<T, unknown>>, columns: ColumnDef<T>[]): ColumnDef<T>[] {
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

            }
        ])
} 


export function DataTable<TData, TValue>({
    columns,
    data,
    notfound
}: DataTableProps<TData, TValue> & { notfound: React.ReactElement }) {
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

    return (
        <div className="absolute pr-10 size-full">
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
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell 
                                            key={cell.id}
                                            className="text-white"
                                        >
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
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
