"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function OriginStory() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2, duration: 0.5 },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section ref={ref} className="w-full py-12 md:py-24 lg:py-32">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container px-4 md:px-6"
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div variants={imageVariant}>
            <Image
              src="/placeholder.svg?width=600&height=600"
              alt="Our Origin"
              width={600}
              height={600}
              className="rounded-xl object-cover w-full h-full shadow-2xl"
            />
          </motion.div>
          <motion.div variants={textVariant} className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              From a Simple Idea
            </h2>
            <div className="border-l-4 border-primary/50 pl-4 italic text-muted-foreground">
              "It all started with a shared belief that we could make a tangible
              difference in the world."
            </div>
            <p className="text-muted-foreground md:text-lg">
              Our organization was born from that simple yet powerful
              conviction. A small group of passionate individuals saw a need and
              decided to act. We pooled our resources, shared our vision, and
              took the first step on a journey that has since impacted thousands
              of lives.
            </p>
            <p className="text-muted-foreground md:text-lg">
              We believe in the power of community and the potential within
              every individual. Our story is not just about what we've done, but
              about the people we've met, the partnerships we've built, and the
              hope we continue to foster.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
