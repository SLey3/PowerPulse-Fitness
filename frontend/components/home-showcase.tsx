import React from "react"


export default function HomeShowcase({c1, c2}:{c1: React.ReactNode, c2: React.ReactNode}) {
    return (
        <>
            <div className="flex flex-col-reverse md:flex-row gap-10 items-start">
                <div className="w-1/2 pl-10 h-full md:border-l-2 rounded-bl-md rounded-tl-md border-l-white">
                    {c1}
                </div>
                <div className="w-full md:w-1/2 md:border-r-2 rounded-br-md rounded-tr-md border-r-white pr-10">
                    {c2}
                </div>
            </div>
        </>
    )
}