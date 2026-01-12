
import { getExercise } from "@/lib/actions"

import Link from "next/link"
import { cookies } from "next/headers"
import { MoveLeft, Check, X } from "lucide-react"
import * as motion from 'motion/react-client'

import { Button } from "@/components/ui/button"


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

    if (!exercise) return `Check ID Parameter. Exercise of ID "${id}" does not exist.`
    if ('statusCode' in exercise) return `Failed to load page. Error received (${exercise.statusCode}): ${exercise.message}`

    return (
        <>
            <div className="container mx-auto px-4 py-8">
                <div className="border-2 bg-white font-medium text-black shadow-lg shadow-slate-100/50 h-auto max-sm:w-1/2 p-10 rounded-md space-y-8">
                    <div>
                        <Link href="..">
                            <Button variant="link" className="text-black">
                                <MoveLeft className="size-4" /> Back to Exercises
                            </Button>
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-y-5 gap-x-20 justify-items-center">
                        <motion.div 
                            id="name"
                            initial={false}
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: 'spring', duration: 1.8 }}
                            className="space-y-3 rounded-md line-clamp-3 shadow-black hover:shadow-2xl hover:p-2 hover:line-clamp-none hover:bg-white"
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
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: 'spring', duration: 1.8 }}
                            className="space-y-3 rounded-md shadow-black hover:shadow-2xl hover:p-2 hover:bg-white"
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
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: 'spring', duration: 1.8 }}
                            className="col-span-2 space-y-3 rounded-md text-center shadow-black hover:shadow-2xl hover:p-2 hover:bg-white"
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
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: 'spring', duration: 1.8 }}
                            className="space-y-3 rounded-md shadow-black hover:shadow-2xl hover:p-2 hover:bg-white"
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
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: 'spring', duration: 1.8 }}
                            className="space-y-3 rounded-md shadow-black hover:shadow-2xl hover:p-2 hover:bg-white"
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
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: 'spring', duration: 1.8 }}
                            className="space-y-3 rounded-md shadow-black hover:shadow-2xl hover:p-2 hover:bg-white"
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
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: 'spring', duration: 1.8 }}
                            className="space-y-3 rounded-md shadow-black hover:shadow-2xl hover:p-2 hover:bg-white"
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
                        <motion.div 
                            id="note"
                            initial={false}
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: 'spring', duration: 1.8 }}
                            className="col-span-2 space-y-3 rounded-md text-center shadow-black hover:shadow-2xl hover:p-2 hover:bg-white"
                        >
                            <div>
                                <p className="font-bold underline underline-offset-4">
                                    Exercise Notes
                                </p>
                            </div>
                            <div>
                                <p className="leading-2 tracking-tight md:tracking-wide">
                                    {exercise.notes
                                        ? exercise.notes
                                        : 'No notes were provided.'
                                    }
                                </p>
                            </div>
                        </motion.div> 
                    </div>
                </div>
            </div>
        </>
    )
}