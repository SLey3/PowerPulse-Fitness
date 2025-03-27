export interface MakeNavLinksReturnT {
    name: string;
    href: string;
    cat?: 'account' | 'main_func'
}


/**
 * Generates an array of navigation link objects based on the specified navigation type.
 *
 * @param nav_type - The type of navigation links to generate.
 *                   - "primary": Returns main navigation links used for the public site.
 *                   - "dashboard": Returns an empty array intended for dashboard links.
 *                   - "avatar-dropdown": Returns account-related and main function links for the avatar dropdown menu.
 * @returns An array of objects representing navigation links for the given navigation type.
 */
export function make_nav_links(nav_type: 'primary' | 'dashboard' | 'avatar-dropdown'): MakeNavLinksReturnT[] {
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
                    href: '/sign-in'
                }
            ];
        case "dashboard":
            return [];
        case "avatar-dropdown":
            return [
                {
                    name: 'Edit Profile',
                    href: '/acc/manage',
                    cat: 'account'
                },
                {
                    name: 'Dashboard',
                    href: '/acc/dashboard',
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
                    href: '/sign-out'
                }
            ]
    }
}
