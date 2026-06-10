import { ArrowLeft, ShoppingBag, User } from "lucide-react";
import { Link } from "wouter";
import SiteNav from "@/components/SiteNav";
import PortfolioPager from "@/components/PortfolioPager";

const products = [
  {
    name: "Horizon Apex Wetsuit",
    price: "$420.00",
    className:
      "bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.85),transparent_28%),linear-gradient(180deg,#0f1724_0%,#111827_52%,#05070b_100%)]",
    shape:
      "mx-auto mt-12 h-64 w-28 rounded-t-full border border-white/20 bg-black/50 shadow-2xl",
  },
  {
    name: "Element Boardshort",
    price: "$115.00",
    className:
      "bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.35),transparent_24%),linear-gradient(135deg,#d6d1c7_0%,#a8a29a_46%,#f4f0e8_100%)]",
    shape:
      "mx-auto mt-24 h-28 w-48 border border-[#0a192f]/15 bg-[#111827]/90 shadow-sm [clip-path:polygon(6%_0,94%_0,86%_100%,14%_100%)]",
  },
  {
    name: "Luna Technical One-Piece",
    price: "$185.00",
    className: "bg-[#eeeeee]",
    shape:
      "mx-auto mt-14 h-64 w-32 rounded-b-[44%] bg-[#0d1117] shadow-2xl [clip-path:polygon(24%_0,76%_0,88%_100%,12%_100%)]",
  },
];

const materials = [
  {
    title: "85% Yulex Natural Rubber",
    body: "Eliminating petroleum-based neoprene with FSC-certified natural rubber from sources that preserve biodiversity.",
  },
  {
    title: "Econyl Regenerated Nylon",
    body: "Discarded fishing nets and industrial plastic are remade into durable performance fabric without quality loss.",
  },
  {
    title: "Fair Trade Certified",
    body: "Every hand that crafts the gear is treated with dignity, paid fairly, and protected by safer working standards.",
  },
];

