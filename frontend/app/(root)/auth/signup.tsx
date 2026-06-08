"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios, { type AxiosResponse, type AxiosError} from 'axios'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { 
    Form, 
    FormField, 
    FormLabel, 
    FormItem, 
    FormControl, 
    FormDescription,
    FormMessage 
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
    Select, 
    SelectContent, 
    SelectItem, 
    SelectTrigger, 
    SelectValue 
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"


const baseSchema = z.object({
    firstName: z.string().nonempty("First name must not be empty"),
    lastName: z.string().nonempty("Last name must not be empty"),
    email: z.string().nonempty().email().min(2).max(50),
    password: z.string().nonempty().min(5).max(95),
    confirmPwd: z.string().nonempty(),
    phone: z.string().max(25).optional(),
    weight: z.number({ coerce: true }).nonnegative(),
    tos: z.boolean()
});

const formSchema = z.discriminatedUnion("unitPref", [
    baseSchema.extend({
        unitPref: z.literal("METRIC"),
        heightMetric: z.number({ coerce: true }).min(1.21).max(2.26),
        heightImperial: z.null(),
    }),
    baseSchema.extend({
        unitPref: z.literal("IMPERIAL"),
        heightMetric: z.null(),
        heightImperial: z.object({
            feet: z.number({ coerce: true }).min(4).max(7),
            inches: z.number({ coerce: true }).min(0).max(11),
        }),
    }),
]).refine(
    (data) => data.password === data.confirmPwd,
    { message: "Passwords must match", path: ["confirmPwd"] }
);

interface FormErr {
    message: string[] | string
    error: string
    statusCode: number
}

