import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container py-6 space-y-6">
      {/* Back button */}
      <div className="flex items-center gap-2">
        <Skeleton className="h-5 w-5" />
        <Skeleton className="h-5 w-32" />
      </div>

      {/* Title */}
      <Skeleton className="h-10 w-48" />

      {/* Custom Exercise checkbox */}
      <div className="flex items-center gap-2">
        <Skeleton className="h-5 w-36" />
        <Skeleton className="h-5 w-5" />
      </div>

      {/* Exercise field */}
      <div className="space-y-2">
        <Skeleton className="h-5 w-24" />
        <Skeleton className="h-12 w-full rounded-lg" />
        <Skeleton className="h-4 w-3/4" />
      </div>

      {/* Muscle worked out field */}
      <div className="space-y-2">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-12 w-full rounded-lg" />
        <Skeleton className="h-4 w-60" />
      </div>

      {/* Equipment used field */}
      <div className="space-y-2">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>

      {/* Exercise notes field */}
      <div className="space-y-2">
        <Skeleton className="h-5 w-28" />
        <Skeleton className="h-24 w-full rounded-lg" />
      </div>

      {/* Add Exercise button */}
      <Skeleton className="h-10 w-32 rounded-lg" />
    </div>
  )
}