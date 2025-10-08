import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container px-4 py-8 mx-auto space-y-8">
      <Skeleton className="h-10 w-48" />
      <div className="flex items-center gap-3 my-4">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-10 w-80 rounded-md" />
      </div>
      <div className="border rounded-md">
        <div className="flex items-center p-4 border-b bg-muted/30">
          <div className="flex items-center flex-1 gap-4">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-5 w-12" />
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-5 w-28" />
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-5 w-24" />
            <Skeleton className="h-5 w-20" />
          </div>
          <Skeleton className="h-8 w-28" />
        </div>
        <div className="flex flex-col items-center justify-center p-16">
          <Skeleton className="h-5 w-44 mb-2" />
          <Skeleton className="h-5 w-36" />
        </div>
      </div>
      <div className="flex justify-between py-4">
        <Skeleton className="h-9 w-28 rounded-md" />
        <Skeleton className="h-9 w-28 rounded-md" />
      </div>
    </div>
  )
}