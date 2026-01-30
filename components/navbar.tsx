"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Gamepad2, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-purple-500/20 bg-background/60 backdrop-blur-2xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 shadow-lg shadow-purple-500/30"
          >
            <Gamepad2 className="h-5 w-5 text-white" />
          </motion.div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Valsia
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {["Features", "How it Works", "Coming Soon"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="relative text-sm text-muted-foreground hover:text-foreground transition-colors group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-purple-500/10">
              Log in
            </Button>
          </Link>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/signup">
              <Button className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-500 hover:via-pink-500 hover:to-purple-500 text-white font-medium shadow-lg shadow-purple-500/25 animate-gradient">
                <span className="relative z-10">Get Started</span>
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-purple-500/20 bg-background/95 backdrop-blur-xl"
        >
          <div className="flex flex-col gap-4 px-6 py-6">
            {["Features", "How it Works", "Coming Soon"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white mt-2">Get Started</Button>
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
