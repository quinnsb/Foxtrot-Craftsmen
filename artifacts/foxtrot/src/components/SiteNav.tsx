import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function SiteNav() {
  const [location] = useLocation();
  const isHome = location === "/";

  const navTo = (section: string) => {
    if (isHome) {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${section}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a
          href="/"
          className="font-sans text-3xl font-semibold uppercase tracking-tight text-foreground no-underline transition-colors hover:text-primary"
          data-testid="nav-logo"
        >
          FOXTROT
        </a>

        <nav className="flex items-center gap-6 font-mono text-[11px] font-medium uppercase tracking-tight md:gap-10">
          <button
            onClick={() => navTo("work")}
            className="hover:text-primary transition-colors"
            data-testid="nav-link-work"
          >
            Work
          </button>
          <button
            onClick={() => navTo("services")}
            className="hover:text-primary transition-colors hidden sm:block"
            data-testid="nav-link-services"
          >
            Services
          </button>
          <button
            onClick={() => navTo("about")}
            className="hover:text-primary transition-colors hidden md:block"
            data-testid="nav-link-about"
          >
            About
          </button>
          <Button
            onClick={() => navTo("contact")}
            className="h-10 rounded-none border border-border px-5 font-mono text-[11px] font-medium uppercase tracking-tight shadow-none hover:shadow-xs"
            data-testid="nav-cta"
          >
            Start Project
          </Button>
        </nav>
      </div>
    </header>
  );
}
