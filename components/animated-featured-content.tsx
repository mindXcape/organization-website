"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function AnimatedFeaturedContent() {
  const featuredItems = [
    {
      id: 1,
      title: "Empowering Communities",
      description:
        "Supporting grassroots initiatives that build resilient communities and foster sustainable development.",
      image: "/images/community-1.JPG",
      link: "/programs/communities",
      gradient: "from-primary-500 to-primary-700",
    },
    {
      id: 2,
      title: "Knowledge to Act",
      description:
        "Research and insights that drive meaningful social change and inform policy decisions worldwide.",
      image: "/images/image-one.JPG",
      link: "/research",
      gradient: "from-primary-600 to-primary-800",
    },
    {
      id: 3,
      title: "Voices That Matter",
      description:
        "Amplifying underrepresented voices in global conversations and decision-making processes.",
      image: "/images/voice-matters.JPG",
      link: "/stories",
      gradient: "from-primary-700 to-primary-900",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-primary-50/30">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            <span className="gradient-text">Our Impact Areas</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we're creating lasting change across communities,
            research, and advocacy
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredItems.map((item, index) => (
            <motion.div key={item.id} variants={cardVariants}>
              <Link href={item.link} className="group block h-full">
                <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 floating-card bg-white/80 backdrop-blur-sm h-full">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20 z-10`}
                    />
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay Content */}
                    <motion.div
                      className="absolute top-4 right-4 z-20"
                      whileHover={{ scale: 1.1, rotate: 45 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <ArrowRight className="h-5 w-5 text-primary-900" />
                      </div>
                    </motion.div>
                  </div>

                  <CardContent className="p-6 md:p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                    >
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary-900 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
