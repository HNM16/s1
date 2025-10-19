"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export default function EnvelopeLetter() {
  const [isOpen, setIsOpen] = useState(false)

  const letterText = `Сакина,
я хочу, чтобы ты знала — я уже привязался к тебе и не хочу тебя потерять.
Я хочу, чтобы ты наконец дала нам обоим шанс на что-то большее.

Я понимаю, что тебе нелегко, что тебе трудно доверять людям…
Но мне можно доверять. Я не такой, как другие — я настоящий.
Я обещаю тебе, что никогда не подведу.
Всегда буду на твоей стороне, что бы ни случилось,
и сделаю всё, чтобы ты была счастлива.

Ты говоришь, что ещё рано, но это не так.
Если мы начнём сейчас, то через год или два будем знать друг друга гораздо лучше,
и наша свадьба станет легче — ведь мы уже будем понимать, любить и уважать друг друга.

Ты рассказывала, что видела много отношений,
где пары ссорились и расставались.
Но уверяю тебя, у нас с тобой так не будет.
Я не позволю этому случиться — я всегда буду стараться,
чтобы у нас всё было хорошо.
Даже если мы поссоримся, мы всё обсудим и помиримся.
Мы не будем отворачиваться друг от друга — я не допущу этого.

Я буду заботиться о тебе, как о цветке,
и обращаться с тобой, как с принцессой.
Ты мне уже очень сильно нравишься,
и я бы хотел, чтобы это было взаимно.

«Посмотрим» — это не ответ.
Нельзя «посмотреть», если ты сама не хочешь.
Просто дай нам шанс.
Не думай о том, что вдруг потом что-то пойдёт не так —
думай о настоящем.
Если тебе сейчас комфортно — зачем думать о плохом?
Всё бывает.

Но, ин ша Аллах, я возьму тебя в жёны
и проживу всю оставшуюся жизнь с тобой.
Потому что я хочу только тебя.
Мне не нужна другая. ❤️`

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex min-h-screen items-center justify-center p-4"
    >
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.button
            key="envelope"
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.1, y: -10 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ y: { duration: 1, repeat: Number.POSITIVE_INFINITY } }}
            className="relative cursor-pointer"
          >
            <div className="text-9xl">💌</div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="absolute inset-0 -z-10 rounded-full bg-pink-300/30 blur-2xl"
            />
          </motion.button>
        ) : (
          <motion.div
            key="letter"
            initial={{ scale: 0, rotateY: 90 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-2xl"
          >
            {/* Paper letter */}
            <motion.div
              className="relative bg-[#faf8f3] p-12 shadow-[0_10px_40px_rgba(0,0,0,0.3),0_2px_8px_rgba(0,0,0,0.2)]"
              style={{
                backgroundImage: `
                  linear-gradient(90deg, rgba(255,240,230,0.3) 1px, transparent 1px),
                  linear-gradient(rgba(255,240,230,0.3) 1px, transparent 1px)
                `,
                backgroundSize: "20px 20px",
                boxShadow: `
                  0 1px 1px rgba(0,0,0,0.15),
                  0 2px 2px rgba(0,0,0,0.15),
                  0 4px 4px rgba(0,0,0,0.15),
                  0 8px 8px rgba(0,0,0,0.15),
                  inset 0 0 100px rgba(255,240,220,0.5)
                `,
              }}
            >
              {/* Close button */}
              <motion.button
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-4 top-4 rounded-full bg-pink-200 p-2 text-pink-600 shadow-md transition-colors hover:bg-pink-300"
              >
                <X className="h-5 w-5" />
              </motion.button>

              {/* Letter content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-4 pr-8 font-serif text-[15px] leading-relaxed text-gray-800"
                style={{ fontFamily: "'Merriweather', 'Georgia', serif" }}
              >
                {letterText.split("\n").map((line, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className={line.trim() === "" ? "h-2" : ""}
                  >
                    {line}
                  </motion.p>
                ))}
              </motion.div>

              {/* Paper fold effect at corners */}
              <div className="absolute right-0 top-0 h-8 w-8 bg-gradient-to-br from-transparent to-gray-300/20" />
              <div className="absolute bottom-0 left-0 h-8 w-8 bg-gradient-to-tr from-transparent to-gray-300/20" />
            </motion.div>

            {/* Soft glow behind paper */}
            <motion.div
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="absolute inset-0 -z-10 bg-gradient-to-br from-pink-200 to-rose-200 blur-3xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
