const generateSlug = (title: string, year: string) =>
  `${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}-${year}`;

const events = [
  {
    year: "2025",
    title: "Foundation Marks 25 Years of Progress",
    description:
      "Bill Gates Announces Historic Commitment to global health and development, marking a new chapter in our journey.",
    image: "/placeholder.svg?width=800&height=450",
  },
  {
    year: "2024",
    title: "Melinda French Gates Steps Down As Co-Chair",
    description:
      "As co-chair for 24 years, Melinda French Gates set the direction and priorities of the Gates Foundation to address some of the world's largest inequities.",
    image: "/placeholder.svg?width=800&height=450",
  },
  {
    year: "2021",
    title: "Expanding Our Reach",
    description:
      "Launched a new initiative focused on climate change and sustainable agriculture, partnering with local communities.",
    image: "/placeholder.svg?width=800&height=450",
  },
  {
    year: "2019",
    title: "Global Health Breakthrough",
    description:
      "Our funding contributed to a major breakthrough in vaccine development, saving countless lives.",
    image: "/placeholder.svg?width=800&height=450",
  },
  {
    year: "2015",
    title: "The Beginning",
    description:
      "Our foundation was established with a bold mission: to create a world where every person has the opportunity to live a healthy, productive life.",
    image: "/placeholder.svg?width=800&height=450",
  },
  {
    year: "2012",
    title: "Digital Transformation Initiative",
    description:
      "Launched our first digital platform to connect volunteers and resources more effectively.",
    image: "/placeholder.svg?width=800&height=450",
  },
  {
    year: "2008",
    title: "First International Office",
    description:
      "Opened our first international office to better coordinate global efforts and partnerships.",
    image: "/placeholder.svg?width=800&height=450",
  },
  {
    year: "2005",
    title: "Education for All Program",
    description:
      "Launched a major program to improve access to quality education for children in underserved regions.",
    image: "/placeholder.svg?width=800&height=450",
  },
  {
    year: "2000",
    title: "The Founding Vision",
    description:
      "Our journey began with a commitment to address local community needs and foster sustainable change.",
    image: "/placeholder.svg?width=800&height=450",
  },
];

export const timelineEvents = events.map((event) => ({
  ...event,
  slug: generateSlug(event.title, event.year),
  longDescription: `${event.description} This milestone represents a significant step in our ongoing mission. In ${event.year}, we focused on leveraging technology and partnerships to amplify our impact. The '${event.title}' initiative involved collaboration with over a dozen local and international partners, demonstrating our commitment to a unified approach. The outcomes of this project have been documented in several reports and continue to inform our strategy today. We learned valuable lessons about scalability and cultural adaptation, which have been crucial for our subsequent work. The success of this initiative was made possible by the tireless efforts of our team and the generous support of our donors.`,
}));
