"use client";

import make_nav_links from "@/lib/routes"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "./ui/navigation-menu"
import AvatarDropdownMenu from "./avatar-dropdown";


import { motion } from 'motion/react'
import Link from "next/link"
import { usePathname } from "next/navigation"



function DefaultNavLink({ name, href, pathname }: { name: string, href: string, pathname: string }) {
    return (
        <>
            <Link
                href={href}
                legacyBehavior
                passHref
            >
                <NavigationMenuLink
                    className={cn(
                        "group inline-flex hover:drop-shadow-[0_25px_25px_#FFBF00] text-white h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium data-[state=open]:bg-accent/50 ring-ring/10 outline-ring/50 transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1",
                        {
                            "text-amber-600 drop-shadow-[0_0_8px_#FFBF00]": pathname === href
                        }
                    )}
                >
                    {name}
                </NavigationMenuLink>
            </Link>
        </>
    )
}

export default function PrimaryNavBar() {
    const pathname = usePathname();
    const navlinks = make_nav_links("primary");


    const auth = {
        isSignedIn: true
    }

    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    {navlinks.map((link) => (
                        <NavigationMenuItem key={link.href}>
                            <motion.div
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                            >

                                {link.name === 'sign in' ?  
                                    auth.isSignedIn ? (
                                        <AvatarDropdownMenu img_url="/default-avatar.jpg" />
                                    ) : (
                                        <DefaultNavLink name={link.name} href={link.href} pathname={pathname} />
                                    ) 
                                : (
                                    <DefaultNavLink name={link.name} href={link.href} pathname={pathname} />   
                                )}
                            </motion.div>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
        </>
    )
}
