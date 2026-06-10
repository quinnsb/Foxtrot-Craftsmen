import { ArrowLeft, Coffee, MapPin, ShoppingBag } from "lucide-react";
import { Link } from "wouter";
import SiteNav from "@/components/SiteNav";
import PortfolioPager from "@/components/PortfolioPager";

const menuItems = [
  ["pour over · single origin", "8.0"],
  ["espresso · kyoto roast", "4.5"],
  ["macchiato", "5.0"],
  ["matcha · uji ceremonial", "7.5"],
  ["mizudashi · cold brew", "6.5"],
  ["seasonal · botanical infusion", "9.0"],
];

const sokoNotes = [
  {
    number: "01",
    title: "kyoto lab",
    text: "nakagyo ward, kurasuma st. open daily 08:00 - 18:00",
  },
  {
    number: "02",
    title: "ritual toolset",
    text: "architectural equipment designed for domestic tranquility. available for global shipping.",
  },
  {
    number: "03",
    title: "journal",
    text: "essays on slow living, the chemistry of extraction, and the evolution of stillness.",
  },
];

function MockSokoCoffee() {
  return (
    <div
      className="min-h-[2200px] overflow-hidden bg-[#fff8f6] text-[#221a17]"
      style={{
        fontFamily: "Inter, Helvetica, Arial, sans-serif",
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(85, 67, 62, 0.045) 1px, transparent 0)",
        backgroundSize: "20px 20px",
      }}
      data-testid="soko-mock"
    >
      <nav className="sticky top-0 z-20 border-b border-[#221a17]/10 bg-[#fff8f6]/90 px-6 py-5 backdrop-blur-md md:px-16">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-8">
          <div className="flex min-w-0 items-center gap-8">
            <p className="truncate text-lg font-light lowercase tracking-[0.12em]">
              sōko coffee
            </p>
            <div className="hidden items-center gap-6 text-[11px] font-light lowercase tracking-[0.18em] text-[#55433e] md:flex">
              <span>journal</span>
              <span>locations</span>
              <span>ritual</span>
              <span className="font-medium text-[#95442d]">order</span>
            </div>
          </div>
          <ShoppingBag className="h-5 w-5 shrink-0 stroke-[1.4] text-[#221a17]" />
        </div>
      </nav>

      <main>
        <header className="flex min-h-[780px] flex-col">
          <div className="min-h-[505px] flex-[2] overflow-hidden">
            <img
              alt="Ceramic coffee cup on linen"
              className="h-full w-full object-cover grayscale-[0.12] contrast-[1.03]"
              src="/assets/soko-cup-hero.png"
            />
          </div>
          <div className="relative flex flex-[1] flex-col items-center justify-center bg-[#f2efe9] px-6 py-20 text-center">
            <h1 className="mb-2 text-4xl font-extralight lowercase tracking-[0.22em] md:text-6xl">
              sōko coffee
            </h1>
            <p
              className="text-2xl font-thin tracking-[0.46em] text-[#55433e]"
              style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
            >
              倉庫
            </p>
            <div className="absolute bottom-0 left-16 right-16 h-px bg-[#221a17]/10" />
          </div>
        </header>

        <section className="mx-auto max-w-6xl px-6 py-24 md:px-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[#55433e]">
                the philosophy
              </p>
              <h2 className="text-2xl font-light leading-relaxed tracking-[0.04em]">
                precision in stillness.
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="max-w-2xl text-base font-light leading-8 tracking-[0.02em] text-[#55433e] md:text-lg">
                rooted in the japanese concept of ma, the space between. we
                believe the ritual of coffee is as significant as the origin of
                the bean. each cup is a study in architectural balance and
                intentional restraint.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#f2efe9]/70 px-6 py-28 md:px-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[#55433e]">
                curation
              </p>
              <div className="h-px w-24 bg-[#221a17]/10" />
            </div>
            <div className="grid grid-cols-1 gap-x-20 md:grid-cols-2">
              {menuItems.map(([name, price]) => (
                <div key={name} className="border-b border-[#221a17]/10">
                  <div className="flex items-baseline justify-between gap-6 py-6">
                    <span
                      className="font-light lowercase tracking-[0.1em]"
                      style={{
                        fontFamily: "'Noto Sans JP', Inter, sans-serif",
                      }}
                    >
                      {name}
                    </span>
                    <span className="font-light tracking-[0.02em]">
                      {price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full">
          <img
            alt="Barista preparing coffee"
            className="block h-[560px] w-full object-cover grayscale-[0.08]"
            src="/assets/soko-barista-ritual.png"
          />
        </section>

        <section className="mx-auto max-w-6xl px-6 py-28 md:px-16">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-3">
            {sokoNotes.map((note) => (
              <article key={note.number}>
                <span className="mb-6 block text-xs font-medium tracking-[0.16em] text-[#95442d]">
                  {note.number}
                </span>
                <h3 className="mb-5 text-2xl font-light lowercase tracking-[0.04em]">
                  {note.title}
                </h3>
                <p className="font-light leading-8 tracking-[0.02em] text-[#55433e]">
                  {note.text}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[#221a17]/10 bg-[#fff8f6] px-6 py-12 md:px-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-3 text-lg font-light lowercase tracking-[0.12em]">
              sōko coffee
            </p>
            <p className="flex items-center gap-2 text-xs lowercase tracking-[0.15em] text-[#55433e]">
              <MapPin className="h-4 w-4 stroke-[1.4]" />
              kyoto · los angeles · online
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex flex-wrap gap-8 text-xs lowercase tracking-[0.15em] text-[#474743]">
              <span>privacy</span>
              <span>wholesale</span>
              <span>contact</span>
            </div>
            <p className="flex items-center gap-2 text-xs lowercase tracking-[0.15em] text-[#474743]/70">
              <Coffee className="h-4 w-4 stroke-[1.4]" />
              precision in stillness.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function TimberSteakhouse() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Link
          href="/#work"
          className="mb-12 inline-flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-widest transition-colors hover:text-primary group"
          data-testid="back-link"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          All Work
        </Link>

        <div className="mb-16 grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="mb-4 text-xs font-sans font-bold uppercase tracking-widest text-primary">
              Specialty Coffee
            </p>
            <h1 className="mb-6 font-display text-6xl font-bold uppercase leading-none tracking-tighter md:text-7xl">
              sōko coffee
            </h1>
            <p className="max-w-2xl font-serif text-lg leading-relaxed text-muted-foreground">
              A minimalist coffee concept needed a digital presence that felt
              quiet, exact, and ritualized. We built a restrained editorial
              storefront around negative space, soft texture, precise menu
              hierarchy, and a calmer path to ordering.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-6 border-l-4 border-border pl-8">
            {[
              { label: "Client", value: "sōko coffee" },
              { label: "Category", value: "Specialty Coffee" },
              { label: "Year", value: "2024" },
              {
                label: "Deliverables",
                value:
                  "Website Design, Retail UX, Menu System, Editorial Direction",
              },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="mb-1 text-xs font-sans font-bold uppercase tracking-widest text-primary">
                  {label}
                </p>
                <p className="font-serif text-sm text-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden border-4 border-border shadow-md">
          <div className="flex items-center gap-3 border-b-2 border-border bg-muted px-4 py-3">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-border opacity-50" />
              <div className="h-3 w-3 rounded-full bg-border opacity-50" />
              <div className="h-3 w-3 rounded-full bg-primary opacity-70" />
            </div>
            <div className="flex-1 border border-border bg-background px-3 py-1 font-mono text-xs text-muted-foreground">
              www.sokocoffee.jp
            </div>
          </div>
          <div className="portfolio-preview h-[640px] overflow-y-auto">
            <MockSokoCoffee />
          </div>
        </div>

        <PortfolioPager slug="soko-coffee" />
      </div>

      <footer className="mt-16 border-t-8 border-primary bg-foreground px-4 py-12 text-background sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <span
            className="text-background/90"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "2rem",
              letterSpacing: "0.05em",
            }}
          >
            FOXTROT
          </span>
          <p className="font-sans text-sm font-medium uppercase tracking-widest text-background/50">
            &copy; {new Date().getFullYear()} Foxtrot Agency. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
