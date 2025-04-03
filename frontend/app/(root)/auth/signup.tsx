"use client";

import { useState } from "react"
import { useRouter } from "next/navigation"
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
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"


const formSchema = z.object({
    firstName: z.string().nonempty("First name must not be empty"),
    lastName: z.string().nonempty("Last name must not be empty"),
    email: z.string()
            .nonempty("Email must not be empty")
            .min(2, "Email must be at least 2 characters")
            .max(50, "Email must be at most 50 characters"),
    password: z.string()
                .nonempty("Password must not be empty")
                .min(5, "Password must be at 5 characters")
                .max(95, "Password must be at most 95 characters"),
    confirmPwd: z.string()
                    .nonempty("Confirm Password must not be empty"),
    phone: z.string()
            .max(15, "Phone number must be 15 characters or less")
            .optional(),
    weight: z.number({ coerce: true })
                .nonnegative("weight cannot be negative"),
    unitPref: z.string()
}).refine((data) => data.password === data.confirmPwd, {
    message: "Passwords must match",
        path: ["confirmPwd"]
});

interface FormErr {
    message: string[] | string;
    error: string;
    statusCode: number;
}

export default function SignUpForm() {
    const [page, setPage] = useState(1);
    const [masterErrors, setMasterErrors] = useState<string[] | null>(null);
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPwd: "",
            phone: "",
            weight: 0,
            unitPref: "lbs"
        }
    });


    const onPage1Next = async () => {
        const fn_valid = await form.trigger("firstName");
        const ln_valid = await form.trigger("lastName");

        if (fn_valid && ln_valid) setPage((next) => next + 1);
    };

    const onPage2Next = async () => {
        const email_valid = await form.trigger("email");
        const pwd_valid = await form.trigger("password");
        const confirmPwd_valid = await form.trigger("confirmPwd");

        if (email_valid && pwd_valid && confirmPwd_valid) setPage((next) => next + 1);
    }

    const onBack = () => {
        setPage((prev) => prev - 1);
    }

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        if (values.phone === "") delete values.phone;

        axios.post("/api/auth/signup", values)
        .then((res: AxiosResponse<{"access_token": string}>) => {
            localStorage.setItem("t", res.data.access_token);
            router.push("/dashboard");
        })
        .catch((err: AxiosError<FormErr>) => {
            let res = err.response?.data!;

            console.log(err);

            if (res.statusCode === 403) { // user exists error in this case
                setMasterErrors([res.message as string]);
            } else {
                setMasterErrors(res.message as string[]);
            }
        });
    }

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Sign Up</CardTitle>
                    <CardDescription>Create your account with PowerPulse Fitness</CardDescription>
                    <div className={`${masterErrors ? 'block' : 'hidden'} py-3 bg-red-300/40 rounded-md text-destructive text-sm w-full`}>
                        <ul className="list-decimal list-inside space-y-px">
                            {masterErrors?.map((err, i) => (
                                <li key={i}>{err}</li>
                            ))}
                        </ul>
                    </div>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div
                                id="pg-1"
                                className={`${page === 1 ? 'block' : 'hidden'} space-y-8`}
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
                                    className="cursor-pointer w-full mt-4" 
                                    variant="secondary"
                                >
                                    Next
                                </Button>
                            </div>
                            <div
                                id="pg-2"
                                className={`${page === 2 ? 'block' : 'hidden'} space-y-8`}
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
                                <Button type="button" onClick={onPage2Next} variant="secondary" className="cursor-pointer w-full">Next</Button>
                                <Button type="button" onClick={onBack} variant="outline" className="cursor-pointer w-1/2">Back</Button>
                            </div>
                            <div
                                id="pg-3"
                                className={`${page === 3 ? 'block' : 'hidden'} space-y-8`}
                            >
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter phone number..." {...field} />
                                            </FormControl>
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
                                                <div className="w-full flex flex-row content-center">
                                                    <div>
                                                        <Input type="number" placeholder="Enter your weight..."  {...field}  />
                                                    </div>
                                                    <div>
                                                        <FormField
                                                            control={form.control}
                                                            name="unitPref"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormControl>
                                                                        <Select>
                                                                            <SelectTrigger className="w-auto">
                                                                                <SelectValue placeholder="Select preferred unit" />
                                                                            </SelectTrigger>
                                                                            <SelectContent {...field}>
                                                                                <SelectItem value="lbs">lbs</SelectItem>
                                                                                <SelectItem value="kgs">kgs</SelectItem>
                                                                            </SelectContent>
                                                                        </Select>
                                                                    </FormControl>
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </div>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="py-px flex flex-col items-start">
                                    <div>
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="conf-terms" required />
                                            <Label
                                                htmlFor="terms"
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Accept terms and conditions
                                            </Label>
                                        </div>
                                    </div>
                                </div>
                                <Button type="submit" className="cursor-pointer w-full">Sign Up</Button>
                                <Button type="button" onClick={onBack} variant="outline" className="cursor-pointer w-1/2">Back</Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </>
    );
}