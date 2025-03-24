/**
 * Generates navigation links based on the specified navigation type.
 * 
 * @param nav_type - The type of navigation to generate links for.
 *                  'primary' generates links for the main navigation.
 *                  'dashboard' currently returns an empty array.
 * 
 * @returns An array of navigation link objects, each containing a name and href property.
 *          For 'primary' type, returns links to home, features, about, and sign in pages.
 *          For 'dashboard' type, returns an empty array.
 *          For 'avatar-dropdown type, returns links to edit profile, dashboard, and sign out
 */
export default function make_nav_links(nav_type: 'primary' | 'dashboard' | 'avatar-dropdown'): { name: string, href: string }[] {
    switch(nav_type) {
        case "primary":
            return [
                {
                    name: 'home',
                    href: '/'
                },
                {
                    name: 'features',
                    href: '#features-container'
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
                    href: '/acc/manage'
                },
                {
                    name: 'Dashboard',
                    href: '/acc/dashboard'
                },
                {
                    name: 'Sign Out',
                    href: '/sign-out'
                }
            ]
    }
}
