"use client"

import { useLoginRedirectMappings } from "@/hooks/use-login-redirects"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useForm } from "react-hook-form"
import Cookies from "js-cookie"
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
    FormMessage 
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
    email: z.string()
            .min(2, "Username must contain at least 2 characters")
            .max(50, "Username must contain at most 50 characters"),
    password: z.string()
                .min(5, "Password must contain at least 5 characters")
                .max(95, "Password must contain at most 95 characters")
})


interface FormErr {
    message: string[] | string
    error: string
    statusCode: number
}


export default function SignInForm() {
    const [masterError, setMasterError] = useState<null | string>(null)
    const [emailFormErr, setEmailFormErr] = useState<null | string | string[]>(null)
    const [pwdFormErr, setPwdFormErr] = useState<null | string | string[]>(null)
    const router = useRouter()
    const searchParams = useSearchParams()
    const redirectMappings = useLoginRedirectMappings()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const redirectOVR = searchParams.get("rdt") ? redirectMappings[searchParams.get("rdt") as keyof typeof redirectMappings] : undefined

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        axios.post("/api/auth/signin", values)
        .then((res: AxiosResponse<{access_token: string}>) => {
            Cookies.set('t', res.data.access_token, {
                expires: 10 * 86_400,
                sameSite: 'Strict'
            })
            router.push(redirectOVR ? redirectOVR : "/dashboard")
        })
        .catch((err: AxiosError<FormErr>) => {
            const message = err.response?.data.message

            if (typeof message === 'undefined') {
                console.error(err.response?.data)
                setMasterError("Something went wrong. Check Console.")
                return // in this case simply log the error response data, set the master error and just return
            }

            if (typeof message === 'string' && message.startsWith("Account")) {
                setMasterError(message)
                return
            }

            if (typeof message === 'string' && message.includes("password")) {
                setPwdFormErr(message)
                return
            }

            setEmailFormErr(message!) // then it is an email error and is safe to assume not undefined
        })
    }

    return (
        <>
            <Card id="sign-in">
                <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>Sign in to your Account</CardDescription>
                    <div className={`${masterError ? 'block' : 'hidden'} py-3 bg-red-300/40 rounded-md text-destructive text-sm w-full`}>
                        <p className="text-center">{masterError}</p>
                    </div>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="example@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage>
                                            {Array.isArray(emailFormErr) && typeof emailFormErr !== null ? (
                                                <ul className="space-y-8 list-decimal list-inside">
                                                    {emailFormErr.map((err, i) => (
                                                        <li key={i}>{err}</li>
                                                    ))}
                                                </ul>
                                            ) : emailFormErr}
                                        </FormMessage>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Enter password..." {...field} />
                                        </FormControl>
                                        <FormMessage>
                                            {Array.isArray(pwdFormErr) && typeof pwdFormErr !== null ? (
                                                    <ul className="space-y-8 list-decimal list-inside">
                                                        {pwdFormErr.map((err, i) => (
                                                            <li key={i}>{err}</li>
                                                        ))}
                                                    </ul>
                                                ) : pwdFormErr}
                                        </FormMessage>
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full cursor-pointer">Log In</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </>
    )
}