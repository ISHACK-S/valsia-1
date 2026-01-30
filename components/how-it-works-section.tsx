"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Target, BarChart3, Hammer, Globe } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Target,
    title: "Choose or validate a skill",
    description: "Our AI analyzes your interests and market demand to help you pick the most valuable skills.",
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Get career analysis & roadmap",
    description: "Receive a personalized learning path tailored to your goals and current skill level.",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Build real projects with AI guidance",
    description: "Work on portfolio-worthy projects with intelligent mentorship every step of the way.",
  },
  {
    number: "04",
    icon: Globe,
    title: "Showcase your work publicly",
    description: "Display your verified skills and projects to attract employers and opportunities.",
  },
]

export function HowItWorksSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="how-it-works" ref={sectionRef} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-background to-pink-950/20" />

      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Background glows */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-radial from-pink-500/20 via-transparent to-transparent blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.1, 0.2] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-radial from-purple-500/20 via-transparent to-transparent blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-sm font-medium text-blue-300 uppercase tracking-wider">Game Progression</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-balance">
            Your path to{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              victory
            </span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 200 80 Q 400 200 600 160 Q 800 120 1000 240 Q 1200 360 200 400 Q 400 520 600 480"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeDasharray="10 5"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className={`relative ${index % 2 === 1 ? "md:mt-24" : ""}`}
              >
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative p-8 rounded-3xl glass-panel border-purple-500/20 hover:border-pink-500/40 group overflow-hidden"
                >
                  {/* Level badge */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="absolute -top-3 -left-3 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 flex items-center justify-center shadow-xl shadow-purple-500/30 z-10"
                  >
                    <span className="text-xl font-black text-white">{step.number}</span>
                  </motion.div>

                  {/* Icon */}
                  <div className="flex justify-end mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-colors">
                      <step.icon className="h-6 w-6 text-purple-400 group-hover:text-pink-400 transition-colors" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-white transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>

                  {/* XP bar decoration */}
                  <div className="mt-6 h-1.5 bg-purple-500/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(index + 1) * 25}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"
                    />
                  </div>

                  {/* Corner glow */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-pink-500/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
