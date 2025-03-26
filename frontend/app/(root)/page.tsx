import HomeShowcase from "@/components/home-showcase";
import { Button } from "@/components/ui/button"

import Image from "next/image"
import Link from "next/link"

export const revalidate = 60;


export default async function Home() {
  return (
    <>
      <div className="py-16 md:pt-56 space-y-72">
        <div className="w-screen flex flex-col gap-y-10">
          <div>
              <h1 className="font-bold text-xl md:text-4xl lg:text-6xl xl:text-8xl tracking-widest text-center">
                Your <span className="italic">Fitness</span> Tracker
              </h1>
          </div>
          <div>
              <p className="font-medium text-center text-accent line-clamp-3 text-sm md:text-lg leading-snug md:leading-normal max-w-52 md:max-w-xl mx-auto">
              Personalize your Workout tracking experience with
              <span className="italic"> PowerPulse Fitness. </span>
              Enables you to manage your goals and track your workouts, analyze your progress.
              </p>
          </div>
          <div>
            <div className="flex flex-row justify-center items-center md:justify-evenly gap-x-4 w-1/2 mx-auto">
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
                    href="#features-container"
                  >
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div id="features-container" className="w-full space-y-44 px-10">
          <HomeShowcase
            c1={
              <>
                <div className="grid grid-rows-3 gap-y-7 md:gap-y-7">
                  <div>
                    <h2 className="font-semibold text-2xl pt-2">
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
                    className="size-full object-contain"
                    draggable={false}
                    src="/home-placeholder.png"
                    alt="placeholder"
                    height={500}
                    width={500}
                  />
              </>
            }
          />
          <HomeShowcase
            c1={
              <>
                  <Image
                    className="size-full object-contain"
                    draggable={false}
                    src="/home-placeholder.png"
                    alt="placeholder"
                    height={500}
                    width={500}
                  />
              </>
            }
            c2={
              <>
                <div className="grid grid-rows-3 gap-y-7 md:gap-y-7">
                  <div>
                    <h2 className="font-semibold text-2xl pt-2">
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
                    <h2 className="font-semibold text-2xl pt-2">
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
                    className="size-full object-contain"
                    draggable={false}
                    src="/showcase-analytics.png"
                    alt="Analytics Home Showcase"
                    height={500}
                    width={500}
                  />
              </>
            }
          />
        </div>
      </div>
    </>
  );
}
