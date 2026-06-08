import * as motion from 'motion/react-client'


export default function About() {
    return (
        <>
            <div className="pb-32 pl-5 size-full space-y-45">
                <div className="flex flex-col content-center border-l-2 rounded-l-sm border-l-white ps-4 gap-y-10">
                    <motion.div
                        initial={{ 
                            opacity: 0, 
                            x: -500 
                        }}
                        animate={{ 
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            duration: 0.5,
                            ease: ['linear']
                        }}
                    >
                        <h1 className="text-3xl font-semibold">Who are We?</h1>
                    </motion.div>
                    <motion.div
                        className="max-w-prose"
                        initial={{
                            opacity: 0,
                            x: 500
                        }}
                        animate={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            duration: 0.5,
                            ease: ['linear']
                        }}
                    >
                        <p className="font-light break-words">
                            <span className="italic font-semibold">PowerPulse Fitness</span> is an intuitive fitness logging system
                            designed for tracking, analyzing your workout sessions. We aim to bring a range from users who simply wishes
                            to use our logging functionalities to those who may wish to use our more advanced functionality such as
                            fitness goals and fitness analytics.
                        </p>
                    </motion.div>
                </div>
                <div className="flex flex-col content-center gap-y-10">
                    <motion.div
                        className="mx-auto min-w-1/3"
                        initial={{
                            opacity: 0,
                            y: -500
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.5,
                            ease: ['linear']
                        }}
                    >
                        <h1 className="text-3xl font-semibold text-center">Our Mission</h1>
                    </motion.div>
                    <div className="flex flex-col items-center md:flex-row md:ml-64 gap-14">
                        <motion.div
                            className="w-1/2 mx-auto"
                            initial={{
                                opacity: 0,
                                x: -500
                            }}
                            animate={{
                                opacity: 1,
                                x: 0
                            }}
                            transition={{
                                duration: 0.5,
                                ease: ['linear']
                            }}
                        >
                            <div className="border-l-2 rounded-l-sm border-l-white ps-4 min-w-44 max-w-1/2">
                                <p className="font-light break-words">
                                    Our mission at PowerPulse Fitness is to provide a comprehensive fitness tracking solution that empowers users of all levels. 
                                    We strive to deliver an intuitive platform where anyone can easily log workouts, set personalized fitness goals, and track their progress over time. 
                                    Through comprehensive analytics visualization, we aim to make fitness tracking accessible, insightful, 
                                    and motivating - helping each user understand their unique fitness journey and reach their full potential.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="w-1/2 mx-auto"
                            initial={{
                                opacity: 0,
                                x: 500
                            }}
                            animate={{
                                opacity: 1,
                                x: 0
                            }}
                            transition={{
                                duration: 0.5,
                                ease: ['linear']
                            }}
                        >
                            <div className="border-l-2 rounded-l-sm border-l-white ps-4 max-w-prose">
                                <ul className="font-light list-[upper-roman] list-inside">
                                    <li>Workout Logging</li>
                                    <li>Fitness Goals</li>
                                    <li>Exercise Templates</li>
                                    <li>Fitness Analytics</li>
                                    <li>Progress Tracking</li>
                                    <li>Privacy First</li>
                                </ul>
                            </div>                            
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}
