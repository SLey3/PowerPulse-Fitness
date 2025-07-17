"use client"

import { useState, useEffect } from "react"
import { motion } from 'motion/react'
import Link from "next/link"
import { usePathname } from "next/navigation"
import Cookies from "js-cookie"
import { make_nav_links } from "@/lib/routes"
import { cn, verifySessionExists } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink
} from "../ui/navigation-menu"
import AvatarDropdownMenu from "../avatar-dropdown"


function DefaultNavLink({ name, href, pathname }: { name: string, href: string, pathname: string }) {
    return (
        <>
            <NavigationMenuLink asChild={true}>
                <Link
                    className={cn(
                        "group inline-flex hover:drop-shadow-[0_0_8px_#FFBF00] text-white h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium data-[state=open]:bg-accent/50 ring-ring/10 outline-ring/50 transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1",
                        {
                            "text-amber-600 drop-shadow-[0_0_8px_#FFBF00]": pathname === href
                        }
                    )}
                    href={href}
                >
                    {name}
                </Link>
            </NavigationMenuLink>
        </>
    )
}

export default function PrimaryNavBar() {
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false)
    const pathname = usePathname()
    const navlinks = make_nav_links("primary")


    useEffect(() => {
        let isMounted = true

        const checkIsSignedIn = async () => {
            const isLoggedIn = await verifySessionExists(Cookies.get("t"))

            if (isMounted) {
                setIsSignedIn(isLoggedIn)
            }
        }
        
        checkIsSignedIn()

        return () => {
            isMounted = false
        }
    }, [])

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

                                {link.name === 'sign in' && isSignedIn ? (
                                        <AvatarDropdownMenu img_url="/default-avatar.jpg" />
                                    ) : (
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
