import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * A utility function that combines multiple class values into a single className string.
 * Uses `clsx` to combine class names and `twMerge` to handle Tailwind CSS class merging.
 * 
 * @param inputs - An array of class values to be combined
 * @returns A merged className string
 * 
 * @example
 * ```tsx
 * <div className={cn('text-red-500', isActive && 'bg-blue-500')}>
 *   Conditionally styled content
 * </div>
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
