import { 
    LayoutDashboard,
    UserPen,
    Logs,
    BookOpen,
    ChartPie,
    House,
    List,
    LogOut,
    Dumbbell
} from "lucide-react"

export interface MakeNavLinksReturnT {
    name: string
    href: string
    cat?: 'account' | 'main_func'
}

export interface MakeDashLinksReturnT {
    name: string
    href: string
    icon: typeof LayoutDashboard
}


export function make_dashboard_links(): MakeDashLinksReturnT[] {
    return [
        {
            name: 'Edit Account',
            href: '/acc/manage',
            icon: UserPen
        },
        {
            name: 'Dashboard',
            href: '/dashboard',
            icon: LayoutDashboard
        },
        {
            name: 'sep',
            href: '#',
            icon: BookOpen
        },
        {
            name: 'Exercises',
            href: '/fit/exercises',
            icon: Dumbbell
        },
        {
            name: 'Exercise Categories',
            href: '/fit/exercises/cat',
            icon: List
        },
        {
            name: 'Fitness Logs',
            href: '/fit/logs',
            icon: Logs
        },
        {
            name: 'Fitness Goals',
            href: '/fit/goals',
            icon: BookOpen
        },
        {
            name: 'Fitness Analytics',
            href: '/fit/analytics',
            icon: ChartPie
        },
        {
            name: 'sep',
            href: '#',
            icon: BookOpen
        },
        {
            name: 'Sign Out',
            href: '#',
            icon: LogOut
        },
        {
            name: 'Back Home',
            href: '/',
            icon: House
        }
    ]
}

/**
 * Generates an array of navigation link objects based on the specified navigation type.
 *
 * @param nav_type - The type of navigation links to generate.
 *                   - "primary": Returns main navigation links used for the public site.
 *                   - "avatar-dropdown": Returns account-related and main function links for the avatar dropdown menu.
 * @returns An array of objects representing navigation links for the given navigation type.
 */
export function make_nav_links(nav_type: 'primary' | 'avatar-dropdown'): MakeNavLinksReturnT[] {
    switch(nav_type) {
        case "primary":
            return [
                {
                    name: 'home',
                    href: '/'
                },
                {
                    name: 'features',
                    href: '/#features-container'
                },
                {
                    name: 'about',
                    href: '/about'
                },
                {
                    name: 'sign in',
                    href: '/auth'
                }
            ]
        case "avatar-dropdown":
            return [
                {
                    name: 'Edit Profile',
                    href: '/acc/manage',
                    cat: 'account'
                },
                {
                    name: 'Dashboard',
                    href: '/dashboard',
                    cat: 'account'
                },
                {
                    name: 'Fitness Goals',
                    href: '/fit/goals',
                    cat: 'main_func'
                },
                {
                    name: 'Fitness Logs',
                    href: '/fit/logs',
                    cat: 'main_func'
                },
                {
                    name: 'Fitness Analytics',
                    href: '/fit/analytics',
                    cat: 'main_func'
                },
                {
                    name: 'Sign Out',
                    href: '#'
                }
            ]
    }
}
