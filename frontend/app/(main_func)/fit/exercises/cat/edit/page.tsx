import type { Metadata, ResolvingMetadata } from "next"
import { cookies } from "next/headers"
import { unauthorized } from "next/navigation"
import Link from "next/link"
import { MoveLeft } from "lucide-react"

import { getCategory } from "@/lib/actions"

import CategoryEditForm from "./form"
import { Button } from "@/components/ui/button"

type Prop = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined}>
}

export async function generateMetadata(
    { searchParams }: Prop,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { cid } = await searchParams
    const cookieStore = await cookies()

    if (typeof cid === 'string' && cookieStore.has("t")) {
        const category = await getCategory(cookieStore.get("t")!.value, cid)

        if (category && "name" in category) {
            return {
                title: `Edit ${category.name}`
            }
        }
    }

    return {
        title: (await parent).title
    }
}

export default async function EditExerciseCategoryPage(
    { searchParams }: Prop
) {
    const cookieStore = await cookies()
    const token = cookieStore.get("t")
    const { cid } = await searchParams

    if (!token) return unauthorized()
    if (!cid) return "Missing url query paremeter: cid"

    const category = await getCategory(token.value, cid as string)

    if (!category) return "Unable to find Category"
    if ('statusCode' in category) return "An unexpected error occurred. Please try again later."

    return (
        <>
            <div className="container px-4 py-8 mx-auto space-y-8">
                <Link href=".">
                    <Button variant="link">
                        <MoveLeft className="size-4" /> Back To Exercise Categories
                    </Button>
                </Link>
                <h1 className="text-3xl font-bold text-white">
                    Edit Exercise Category
                </h1>
                <CategoryEditForm currentName={category.name} />
            </div>
        </>
    )
}
