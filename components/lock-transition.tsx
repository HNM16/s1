"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Lock } from "lucide-react"

interface CastleEntranceProps {
  onUnlock: () => void
}

export default function CastleEntrance({ onUnlock }: CastleEntranceProps) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [isOpening, setIsOpening] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "143" || password.toLowerCase() === "sakina") {
      setIsOpening(true)
      setTimeout(onUnlock, 2000)
    } else {
      setError(true)
      setTimeout(() => setError(false), 1000)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex min-h-screen items-center justify-center"
    >
      <div className="relative">
        {/* Castle */}
        <motion.div
          animate={isOpening ? { scale: 1.2, opacity: 0 } : {}}
          transition={{ duration: 2 }}
          className="relative"
        >
          {/* Castle doors */}
          <div className="relative flex items-center justify-center">
            <motion.div
              animate={isOpening ? { rotateY: -90, scale: 1.5 } : {}}
              transition={{ duration: 1.5 }}
              className="rounded-full bg-gradient-to-br from-pink-300 to-rose-400 p-12 shadow-2xl"
              style={{ transformStyle: "preserve-3d" }}
            >
              <Lock className="h-24 w-24 text-white" strokeWidth={2} />
            </motion.div>

            {isOpening && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.5, 1] }}
                className="absolute inset-0 rounded-full bg-yellow-200/50 blur-3xl"
              />
            )}
          </div>
        </motion.div>

        {/* Password form */}
        {!isOpening && (
          <motion.form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col items-center gap-4"
            animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
          >
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Введите пароль..."
              className="rounded-full border-2 border-pink-300 bg-white/80 px-6 py-3 text-center text-lg backdrop-blur-sm focus:border-pink-400 focus:outline-none"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-gradient-to-r from-pink-400 to-rose-400 px-8 py-3 font-semibold text-white shadow-lg"
            >
              Открыть
            </motion.button>
          </motion.form>
        )}

        {/* Error butterflies */}
        <AnimatePresence>
          {error && (
            <>
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 0, y: 0, opacity: 1 }}
                  animate={{
                    x: Math.random() * 400 - 200,
                    y: Math.random() * -400,
                    opacity: 0,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                  className="absolute text-4xl"
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                >
                  🦋
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-2xl"
              >
                😢
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
