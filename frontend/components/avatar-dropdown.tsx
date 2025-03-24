import make_nav_links from "@/lib/routes"
import { Avatar, AvatarImage } from "./ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import Link from "next/link"


export default function AvatarDropdownMenu({img_url}: {img_url: string}) {
    const navlinks = make_nav_links("avatar-dropdown");

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src={img_url} alt="default-image" />
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {navlinks.map(link => (
                        link.name === 'Edit Account' ? (
                            <>
                                <Link key={link.href} href={link.href}>
                                    <DropdownMenuItem>{link.name}</DropdownMenuItem>
                                </Link>
                            </>
                        ) : link.name === 'Sign Out' ? (
                            <>
                                <DropdownMenuSeparator key={link.href} />
                                <Link href={link.href}>
                                    <DropdownMenuItem>{link.name}</DropdownMenuItem>
                                </Link>
                            </>
                        ) : (
                            <Link key={link.href} href={link.href}>
                                <DropdownMenuItem>{link.name}</DropdownMenuItem>
                            </Link>
                        )
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
