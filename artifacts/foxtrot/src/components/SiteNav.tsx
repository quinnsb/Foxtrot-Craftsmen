import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";

export default function SiteNav() {
  const [location] = useLocation();
  const isHome = location === "/";
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const navTo = (section: string) => {
    if (isHome) {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${section}`;
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;

      if (Math.abs(delta) > 8) {
        setIsVisible(delta < 0 || currentScrollY < 80);
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm transition-transform duration-300 ease-out",
        isVisible ? "translate-y-0" : "-translate-y-full",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a
          href="/"
          className="block no-underline transition-opacity hover:opacity-70"
          data-testid="nav-logo"
        >
          <img
            src="/assets/foxtrot-nav-wordmark.png"
            alt="FOXTROT"
            className="h-8 w-auto"
          />
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
