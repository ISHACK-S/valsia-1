"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Rocket, Stars } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/40 via-background to-background" />

      {/* Multiple animated glow orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 blur-3xl rounded-full"
      />

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/80" />

      {/* Star particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          >
            <Stars className="h-3 w-3 text-purple-400/60" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-12 md:p-16 rounded-3xl glass-panel border-purple-500/30 overflow-hidden"
        >
          {/* Animated border glow */}
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            className="absolute inset-0 rounded-3xl border-2 border-purple-500/50"
          />

          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-blue-500/10" />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [-5, 5, -5], rotate: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="inline-flex p-5 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 mb-8 shadow-2xl shadow-purple-500/40"
            >
              <Rocket className="h-10 w-10 text-white" />
            </motion.div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative text-3xl md:text-5xl font-black mb-6 text-balance"
          >
            Stop Guessing. Start Building{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Skills That Matter.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
          >
            Join thousands of learners who are transforming their careers with AI-powered skill development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex flex-col items-center gap-4"
          >
            <Link href="/signup">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-500 hover:via-pink-500 hover:to-purple-500 text-white font-bold px-12 py-7 text-lg group shadow-2xl shadow-purple-500/40 animate-gradient"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Create Free Account
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Button>
              </motion.div>
            </Link>
            <span className="text-sm text-muted-foreground">No credit card required</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
