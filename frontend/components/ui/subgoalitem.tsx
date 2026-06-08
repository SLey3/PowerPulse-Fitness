"use client"

import formSchema from "@/lib/schemas/goal"
import React from "react"
import type { Control, FieldPath } from "react-hook-form"
import type { Matcher } from "react-day-picker"
import { Clock2Icon, Trash2Icon, CalendarIcon } from "lucide-react"
import { z } from "zod"
import dayjs from "dayjs"
import localizedFormat from "dayjs/plugin/localizedFormat"

dayjs.extend(localizedFormat)

import { type Goal } from "@/lib/schemas/goal"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Switch } from "@/components/ui/switch"

import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"

import {
    InputGroup,
    InputGroupInput,
    InputGroupAddon,
    InputGroupButton,
} from "@/components/ui/input-group"

import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectGroup,
    SelectItem,
} from "@/components/ui/select"

import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
    FormDescription,
} from "@/components/ui/form"

interface SubGoalItemProps {
    control: Control<Goal, any>
    index: number
    onRemove: () => void
    tgGoalSwitch: (tg: FP[], setTg: (value: React.SetStateAction<boolean>) => void, value: boolean) => void
    parentCompleteBy: Date | undefined
    tz: string | undefined
}


type FP = FieldPath<z.infer<typeof formSchema>>

