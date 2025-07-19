"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export function AnimatedImpactStats() {
  const stats = [
    { value: 120, suffix: "+", label: "Countries", description: "Global reach" },
    { value: 250, suffix: "M", label: "Annual Grants", description: "Investment in change" },
    { value: 1500, suffix: "+", label: "Partners", description: "Collaborative network" },
    { value: 50, suffix: "+", label: "Years of Impact", description: "Decades of experience" },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900" />

      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </div>

      <div className="container relative px-4 md:px-6" ref={ref}>
        <motion.div
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">Our Global Impact</h2>
          <p className="text-lg md:text-xl text-primary-100 max-w-2xl mx-auto">
            For over five decades, we've been working with partners worldwide to create lasting change
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat, index, isInView }: { stat: any; index: number; isInView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const duration = 2000
        const steps = 60
        const increment = stat.value / steps
        let current = 0

        const counter = setInterval(() => {
          current += increment
          if (current >= stat.value) {
            setCount(stat.value)
            clearInterval(counter)
          } else {
            setCount(Math.floor(current))
          }
        }, duration / steps)

        return () => clearInterval(counter)
      }, index * 200)

      return () => clearTimeout(timer)
    }
  }, [isInView, stat.value, index])

  return (
    <motion.div
      className="text-center group"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div className="relative" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
          {count}
          <span className="text-primary-300">{stat.suffix}</span>
        </div>
        <div className="text-base md:text-lg font-medium text-primary-100 mb-1">{stat.label}</div>
        <div className="text-xs md:text-sm text-primary-200 opacity-80">{stat.description}</div>

        {/* Decorative element */}
        <motion.div
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-primary-300 to-transparent"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.5, duration: 0.8 }}
        />
      </motion.div>
    </motion.div>
  )
}
