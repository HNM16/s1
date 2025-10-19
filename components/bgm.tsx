"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function BackgroundMusic() {
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    // Note: In a real implementation, you would add an actual audio file
    // For now, this is a placeholder for the music control UI
  }, [])

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      onClick={() => setIsMuted(!isMuted)}
      className="fixed right-4 top-4 z-50 rounded-full bg-white/80 p-3 shadow-lg backdrop-blur-sm transition-colors hover:bg-white"
    >
      <span className="text-2xl">{isMuted ? "🔇" : "🎵"}</span>
    </motion.button>
  )
}
