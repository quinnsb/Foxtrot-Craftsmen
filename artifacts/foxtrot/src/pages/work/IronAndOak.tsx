import { ArrowLeft, ArrowRight, CircleUserRound, ShoppingCart } from "lucide-react";
import { Link } from "wouter";
import SiteNav from "@/components/SiteNav";
import PortfolioPager from "@/components/PortfolioPager";

const products = [
  {
    name: "waxed canvas chore coat",
    price: "$285",
    image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "selvedge denim",
    price: "$195",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "leather riding gloves",
    price: "$85",
    image: "https://images.unsplash.com/photo-1517414628894-83d47b22f233?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "moto boot",
    price: "$340",
    image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=900&q=80",
  },
];

const journalEntries = [
  {
    title: "workshop notes / nov '23",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "the highway 1 run",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "log of the journey",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "community & cold steel",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=80",
  },
];

function GrainImage({ alt, className = "", src }: { alt: string; className?: string; src: string }) {
  return (
    <div className={`group relative overflow-hidden bg-[#d7c8aa] ${className}`}>
      <img
        alt={alt}
        className="h-full w-full object-cover grayscale-[0.18] transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
        src={src}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0.12) 1px, transparent 1px)",
          backgroundSize: "6px 6px",
        }}
      />
    </div>
  );
}

