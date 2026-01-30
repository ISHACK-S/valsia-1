"use client"

import { motion } from "framer-motion"
import { LayoutDashboard, BookOpen, Target, TrendingUp, Settings, LogOut } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function DashboardPage() {
  const [user] = useState({ name: "Learner", email: "user@example.com" })

  const quickActions = [
    {
      title: "Start Learning",
      description: "Continue your personalized learning path",
      icon: BookOpen,
      href: "/dashboard/1",
      color: "from-purple-600 to-pink-600",
    },
    {
      title: "View Roadmap",
      description: "Check your skill development roadmap",
      icon: Target,
      href: "/roadmaps",
      color: "from-blue-600 to-cyan-600",
    },
    {
      title: "My Projects",
      description: "Track your project progress",
      icon: TrendingUp,
      href: "/projects",
      color: "from-pink-600 to-rose-600",
    },
    {
      title: "Skills",
      description: "View all your acquired skills",
      icon: BookOpen,
      href: "/skills",
      color: "from-green-600 to-emerald-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950/30 via-background to-blue-950/30">
      {/* Header */}
      <header className="border-b border-purple-500/20 bg-background/60 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
              <LayoutDashboard className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Dashboard
            </span>
          </div>
          <button className="p-2 rounded-lg hover:bg-purple-500/10 transition-colors">
            <Settings className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Welcome back,{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              {user.name}
            </span>
          </h1>
          <p className="text-lg text-muted-foreground">Keep pushing towards your goals. Your journey to mastery continues here.</p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {quickActions.map((action, index) => {
            const Icon = action.icon
            return (
              <Link key={index} href={action.href}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group h-full cursor-pointer"
                >
                  {/* Glow background */}
                  <div className={`absolute -inset-0.5 rounded-xl bg-gradient-to-r ${action.color} opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-300`} />

                  {/* Card */}
                  <div className="relative h-full p-6 rounded-xl border border-purple-500/20 bg-card/50 backdrop-blur-sm hover:border-purple-500/40 transition-colors">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{action.title}</h3>
                    <p className="text-sm text-muted-foreground">{action.description}</p>
                  </div>
                </motion.div>
              </Link>
            )
          })}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: "Skills Learned", value: "12", color: "from-purple-600 to-pink-600" },
            { label: "Projects Completed", value: "5", color: "from-blue-600 to-cyan-600" },
            { label: "Learning Streak", value: "42 days", color: "from-pink-600 to-rose-600" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className={`relative p-6 rounded-xl border border-purple-500/20 bg-gradient-to-br ${stat.color} opacity-10 hover:opacity-20 transition-opacity cursor-pointer`}
            >
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-br opacity-0 group-hover:opacity-40 blur-lg" />
              <div className="relative">
                <p className="text-muted-foreground text-sm mb-2">{stat.label}</p>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  )
}
