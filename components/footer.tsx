"use client"

import { motion } from "framer-motion"
import { Gamepad2 } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative border-t border-purple-500/20 py-12 overflow-hidden"
    >
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 shadow-lg shadow-purple-500/30"
            >
              <Gamepad2 className="h-4 w-4 text-white" />
            </motion.div>
            <span className="text-lg font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Valsia
            </span>
          </Link>

          <div className="flex items-center gap-8">
            {["Privacy", "Terms", "Contact"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-sm text-muted-foreground hover:text-purple-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">© 2026 Valsia. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  )
}
