import { Suspense } from "react"
import type { Metadata } from "next"

import Loading from "./loading"
import GoalCreateForm from "./form"

export const metadata: Metadata = {
    title: "Create Fitness Goal"
}

export default function GoalCreatePage() {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <GoalCreateForm />
            </Suspense>
        </>
    )
}
