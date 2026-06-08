/**
 * 
 * Utility functions that uses functions that requires 'use server'
 * 
 */
"use server"
import { cookies } from "next/headers"

/**
 * Retrieves a cookie by name in a server-side rendering (SSR) context.
 *
 * This function is intended for use on the server side only. If called in a
 * browser environment (where `window` is defined), it returns `undefined`.
 *
 * @param {string} name - The name of the cookie to retrieve.
 * @returns {Promise<import('next/headers').RequestCookie | null | undefined>}
 *   - The cookie object if found.
 *   - `null` if the cookie store does not contain the specified cookie.
 *   - @throws {Error} if called in a browser environment.
 */
export async function getSSRCookie(name: string) {
  if (typeof window === 'undefined') {
    // location is on the server side
    const cookieStore = await cookies()

    return cookieStore.has(name) ? cookieStore.get(name)! : null
  } else {
    throw new Error("cannot use getSSRCookie on client components")
  }
}
