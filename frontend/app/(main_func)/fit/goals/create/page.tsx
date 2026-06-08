'use client'

import formSchema from "@/lib/schemas/goal"
import { gl_create_request } from "@/lib/actions/form/goal-create"
import { createSonnerCookie } from "@/lib/utils"

import React from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useFieldArray, type FieldPath } from 'react-hook-form'
import type { Matcher } from "react-day-picker"
import { z } from 'zod'
import { MoveLeft, Clock2Icon, PlusIcon } from "lucide-react"
import { toast } from "sonner"
import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"

dayjs.extend(utc)
dayjs.extend(timezone)

import { 
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"

import { 
    Card,
    CardContent,
    CardFooter 
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import { 
    Tooltip,
    TooltipTrigger,
    TooltipContent
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { 
    Select,
    SelectTrigger,
    SelectValue,
    SelectItem,
    SelectGroup, 
    SelectContent
} from "@/components/ui/select"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { SubGoalItem } from "@/components/ui/subgoalitem"


type FP = FieldPath<z.infer<typeof formSchema>>

export default function GoalCreatePage() {
    let completeByTimeRef = React.useRef<HTMLInputElement | null>(null)
    const [tz, setTz] = React.useState<string | undefined>(undefined)
    const [completeByTime, setCompleteByTime] = React.useState<string | undefined>(undefined)
    const [enableWeightLoss, setEnableWeightLoss] = React.useState<boolean>(false)
    const [enableCalorieBurn, setEnableCalorieBurn] = React.useState<boolean>(false)
    const [enableDistance, setEnableDistance] = React.useState<boolean>(false)
    const [showCalendar, setShowCalendar] = React.useState<boolean>(false)
    const [subgoalDialogOpen, setSubgoalDialogOpen] = React.useState<boolean>(false)
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            completeBy: undefined,
            status: "NOT_STARTED",
        }
    })

    const { fields, append: subGoalAppendRow, remove: subGoalRemoveRow } = useFieldArray({
        control: form.control,
        name: "subgoals",
    })

    const completeByDate = form.watch("completeBy")

    const completeByCalendarDisabledMatcher: Matcher = {
        before: dayjs().add(1, "day").toDate()
    }

    async function onSubgoalAdd() {
        // ensure primary goal is written and validated before subgoals are added
        const mainFields = [
            "title", 
            "description", 
            "completeBy", 
            "status"
        ] as const
        let shouldContinue = false // always assume that a validation will fail when initializing this variable

        // check if any optional field is enabled and validate if sooner
        if (enableCalorieBurn) {
            shouldContinue = form.getValues("calorieBurn") !== undefined && form.getValues("calorieBurnUnit") !== undefined // if enabled, fields cannot be blank

            if (!shouldContinue) {
                form.setError("calorieBurn", {
                    type: "required",
                    message: "Input is required if field is enabled"
                })
            } else {
                shouldContinue = await form.trigger(["calorieBurn", "calorieBurnUnit"])
            }
        }

        if (enableWeightLoss) {
            shouldContinue = form.getValues("weightLoss") !== undefined && form.getValues("weightLossUnit") !== undefined

            if (!shouldContinue) {
                form.setError("weightLoss", {
                    type: "required",
                    message: "Input is required if field is enabled"
                })
            } else {
                shouldContinue = await form.trigger(["weightLoss", "weightLossUnit"])
            }
        }

        if (enableDistance) {
            shouldContinue = form.getValues("distance") !== undefined && form.getValues("distanceUnit") !== undefined

            if (!shouldContinue) {
                form.setError("distance", {
                    type: "required",
                    message: "Input is Required if field is enabled"
                })
            } else {
                shouldContinue = await form.trigger(["distance", "distanceUnit"])
            }
        }

        // validate the rest of the main goal
        shouldContinue = await form.trigger(mainFields)

        if (!shouldContinue) {
            toast.error("Please fill out or correct errors on your goal before adding subgoals")

            return
        }

        // validate subgoals to ensure user can't continue creating another subgoal if one has an issue
        const subgoalsValid = await form.trigger("subgoals")

        if (!subgoalsValid) {
            toast.error("1 or more subgoals has encountered an issue. Please fix them before adding another one.")

            return
        }


        subGoalAppendRow({
            title: "",
            description: "",
            completeBy: undefined as any,
            status: "NOT_STARTED",
        })
    }

    function onSubgoalRemove(index: number) {
        subGoalRemoveRow(index)
    }

    async function onsubGoalManagerDone(e: React.MouseEvent) {
        e.preventDefault()

        if (fields.length > 0) {
            const subgoalsValid = await form.trigger("subgoals")

            if (!subgoalsValid) {
                toast.error("1 or more subgoals has encountered an issue. Please fix them before exiting.")

                return
            }
        }

        setSubgoalDialogOpen(false)
    }

    function onSubgoalManagerDeleteAll() {
        subGoalRemoveRow() // with no arguments this will delete all from the subgoal array

        toast.info("All subgoals has been deleted")
    }

    async function onSubmit(values: z.infer<typeof formSchema>) {
        const res = await gl_create_request(values)

        if (res) {
            console.log(res)
            if ("created" in res) {
                createSonnerCookie({
                    type: "success",
                    msg: res.created
                })

                router.push(".")
            }

            if ("statusCode" in res) {
                if (res.statusCode >= 400 && typeof res.message === "string") {
                    toast.error(res.message)
                }

                if (res.statusCode === 400 && Array.isArray(res.message)) { // error is a validation err
                    res.message.forEach(err => {
                        form.setError(err.field as FP, {
                            type: "validate",
                            message: err.error
                        })
                    })
                }
            }
        }
    }

    function onCalendarChange(...event: any[]) {
        let dt = dayjs(event[0])

        if (dt.format("hh:mm:ss") !== completeByTime) {
            if (completeByTime) {
                const [h,m,s] = completeByTime.split(":").map(val => parseInt(val))
                dt = dt.set("hours", h).set("minutes", m).set("seconds", s)
            }
        }

        form.setValue("completeBy", dt.toDate())
    }

    function onCompleteByTimeChange(e: React.ChangeEvent<HTMLInputElement>) {
        const dt = dayjs(form.getValues("completeBy"))
        const time = e.target.value.split(":").map(val => parseInt(val))
        const adjustedDt = dt.set("hours", time[0]).set("minutes", time[1]).set("seconds", time[2])
        form.setValue("completeBy", adjustedDt.toDate())
        setCompleteByTime(adjustedDt.format("hh:mm:ss"))
    }

    function onEndofDayClick() {
        const dt = dayjs(form.getValues("completeBy"))
        const adjustedDt = dt.set("hour", 23).set("minute", 59).set("second", 59)

        form.setValue("completeBy", adjustedDt.toDate())
        setCompleteByTime("23:59:59")

        if (completeByTimeRef.current) {
            completeByTimeRef.current.value = "23:59:59"
        }
    }

    function trackableGoalsSwitch(
        tg: FP[], 
        setTg: (value: React.SetStateAction<boolean>) => void, 
        value: boolean
    ) {
        if (!value) {
            // switch is disabled
            form.setValue(tg[0], undefined)
            form.setValue(tg[1], undefined)
        }

        setTg(value)
    }

    React.useEffect(() => {
        const localDt = dayjs()
        const tz = dayjs.tz.guess()
        const dt = localDt.tz(tz).toDate()

        setTz(tz)
        form.setValue("completeBy", dt, { shouldValidate: false })
        setCompleteByTime(dayjs(dt).format("hh:mm:ss"))
    }, [])

    return (
        <>
            <div className="px-4 py-8 space-y-8">
                <Link href=".">
                    <Button variant="link">
                        <MoveLeft className="size-4" /> Back to Goals
                    </Button>
                </Link>
                <h1 className="text-3xl font-bold text-white">Create Fitness Goal</h1>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field, fieldState }) => (
                                <FormItem data-invalid={fieldState.invalid}>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            id={field.name}
                                            type="text"
                                            placeholder="Enter Goal Title..."
                                            aria-invalid={fieldState.invalid}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field, fieldState }) => (
                                <FormItem data-invalid={fieldState.invalid}>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            {...field}
                                            id={field.name}
                                            placeholder="Enter Description..."
                                            rows={4}
                                            aria-invalid={fieldState.invalid}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        Enter Goals or a description here.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="completeBy"
                            render={({ field, fieldState }) => (
                                <FormItem data-invalid={fieldState.invalid}>
                                    <FormLabel>Complete By</FormLabel>
                                    <FormControl>
                                        {!showCalendar ? (
                                            <div className="flex flex-row gap-x-5">
                                                <div>
                                                    <Input
                                                        id="completeBy-date-display"
                                                        value={field.value ? dayjs(field.value).format("LLL") : ""}
                                                        disabled
                                                    />
                                                </div>
                                                <div>
                                                    <Button
                                                        type="button"
                                                        variant="outline"
                                                        onClick={() => setShowCalendar(true)}
                                                    >
                                                        Set Date
                                                    </Button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex flex-row gap-x-5">
                                                <div>
                                                    <Card className="mx-auto w-fit">
                                                        <CardContent>
                                                            <Calendar
                                                                id="completeBy-date"
                                                                className="p-0 border-4 rounded-lg"
                                                                mode="single"
                                                                captionLayout="dropdown"
                                                                timeZone={tz}
                                                                selected={field.value}
                                                                onSelect={onCalendarChange}
                                                                disabled={completeByCalendarDisabledMatcher}
                                                                showWeekNumber
                                                            />
                                                        </CardContent>
                                                        <CardFooter className="border-t bg-card">
                                                            <div className="flex flex-col gap-y-1">
                                                                <Label htmlFor="completeBy-date-time">
                                                                    Complete By Time
                                                                </Label>
                                                                <InputGroup>
                                                                    <InputGroupInput
                                                                        id="completeBy-date-time"
                                                                        ref={completeByTimeRef}
                                                                        type="time"
                                                                        onChange={onCompleteByTimeChange}
                                                                        step={1}
                                                                        defaultValue={completeByTime}
                                                                        className="appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                                                                        aria-label="Complete By Set Time"
                                                                    />
                                                                    <InputGroupAddon>
                                                                        <Clock2Icon className="text-muted-foreground" />
                                                                    </InputGroupAddon>
                                                                    <InputGroupButton
                                                                        onClick={() => onEndofDayClick()}
                                                                        disabled={completeByTimeRef.current?.value === "23:59:59"}
                                                                    >
                                                                        End of Day
                                                                    </InputGroupButton>
                                                                </InputGroup>
                                                            </div>
                                                        </CardFooter>
                                                    </Card>
                                                </div>
                                                <div>
                                                    <Button
                                                        type="button"
                                                        variant="default"
                                                        onClick={() => setShowCalendar(false)}
                                                        className="h-full"
                                                    >
                                                        Close
                                                    </Button>
                                                </div>
                                            </div>
                                        )}
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="status"
                            render={({ field, fieldState }) => (
                                <FormItem data-invalid={fieldState.invalid}>
                                    <FormLabel>Status</FormLabel>
                                    <FormControl>
                                        <Select
                                            name={field.name}
                                            value={field.value}
                                            onValueChange={field.onChange}
                                        >
                                            <SelectTrigger
                                                id={field.name}
                                                className="min-w-[120px]"
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
                        <div id="trackable-goals" className="grid grid-rows-3 md:grid-cols-2 gap-y-20 gap-x-52 md:[&>*:nth-child(even)]:indent-10">
                            <div className="md:col-span-2">
                                <h2 className="text-4xl font-bold text-white">Trackable Goals</h2>
                                <Separator className="absolute w-full mt-5" />
                            </div>
                            <div>
                                <div className="flex flex-col gap-y-5">
                                    <div className="flex flex-row gap-x-5">
                                        <Label htmlFor="weightLoss-enable">Weight Loss</Label>
                                        <Switch
                                            id="weightLoss-enable"
                                            checked={enableWeightLoss}
                                            onCheckedChange={() => trackableGoalsSwitch(["weightLoss", "weightLossUnit"], setEnableWeightLoss, !enableWeightLoss)}
                                        />
                                    </div>
                                    {enableWeightLoss && (
                                        <div>
                                            <FormField
                                                control={form.control}
                                                name="weightLoss"
                                                render={({ field, fieldState }) => (
                                                    <FormItem data-invalid={fieldState.invalid}>
                                                        <div className="flex flex-row gap-x-5">
                                                            <FormControl>
                                                                <Input
                                                                    {...field}
                                                                    id={field.name}
                                                                    value={field.value as number | undefined}
                                                                    placeholder="Enter target weight..."
                                                                    aria-invalid={fieldState.invalid}
                                                                />
                                                            </FormControl>
                                                            <FormField
                                                                control={form.control}
                                                                name="weightLossUnit"
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormControl>
                                                                            <Select
                                                                                name={field.name}
                                                                                value={field.value}
                                                                                onValueChange={field.onChange}
                                                                            >
                                                                                <SelectTrigger id={field.name} className="min-w-[120px]">
                                                                                    <SelectValue placeholder="Select unit..." />
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
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-y-5">
                                    <div className="flex flex-row gap-x-5">
                                        <Label htmlFor="calorieBurn-enable">Calorie Burn</Label>
                                        <Switch
                                            id="calorieBurn-enable"
                                            checked={enableCalorieBurn}
                                            onCheckedChange={() => trackableGoalsSwitch(["calorieBurn", "calorieBurnUnit"], setEnableCalorieBurn, !enableCalorieBurn)}
                                        />
                                    </div>
                                    {enableCalorieBurn && (
                                        <div>
                                            <FormField
                                                control={form.control}
                                                name="calorieBurn"
                                                render={({ field, fieldState }) => (
                                                    <FormItem data-invalid={fieldState.invalid}>
                                                        <div className="flex flex-row gap-x-5">
                                                            <FormControl>
                                                                <Input
                                                                    {...field}
                                                                    id={field.name}
                                                                    value={field.value as number | undefined}
                                                                    placeholder="Enter target..."
                                                                    aria-invalid={fieldState.invalid}
                                                                />
                                                            </FormControl>
                                                            <FormField
                                                                control={form.control}
                                                                name="calorieBurnUnit"
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormControl>
                                                                            <Select
                                                                                name={field.name}
                                                                                value={field.value}
                                                                                onValueChange={field.onChange}
                                                                            >
                                                                                <SelectTrigger id={field.name} className="min-w-[120px]">
                                                                                    <SelectValue placeholder="Select unit..." />
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
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-col gap-y-5">
                                    <div className="flex flex-row gap-x-5">
                                        <Label htmlFor="distance-enable">Distance</Label>
                                        <Switch
                                            id="distance-enable"
                                            checked={enableDistance}
                                            onCheckedChange={() => trackableGoalsSwitch(["distance", "distanceUnit"], setEnableDistance, !enableDistance)}
                                        />
                                    </div>
                                    {enableDistance && (
                                        <div>
                                            <FormField
                                                control={form.control}
                                                name="distance"
                                                render={({ field, fieldState }) => (
                                                    <FormItem data-invalid={fieldState.invalid}>
                                                        <div className="flex flex-row gap-x-5">
                                                            <FormControl>
                                                                <Input
                                                                    {...field}
                                                                    id={field.name}
                                                                    value={field.value as number | undefined}
                                                                    placeholder="Enter target..."
                                                                    aria-invalid={fieldState.invalid}
                                                                />
                                                            </FormControl>
                                                            <FormField
                                                                control={form.control}
                                                                name="distanceUnit"
                                                                render={({ field }) => (
                                                                    <FormItem>
                                                                        <FormControl>
                                                                            <Select
                                                                                name={field.name}
                                                                                value={field.value}
                                                                                onValueChange={field.onChange}
                                                                            >
                                                                                <SelectTrigger id={field.name} className="min-w-[120px]">
                                                                                    <SelectValue placeholder="Select unit..." />
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
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <Label className="text-base font-semibold">Subgoals</Label>
                                <Dialog open={subgoalDialogOpen} onOpenChange={setSubgoalDialogOpen}>
                                    <DialogTrigger asChild>
                                        <Button type="button" variant="outline">
                                            Manage Subgoals
                                            {fields.length > 0 && (
                                                <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">
                                                    {fields.length}
                                                </span>
                                            )}
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent
                                        onPointerDownOutside={(e) => e.preventDefault()}
                                        className="sm:max-w-lg max-h-[90vh] overflow-y-auto"
                                    >
                                        <DialogHeader>
                                            <DialogTitle>Subgoals</DialogTitle>
                                            <DialogDescription>
                                                Add subgoals that must be completed before the main goal deadline.
                                            </DialogDescription>
                                        </DialogHeader>

                                        <div className="space-y-4">
                                            {fields.length === 0 && (
                                                <p className="py-6 text-sm text-center text-muted-foreground">
                                                    No subgoals yet. Click below to add one.
                                                </p>
                                            )}

                                            {fields.map((field, index) => (
                                                <SubGoalItem
                                                    key={field.id}
                                                    control={form.control}
                                                    index={index}
                                                    onRemove={() => onSubgoalRemove(index)}
                                                    tgGoalSwitch={trackableGoalsSwitch}
                                                    parentCompleteBy={completeByDate}
                                                    tz={tz}
                                                />
                                            ))}
                                        </div>

                                        <DialogFooter className="flex-col gap-2 sm:flex-row">
                                            <Button
                                                type="button"
                                                variant="outline"
                                                onClick={onSubgoalAdd}
                                                className="w-full sm:w-auto text-slate-600"
                                            >
                                                <PlusIcon className="mr-1 size-4" />
                                                Add Subgoal
                                            </Button>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button
                                                        type="button"
                                                        variant="destructive"
                                                        onDoubleClick={() => onSubgoalManagerDeleteAll()}
                                                        className="w-full sm:w-auto"
                                                    >
                                                        Delete All Subgoals
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                        {fields.length > 0 ? (
                                                            <p>Double click to confirm Deletion</p>
                                                        ) : (
                                                            <p>No subgoals to delete</p>
                                                        )}
                                                </TooltipContent>
                                            </Tooltip>
                                            <DialogClose asChild>
                                                <Button type="button" onClick={e => onsubGoalManagerDone(e)} variant="secondary" className="w-full sm:w-auto">
                                                    Done
                                                </Button>
                                            </DialogClose>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>

                        <Button type="submit">Create Goal</Button>
                    </form>
                </Form>
            </div>
        </>
    )
}
