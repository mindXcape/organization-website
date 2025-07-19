import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function LatestNews() {
  const newsItems = [
    {
      id: 1,
      title:
        "New Initiative Launches to Address Climate Crisis in Vulnerable Regions",
      excerpt:
        "Our foundation announces a $50 million commitment to support climate resilience projects.",
      category: "Climate Action",
      date: "June 2, 2025",
      image: "/images/impact-one.JPG",
    },
    {
      id: 2,
      title: "Annual Report Highlights Progress in Educational Equity",
      excerpt:
        "Our efforts have helped provide quality education to over 2 million children worldwide.",
      category: "Education",
      date: "May 28, 2025",
      image: "/images/impact-two.JPG",
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
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Latest News & Stories
            </h2>
            <p className="text-muted-foreground mt-2">
              Stay updated with our recent initiatives and impact
            </p>
          </div>
          <Link
            href="/news"
            className="text-primary font-medium mt-4 md:mt-0 hover:underline"
          >
            View all news
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  priority={false}
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{item.category}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2">
                  {item.excerpt}
                </p>
                <Link
                  href={`/news/${item.id}`}
                  className="text-primary font-medium mt-4 inline-block hover:underline"
                >
                  Read more
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
