"use client"

import { motion } from "framer-motion"
import { CheckCircle, Map, Code, Sparkles } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const features = [
  {
    icon: CheckCircle,
    title: "Validated Skills",
    description: "AI analyzes market demand to recommend skills actually worth learning.",
    gradient: "from-purple-500 via-violet-500 to-purple-600",
    glowColor: "purple",
    href: "/skills",
  },
  {
    icon: Map,
    title: "Smart Roadmaps",
    description: "Personalized learning paths that evolve as you progress.",
    gradient: "from-pink-500 via-rose-500 to-pink-600",
    glowColor: "pink",
    href: "/roadmaps",
  },
  {
    icon: Code,
    title: "Real Projects",
    description: "Build industry-level projects with AI acting as your mentor.",
    gradient: "from-blue-500 via-indigo-500 to-blue-600",
    glowColor: "blue",
    href: "/projects",
  },
]

export function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="features" className="relative py-32 overflow-hidden">
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-purple-500/20 via-transparent to-transparent blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6"
          >
            <Sparkles className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300 uppercase tracking-wider">Core Features</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black text-balance">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              level up
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link key={feature.title} href={feature.href}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative group cursor-pointer"
              >
                {/* Glow effect behind card */}
                <motion.div
                  animate={{
                    opacity: hoveredIndex === index ? 0.6 : 0,
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  className={`absolute -inset-2 rounded-3xl bg-gradient-to-br ${feature.gradient} blur-2xl transition-all duration-500`}
                />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative h-full p-8 rounded-2xl glass-panel border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
                >
                  {/* Animated border gradient */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-blue-500/10 transition-all duration-500" />

                  <div className="relative z-10">
                    {/* Icon with gradient background */}
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg shadow-purple-500/30`}
                    >
                      <feature.icon className="h-7 w-7 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
