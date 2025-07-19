"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Heart, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export function MeetOurVolunteers() {
  const volunteers = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Education Coordinator",
      location: "San Francisco, CA",
      image: "/placeholder.svg?height=400&width=400&text=Sarah+Chen",
      bio: "Passionate about making quality education accessible to all children worldwide.",
      yearsActive: 3,
      projectsLed: 12,
      specialty: "Education",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Climate Action Lead",
      location: "Austin, TX",
      image: "/placeholder.svg?height=400&width=400&text=Marcus+Johnson",
      bio: "Environmental scientist dedicated to fighting climate change through community action.",
      yearsActive: 5,
      projectsLed: 18,
      specialty: "Climate",
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Healthcare Advocate",
      location: "Mumbai, India",
      image: "/placeholder.svg?height=400&width=400&text=Priya+Patel",
      bio: "Medical professional working to improve healthcare access in underserved communities.",
      yearsActive: 4,
      projectsLed: 15,
      specialty: "Healthcare",
    },
    {
      id: 4,
      name: "Ahmed Hassan",
      role: "Community Organizer",
      location: "Cairo, Egypt",
      image: "/placeholder.svg?height=400&width=400&text=Ahmed+Hassan",
      bio: "Building bridges between communities to create lasting social change.",
      yearsActive: 6,
      projectsLed: 22,
      specialty: "Community",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

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
  }

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
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-900 text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Heart className="h-4 w-4 mr-2" />
            Our Amazing Team
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            <span className="gradient-text">Meet Our Volunteers</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated individuals from around the world who are making a difference in their communities and beyond
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {volunteers.map((volunteer, index) => (
            <motion.div key={volunteer.id} variants={cardVariants}>
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 floating-card bg-white h-full">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={volunteer.image || "/placeholder.svg"}
                    alt={volunteer.name}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-primary-900 hover:bg-white">{volunteer.specialty}</Badge>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{volunteer.name}</h3>
                    <p className="text-white/90 text-sm">{volunteer.role}</p>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-1 text-gray-600 mb-3">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{volunteer.location}</span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{volunteer.bio}</p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-900">{volunteer.yearsActive}</div>
                      <div className="text-xs text-gray-600">Years Active</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-900">{volunteer.projectsLed}</div>
                      <div className="text-xs text-gray-600">Projects Led</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="bg-primary-50 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <motion.div
                className="w-16 h-16 bg-primary-900 rounded-full flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Users className="h-8 w-8 text-white" />
              </motion.div>
            </div>

            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              <span className="gradient-text">Join Our Volunteer Community</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Be part of a global network of changemakers. Whether you have a few hours a month or want to lead a
              project, there's a place for you in our mission.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-primary-900 hover:bg-primary-800 text-white font-medium px-8 py-4 rounded-full group"
                >
                  <Link href="/volunteer" className="flex items-center gap-2">
                    Become a Volunteer
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary-200 hover:bg-primary-50 font-medium px-8 py-4 rounded-full"
                >
                  <Link href="/volunteer/stories">Read More Stories</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
