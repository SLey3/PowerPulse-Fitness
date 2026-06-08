import React from "react"


export default function HomeShowcase({c1, c2}:{c1: React.ReactNode, c2: React.ReactNode}) {
    return (
        <>
            <div className="flex flex-col-reverse items-start md:flex-row gap-10">
                <div className="w-1/2 h-full pl-10 md:border-l-2 rounded-bl-md rounded-tl-md border-l-white">
                    {c1}
                </div>
                <div className="w-full pr-10 md:w-1/2 md:border-r-2 rounded-br-md rounded-tr-md border-r-white">
                    {c2}
                </div>
            </div>
        </>
    )
}