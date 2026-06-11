import type { Metadata } from "next"

import CreateCategoryForm from "./form"

export const metadata: Metadata = {
    title: "Create Category"
}

export default async function CreateCategoryPage() {
    return (
        <>
            <CreateCategoryForm />
        </>
    )
}