export function SubGoalItem({
    control,
    index,
    onRemove,
    tgGoalSwitch,
    parentCompleteBy,
    tz,
}: SubGoalItemProps) {
    const completeByTimeRef = React.useRef<HTMLInputElement | null>(null)
    const [showCalendar, setShowCalendar] = React.useState(false)
    const [completeByTime, setCompleteByTime] = React.useState<string | undefined>(undefined)
    const [enableWeightLoss, setEnableWeightLoss] = React.useState(false)
    const [enableCalorieBurn, setEnableCalorieBurn] = React.useState(false)
    const [enableDistance, setEnableDistance] = React.useState(false)

    const calendarDisabledMatcher: Matcher = {
        before: dayjs().add(1, "day").toDate(),
        ...(parentCompleteBy
            ? { after: dayjs(parentCompleteBy).endOf("day").toDate() }
            : {}),
    }

    // form path template helper
    const p = (key: keyof Goal) => `subgoals.${index}.${key}` as any
    
    // Factory for calendar onChange — takes field.onChange so there are no
    // side effects inside the render prop.
    function makeCalendarChangeHandler(fieldOnChange: (val: Date) => void) {
        return (date: Date | undefined) => {
            if (!date) return
            let dt = dayjs(date)
            if (completeByTime) {
                const [h, m, s] = completeByTime.split(":").map(Number)
                dt = dt.set("hour", h).set("minute", m).set("second", s)
            }
            fieldOnChange(dt.toDate())
            setShowCalendar(false)
        }
    }

    function makeTimeChangeHandler(
        currentValue: Date | undefined,
        fieldOnChange: (val: Date) => void,
    ) {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            if (!currentValue) return
            const [h, m, s] = e.target.value.split(":").map(Number)
            const adjusted = dayjs(currentValue)
                .set("hour", h).set("minute", m).set("second", s)
                .toDate()
            fieldOnChange(adjusted)
            setCompleteByTime(e.target.value)
        }
    }

    function makeEndOfDayHandler(
        currentValue: Date | undefined,
        fieldOnChange: (val: Date) => void,
    ) {
        return () => {
            if (!currentValue) return
            const adjusted = dayjs(currentValue)
                .set("hour", 23).set("minute", 59).set("second", 59)
                .toDate()
            fieldOnChange(adjusted)
            setCompleteByTime("23:59:59")
            if (completeByTimeRef.current) {
                completeByTimeRef.current.value = "23:59:59"
            }
        }
    }

    return (
        <div className="overflow-hidden bg-white border border-gray-200 rounded-lg">
            {/* Row header */}
            <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-gray-50">
                <span className="text-sm font-semibold text-gray-700">
                    Subgoal {index + 1}
                </span>
                <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={onRemove}
                    className="text-red-500 h-7 w-7 hover:text-red-700 hover:bg-red-50"
                    aria-label={`Remove subgoal ${index + 1}`}
                >
                    <Trash2Icon className="size-4" />
                </Button>
            </div>

            <div className="p-4 space-y-5">
                {/* Title */}
                <FormField
                    control={control}
                    name={p("title")}
                    render={({ field, fieldState }) => (
                        <FormItem data-invalid={fieldState.invalid}>
                            <FormLabel className="font-medium text-gray-700">Title</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Enter Subgoal Title..."
                                    aria-invalid={fieldState.invalid}
                                    className="text-gray-900 bg-white placeholder:text-gray-400"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Description */}
                <FormField
                    control={control}
                    name={p("description")}
                    render={({ field, fieldState }) => (
                        <FormItem data-invalid={fieldState.invalid}>
                            <FormLabel className="font-medium text-gray-700">Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    {...field}
                                    placeholder="Enter Description..."
                                    rows={3}
                                    aria-invalid={fieldState.invalid}
                                    className="text-gray-900 bg-white resize-none placeholder:text-gray-400"
                                />
                            </FormControl>
                            <FormDescription className="text-gray-500">
                                Enter goals or a description here.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Complete By */}
                <FormField
                    control={control}
                    name={p("completeBy")}
                    render={({ field, fieldState }) => (
                        <FormItem data-invalid={fieldState.invalid}>
                            <FormLabel className="font-medium text-gray-700">Complete By</FormLabel>
                            <FormControl>
                                {!showCalendar ? (
                                    <div className="flex items-center gap-x-3">
                                        <Input
                                            value={field.value ? dayjs(field.value).format("LLL") : ""}
                                            readOnly
                                            placeholder="No date selected"
                                            className="text-gray-900 bg-white placeholder:text-gray-400"
                                        />
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => setShowCalendar(true)}
                                            className="text-gray-700 border-gray-300 shrink-0"
                                        >
                                            <CalendarIcon className="size-4 mr-1.5" />
                                            Set Date
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="flex flex-row gap-x-3">
                                        <Card className="mx-auto border-gray-200 w-fit shadow-sm">
                                            <CardContent className="p-0">
                                                <Calendar
                                                    className="p-3 rounded-t-lg"
                                                    mode="single"
                                                    captionLayout="dropdown"
                                                    timeZone={tz}
                                                    selected={field.value}
                                                    onSelect={makeCalendarChangeHandler(field.onChange)}
                                                    disabled={calendarDisabledMatcher}
                                                    showWeekNumber
                                                />
                                            </CardContent>
                                            <CardFooter className="px-3 py-2 border-t border-gray-200 bg-gray-50">
                                                <div className="flex flex-col w-full gap-y-1">
                                                    <span className="text-xs font-medium text-gray-600">
                                                        Complete By Time
                                                    </span>
                                                    <InputGroup>
                                                        <InputGroupInput
                                                            ref={completeByTimeRef}
                                                            type="time"
                                                            onChange={makeTimeChangeHandler(field.value, field.onChange)}
                                                            step={1}
                                                            defaultValue={completeByTime}
                                                            className="bg-white text-gray-900 appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                                                            aria-label="Complete By Set Time"
                                                        />
                                                        <InputGroupAddon>
                                                            <Clock2Icon className="text-gray-400 size-4" />
                                                        </InputGroupAddon>
                                                        <InputGroupButton
                                                            onClick={makeEndOfDayHandler(field.value, field.onChange)}
                                                            disabled={completeByTimeRef.current?.value === "23:59:59"}
                                                            className="text-gray-700"
                                                        >
                                                            End of Day
                                                        </InputGroupButton>
                                                    </InputGroup>
                                                </div>
                                            </CardFooter>
                                        </Card>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => setShowCalendar(false)}
                                            className="self-start text-gray-700 border-gray-300 shrink-0"
                                        >
                                            Close
                                        </Button>
                                    </div>
                                )}
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Status */}
                <FormField
                    control={control}
                    name={p("status")}
                    render={({ field, fieldState }) => (
                        <FormItem data-invalid={fieldState.invalid}>
                            <FormLabel className="font-medium text-gray-700">Status</FormLabel>
                            <FormControl>
                                <Select
                                    name={field.name}
                                    value={field.value}
                                    onValueChange={field.onChange}
                                >
                                    <SelectTrigger
                                        className="text-gray-900 bg-white border-gray-300"
                                        aria-invalid={fieldState.invalid}
                                    >
                                        <SelectValue placeholder="Select Status..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="NOT_STARTED">Not Started</SelectItem>
                                            <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Trackable Goals divider */}
                <div className="pt-1">
                    <div className="flex items-center mb-4 gap-x-3">
                        <span className="text-xs font-semibold tracking-wider text-gray-500 uppercase whitespace-nowrap">
                            Trackable Goals
                        </span>
                        <div className="flex-1 border-t border-gray-200" />
                    </div>

                    <div className="space-y-5">
                        {/* Weight Loss */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-x-3">
                                <Switch
                                    id={`subgoal-${index}-weightLoss-enable`}
                                    checked={enableWeightLoss}
                                    onCheckedChange={() => tgGoalSwitch(p("weightLoss"), setEnableWeightLoss, !enableWeightLoss)}
                                />
                                <label
                                    htmlFor={`subgoal-${index}-weightLoss-enable`}
                                    className="text-sm font-medium text-gray-700 cursor-pointer select-none"
                                >
                                    Weight Loss
                                </label>
                            </div>
                            {enableWeightLoss && (
                                <FormField
                                    control={control}
                                    name={p("weightLoss")}
                                    render={({ field, fieldState }) => (
                                        <FormItem data-invalid={fieldState.invalid}>
                                            <div className="flex gap-x-3 pl-9">
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="Enter target weight..."
                                                        aria-invalid={fieldState.invalid}
                                                        className="text-gray-900 bg-white placeholder:text-gray-400"
                                                    />
                                                </FormControl>
                                                <FormField
                                                    control={control}
                                                    name={p("weightLossUnit")}
                                                    render={({ field }) => (
                                                        <FormItem className="shrink-0">
                                                            <FormControl>
                                                                <Select
                                                                    name={field.name}
                                                                    value={field.value}
                                                                    onValueChange={field.onChange}
                                                                >
                                                                    <SelectTrigger className="w-24 text-gray-900 bg-white border-gray-300">
                                                                        <SelectValue placeholder="Unit" />
                                                                    </SelectTrigger>
                                                                    <SelectContent>
                                                                        <SelectGroup>
                                                                            <SelectItem value="LBS">lbs</SelectItem>
                                                                            <SelectItem value="KGS">kgs</SelectItem>
                                                                        </SelectGroup>
                                                                    </SelectContent>
                                                                </Select>
                                                            </FormControl>
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                            <FormMessage className="pl-9" />
                                        </FormItem>
                                    )}
                                />
                            )}
                        </div>

                        {/* Calorie Burn */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-x-3">
                                <Switch
                                    id={`subgoal-${index}-calorieBurn-enable`}
                                    checked={enableCalorieBurn}
                                    onCheckedChange={() => setEnableCalorieBurn((v) => !v)}
                                />
                                <label
                                    htmlFor={`subgoal-${index}-calorieBurn-enable`}
                                    className="text-sm font-medium text-gray-700 cursor-pointer select-none"
                                >
                                    Calorie Burn
                                </label>
                            </div>
                            {enableCalorieBurn && (
                                <FormField
                                    control={control}
                                    name={p("calorieBurn")}
                                    render={({ field, fieldState }) => (
                                        <FormItem data-invalid={fieldState.invalid}>
                                            <div className="flex gap-x-3 pl-9">
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="Enter target..."
                                                        aria-invalid={fieldState.invalid}
                                                        className="text-gray-900 bg-white placeholder:text-gray-400"
                                                    />
                                                </FormControl>
                                                <FormField
                                                    control={control}
                                                    name={p("calorieBurnUnit")}
                                                    render={({ field }) => (
                                                        <FormItem className="shrink-0">
                                                            <FormControl>
                                                                <Select
                                                                    name={field.name}
                                                                    value={field.value}
                                                                    onValueChange={field.onChange}
                                                                >
                                                                    <SelectTrigger className="w-24 text-gray-900 bg-white border-gray-300">
                                                                        <SelectValue placeholder="Unit" />
                                                                    </SelectTrigger>
                                                                    <SelectContent>
                                                                        <SelectGroup>
                                                                            <SelectItem value="LBS">lbs</SelectItem>
                                                                            <SelectItem value="KGS">kgs</SelectItem>
                                                                        </SelectGroup>
                                                                    </SelectContent>
                                                                </Select>
                                                            </FormControl>
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                            <FormMessage className="pl-9" />
                                        </FormItem>
                                    )}
                                />
                            )}
                        </div>

                        {/* Distance */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-x-3">
                                <Switch
                                    id={`subgoal-${index}-distance-enable`}
                                    checked={enableDistance}
                                    onCheckedChange={() => setEnableDistance((v) => !v)}
                                />
                                <label
                                    htmlFor={`subgoal-${index}-distance-enable`}
                                    className="text-sm font-medium text-gray-700 cursor-pointer select-none"
                                >
                                    Distance
                                </label>
                            </div>
                            {enableDistance && (
                                <FormField
                                    control={control}
                                    name={p("distance")}
                                    render={({ field, fieldState }) => (
                                        <FormItem data-invalid={fieldState.invalid}>
                                            <div className="flex gap-x-3 pl-9">
                                                <FormControl>
                                                    <Input
                                                        {...field}
                                                        placeholder="Enter target..."
                                                        aria-invalid={fieldState.invalid}
                                                        className="text-gray-900 bg-white placeholder:text-gray-400"
                                                    />
                                                </FormControl>
                                                <FormField
                                                    control={control}
                                                    name={p("distanceUnit")}
                                                    render={({ field }) => (
                                                        <FormItem className="shrink-0">
                                                            <FormControl>
                                                                <Select
                                                                    name={field.name}
                                                                    value={field.value}
                                                                    onValueChange={field.onChange}
                                                                >
                                                                    <SelectTrigger className="w-32 text-gray-900 bg-white border-gray-300">
                                                                        <SelectValue placeholder="Unit" />
                                                                    </SelectTrigger>
                                                                    <SelectContent>
                                                                        <SelectGroup>
                                                                            <SelectItem value="MI">Mi (Miles)</SelectItem>
                                                                            <SelectItem value="KM">Km (Kilometers)</SelectItem>
                                                                        </SelectGroup>
                                                                    </SelectContent>
                                                                </Select>
                                                            </FormControl>
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                            <FormMessage className="pl-9" />
                                        </FormItem>
                                    )}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}