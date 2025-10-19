"use client"

import { motion } from "framer-motion"

export default function ButterflyTransformation() {
  const butterflies = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: i * 0.1,
  }))

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex min-h-screen items-center justify-center"
    >
      {/* Butterflies flying around */}
      {butterflies.map((butterfly) => (
        <motion.div
          key={butterfly.id}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0,
          }}
          animate={{
            x: window.innerWidth / 2 - 50,
            y: window.innerHeight / 2 - 50,
            scale: 1,
          }}
          transition={{
            delay: butterfly.delay,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="absolute text-4xl"
        >
          🦋
        </motion.div>
      ))}

      {/* SAKINA text appears */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative z-10"
      >
        <motion.h1
          className="bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 bg-clip-text text-8xl font-bold text-transparent"
          animate={{
            textShadow: [
              "0 0 20px rgba(255,182,193,0.5)",
              "0 0 40px rgba(255,182,193,0.8)",
              "0 0 20px rgba(255,182,193,0.5)",
            ],
          }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          SAKINA
        </motion.h1>

        {/* Sparkles around name */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              delay: 2.5 + i * 0.2,
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 1,
            }}
            className="absolute text-2xl"
            style={{
              left: `${Math.cos((i * Math.PI * 2) / 8) * 150 + 50}%`,
              top: `${Math.sin((i * Math.PI * 2) / 8) * 150 + 50}%`,
            }}
          >
            ✨
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
