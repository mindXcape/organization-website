"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { timelineEvents } from "@/lib/data";
import { Button } from "@/components/ui/button";

const TimelineEvent = ({ event }: { event: (typeof timelineEvents)[0] }) => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      id={event.year}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className="mb-24 last:mb-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="space-y-4 md:order-2">
          <p className="font-serif text-7xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary/20 to-primary/5">
            {event.year}
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-primary">
            {event.title}
          </h3>
          <p className="text-muted-foreground">{event.description}</p>
          <Button
            asChild
            variant="outline"
            className="mt-4 group bg-transparent"
          >
            <Link href={`/blog/${event.slug}`}>
              Read More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
        <div className="relative md:order-1 group">
          <Link href={`/blog/${event.slug}`}>
            <Image
              src={event.image || "/placeholder.svg"}
              alt={event.title}
              width={500}
              height={300}
              className="rounded-lg object-cover w-full h-full shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
            />
          </Link>
        </div>
      </div>
      <hr className="mt-12 border-border/20" />
    </motion.div>
  );
};

export function TimelineSection() {
  const [activeYear, setActiveYear] = useState(timelineEvents[0].year);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const intersectingEntry = entries.find((entry) => entry.isIntersecting);
        if (intersectingEntry) {
          setActiveYear(intersectingEntry.target.id);
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );

    const currentObserver = observerRef.current;
    timelineEvents.forEach((event) => {
      const el = document.getElementById(event.year);
      if (el) currentObserver.observe(el);
    });

    return () => currentObserver.disconnect();
  }, []);

  const scrollToYear = (year: string) => {
    const element = document.getElementById(year);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-primary/5">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Timeline
          </h2>
          <div className="w-24 h-1 bg-primary/80 mx-auto mt-2 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="md:col-span-1 md:sticky top-24 h-fit">
            <ul className="space-y-2">
              {timelineEvents.map((event) => (
                <li key={event.year}>
                  <button
                    onClick={() => scrollToYear(event.year)}
                    className={cn(
                      "w-full text-left p-2 rounded-md transition-all duration-300 ease-in-out relative text-muted-foreground hover:text-primary",
                      { "font-bold text-primary": activeYear === event.year }
                    )}
                  >
                    <AnimatePresence>
                      {activeYear === event.year && (
                        <motion.div
                          layoutId="activeYearIndicator"
                          className="absolute left-0 top-0 bottom-0 w-full bg-primary/10 rounded-md"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        ></motion.div>
                      )}
                    </AnimatePresence>
                    <span className="relative ml-4">{event.year}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>
          <main className="md:col-span-3">
            {timelineEvents.map((event) => (
              <TimelineEvent key={event.year} event={event} />
            ))}
          </main>
        </div>
      </div>
    </section>
  );
}
