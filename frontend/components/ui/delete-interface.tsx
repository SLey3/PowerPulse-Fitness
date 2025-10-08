'use client'

import { useRouter } from "next/navigation"
import  { useState, type ReactNode } from "react"
import Cookies from "js-cookie"
import axios, { type AxiosResponse } from "axios"
import { toast } from "sonner"

import { createSonnerCookie } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose
} from "@/components/ui/dialog"
import { Spinner } from "./spinner"


export function DeleteInterface({ 
    api_url_path,
    item_id,
    triggerBody,
    create_cookie
 }: 
 {
    api_url_path: string,
    item_id: number,
    triggerBody: ReactNode,
    create_cookie?: boolean
}) {
    const [isProcessing, setIsProcessing] = useState(false)
    const { refresh } = useRouter()
    const baseApiURL = process.env.NEXT_PUBLIC_BACKEND_URL
    const apiToken = Cookies.get("t")

    const onYes = () => {
        setIsProcessing(true)

        axios.delete(`${baseApiURL}/${api_url_path}/${item_id}`, {
                headers: {
                    'Authorization': `Bearer ${apiToken}`
                }
        })
        .then((res: AxiosResponse<{ confirmation: string }>) => {
            if (create_cookie) {
                createSonnerCookie({
                    type: 'success',
                    msg: res.data.confirmation
                })
            } else {
                toast.success(res.data.confirmation)
            }

            setIsProcessing(false)
            refresh()
        })
        .catch(() => {
            if (create_cookie) {
                console.log("setting sonner cookie")
                createSonnerCookie({
                    type: 'err',
                    msg: 'An unexpected error occurred!'
                })
            } else {
                toast.error("An unexpected error occurred!")
            }

            setIsProcessing(false)
            refresh()
        })
    }

    return (
        <>
            <Dialog>
                <DialogTrigger asChild>
                    {triggerBody}
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="font-extrabold">Confirm Action</DialogTitle>
                        <DialogDescription>
                            This will permanently delete the selected item.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-row justify-evenly p-3">
                        <div>
                            <DialogClose asChild>
                                <Button
                                    variant="destructive"
                                    onClick={onYes}
                                >
                                    {isProcessing
                                        ? (
                                            <>
                                                <Spinner />
                                                Processing...
                                            </>
                                        ) : "Yes"}
                                </Button>
                            </DialogClose>
                        </div>
                        <div>
                            <DialogClose asChild>
                                <Button
                                    variant="secondary"
                                    size="sm"
                                >
                                    No
                                </Button>
                            </DialogClose>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )

}
