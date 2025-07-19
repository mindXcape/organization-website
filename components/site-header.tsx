"use client"

import * as React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b bg-white shadow-sm transition-all duration-200"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container flex h-16 md:h-20 items-center">
        <motion.div className="mr-4 md:mr-8" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-serif text-xl md:text-2xl font-bold gradient-text">Global Impact Foundation</span>
          </Link>
        </motion.div>

        <div className="hidden md:flex md:flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-primary-900 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                  What We Do
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/programs/education" title="Education">
                      Supporting educational initiatives worldwide
                    </ListItem>
                    <ListItem href="/programs/climate" title="Climate Action">
                      Addressing climate change challenges
                    </ListItem>
                    <ListItem href="/programs/equality" title="Social Equality">
                      Promoting equality and human rights
                    </ListItem>
                    <ListItem href="/programs/health" title="Health Access">
                      Improving healthcare accessibility
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-primary-900 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                  Where We Work
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/regions/africa" title="Africa">
                      Our initiatives across African nations
                    </ListItem>
                    <ListItem href="/regions/asia" title="Asia">
                      Programs throughout Asian countries
                    </ListItem>
                    <ListItem href="/regions/americas" title="Americas">
                      Work in North and South America
                    </ListItem>
                    <ListItem href="/regions/europe" title="Europe">
                      European partnerships and programs
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-primary-900 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                  Our Learnings
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/research" title="Research">
                      Our latest research findings
                    </ListItem>
                    <ListItem href="/reports" title="Reports">
                      Annual and special reports
                    </ListItem>
                    <ListItem href="/case-studies" title="Case Studies">
                      Success stories and lessons learned
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-primary-900 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                  News & Stories
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/news" title="Latest News">
                      Recent updates and announcements
                    </ListItem>
                    <ListItem href="/blog" title="Blog">
                      Insights from our team and partners
                    </ListItem>
                    <ListItem href="/events" title="Events">
                      Upcoming and past events
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-primary-900 bg-transparent hover:bg-transparent data-[state=open]:bg-transparent">
                  About Us
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem href="/about/mission" title="Our Mission">
                      What drives our organization
                    </ListItem>
                    <ListItem href="/about/team" title="Our Team">
                      Meet the people behind our work
                    </ListItem>
                    <ListItem href="/about/partners" title="Partners">
                      Organizations we collaborate with
                    </ListItem>
                    <ListItem href="/about/careers" title="Careers">
                      Join our dedicated team
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:flex items-center ml-8">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="sm"
              className="bg-primary-900 hover:bg-primary-800 text-white font-medium px-6 py-2 rounded-full"
            >
              <Link href="/donate">Donate Now</Link>
            </Button>
          </motion.div>
        </div>

        <div className="flex items-center ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="ghost" size="icon" className="md:hidden hover:bg-primary-50">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </motion.div>
            </SheetTrigger>
            <SheetContent side="right">
              <MobileNav />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { title: string }>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <motion.a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary-50 hover:text-primary-900 focus:bg-primary-50 focus:text-primary-900",
              className,
            )}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </motion.a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

function MobileNav() {
  return (
    <div className="flex flex-col space-y-4 py-4">
      <Link href="/" className="font-serif text-xl font-bold gradient-text">
        Global Impact Foundation
      </Link>
      <div className="flex flex-col space-y-3">
        <MobileNavGroup title="What We Do">
          <Link href="/programs/education" className="py-2 text-sm hover:text-primary-900">
            Education
          </Link>
          <Link href="/programs/climate" className="py-2 text-sm hover:text-primary-900">
            Climate Action
          </Link>
          <Link href="/programs/equality" className="py-2 text-sm hover:text-primary-900">
            Social Equality
          </Link>
          <Link href="/programs/health" className="py-2 text-sm hover:text-primary-900">
            Health Access
          </Link>
        </MobileNavGroup>

        <MobileNavGroup title="Where We Work">
          <Link href="/regions/africa" className="py-2 text-sm hover:text-primary-900">
            Africa
          </Link>
          <Link href="/regions/asia" className="py-2 text-sm hover:text-primary-900">
            Asia
          </Link>
          <Link href="/regions/americas" className="py-2 text-sm hover:text-primary-900">
            Americas
          </Link>
          <Link href="/regions/europe" className="py-2 text-sm hover:text-primary-900">
            Europe
          </Link>
        </MobileNavGroup>

        <MobileNavGroup title="Our Learnings">
          <Link href="/research" className="py-2 text-sm hover:text-primary-900">
            Research
          </Link>
          <Link href="/reports" className="py-2 text-sm hover:text-primary-900">
            Reports
          </Link>
          <Link href="/case-studies" className="py-2 text-sm hover:text-primary-900">
            Case Studies
          </Link>
        </MobileNavGroup>

        <MobileNavGroup title="News & Stories">
          <Link href="/news" className="py-2 text-sm hover:text-primary-900">
            Latest News
          </Link>
          <Link href="/blog" className="py-2 text-sm hover:text-primary-900">
            Blog
          </Link>
          <Link href="/events" className="py-2 text-sm hover:text-primary-900">
            Events
          </Link>
        </MobileNavGroup>

        <MobileNavGroup title="About Us">
          <Link href="/about/mission" className="py-2 text-sm hover:text-primary-900">
            Our Mission
          </Link>
          <Link href="/about/team" className="py-2 text-sm hover:text-primary-900">
            Our Team
          </Link>
          <Link href="/about/partners" className="py-2 text-sm hover:text-primary-900">
            Partners
          </Link>
          <Link href="/about/careers" className="py-2 text-sm hover:text-primary-900">
            Careers
          </Link>
        </MobileNavGroup>
      </div>
      <div className="pt-4 border-t border-primary-100">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            asChild
            size="sm"
            className="w-full bg-primary-900 hover:bg-primary-800 text-white font-medium rounded-full"
          >
            <Link href="/donate">Donate Now</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

function MobileNavGroup({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="border-b border-primary-100 pb-3">
      <button
        className="flex w-full items-center justify-between py-2 text-left hover:text-primary-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{title}</span>
        <span className="text-sm">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="mt-2 flex flex-col pl-4">{children}</div>}
    </div>
  )
}
