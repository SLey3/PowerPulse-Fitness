
import { getExercise } from "@/lib/actions"

import type { Metadata, ResolvingMetadata } from "next"
import Link from "next/link"
import { cookies } from "next/headers"
import { MoveLeft, Check, X } from "lucide-react"
import * as motion from 'motion/react-client'

import { Button } from "@/components/ui/button"

type Prop = {
    params: Promise<{ id: string }>
}

export async function generateMetadata(
    { params }: Prop, 
    parent: ResolvingMetadata
): Promise<Metadata> {
    const { id } = await params
    const cookieStore = await cookies()

    if (cookieStore.has("t")) {
        const exercise = await getExercise(cookieStore.get("t")!.value, id)

        if (exercise && 'name' in exercise) {
            return {
                title: exercise.name,
            }
        }
    }

    return {
        title: (await parent).title
    }
}


export default async function ViewExercise({
    params,
} : {
    params: Promise<{
        id: string;
    }>;
}) {
    const cookieStore = await cookies()
    const token = cookieStore.get("t")
    const { id } = await params;
    const exercise = await getExercise(token?.value, id)

    const BASE_CLASS = "space-y-3 rounded-md line-clamp-3 shadow-black"

    if (!exercise) return (
        <>
        <div className="container px-4 py-8 mx-auto">
            <div className="h-auto p-10 font-medium text-black bg-white border-2 shadow-lg shadow-slate-100/50 rounded-md">
                <Link href="..">
                    <Button variant="link" className="text-black">
                        <MoveLeft className="size-4" /> Back to Exercises
                    </Button>
                </Link>
                <div className="mt-8 text-center">
                    <p>Check ID Parameter. Exercise of ID "{id}" does not exist.</p>
                </div>
            </div>
        </div>
        </>
    )
    if ('statusCode' in exercise) return (
        <>
            <p className="indent-4">`Failed to load page. Error received ({exercise.statusCode}): {exercise.message as string}`</p>
        </>
    )

    return (
        <>
            <div className="flex items-center justify-center min-h-screen px-4 py-8 min-w-screen">
                <div className="w-full h-auto max-w-4xl p-6 font-medium text-black bg-white border-2 shadow-lg shadow-slate-100/50 sm:p-10 rounded-md space-y-8">
                    <div>
                        <Link href="..">
                            <Button variant="link" className="text-black">
                                <MoveLeft className="size-4" /> Back to Exercises
                            </Button>
                        </Link>
                    </div>
                    <div className="py-5 shadow-2xl grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-20 justify-items-center">
                        <motion.div 
                            id="name"
                            initial={false}
                            whileHover={{ 
                                scale: 1.2,
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                                webkitBoxOrient: 'horizontal',
                                webkitLineClamp: 'unset',
                                display: 'block',
                                overflow: 'visible',
                                padding: '0.5rem',
                                backgroundColor: "#fff"
                            }}
                            transition={{ type: 'spring', delay: 0.5 }}
                            className={BASE_CLASS}
                        >
                            <div>
                                <p className="font-bold underline underline-offset-4">
                                    Name of Exercise
                                </p>
                            </div>
                            <div>
                                {exercise.name}
                            </div>
                        </motion.div>
                        <motion.div 
                            id="custom"
                            initial={false}
                            whileHover={{ 
                                scale: 1.2,
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                                webkitBoxOrient: 'horizontal',
                                webkitLineClamp: 'unset',
                                display: 'block',
                                overflow: 'visible',
                                padding: '0.5rem',
                                backgroundColor: "#fff"
                            }}
                            transition={{ type: 'spring', delay: 0.5 }}
                            className={BASE_CLASS}
                        >
                            <div>
                                <p className="font-bold underline underline-offset-4">
                                    Custom?
                                </p>
                            </div>
                            <div className="pl-5">
                                {exercise.custom
                                    ? <Check />
                                    : <X />}
                            </div>
                        </motion.div>
                        <motion.div 
                            id="use-count"
                            initial={false}
                            whileHover={{ 
                                scale: 1.2,
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                                webkitBoxOrient: 'horizontal',
                                webkitLineClamp: 'unset',
                                display: 'block',
                                overflow: 'visible',
                                padding: '0.5rem',
                                backgroundColor: "#fff"
                            }}
                            transition={{ type: 'spring', delay: 0.5 }}
                            className={`sm:col-span-2 ${BASE_CLASS}`}
                        >
                            <div>
                                <p className="font-bold underline underline-offset-4">
                                    Use Count
                                </p>
                            </div>
                            <div>
                                <p className="tracking-wide">
                                    Used in {exercise.useCount} logs and/or goals.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div 
                            id="type"
                            initial={false}
                            whileHover={{ 
                                scale: 1.2,
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                                webkitBoxOrient: 'horizontal',
                                webkitLineClamp: 'unset',
                                display: 'block',
                                overflow: 'visible',
                                padding: '0.5rem',
                                backgroundColor: "#fff"
                            }}
                            transition={{ type: 'spring', delay: 0.5 }}
                            className={BASE_CLASS}
                        >
                            <div>
                                <p className="font-bold underline underline-offset-4">
                                    Type of Exercise
                                </p>
                            </div>
                            <div>
                                {exercise.type}
                            </div>
                        </motion.div>
                        <motion.div 
                            id="equipment"
                            initial={false}
                            whileHover={{ 
                                scale: 1.2,
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                                webkitBoxOrient: 'horizontal',
                                webkitLineClamp: 'unset',
                                display: 'block',
                                overflow: 'visible',
                                padding: '0.5rem',
                                backgroundColor: "#fff"
                            }}
                            transition={{ type: 'spring', delay: 0.5 }}
                            className={BASE_CLASS}
                        >
                            <div>
                                <p className="font-bold underline underline-offset-4">
                                    Equipment Used
                                </p>
                            </div>
                            <div>
                                {exercise.equipment}
                            </div>
                        </motion.div>
                        <motion.div 
                            id="muscle"
                            initial={false}
                            whileHover={{ 
                                scale: 1.2,
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                                webkitBoxOrient: 'horizontal',
                                webkitLineClamp: 'unset',
                                display: 'block',
                                overflow: 'visible',
                                padding: '0.5rem',
                                backgroundColor: "#fff"
                            }}
                            transition={{ type: 'spring', delay: 0.5 }}
                            className={BASE_CLASS}
                        >
                            <div>
                                <p className="font-bold underline underline-offset-4">
                                    Targeted Muscle
                                </p>
                            </div>
                            <div>
                                {exercise.muscle}
                            </div>
                        </motion.div>
                        <motion.div 
                            id="met"
                            initial={false}
                            whileHover={{ 
                                scale: 1.2,
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                                webkitBoxOrient: 'horizontal',
                                webkitLineClamp: 'unset',
                                display: 'block',
                                overflow: 'visible',
                                padding: '0.5rem',
                                backgroundColor: "#fff"
                            }}
                            transition={{ type: 'spring', delay: 0.5 }}
                            className={BASE_CLASS}
                        >
                            <div>
                                <p className="font-bold underline underline-offset-4">
                                    MET Value
                                </p>
                            </div>
                            <div>
                                {exercise.met}
                            </div>
                        </motion.div>
                        <div 
                            id="note"
                            className={`sm:col-span-2 text-center py-2.5 ${BASE_CLASS}`}
                        >
                            <div>
                                <p className="font-bold underline underline-offset-4">
                                    Exercise Notes
                                </p>
                            </div>
                            <div>
                                <p className="tracking-tight leading-2 md:tracking-wide">
                                    {exercise.notes
                                        ? exercise.notes
                                        : 'No notes were provided.'
                                    }
                                </p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </>
    )
}