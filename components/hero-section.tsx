import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative">
      <div className="container px-4 md:px-6 py-10 md:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tighter">
                Working with visionaries on the frontlines of social change
                worldwide
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                We're building a world where everyone has the power to shape
                their lives.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="font-medium">
                <Link href="/about">About Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/support">Support Our Work</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-lg">
            <Image
              src="/images/hero.JPG"
              alt="Diverse group of activists working together for social change"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-4 right-4">
              <Button
                variant="secondary"
                size="icon"
                className="rounded-full bg-background/80 backdrop-blur-sm"
              >
                <span className="sr-only">Pause slideshow</span>
                <span className="h-4 w-4 block border-l-2 border-r-2 border-current"></span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
}