function MockIronAndOak() {
  return (
    <div
      className="min-h-[2700px] overflow-hidden bg-[#e8dcc4] text-[#161717]"
      style={{ fontFamily: "Chivo, Arial, sans-serif" }}
      data-testid="iron-oak-mock"
    >
      <header className="sticky top-0 z-20 bg-[#e8dcc4]/90 px-5 py-6 backdrop-blur-sm md:px-16">
        <div className="relative mx-auto flex max-w-7xl flex-col items-center">
          <h1
            className="text-5xl font-semibold lowercase leading-none tracking-[-0.04em] text-[#161717] md:text-7xl"
            style={{ fontFamily: "'Bricolage Grotesque', Chivo, sans-serif" }}
          >
            iron & oak
          </h1>
          <nav className="mt-5 flex flex-wrap gap-x-6 gap-y-2 self-start text-sm lowercase">
            {["shop", "story", "journal", "contact"].map((item, index) => (
              <span
                key={item}
                className={`cursor-pointer transition-colors hover:text-[#75593e] ${index === 0 ? "font-bold text-[#161717]" : "text-[#444748]"}`}
              >
                {item}
              </span>
            ))}
          </nav>
          <div className="absolute right-0 top-3 flex gap-5 text-[#161717]">
            <ShoppingCart className="h-5 w-5 stroke-[1.4]" />
            <CircleUserRound className="h-5 w-5 stroke-[1.4]" />
          </div>
        </div>
      </header>

      <main className="pt-10">
        <section className="mb-28 px-5 md:px-16">
          <GrainImage
            alt="Iron and Oak moto culture"
            className="mx-auto aspect-[1.79] max-w-7xl"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPV7Wq_N5jOAmyJrm-hcXCEk0mTJfYM5kFh8qypgAfL_OQT_0ZdVNU3d1_jB9P3OJnUxCdqueyQRgcjfl9NeFxuEi6chWolYepnp3IRxkY7r61Vf5CEm4PBdDYfDdAWtCpj_il_UbwOB96XL4iEH8jhbh6q795DeFAC6K6BdGYsYffIHZXR6q3Ecm5Byn6qCJlk1q1eCEwesRSxN0gBR0xQxp-gO1cn-e3rXaN7gtvzQRmW2UAgtbjzdGAtXPVY14Esripuh9v62Q"
          />
          <div className="mx-auto mt-12 max-w-7xl">
            <div className="max-w-2xl">
              <h2
                className="mb-4 text-5xl font-semibold lowercase leading-tight tracking-[-0.04em]"
                style={{ fontFamily: "'Bricolage Grotesque', Chivo, sans-serif" }}
              >
                iron & oak
              </h2>
              <p className="mb-8 text-lg font-light italic leading-8 text-[#444748]">Made for the ride. Built to outlast it.</p>
              <button className="border-b border-[#161717] pb-1 text-sm font-medium lowercase transition-colors hover:border-[#75593e] hover:text-[#75593e]">
                Shop the Collection
              </button>
            </div>
          </div>
        </section>

        <section className="mb-28 px-5 md:px-16">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article key={product.name} className="flex flex-col gap-4">
                <GrainImage alt={product.name} className="aspect-square" src={product.image} />
                <div className="flex flex-col items-start">
                  <span className="text-base lowercase text-[#161717]">{product.name}</span>
                  <span className="text-base lowercase text-[#444748]/75">{product.price}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-28">
          <div className="px-5 md:px-16">
            <h3
              className="mb-8 text-3xl font-medium lowercase tracking-[-0.02em]"
              style={{ fontFamily: "'Bricolage Grotesque', Chivo, sans-serif" }}
            >
              the central coast journal
            </h3>
          </div>
          <div className="flex gap-6 overflow-x-auto px-5 pb-8 md:px-16" style={{ scrollbarWidth: "none" }}>
            {journalEntries.map((entry, index) => (
              <article key={entry.title} className={`${index === 0 ? "w-[520px]" : "w-[420px]"} max-w-[78vw] flex-none`}>
                <GrainImage alt={entry.title} className="aspect-[3/4]" src={entry.image} />
                <p className="mt-4 text-sm lowercase italic text-[#444748]">{entry.title}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative mb-28 h-[520px] overflow-hidden">
          <GrainImage
            alt="Weathered leather motorcycle gloves"
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-[#161717]/25 px-5 text-center">
            <h3
              className="max-w-2xl text-4xl font-medium lowercase leading-tight tracking-[-0.04em] text-white md:text-5xl"
              style={{ fontFamily: "'Bricolage Grotesque', Chivo, sans-serif" }}
            >
              the tools of the trade. built for the miles.
            </h3>
          </div>
        </section>

        <section className="bg-[#ebe7e7]/35 px-5 py-24 md:px-16">
          <div className="max-w-xl">
            <h3
              className="mb-6 text-3xl font-medium lowercase tracking-[-0.02em]"
              style={{ fontFamily: "'Bricolage Grotesque', Chivo, sans-serif" }}
            >
              sign up for the logbook.
            </h3>
            <p className="mb-8 text-base lowercase leading-7 text-[#444748]">updates on small batch releases, stories from the road, and garage sessions.</p>
            <form className="flex items-center gap-4 border-b border-[#161717] pb-2">
              <input
                aria-label="Email address"
                className="w-full border-none bg-transparent text-base lowercase text-[#161717] outline-none placeholder:text-[#444748]/50"
                placeholder="your email address"
                type="email"
              />
              <button aria-label="Submit email" className="text-[#161717] transition-colors hover:text-[#75593e]" type="button">
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#e5e2e1] px-5 pb-8 pt-16 md:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8">
          <span
            className="text-3xl font-medium lowercase tracking-[-0.04em] text-[#161717]"
            style={{ fontFamily: "'Bricolage Grotesque', Chivo, sans-serif" }}
          >
            iron & oak
          </span>
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col gap-2">
              {["instagram", "pinterest", "newsletter signup"].map((item) => <span key={item} className="lowercase text-[#444748]">{item}</span>)}
            </div>
            <div className="flex flex-col gap-2">
              {["shipping & returns", "size guide", "privacy policy"].map((item) => <span key={item} className="lowercase text-[#444748]">{item}</span>)}
            </div>
            <div className="flex flex-col gap-2">
              <p className="lowercase text-[#444748]">1248 industrial way</p>
              <p className="lowercase text-[#444748]">san luis obispo, ca</p>
            </div>
          </div>
          <div className="w-full border-t border-[#c4c7c7]/70 pt-8">
            <p className="lowercase text-[#444748]">© 2024 iron & oak menswear. small batch quality.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function IronAndOak() {
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
            <p className="mb-4 text-xs font-sans font-bold uppercase tracking-widest text-primary">Retail E-Commerce</p>
            <h1 className="mb-6 font-display text-6xl font-bold uppercase leading-none tracking-tighter md:text-7xl">Iron & Oak</h1>
            <p className="max-w-2xl font-serif text-lg leading-relaxed text-muted-foreground">
              A small-batch menswear label needed a storefront that felt tactile, lived-in, and road-tested. We built an analog-inspired retail experience around waxed canvas, moto culture, product texture, and journal-driven storytelling.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-6 border-l-4 border-border pl-8">
            {[
              { label: "Client", value: "Iron & Oak Goods Co." },
              { label: "Category", value: "Retail E-Commerce" },
              { label: "Year", value: "2024" },
              { label: "Deliverables", value: "Website Design, E-Commerce Development, Product Photography Art Direction" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="mb-1 text-xs font-sans font-bold uppercase tracking-widest text-primary">{label}</p>
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
              www.ironandoakgoods.com
            </div>
          </div>
          <div className="portfolio-preview h-[640px] overflow-y-auto">
            <MockIronAndOak />
          </div>
        </div>

        <PortfolioPager slug="iron-and-oak" />
      </div>

      <footer className="mt-16 border-t-8 border-primary bg-foreground px-4 py-12 text-background sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <span className="text-background/90" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", letterSpacing: "0.05em" }}>FOXTROT</span>
          <p className="font-sans text-sm font-medium uppercase tracking-widest text-background/50">&copy; {new Date().getFullYear()} Foxtrot Agency. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
