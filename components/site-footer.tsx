import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="font-serif text-xl font-bold gradient-text">
              Global Impact Foundation
            </Link>
            <p className="mt-3 text-muted-foreground">
              Working with visionaries on the frontlines of social change worldwide.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Link href="#" className="text-muted-foreground hover:text-primary-900 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary-900 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary-900 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary-900 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary-900 transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-3">Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/programs/education"
                  className="text-muted-foreground hover:text-primary-900 transition-colors"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/climate"
                  className="text-muted-foreground hover:text-primary-900 transition-colors"
                >
                  Climate Action
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/equality"
                  className="text-muted-foreground hover:text-primary-900 transition-colors"
                >
                  Social Equality
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/health"
                  className="text-muted-foreground hover:text-primary-900 transition-colors"
                >
                  Health Access
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-3">About</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about/mission" className="text-muted-foreground hover:text-primary-900 transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/about/team" className="text-muted-foreground hover:text-primary-900 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/about/partners" className="text-muted-foreground hover:text-primary-900 transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/about/careers" className="text-muted-foreground hover:text-primary-900 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/about/contact" className="text-muted-foreground hover:text-primary-900 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/research" className="text-muted-foreground hover:text-primary-900 transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/reports" className="text-muted-foreground hover:text-primary-900 transition-colors">
                  Reports
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-primary-900 transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-primary-900 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-muted-foreground hover:text-primary-900 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Global Impact Foundation. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary-900 transition-colors">
              Terms of Use
            </Link>
            <Link
              href="/accessibility"
              className="text-sm text-muted-foreground hover:text-primary-900 transition-colors"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
