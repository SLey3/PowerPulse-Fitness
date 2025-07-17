import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'
import axios, { AxiosError } from "axios"
import type { MakeNavLinksReturnT } from "./routes"
import type { ApiErrProps } from "./actions/types"

dayjs.extend(calendar)

// interfaces
interface VerifySessionReturnProps {
  isLoggedIn: boolean
  token?: string
}

// util functions
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
  const f_links = links.filter(link => link.cat === category)
  return f_links
}



/**
 * Formats the creation or update timestamp for log items in a human-readable format.
 * Uses dayjs calendar formatting to show relative time descriptions like "today", "yesterday", or "last week".
 * For update timestamps, it only shows the updated format if the update time is after the creation time.
 * 
 * @template T - The type parameter (not used in the function body)
 * @param {T} row - The log item containing createdAt and updatedAt timestamps
 * @param {'createdAt' | 'updatedAt'} name - Specifies which timestamp to format
 * @returns {string} A formatted string representing the timestamp in a user-friendly format
 */
export function formatItemsCrUpdDate<T extends Record<string, any>>(row: T, name: 'createdAt' | 'updatedAt'): string {
  const createdAt = dayjs(row.createdAt)
  const updatedAt = dayjs(row.updatedAt)
  if (name === 'updatedAt') {
    if (updatedAt > createdAt) {
      return dayjs().calendar(updatedAt, {
          sameDay: "[Updated today at] h:mm A",
          lastDay: "[Updated yesterday at] h:mm A",
          lastWeek: "[Updated last] dddd [at] h:mm A",
          sameElse: "[Updated at] DD/MM/YYYY",
      })
    }
  }

  return dayjs().calendar(createdAt, {
      sameDay: "[Created today at] h:mm A",
      lastDay: "[Created yesterday at] h:mm A",
      lastWeek: "[Created last] dddd [at] h:mm A",
      sameElse: "[Created at] DD/MM/YYYY",
  })
}


const _VerifySessionRequest = async (token: string) => {
    return await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/validatejwt`,
      {
        jwt: token
      }
    ).then(() => {
      return true
    })
    .catch(() => {
      return false
    })
  }


/**
 * Verifies if a valid session exists by checking the cookie store for a token and validating the token.
 * Server-side: uses cookieStore from next/header
 * Client-side: uses cookieStore from js-cookies
 * 
 * @returns A promise that resolves to an object containing:
 * - `isLoggedIn`: Boolean indicating if the user is logged in
 * - `token`: The token value if the user is logged in
 * 
 * @async
 */
export async function verifySessionExists(token: string | undefined): Promise<boolean> {

  if (!token) {
    return false
  }

  const res = await _VerifySessionRequest(token)

  if (!res) {
    return false
  }

  return true
}


/**
 * Creates a partially applied function by fixing the first set of arguments.
 * 
 * @template T Function type
 * @param {T} func - The function to partially apply arguments to
 * @param {...any} args - The arguments to fix to the function
 * @returns {Function} A new function that takes the remaining arguments and applies them to the original function
 */
export function partial<FReturn>(func: CallableFunction, ...args: any[]): (...rest: any[]) => FReturn {
  return (...rest: any[]): FReturn => func(...args, ...rest)
}

/**
 * Determines the fetched list from the provided input.
 *
 * This function checks if the input `list` is defined and whether it contains
 * a `statusCode` property (indicating an error object). If the input is an error
 * object, it returns an empty array. Otherwise, it returns the input list.
 * If the input is undefined, it also returns an empty array.
 *
 * @param list - The input to evaluate, which can be an array, an error object
 *               (with a `statusCode` property), or undefined.
 * @returns An array representing the fetched list, or an empty array if the input
 *          is an error object or undefined.
 */
export function determineFetchedList(list: any[] | ApiErrProps | undefined): any[] {
  return typeof list !== 'undefined'
    ? 'statusCode' in list
      ? []
      : list
    : []
}
