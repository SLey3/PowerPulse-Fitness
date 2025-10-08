"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"
import { make_dashboard_links } from "@/lib/routes"
import {
    Sidebar,
    SidebarContent,
    SidebarSeparator,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"



export function UserDashboard() {
    const router = useRouter()
    const navlinks = make_dashboard_links()


    const onSignOut = () => {
        Cookies.remove('t')
        router.push("/")
    }

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarMenu>
                    {navlinks.map((link, i) => {
                        if (link.name === "sep") {
                            return <SidebarSeparator key={i} />
                        } else if (link.name === 'Sign Out') {
                            return (
                                <SidebarMenuItem key={i}>
                                    <SidebarMenuButton onClick={onSignOut} className="cursor-pointer">
                                        <link.icon />
                                        {link.name}
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )
                        } else {
                            return (
                                <SidebarMenuItem key={i}>
                                    <SidebarMenuButton asChild>
                                        <Link href={link.href}>
                                            <link.icon />
                                            {link.name}
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )
                        }
                    })}
                </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    )
}
