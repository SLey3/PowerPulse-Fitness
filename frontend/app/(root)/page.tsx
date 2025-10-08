import HomeShowcase from "@/components/home-showcase"
import { Button } from "@/components/ui/button"

import Image from "next/image"
import Link from "next/link"

export const revalidate = 60


export default function Home() {
  return (
    <>
      <div className="py-16 md:pt-56 space-y-72">
        <div className="flex flex-col w-screen gap-y-10">
          <div>
              <h1 className="text-xl font-bold tracking-widest text-center md:text-4xl lg:text-6xl xl:text-8xl">
                Your <span className="italic">Fitness</span> Tracker
              </h1>
          </div>
          <div>
              <p className="mx-auto text-sm font-medium leading-snug text-center text-accent line-clamp-3 md:text-lg md:leading-normal max-w-52 md:max-w-xl">
                Personalize your Workout logging experience with
                <span className="italic"> PowerPulse Fitness. </span>
                Enables you to manage your goals and track your workouts, analyze your progress.
              </p>
          </div>
          <div>
            <div className="flex flex-row items-center justify-center w-1/2 mx-auto md:justify-evenly gap-x-4">
              <div>
                <Button
                asChild
                  variant="secondary"
                  size="lg"
                >
                  <Link
                    href="/sign-up"
                  >
                    Get Started
                  </Link>
                </Button>
              </div>
              <div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                >
                  <Link
                    href="/about"
                  >
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div id="features-container" className="w-full px-10 space-y-44">
          <HomeShowcase
            c1={
              <>
                <div className="grid grid-rows-3 gap-y-7 md:gap-y-7">
                  <div>
                    <h2 className="pt-2 text-2xl font-semibold">
                      Workout Logs
                    </h2>
                  </div>
                  <div>
                    <p className="font-light text-lg w-full md:w-1/2 leading-7 -mt-[16rem] md:-mt-12"> {/* we use -mt-[16rem] md:-mt-12 as without it an unwanted large gap is present between the first and 2nd row */}
                      Track your fitness journey effortlessly. 
                      Log detailed workouts with custom routines, track duration, categorize exercises, 
                      and add personal notes to monitor your progress over time.
                    </p>
                    </div>
                  <div>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                    >
                      <Link href="/fit/logs">
                        Go to Logs
                      </Link>
                    </Button>
                  </div>
                </div>
              </>
            }
            c2={
              <>
                  <Image
                    className="object-contain size-full"
                    draggable={false}
                    src="/home-placeholder.png"
                    alt="placeholder"
                    height={500}
                    width={500}
                    priority
                  />
              </>
            }
          />
          <HomeShowcase
            c1={
              <>
                  <Image
                    className="object-contain size-full"
                    draggable={false}
                    src="/home-placeholder.png"
                    alt="placeholder"
                    height={500}
                    width={500}
                    priority
                  />
              </>
            }
            c2={
              <>
                <div className="grid grid-rows-3 gap-y-7 md:gap-y-7">
                  <div>
                    <h2 className="pt-2 text-2xl font-semibold">
                      <span className="italic">Fitness</span> Goals
                    </h2>
                  </div>
                  <div>
                    <p className="font-light text-lg w-full md:w-1/2 leading-7 -mt-[11rem] md:-mt-24"> {/* we use -mt-[11rem] md:-mt-24 as without it an unwanted large gap is present between the first and 2nd row */}
                      Set and achieve your fitness ambitions with our powerful goal-tracking system.
                      Establish meaningful targets with customizable deadlines, break down large goals 
                      into manageable steps, and visualize your progress with intuitive metrics that 
                      keep you motivated throughout your fitness journey.
                    </p>
                    </div>
                  <div>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                    >
                      <Link href="/fit/goals">
                        Go to Goals
                      </Link>
                    </Button>
                  </div>
                </div>
              </>
            }
          />
          <HomeShowcase
            c1={
              <>
                <div className="grid grid-rows-3 gap-y-7 md:gap-y-7">
                  <div>
                    <h2 className="pt-2 text-2xl font-semibold">
                      Workout Analytics
                    </h2>
                  </div>
                  <div>
                    <p className="font-light text-lg w-full md:w-1/2 leading-7 -mt-[20rem] md:-mt-[6rem]"> {/* we use -mt-11 md:-mt-[6rem] as without it an unwanted large gap is present between the first and 2nd row */}
                      Gain powerful insights with comprehensive workout analytics. 
                      Visualize your progress through intuitive charts, track key metrics like strength gains and workout frequency, 
                      identify performance trends, and celebrate personal records—all while receiving 
                      data-driven suggestions to optimize your fitness journey.
                    </p>
                    </div>
                  <div>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                    >
                      <Link href="/fit/analytics">
                        Go to Analytics
                      </Link>
                    </Button>
                  </div>
                </div>
              </>
            }
            c2={
              <>
                  <Image
                    className="object-contain size-full"
                    draggable={false}
                    src="/showcase-analytics.png"
                    alt="Analytics Home Showcase"
                    height={500}
                    width={500}
                    priority
                  />
              </>
            }
          />
        </div>
      </div>
    </>
  )
}
