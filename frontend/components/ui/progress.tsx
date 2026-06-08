"use client"

import * as React from "react"
import { Progress as ProgressPrimitive } from "radix-ui"

import { cn } from "@/lib/utils/index"

interface ProgressProps extends Omit<React.ComponentProps<typeof ProgressPrimitive.Root>, "className"> {
  classNameRoot?: string | undefined;
  classNameIndicator?: string | undefined;
}

function Progress({
  classNameRoot,
  classNameIndicator,
  value,
  ...props
}: ProgressProps) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative h-2 w-full overflow-hidden rounded-full bg-white",
        classNameRoot
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          "h-full w-full flex-1 bg-primary transition-all",
          classNameIndicator
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
