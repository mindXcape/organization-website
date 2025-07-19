"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function AnimatedHeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100/30" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container relative px-4 md:px-6 py-16 md:py-20 lg:py-24">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-8">
            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-900 text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🌍 Global Impact Foundation
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold tracking-tight leading-tight">
                <span className="gradient-text">Working with visionaries</span>{" "}
                <span className="text-gray-900">
                  on the frontlines of social change worldwide
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                We're building a world where everyone has the power to shape
                their lives and create lasting positive impact in their
                communities.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-primary-900 hover:bg-primary-800 text-white font-medium px-8 py-4 rounded-full group w-full sm:w-auto"
                >
                  <Link
                    href="/about"
                    className="flex items-center gap-2 justify-center"
                  >
                    About Our Mission
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary-200 hover:bg-primary-50 font-medium px-8 py-4 rounded-full group w-full sm:w-auto"
                >
                  <Link
                    href="/support"
                    className="flex items-center gap-2 justify-center"
                  >
                    <Play className="h-4 w-4" />
                    Watch Our Story
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-4 sm:gap-8 pt-4 justify-center sm:justify-start"
              variants={itemVariants}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-900">120+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-900">$250M</div>
                <div className="text-sm text-gray-600">Annual Impact</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-900">50+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
            </motion.div>
          </div>

          <motion.div className="relative" variants={imageVariants}>
            <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-3xl">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-700/20 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              />
              <Image
                src="/images/hero.JPG"
                alt="Diverse group of activists working together for social change"
                fill
                className="object-cover"
                priority
              />

              {/* Floating Play Button */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center z-20"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <motion.button
                  className="w-16 h-16 md:w-20 md:h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Play className="h-6 w-6 md:h-8 md:w-8 text-primary-900 ml-1" />
                </motion.button>
              </motion.div>
            </div>

            {/* Floating Cards - Hidden on small screens */}
            <motion.div
              className="absolute -top-6 -right-6 bg-white rounded-2xl p-3 md:p-4 shadow-xl border border-primary-100 hidden sm:block"
              initial={{ opacity: 0, x: 50, y: -50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-xl md:text-2xl font-bold text-primary-900">
                2M+
              </div>
              <div className="text-xs md:text-sm text-gray-600">
                Lives Impacted
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-primary-900 text-white rounded-2xl p-3 md:p-4 shadow-xl hidden sm:block"
              initial={{ opacity: 0, x: -50, y: 50 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 2.2, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-xl md:text-2xl font-bold">1,500+</div>
              <div className="text-xs md:text-sm opacity-90">
                Global Partners
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
