import Link from "next/link"
import * as motion from 'motion/react-client'

export default function UnauthorizedPage() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-md p-10 text-center bg-gray-900 border border-gray-800 shadow-2xl rounded-2xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-4 text-5xl font-extrabold text-white"
        >
          401
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-300"
        >
          You don’t have permission to view this page.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-6"
        >
          <Link
            href="/auth"
            className="hover:text-amber-400"
          >
            Log In
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
