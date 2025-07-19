import { HeroSection } from "@/components/our-story/hero-section";
import { OriginStory } from "@/components/our-story/origin-story";
import { TimelineSection } from "@/components/our-story/timeline-section";

export default function OurStoryPage() {
  return (
    <main className="flex flex-col items-center bg-background text-foreground">
      <HeroSection />
      <OriginStory />
      <TimelineSection />
    </main>
  );
}
