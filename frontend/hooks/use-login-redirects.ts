/**
 * Hook that provides mapping configurations for login redirect URLs.
 * 
 * @returns An object containing redirect path mappings where:
 * - "wl": Redirects to workout logs page ("/fit/logs")
 * - "fg": Redirects to fitness goals page ("/fit/goals") 
 * - "wa": Redirects to workout analytics page ("/fit/analytics")
 * 
 * @example
 * ```typescript
 * const redirectMappings = useLoginRedirectMappings();
 * const workoutLogsPath = redirectMappings["wl"]; // "/fit/logs"
 * ```
 */
export function useLoginRedirectMappings() {
    return {
        "wl" : "/fit/logs",
        "fg" : "/fit/goals",
        "wa" : "/fit/analytics"
    }
}