export default function SignUpForm() {
    const [page, setPage] = useState(1)
    const [masterErrors, setMasterErrors] = useState<string[] | null>(null)
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPwd: "",
            phone: undefined,
            unitPref: "IMPERIAL",
            weight: 0,
            heightImperial: {
                feet: 0,
                inches: 0
            },
            heightMetric: null
        }
    })

    const unitPref = form.watch("unitPref")


    const onPage1Next = async () => {
        const fn_valid = await form.trigger("firstName")
        const ln_valid = await form.trigger("lastName")

        if (fn_valid && ln_valid) setPage((next) => next + 1)
    }

    const onPage2Next = async () => {
        const email_valid = await form.trigger("email")
        const pwd_valid = await form.trigger("password")
        const confirmPwd_valid = await form.trigger("confirmPwd")

        if (email_valid && pwd_valid && confirmPwd_valid) setPage((next) => next + 1)
    }

    const onBack = () => {
        setPage((prev) => prev - 1)
    }

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        const {heightImperial, heightMetric, confirmPwd, tos, ...valuesPayload } = values

        const payload = {
            height: heightMetric ?? [heightImperial.feet, heightImperial.inches],
            ...valuesPayload
            
        }

        axios.post("/api/auth/signup", payload)
        .then((res: AxiosResponse<{"access_token": string}>) => {
            Cookies.set('t', res.data.access_token, {
                expires: 10 * 86_400,
                sameSite: 'Strict'
            })
            router.push("/dashboard")
        })
        .catch((err: AxiosError<FormErr>) => {
            let res = err.response?.data!

            console.log(err)

            if (res.statusCode === 403) { // user exists error in this case
                setMasterErrors([res.message as string])
            } else {
                setMasterErrors(res.message as string[])
            }
        })
    }

    return (
        <>
            <Card id="sign-up">
                <CardHeader>
                    <CardTitle>Sign Up</CardTitle>
                    <CardDescription>Create your account with PowerPulse Fitness</CardDescription>
                    <div className={`${masterErrors ? 'block' : 'hidden'} py-3 bg-red-300/40 rounded-md text-destructive text-sm w-full`}>
                        <ul className="list-decimal list-inside space-y-px">
                            {masterErrors?.map((err) => (
                                <li key={err}>{err}</li>
                            ))}
                        </ul>
                    </div>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            {page === 1 && (
                                <div
                                    id="pg-1"
                                    className="block space-y-8"
                                >
                                    <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>First Name <span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Last Name <span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button 
                                        type="button" 
                                        onClick={onPage1Next} 
                                        className="w-full mt-4 cursor-pointer" 
                                        variant="secondary"
                                    >
                                        Next
                                    </Button>
                                </div>
                            )}
                            {page === 2 && (
                                <div
                                    id="pg-2"
                                    className="block space-y-8"
                                >
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Input type="email" placeholder="example@example.com" {...field} />
                                                </FormControl>
                                                <FormDescription>
                                                    this will be your username
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Password <span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Input type="password" placeholder="Enter password..." {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="confirmPwd"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Confirm Password <span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Input type="password" placeholder="Enter password ..." {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="button" onClick={onPage2Next} variant="secondary" className="w-full cursor-pointer">Next</Button>
                                    <Button type="button" onClick={onBack} variant="outline" className="w-1/2 cursor-pointer text-muted-foreground">
                                        Back
                                    </Button>
                                </div>
                            )}
                            {page === 3 && (
                                <div
                                    id="pg-3"
                                    className="block space-y-8"
                                >
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Phone</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="+1 (111) 111-1111" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="unitPref"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Preferred Unit</FormLabel>
                                                <FormControl>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <SelectTrigger className="w-auto">
                                                            <SelectValue placeholder="Select preferred unit" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="IMPERIAL">Imperial</SelectItem>
                                                            <SelectItem value="METRIC">Metric</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </FormControl>
                                                <FormDescription>
                                                    Sets measurement units that will be used globally
                                                </FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="weight"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Weight <span className="text-red-500">*</span></FormLabel>
                                                <FormControl>
                                                    <Input type="number" placeholder="Enter your weight..."  {...field}  />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name={unitPref === "METRIC" ? "heightMetric" : "heightImperial"}
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Height <span className="text-red-500">*</span></FormLabel>
                                                {unitPref === "METRIC"
                                                    ? (
                                                        <>                                                        
                                                            <FormControl>
                                                                <Input 
                                                                    type="number" 
                                                                    placeholder="e.x. 1.67" 
                                                                    onChange={field.onChange} 
                                                                    value={field.value as number} 
                                                                    ref={field.ref}
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </>
                                                    ) : (
                                                        <div className="flex flex-row gap-x-2">
                                                            <div>
                                                                <FormField
                                                                    control={form.control}
                                                                    name="heightImperial.feet"
                                                                    render={({ field }) => (
                                                                        <FormItem>
                                                                            <div className="flex flex-row gap-x-2">
                                                                                <FormControl>
                                                                                    <Input
                                                                                        type="number"
                                                                                        placeholder="e.x. 5"
                                                                                        {...field}
                                                                                    />
                                                                                </FormControl>
                                                                                <FormLabel className="text-2xl">'</FormLabel>
                                                                            </div>
                                                                            <FormMessage />
                                                                        </FormItem>
                                                                    )}
                                                                />
                                                            </div>
                                                            <div>
                                                                <FormField
                                                                    control={form.control}
                                                                    name="heightImperial.inches"
                                                                    render={({ field }) => (
                                                                        <FormItem>
                                                                            <div className="flex flex-row">
                                                                                <FormControl>
                                                                                    <Input
                                                                                        type="number"
                                                                                        placeholder="e.x. 7"
                                                                                        {...field}
                                                                                    />
                                                                                </FormControl>
                                                                                <FormLabel className="text-2xl indent-2">"</FormLabel>
                                                                            </div>
                                                                            <FormMessage />
                                                                        </FormItem>
                                                                    )}
                                                                />
                                                            </div>
                                                        </div>
                                                    )}
                                            </FormItem>
                                        )}
                                    />
                                    <div className="flex flex-col items-start py-px">
                                        <div>
                                            <div className="flex items-center space-x-2">
                                                <FormField
                                                    control={form.control}
                                                    name="tos"
                                                    render={(({ field }) => (
                                                        <FormItem className="flex flex-row gap-x-2.5">
                                                            <FormControl>
                                                                <Checkbox
                                                                    checked={field.value}
                                                                    onCheckedChange={field.onChange}
                                                                    ref={field.ref}
                                                                />
                                                            </FormControl>
                                                            <FormLabel className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                                Accept terms and conditions
                                                            </FormLabel>
                                                        </FormItem>
                                                    ))}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <Button type="submit" className="w-full cursor-pointer">Sign Up</Button>
                                    <Button type="button" onClick={onBack} variant="outline" className="w-1/2 cursor-pointer text-muted-foreground">
                                        Back
                                    </Button>
                                </div>
                            )}
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </>
    )
}