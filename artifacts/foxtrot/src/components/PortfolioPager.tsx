import { ArrowLeft, ArrowRight, Grid2X2 } from "lucide-react";
import { Link } from "wouter";
import { getAdjacentProjects } from "@/data/portfolio";

type PortfolioPagerProps = {
  slug: string;
};

export default function PortfolioPager({ slug }: PortfolioPagerProps) {
  const { previousProject, nextProject } = getAdjacentProjects(slug);

  if (!previousProject || !nextProject) return null;

  return (
    <nav
      aria-label="Portfolio case study navigation"
      className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] border-2 border-border bg-background"
    >
      <Link
        href={`/work/${previousProject.slug}`}
        className="group flex min-h-28 items-center gap-4 border-b-2 border-border p-5 no-underline transition-colors hover:bg-card md:border-b-0 md:border-r-2"
        data-testid="portfolio-prev"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-border transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <ArrowLeft className="h-5 w-5" />
        </div>
        <div>
          <p className="mb-1 font-display text-xs uppercase tracking-widest text-primary">Previous</p>
          <p className="font-display text-2xl uppercase tracking-tight text-foreground">{previousProject.title}</p>
        </div>
      </Link>

      <Link
        href="/#work"
        className="flex min-h-20 items-center justify-center gap-3 border-b-2 border-border px-6 font-display text-sm uppercase tracking-widest no-underline transition-colors hover:bg-foreground hover:text-background md:border-b-0"
        data-testid="portfolio-all-work"
      >
        <Grid2X2 className="h-5 w-5" />
        All Work
      </Link>

      <Link
        href={`/work/${nextProject.slug}`}
        className="group flex min-h-28 items-center justify-end gap-4 border-border p-5 text-right no-underline transition-colors hover:bg-card md:border-l-2"
        data-testid="portfolio-next"
      >
        <div>
          <p className="mb-1 font-display text-xs uppercase tracking-widest text-primary">Next</p>
          <p className="font-display text-2xl uppercase tracking-tight text-foreground">{nextProject.title}</p>
        </div>
        <div className="flex h-12 w-12 shrink-0 items-center justify-center border-2 border-border transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <ArrowRight className="h-5 w-5" />
        </div>
      </Link>
    </nav>
  );
}
