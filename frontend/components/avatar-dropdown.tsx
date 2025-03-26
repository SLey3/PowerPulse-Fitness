import make_nav_links from "@/lib/routes/navroutes"
import { filter_navlinks } from "@/lib/utils"
import { Avatar, AvatarImage } from "./ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import Link from "next/link"


function DropdownItem({href, name}:{href: string, name: string}) {
    return (
        <>
            <Link href={href}>
                <DropdownMenuItem>{name}</DropdownMenuItem>
            </Link>
        </>
    );
}


export default function AvatarDropdownMenu({img_url}: {img_url: string}) {
    const navlinks = make_nav_links("avatar-dropdown");
    const acc_links = filter_navlinks(navlinks, 'account');
    const fit_links = filter_navlinks(navlinks, 'main_func')
    const signOut = navlinks.find(link => link.name === 'Sign Out');

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src={img_url} alt="default-image" />
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuGroup>
                        {acc_links.map(link => (
                            <DropdownItem key={link.href} href={link.href} name={link.name} />
                        ))}
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel>Fitness Tools</DropdownMenuLabel>
                    <DropdownMenuGroup>
                        {fit_links.map(link => (
                            <DropdownItem key={link.href} href={link.href} name={link.name} />
                        ))}
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownItem href={signOut!.href} name={signOut!.name} />
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
