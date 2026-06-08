"use server"
import { revalidateTag } from "next/cache"


export async function revalidateFitGoalsTag() {
    revalidateTag("fitgoals", "max")
}