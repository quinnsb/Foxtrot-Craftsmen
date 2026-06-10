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
    summary:
      "A full-service booking experience for a storied Vermont inn with old-world pacing and modern digital craft.",
    deliverables:
      "Website Design, Booking Integration, Brand Photography Direction",
  },
  {
    id: 2,
    title: "Iron & Oak",
    category: "Retail E-Commerce",
    image: "/assets/portfolio-iron-and-oak.png",
    slug: "iron-and-oak",
    client: "Iron & Oak Goods Co.",
    year: "2024",
    summary:
      "A tactile menswear storefront built around waxed canvas, moto culture, product texture, and small-batch storytelling.",
    deliverables:
      "Website Design, E-Commerce Development, Product Photography Art Direction",
  },
  {
    id: 6,
    title: "sōko coffee",
    category: "Specialty Coffee",
    image: "/assets/portfolio-soko-coffee.png",
    slug: "soko-coffee",
    client: "sōko coffee",
    year: "2024",
    summary:
      "A quiet, precise coffee storefront built around ritual, negative space, and a calmer path to ordering.",
    deliverables: "Website Design, Retail UX, Menu System, Editorial Direction",
  },
  {
    id: 3,
    title: "Copperhead Brew Co.",
    category: "Food & Beverage",
    image: "/assets/copperhead/copperhead-hero.png",
    slug: "copperhead-brew",
    client: "Copperhead Brewing Co.",
    year: "2023",
    summary:
      "A rich digital taproom centered on the brewery's tap list, events, and East Nashville character.",
    deliverables:
      "Website Design, Tap List System, Events Calendar Integration",
  },
  {
    id: 4,
    title: "Apex Alpine",
    category: "Outdoor Brand",
    image: "/assets/apex/apex-mountain-hero.png",
    slug: "apex-alpine",
    client: "Apex Alpine Gear",
    year: "2024",
    summary:
      "A data-forward climbing system built around technical specs, alpine testing, and uncompromising product confidence.",
    deliverables:
      "Website Design, E-Commerce, Product Taxonomy, Technical Data System",
  },
  {
    id: 5,
    title: "TIDAL",
    category: "Luxury Surf",
    image: "/assets/tidal/tidal-hero.png",
    slug: "tidal",
    client: "TIDAL",
    year: "2024",
    summary:
      "A cinematic surf and swim storefront balancing technical performance, ocean imagery, and quiet luxury.",
    deliverables: "Website Design, E-Commerce Experience, Editorial Direction",
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
  const index = PORTFOLIO_PROJECTS.findIndex(
    (project) => project.slug === slug,
  );

  if (index === -1) {
    return { previousProject: undefined, nextProject: undefined };
  }

  return {
    previousProject:
      PORTFOLIO_PROJECTS[
        (index - 1 + PORTFOLIO_PROJECTS.length) % PORTFOLIO_PROJECTS.length
      ],
    nextProject: PORTFOLIO_PROJECTS[(index + 1) % PORTFOLIO_PROJECTS.length],
  };
}
