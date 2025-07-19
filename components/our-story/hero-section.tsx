"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative w-full py-24 md:py-40 lg:py-56 text-center overflow-hidden">
      <div className="absolute inset-0 bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5eaff,transparent)]" />
      </div>
      <div className="container relative px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary">
            Our Story
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Discover the journey, milestones, and principles that shape our work
            and drive our mission forward.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