function MockTidal() {
  return (
    <div
      className="min-h-[2960px] overflow-hidden bg-[#f9f9f9] text-[#0a192f]"
      data-testid="tidal-mock"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <nav className="sticky top-0 z-20 border-b border-white/10 bg-white/70 px-5 py-5 text-[#0a192f] backdrop-blur-xl md:px-16">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-8">
          <h1 className="font-['Raleway'] text-2xl font-thin uppercase tracking-[-0.04em]">
            TIDAL
          </h1>
          <div className="hidden items-center gap-10 text-[10px] font-semibold uppercase tracking-[0.22em] md:flex">
            <span>Collections</span>
            <span>Surf</span>
            <span>Swim</span>
            <span>Stories</span>
            <span>Sustainability</span>
          </div>
          <div className="flex items-center gap-5">
            <ShoppingBag className="h-4 w-4" />
            <User className="h-4 w-4" />
          </div>
        </div>
      </nav>

      <main>
        <section className="relative flex h-[760px] flex-col justify-end overflow-hidden">
          <img
            alt="Surfer seen from beneath the surface"
            className="absolute inset-0 h-full w-full object-cover grayscale-[0.2] contrast-110"
            src="/assets/tidal/tidal-hero.png"
          />
          <div className="absolute inset-0 bg-[#0a192f]/20" />
          <div className="relative z-10 mx-auto flex w-full max-w-[1440px] items-end justify-between gap-8 px-5 pb-14 md:px-16">
            <h2 className="bg-gradient-to-b from-white via-white/55 to-white/0 bg-clip-text font-['Raleway'] text-7xl font-thin uppercase leading-none tracking-[-0.06em] text-transparent md:text-[128px]">
              TIDAL
            </h2>
            <p className="mb-4 hidden text-right text-[10px] font-semibold uppercase tracking-[0.32em] text-white/80 md:block">
              Made for what's beneath the surface.
            </p>
          </div>
        </section>

        <section className="bg-white px-5 py-24 md:px-16 md:py-32">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-xl">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0a192f]/40">
                  Drop 01 // Essential Gear
                </p>
                <h2 className="mt-4 font-['EB_Garamond'] text-5xl leading-[1.08] text-[#0a192f]">
                  Precision Engineered Performance
                </h2>
              </div>
              <a className="w-fit border-b border-[#0a192f] pb-1 text-[10px] font-semibold uppercase tracking-[0.22em]">
                Shop All Technical Gear
              </a>
            </div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              {products.map((product) => (
                <div key={product.name} className="group cursor-pointer">
                  <div
                    className={`mb-6 aspect-[3/4] overflow-hidden border border-[#0a192f]/10 transition-transform duration-700 group-hover:scale-[1.01] ${product.className}`}
                  >
                    <div className={product.shape} />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-sm uppercase tracking-[0.18em] text-[#0a192f]">
                      {product.name}
                    </h3>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0a192f]/60">
                      {product.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid min-h-[800px] grid-cols-1 bg-[#f9f9f9] md:grid-cols-2">
          <div className="relative h-[60vh] overflow-hidden md:h-full">
            <img
              alt="Coastal cliffs at sunrise"
              className="h-full w-full object-cover"
              src="/assets/tidal/tidal-coast.png"
            />
            <p className="absolute bottom-8 left-8 font-['EB_Garamond'] text-sm italic text-white/75">
              North Atlantic Reach, 62°N
            </p>
          </div>
          <div className="flex items-center justify-center bg-white p-5 md:p-16">
            <div className="max-w-md">
              <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.4em] text-[#0a192f]/30">
                The Founder's Note
              </p>
              <blockquote className="mb-10 font-['EB_Garamond'] text-4xl italic leading-tight text-[#0a192f]">
                "We didn't build TIDAL to compete with the industry. We built it
                to respect the sanctuary."
              </blockquote>
              <div className="space-y-6 text-justify text-base leading-8 text-[#0a192f]/70">
                <p>
                  In the silence of the pre-dawn lineup, the world feels
                  different. There is no noise, no branding, just the rhythmic
                  pulse of the Atlantic.
                </p>
                <p>
                  By using plant-based alternatives and recycled ocean plastics,
                  TIDAL creates equipment that functions with clinical precision
                  while honoring the ecosystem it inhabits.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-4">
                <div className="h-px w-12 bg-[#0a192f]/20" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em]">
                  Elias Thorne, Founder
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f9f9f9] px-5 py-24 md:px-16 md:py-32">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-14">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#0a192f]/40">
                Tech Specs // Material Integrity
              </p>
              <h2 className="mt-4 font-['EB_Garamond'] text-5xl leading-[1.08]">
                The Science of Sustainability
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {materials.map((material) => (
                <div
                  key={material.title}
                  className="border-l border-[#0a192f]/10 bg-white p-8 transition-colors duration-500 hover:bg-[#f5e6cc]/20"
                >
                  <h3 className="mb-6 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em]">
                    {material.title}
                    <span className="h-2 w-2 rounded-full bg-[#2c6956]" />
                  </h3>
                  <p className="leading-7 text-[#0a192f]/70">{material.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                ["bg-[#0a192f] text-white/45", "FSC Certified C123456"],
                ["bg-[#f5e6cc] text-[#0a192f]/60", "GRS Recycled Standard"],
                ["bg-white text-[#0a192f]", "Climate Neutral Certified"],
                ["bg-[#0a192f]/5 text-[#0a192f]/40", "1% For The Planet"],
              ].map(([classes, label]) => (
                <div
                  key={label}
                  className={`flex h-24 items-center justify-center p-4 text-center text-[8px] font-semibold uppercase tracking-[0.2em] ${classes}`}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#c5c6cd]/30 bg-[#f9f9f9] px-5 py-20 text-[#0a192f] md:px-16">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-12 md:flex-row">
          <div>
            <h2 className="mb-4 font-['Raleway'] text-4xl font-thin uppercase tracking-[-0.04em]">
              TIDAL
            </h2>
            <p className="max-w-[220px] text-[10px] font-semibold uppercase tracking-[0.22em] text-[#44474d]">
              Engineered for the elements.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-8 text-sm text-[#44474d] md:grid-cols-3">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#44474d]/50">
                Explore
              </span>
              <span>Collections</span>
              <span>Sustainability</span>
              <span>Stories</span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#44474d]/50">
                Support
              </span>
              <span>Shipping & Returns</span>
              <span>Contact</span>
              <span>Privacy Policy</span>
            </div>
            <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#44474d]/50">
                Follow
              </span>
              <span>@tidal</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function SterlingWright() {
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
            <p className="mb-4 font-sans text-xs font-bold uppercase tracking-widest text-primary">
              Luxury Surf
            </p>
            <h1 className="mb-6 font-display text-6xl font-bold uppercase leading-none tracking-tighter md:text-7xl">
              TIDAL
            </h1>
            <p className="max-w-2xl font-serif text-lg leading-relaxed text-muted-foreground">
              A premium surf and swim brand needed an e-commerce presence that
              balanced technical performance with quiet coastal luxury. We built
              a spacious, editorial storefront around cinematic water imagery,
              precision product grids, and sustainability proof points.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-6 border-l-4 border-border pl-8">
            {[
              { label: "Client", value: "TIDAL" },
              { label: "Category", value: "Luxury Surf" },
              { label: "Year", value: "2024" },
              {
                label: "Deliverables",
                value:
                  "Website Design, E-Commerce Experience, Editorial Direction",
              },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="mb-1 font-sans text-xs font-bold uppercase tracking-widest text-primary">
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
              www.tidal-surf.com
            </div>
          </div>
          <div className="portfolio-preview h-[640px] overflow-y-auto">
            <MockTidal />
          </div>
        </div>

        <PortfolioPager slug="tidal" />
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
