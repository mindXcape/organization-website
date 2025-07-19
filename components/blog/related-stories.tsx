import Link from "next/link";
import Image from "next/image";
import { timelineEvents } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

export function RelatedStories({ currentSlug }: { currentSlug: string }) {
  const related = timelineEvents
    .filter((event) => event.slug !== currentSlug)
    .slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div className="mt-16 md:mt-24 py-16 border-t border-border/20">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">
        Related Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {related.map((event) => (
          <Link href={`/blog/${event.slug}`} key={event.slug} className="group">
            <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground">{event.year}</p>
                  <h3 className="font-bold mt-1 text-lg group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
