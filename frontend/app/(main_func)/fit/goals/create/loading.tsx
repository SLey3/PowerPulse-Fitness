import * as motion from 'motion/react-client'
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"

function ScanSkeleton({ className }: { className?: string }) {
    return (
        <div className="relative overflow-hidden">
            <Skeleton className={className} />
            <motion.div
                className="absolute inset-y-0 w-[3px] bg-gradient-to-b from-transparent via-slate-200/60 to-transparent pointer-events-none"
                animate={{ left: ["-3px", "calc(100% + 3px)"] }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
            />
        </div>
    )
}

export default function Loading() {
    return (
        <div className="px-4 py-8 space-y-8">
            {/* Back button */}
            <ScanSkeleton className="w-36 h-9" />

            {/* Page title */}
            <ScanSkeleton className="w-64 h-9" />

            {/* Title field */}
            <div className="space-y-2">
                <ScanSkeleton className="w-10 h-4" />
                <ScanSkeleton className="w-full h-10" />
            </div>

            {/* Description field */}
            <div className="space-y-2">
                <ScanSkeleton className="w-24 h-4" />
                <ScanSkeleton className="w-full h-24" />
                <ScanSkeleton className="w-56 h-4" />
            </div>

            {/* Complete By field */}
            <div className="space-y-2">
                <ScanSkeleton className="w-24 h-4" />
                <div className="flex flex-row gap-x-5">
                    <ScanSkeleton className="w-64 h-10" />
                    <ScanSkeleton className="w-24 h-10" />
                </div>
            </div>

            {/* Status field */}
            <div className="space-y-2">
                <ScanSkeleton className="w-14 h-4" />
                <ScanSkeleton className="w-40 h-10" />
            </div>

            {/* Trackable Goals section */}
            <div className="grid grid-rows-3 md:grid-cols-2 gap-y-20 gap-x-52 md:[&>*:nth-child(even)]:indent-10">
                <div className="md:col-span-2 space-y-5">
                    <ScanSkeleton className="w-52 h-10" />
                    <Separator className="absolute w-full mt-5" />
                </div>
                <div className="flex flex-row gap-x-5 items-center">
                    <ScanSkeleton className="w-24 h-4" />
                    <ScanSkeleton className="w-11 h-6 rounded-full" />
                </div>
                <div className="flex flex-row gap-x-5 items-center">
                    <ScanSkeleton className="w-24 h-4" />
                    <ScanSkeleton className="w-11 h-6 rounded-full" />
                </div>
                <div className="flex flex-row gap-x-5 items-center">
                    <ScanSkeleton className="w-20 h-4" />
                    <ScanSkeleton className="w-11 h-6 rounded-full" />
                </div>
            </div>

            {/* Subgoals section */}
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <ScanSkeleton className="w-20 h-5" />
                    <ScanSkeleton className="w-36 h-10" />
                </div>
            </div>

            {/* Submit button */}
            <ScanSkeleton className="w-28 h-10" />
        </div>
    )
}
