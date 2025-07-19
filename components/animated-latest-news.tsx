"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";

export function AnimatedLatestNews() {
  const newsItems = [
    {
      id: 1,
      title:
        "New Initiative Launches to Address Climate Crisis in Vulnerable Regions",
      excerpt:
        "Our foundation announces a $50 million commitment to support climate resilience projects across developing nations.",
      category: "Climate Action",
      date: "June 2, 2025",
      image: "/images/impact-one.JPG",
      featured: true,
    },
    {
      id: 2,
      title: "Annual Report Highlights Progress in Educational Equity",
      excerpt:
        "Our efforts have helped provide quality education to over 2 million children worldwide this year.",
      category: "Education",
      date: "May 28, 2025",
      image: "/images/impact-two.JPG",
      featured: false,
    },
    {
      id: 3,
      title:
        "Partnership Formed to Advance Healthcare Access in Rural Communities",
      excerpt:
        "A new collaborative effort aims to bring essential healthcare services to underserved areas.",
      category: "Healthcare",
      date: "May 15, 2025",
      image: "/images/impact-three.JPG",
      featured: false,
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
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-primary-50/30 to-white">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
              <span className="gradient-text">Latest News</span>{" "}
              <span className="text-gray-900">& Stories</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Stay updated with our recent initiatives and global impact
            </p>
          </div>

          <motion.div
            className="mt-6 md:mt-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-primary-900 font-medium hover:text-primary-700 transition-colors group"
            >
              View all news
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Featured Article */}
          <motion.div className="lg:col-span-2" variants={cardVariants}>
            <Link
              href={`/news/${newsItems[0].id}`}
              className="group block h-full"
            >
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 floating-card bg-white h-full">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                  <Image
                    src={newsItems[0].image || "/placeholder.svg"}
                    alt={newsItems[0].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
                    <Badge className="bg-primary-900 text-white hover:bg-primary-800">
                      {newsItems[0].category}
                    </Badge>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 line-clamp-2">
                      {newsItems[0].title}
                    </h3>
                    <div className="flex items-center gap-2 text-white/80">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{newsItems[0].date}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-4 sm:p-6">
                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {newsItems[0].excerpt}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </motion.div>

          {/* Side Articles */}
          <div className="space-y-6">
            {newsItems.slice(1).map((item, index) => (
              <motion.div key={item.id} variants={cardVariants}>
                <Link href={`/news/${item.id}`} className="group block">
                  <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all duration-300 floating-card bg-white">
                    <div className="flex flex-col sm:flex-row">
                      <div className="relative w-full sm:w-24 h-32 sm:h-24 flex-shrink-0 overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      <CardContent className="flex-1 p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {item.category}
                          </Badge>
                          <span className="text-xs text-gray-500">
                            {item.date}
                          </span>
                        </div>
                        <h4 className="font-bold text-sm line-clamp-2 mb-2 group-hover:text-primary-900 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-600 line-clamp-2">
                          {item.excerpt}
                        </p>
                      </CardContent>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
