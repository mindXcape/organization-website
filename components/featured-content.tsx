import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export function FeaturedContent() {
  const featuredItems = [
    {
      id: 1,
      title: "Empowering Communities",
      description: "Supporting grassroots initiatives that build resilient communities",
      image: "/placeholder.svg?height=600&width=800",
      link: "/programs/communities",
    },
    {
      id: 2,
      title: "Knowledge to Act",
      description: "Research and insights that drive meaningful social change",
      image: "/placeholder.svg?height=600&width=800",
      link: "/research",
    },
    {
      id: 3,
      title: "Voices That Matter",
      description: "Amplifying underrepresented voices in global conversations",
      image: "/placeholder.svg?height=600&width=800",
      link: "/stories",
    },
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featuredItems.map((item) => (
            <Link key={item.id} href={item.link} className="group">
              <Card className="overflow-hidden border-none shadow-none transition-all hover:shadow-md">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold tracking-tight mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
