"use client"

import type React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Sparkles } from "lucide-react"

interface AuthCardProps {
  children: React.ReactNode
  title: string
  subtitle: string
  footerText: string
  footerLink: string
  footerLinkText: string
}

export function AuthCard({ children, title, subtitle, footerText, footerLink, footerLinkText }: AuthCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative w-full max-w-md"
    >
      {/* Outer glow */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-30 blur-xl" />

      {/* Main card */}
      <div className="relative glass-panel rounded-2xl p-8 border border-purple-500/20">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 mb-4 neon-border"
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground mt-2"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Form content */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          {children}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-center text-sm text-muted-foreground"
        >
          {footerText}{" "}
          <Link href={footerLink} className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
            {footerLinkText}
          </Link>
        </motion.div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-purple-500/50 rounded-tl-2xl" />
      <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-pink-500/50 rounded-tr-2xl" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-blue-500/50 rounded-bl-2xl" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-purple-500/50 rounded-br-2xl" />
    </motion.div>
  )
}
