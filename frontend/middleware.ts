import { verifySessionExists } from "@/lib/utils"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
    const token = request.cookies.get('t')?.value

    const isLoggedIn = await verifySessionExists(token)

    if (!isLoggedIn) {
        const url = request.nextUrl.clone()
        url.pathname = "/unauthorized"
        return NextResponse.redirect(url)
    }

    return NextResponse.next()
}


export const config = {
    matcher: ['/dashboard', '/fit/:path*']
}