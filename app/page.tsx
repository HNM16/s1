"use client"

import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import CastleEntrance from "@/components/lock-transition"
import ButterflyTransformation from "@/components/butterflies"
import EnvelopeLetter from "@/components/letter"
import FloatingHearts from "@/components/hearts"

export default function Home() {
  const [stage, setStage] = useState<"entrance" | "butterflies" | "letter">("entrance")
  const [isUnlocked, setIsUnlocked] = useState(false)

  const handleUnlock = () => {
    setIsUnlocked(true)
    setTimeout(() => setStage("butterflies"), 1000)
    setTimeout(() => setStage("letter"), 4000)
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-100 via-pink-200 to-rose-200">
      {/* Sparkle effect */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8),transparent_50%)] opacity-30 animate-pulse" />

      <FloatingHearts show={isUnlocked} />

      <AnimatePresence mode="wait">
        {stage === "entrance" && <CastleEntrance key="entrance" onUnlock={handleUnlock} />}

        {stage === "butterflies" && <ButterflyTransformation key="butterflies" />}

        {stage === "letter" && <EnvelopeLetter key="letter" />}
      </AnimatePresence>
    </main>
  )
}
