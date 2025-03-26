import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { MakeNavLinksReturnT } from "./routes"

/**
 * A utility function that combines multiple class values into a single className string.
 * Uses `clsx` to combine class names and `twMerge` to handle Tailwind CSS class merging.
 * 
 * @param inputs - An array of class values to be combined
 * @returns A merged className string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Filters an array of navigation link objects based on a specific category.
 *
 * @param links - The array of navigation link objects to filter.
 * @param category - The category used to filter the navigation links.
 * @returns An array of navigation link objects whose category matches the provided category.
 */
export function filter_navlinks(links: MakeNavLinksReturnT[], category: string): MakeNavLinksReturnT[] {
  const f_links = links.filter(link => link.cat === category);
  return f_links;
}
