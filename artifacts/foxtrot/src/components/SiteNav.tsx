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
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b-4 border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a
          href="/"
          className="text-4xl text-foreground hover:text-primary transition-colors no-underline"
          style={{ fontFamily: "'TAYDumpling', sans-serif", letterSpacing: "0.05em" }}
          data-testid="nav-logo"
        >
          FOXTROT
        </a>

        <nav className="flex items-center gap-6 md:gap-10 font-sans font-medium uppercase text-sm tracking-widest">
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
            className="rounded-none border-2 border-border shadow-xs hover:shadow-sm font-sans uppercase font-bold tracking-widest"
            data-testid="nav-cta"
          >
            Start Project
          </Button>
        </nav>
      </div>
    </header>
  );
}
