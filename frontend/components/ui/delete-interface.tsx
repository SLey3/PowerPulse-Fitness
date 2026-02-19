'use client'

import { DeleteInterfaceYesResponse } from "@/lib/actions"

import { useRouter } from "next/navigation"
import  { useState, type ReactNode } from "react"
import Cookies from "js-cookie"
import { toast } from "sonner"

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
    cur_url,
    item_id,
    triggerBody,
    create_cookie
 }: 
 {
    api_url_path: string,
    cur_url: string,
    item_id: number,
    triggerBody: ReactNode,
    create_cookie?: boolean
}) {
    const [isProcessing, setIsProcessing] = useState(false)
    const { refresh } = useRouter()
    const baseApiURL = process.env.NEXT_PUBLIC_BACKEND_URL
    const apiToken = Cookies.get("t")

    if (!apiToken || !baseApiURL) {
        toast.error("An unexpected error occurred. Please log in again.")
        return
    }

    const onYes = async () => {
        setIsProcessing(true)


        const res: { type: string, msg: string } = await DeleteInterfaceYesResponse({
            cur_url: cur_url,
            baseApiURL: baseApiURL,
            api_url_path: api_url_path,
            apiToken: apiToken,
            item_id: item_id,
            create_cookie: create_cookie
        })

        if (res.type === "success") {
            toast.success("Success", {
                description: res.msg
            })
        } else {
            toast.error("An Error has Occurred!", {
                dismissible: false,
                description: res.msg
            })
        }

        setIsProcessing(false)
        refresh()
    }

    return (
        <>
            <Dialog>
                <DialogTrigger className="cursor-auto!" asChild>
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
