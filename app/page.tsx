import { AnimatedHeroSection } from "@/components/animated-hero-section"
import { AnimatedFeaturedContent } from "@/components/animated-featured-content"
import { AnimatedImpactStats } from "@/components/animated-impact-stats"
import { ImageCollageSection } from "@/components/image-collage-section"
import { MeetOurVolunteers } from "@/components/meet-our-volunteers"
import { AnimatedLatestNews } from "@/components/animated-latest-news"
import { NewsletterSignup } from "@/components/newsletter-signup"

export default function Home() {
  return (
    <div className="flex flex-col">
      <AnimatedHeroSection />
      <AnimatedImpactStats />
      <AnimatedFeaturedContent />
      <ImageCollageSection />
      <MeetOurVolunteers />
      <AnimatedLatestNews />
      <NewsletterSignup />
    </div>
  )
}
