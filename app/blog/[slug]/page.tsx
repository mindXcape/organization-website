import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { timelineEvents } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { SocialShare } from "@/components/blog/social-share";
import { RelatedStories } from "@/components/blog/related-stories";
import { ReadingProgressBar } from "@/components/blog/reading-progress-blog";

export async function generateStaticParams() {
  return timelineEvents.map((event) => ({
    slug: event.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const event = timelineEvents.find((e) => e.slug === params.slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      <ReadingProgressBar />
      <SocialShare title={event.title} />
      <main>
        <div className="relative h-[40vh] md:h-[50vh] w-full">
          <Image
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <div className="relative bg-background">
          <div className="container mx-auto px-4 -mt-16 md:-mt-24">
            <article className="max-w-4xl mx-auto bg-card p-6 sm:p-8 md:p-12 rounded-lg shadow-2xl">
              <div className="mb-8">
                <Button asChild variant="ghost" className="mb-4 -ml-4">
                  <Link href="/our-story">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Our Story
                  </Link>
                </Button>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{event.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{event.readingTime} min read</span>
                  </div>
                </div>

                <h1 className="text-3xl font-extrabold tracking-tight text-primary sm:text-4xl md:text-5xl">
                  {event.title}
                </h1>
              </div>

              <div className="prose prose-lg max-w-none text-foreground/90">
                <p className="lead">{event.description}</p>
                <p>
                  {event.longDescription.substring(event.description.length)}
                </p>
              </div>
            </article>

            <div className="max-w-4xl mx-auto">
              <RelatedStories currentSlug={event.slug} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
