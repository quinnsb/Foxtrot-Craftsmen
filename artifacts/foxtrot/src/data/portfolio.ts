export type PortfolioProject = {
  id: number;
  title: string;
  category: string;
  image: string;
  slug: string;
  client: string;
  year: string;
  summary: string;
  deliverables: string;
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 1,
    title: "The Heritage Inn",
    category: "Hospitality",
    image: "/assets/portfolio-heritage-inn.png",
    slug: "heritage-inn",
    client: "The Heritage Inn",
    year: "2023",
    summary: "A full-service booking experience for a storied Vermont inn with old-world pacing and modern digital craft.",
    deliverables: "Website Design, Booking Integration, Brand Photography Direction",
  },
  {
    id: 2,
    title: "Iron & Oak",
    category: "Retail E-Commerce",
    image: "/assets/portfolio-iron-and-oak.png",
    slug: "iron-and-oak",
    client: "Iron & Oak Goods Co.",
    year: "2024",
    summary: "A clean, editorial storefront for a made-in-America apparel brand built around product clarity and purpose.",
    deliverables: "Website Design, E-Commerce Development, Product Photography Art Direction",
  },
  {
    id: 3,
    title: "Copperhead Brew Co.",
    category: "Food & Beverage",
    image: "/assets/portfolio-copperhead-brew.png",
    slug: "copperhead-brew",
    client: "Copperhead Brewing Co.",
    year: "2023",
    summary: "A rich digital taproom centered on the brewery's tap list, events, and East Nashville character.",
    deliverables: "Website Design, Tap List System, Events Calendar Integration",
  },
  {
    id: 4,
    title: "Apex Alpine",
    category: "Outdoor Brand",
    image: "/assets/portfolio-apex-alpine.png",
    slug: "apex-alpine",
    client: "Apex Alpine Gear",
    year: "2024",
    summary: "A rugged technical storefront for alpine gear, built to feel direct, bold, and field-tested.",
    deliverables: "Website Design, E-Commerce, Product Taxonomy, Email Marketing",
  },
  {
    id: 5,
    title: "Sterling & Wright",
    category: "Legal Services",
    image: "/assets/portfolio-sterling-wright.png",
    slug: "sterling-wright",
    client: "Sterling & Wright LLP",
    year: "2023",
    summary: "An authoritative law-firm presence with clear practice navigation and consultation-focused architecture.",
    deliverables: "Website Design, CMS Integration, Case Study Framework",
  },
  {
    id: 6,
    title: "Timber Steakhouse",
    category: "Restaurant",
    image: "/assets/portfolio-timber-steakhouse.png",
    slug: "timber-steakhouse",
    client: "Timber Steakhouse & Bar",
    year: "2024",
    summary: "An atmospheric restaurant site designed around mood, menu clarity, and reservation momentum.",
    deliverables: "Website Design, Reservation Integration, Menu CMS, Email Capture",
  },
];

export const PORTFOLIO_CATEGORIES = [
  "All",
  ...Array.from(new Set(PORTFOLIO_PROJECTS.map((project) => project.category))),
];

export function getProjectBySlug(slug: string) {
  return PORTFOLIO_PROJECTS.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = PORTFOLIO_PROJECTS.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return { previousProject: undefined, nextProject: undefined };
  }

  return {
    previousProject: PORTFOLIO_PROJECTS[(index - 1 + PORTFOLIO_PROJECTS.length) % PORTFOLIO_PROJECTS.length],
    nextProject: PORTFOLIO_PROJECTS[(index + 1) % PORTFOLIO_PROJECTS.length],
  };
}
