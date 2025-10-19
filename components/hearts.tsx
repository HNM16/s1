"use client"

import { motion, AnimatePresence } from "framer-motion"

interface FloatingHeartsProps {
  show: boolean
}

export default function FloatingHearts({ show }: FloatingHeartsProps) {
  const hearts = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    delay: i * 0.5,
    x: Math.random() * 100,
    duration: 5 + Math.random() * 3,
  }))

  return (
    <AnimatePresence>
      {show && (
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          {hearts.map((heart) => (
            <motion.div
              key={heart.id}
              initial={{ y: "100vh", x: `${heart.x}vw`, opacity: 0 }}
              animate={{
                y: "-20vh",
                opacity: [0, 1, 1, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                delay: heart.delay,
                duration: heart.duration,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute text-4xl"
            >
              💖
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  )
}
