"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Play, Heart, Users, Globe } from "lucide-react";

export function ImageCollageSection() {
  const images = [
    {
      id: 1,
      src: "/images/education-for-all.JPG",
      alt: "Children in classroom learning",
      title: "Education for All",
      category: "Education",
      size: "large",
    },
    {
      id: 2,
      src: "/images/our-impact-one.JPG",
      alt: "Environmental conservation project",
      title: "Climate Action",
      category: "Environment",
      size: "medium",
    },
    {
      id: 3,
      src: "/images/our-impact-two.JPG",
      alt: "Healthcare workers helping community",
      title: "Healthcare Access",
      category: "Health",
      size: "tall",
    },
    {
      id: 4,
      src: "/images/our-impact-three.JPG",
      alt: "Community gathering and celebration",
      title: "Community Building",
      category: "Community",
      size: "medium",
    },
    {
      id: 5,
      src: "/images/our-impact-four.JPG",
      alt: "Women empowerment workshop",
      title: "Women Empowerment",
      category: "Equality",
      size: "small",
    },
    {
      id: 6,
      src: "/images/our-impact-five.JPG",
      alt: "Young leaders in action",
      title: "Youth Leadership",
      category: "Leadership",
      size: "wide",
    },
  ];

  const stats = [
    { icon: Heart, value: "2M+", label: "Lives Impacted" },
    { icon: Users, value: "15K+", label: "Volunteers" },
    { icon: Globe, value: "120+", label: "Countries" },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-primary-50/30 to-white">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            <span className="gradient-text">Our Impact</span>{" "}
            <span className="text-gray-900">in Action</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Witness the transformative power of collective action across
            communities worldwide
          </p>
        </motion.div>

        {/* Image Collage Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 mb-12">
          {/* Large featured image */}
          <motion.div
            className="col-span-2 row-span-2 relative group overflow-hidden rounded-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative aspect-square">
              <Image
                src={images[0].src || "/placeholder.svg"}
                alt={images[0].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute top-4 left-4">
                <Badge className="bg-white/90 text-primary-900">
                  {images[0].category}
                </Badge>
              </div>

              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Play className="h-8 w-8 text-primary-900 ml-1" />
                </div>
              </motion.div>

              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold text-white mb-1">
                  {images[0].title}
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Medium images */}
          {images.slice(1, 3).map((image, index) => (
            <motion.div
              key={image.id}
              className="col-span-1 md:col-span-2 relative group overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.3, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <div className="absolute top-3 left-3">
                  <Badge className="bg-white/90 text-primary-900 text-xs">
                    {image.category}
                  </Badge>
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <h4 className="text-sm font-bold text-white">
                    {image.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Remaining images */}
          {images.slice(3).map((image, index) => (
            <motion.div
              key={image.id}
              className="col-span-1 md:col-span-2 lg:col-span-2 relative group overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 + 0.6, duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                <div className="absolute top-3 left-3">
                  <Badge className="bg-white/90 text-primary-900 text-xs">
                    {image.category}
                  </Badge>
                </div>

                <div className="absolute bottom-3 left-3 right-3">
                  <h4 className="text-sm font-bold text-white">
                    {image.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-200 transition-colors"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="h-8 w-8 text-primary-900" />
              </motion.div>
              <div className="text-3xl md:text-4xl font-bold text-primary-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
