import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container py-6 space-y-6">
      {/* Back button */}
      <div className="flex items-center gap-2">
        <Skeleton className="w-5 h-5" />
        <Skeleton className="w-32 h-5" />
      </div>

      {/* Title */}
      <Skeleton className="w-48 h-10" />

      {/* Custom Exercise checkbox */}
      <div className="flex items-center gap-2">
        <Skeleton className="h-5 w-36" />
        <Skeleton className="w-5 h-5" />
      </div>

      {/* Exercise field */}
      <div className="space-y-2">
        <Skeleton className="w-24 h-5" />
        <Skeleton className="w-full h-12 rounded-lg" />
        <Skeleton className="w-3/4 h-4" />
      </div>

      {/* Muscle worked out field */}
      <div className="space-y-2">
        <Skeleton className="w-32 h-5" />
        <Skeleton className="w-full h-12 rounded-lg" />
        <Skeleton className="h-4 w-60" />
      </div>

      {/* Equipment used field */}
      <div className="space-y-2">
        <Skeleton className="w-32 h-5" />
        <Skeleton className="w-full h-12 rounded-lg" />
      </div>

      {/* Exercise notes field */}
      <div className="space-y-2">
        <Skeleton className="h-5 w-28" />
        <Skeleton className="w-full h-24 rounded-lg" />
      </div>

      {/* Add Exercise button */}
      <Skeleton className="w-32 h-10 rounded-lg" />
    </div>
  )
}