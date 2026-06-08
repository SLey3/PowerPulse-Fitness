import * as motion from 'motion/react-client'
import { FolderSearch } from 'lucide-react'
import Link from 'next/link'
import "./globals.css"

export default function C404() {
    return (
      <>
        <div className="min-h-screen overflow-x-hidden antialiased text-white overscroll-none bg-gradient-to-tr from-black via-gray-800 to-black">
          <div className="absolute top-1/4 md:top-1/2 left-10 md:left-1/4 lg:left-[35%] xl:left-[540px]">
              <motion.div
                animate={{ x: [-20, 20, -20], y: [0, -20, 0, 20, 0] }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
              >
                <FolderSearch className="relative animate-pulse left-1/2" />
              </motion.div>
            <h1 className="text-2xl font-bold tracking-tighter md:text-4xl md:tracking-normal">This Page does not exist</h1>
            <div className="relative left-[30%] md:left-[40%] xl:left-1/2 pt-5">
              <Link
                className="text-xl tracking-wide hover:text-amber-500 focus:border focus:border-amber-500"
                href="/"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }