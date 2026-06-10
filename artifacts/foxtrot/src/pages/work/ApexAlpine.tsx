import {
  Activity,
  ArrowLeft,
  Database,
  Gauge,
  Mountain,
  Package,
  Search,
  ShieldCheck,
  Triangle,
} from "lucide-react";
import { Link } from "wouter";
import SiteNav from "@/components/SiteNav";
import PortfolioPager from "@/components/PortfolioPager";

const specs = [
  {
    label: "Material Composition",
    title: "400D Ripstop Nylon",
    text: "UHMWPE-reinforced face fabric for extreme abrasion resistance in mixed terrain.",
    icon: ShieldCheck,
  },
  {
    label: "Operational Mass",
    title: "850G Stripped",
    text: "Frame sheet and hip belt padding are removable for fast-and-light alpine pushes.",
    icon: Gauge,
  },
  {
    label: "Storage Volume",
    title: "45 Liters",
    text: "Expandable collar adds 10L for multi-day high-altitude logistics.",
    icon: Package,
  },
  {
    label: "Safety Protocol",
    title: "RECCO Integrated",
    text: "Passive reflector technology makes the system searchable to professional rescuers.",
    icon: Activity,
  },
  {
    label: "Hydration Sync",
    title: "3L Compatible",
    text: "Dual internal sleeves with insulated routing for sub-zero fluid intake.",
    icon: Database,
  },
];

const resources = [
  "SPEC-SHEETS",
  "WARRANTY_REG",
  "SAFETY_RECALLS",
  "EXPORT_DATA",
];

function MockApexAlpine() {
  return (
    <div
      className="min-h-[2650px] overflow-hidden bg-[#f9f9f9] text-[#1a1c1c]"
      style={{ fontFamily: "'Hanken Grotesk', Arial, sans-serif" }}
      data-testid="apex-mock"
    >
      <nav className="sticky top-0 z-20 border-b border-black bg-[#f9f9f9] px-4 py-4 md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <div className="flex min-w-0 items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-black bg-black text-[#fe5e1e]">
              <Triangle className="h-5 w-5 fill-current" />
            </div>
            <p
              className="truncate text-xl font-black uppercase tracking-[-0.04em] text-black md:text-2xl"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Apex Alpine
            </p>
          </div>
          <div
            className="hidden items-center gap-7 text-[13px] font-bold uppercase text-black md:flex"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span className="border-b-2 border-[#fe5e1e] text-[#ab3600]">
              Equipment
            </span>
            <span>Expeditions</span>
            <span>Tech-Data</span>
            <span>Archive</span>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <Search className="h-5 w-5 stroke-[1.6]" />
            <button
              className="border border-black px-4 py-2 text-[12px] font-bold uppercase transition-colors hover:bg-black hover:text-white"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Login
            </button>
          </div>
        </div>
      </nav>

      <header className="relative flex min-h-[740px] items-center justify-center overflow-hidden px-4 py-24 text-center text-white md:px-10">
        <img
          alt="High alpine landscape"
          className="absolute inset-0 h-full w-full object-cover"
          src="/assets/apex/apex-mountain-hero.png"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-black/55" />
        <div className="relative z-10">
          <p
            className="mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-white/90"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Technical System // Model 45
          </p>
          <h1
            className="mb-8 text-5xl font-black uppercase leading-none tracking-[-0.06em] md:text-8xl"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Apex Alpha 45
          </h1>
          <button
            className="border border-black bg-[#fe5e1e] px-8 py-4 text-[13px] font-black uppercase tracking-[0.18em] text-black shadow-xl transition-colors hover:bg-black hover:text-[#fe5e1e]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Technical Specifications
          </button>
        </div>
        <div
          className="absolute bottom-10 left-6 z-10 border-l-2 border-white py-3 pl-4 text-left text-[12px] uppercase text-white md:left-10"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <p>LAT: 45.8326 N</p>
          <p>LON: 6.8650 E</p>
          <p>ALT: 4808 M</p>
        </div>
      </header>

      <div className="h-10 w-full overflow-hidden bg-[#f9f9f9]">
        <svg
          className="h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 40"
          aria-hidden="true"
        >
          <polyline
            fill="none"
            points="0,35 150,35 180,10 210,35 300,35 350,5 400,35 600,35 650,15 700,35 900,35 950,25 1000,35 1100,35 1150,10 1200,35 1440,35"
            stroke="#000"
            strokeWidth="1"
          />
        </svg>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-24 md:px-10" id="specs">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span
              className="mb-4 inline-block bg-black px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#fe5e1e]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Data Sheet v2.4
            </span>
            <h2
              className="text-4xl font-black uppercase leading-tight tracking-[-0.04em] md:text-5xl"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Engineering Architecture
            </h2>
          </div>
          <div
            className="text-left text-[12px] uppercase text-black/70 md:text-right"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <p>REF: AA-TRX-45L-2024</p>
            <p>STATUS: OPTIMIZED</p>
          </div>
        </div>

        <div className="grid grid-cols-1 border-l border-t border-black md:grid-cols-3">
          {specs.map(({ icon: Icon, label, text, title }) => (
            <article
              key={label}
              className="border-b border-r border-black bg-[#f9f9f9] p-8"
            >
              <Icon className="mb-7 h-8 w-8 stroke-[1.4] text-black/70" />
              <p
                className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-black/45"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {label}
              </p>
              <h3
                className="mb-4 text-xl font-black uppercase tracking-[0.04em]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {title}
              </h3>
              <p className="text-sm leading-6 text-black/70">{text}</p>
            </article>
          ))}
          <article className="border-b border-r border-black bg-black p-8 text-white">
            <Mountain className="mb-7 h-8 w-8 stroke-[1.4] text-[#fe5e1e]" />
            <p
              className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-white/45"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Performance Rating
            </p>
            <h3
              className="mb-4 text-xl font-black uppercase tracking-[0.04em] text-[#fe5e1e]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Grade: Extreme
            </h3>
            <p className="text-sm leading-6 text-white/70">
              Certified for technical verticality and mixed terrain climbing
              above 4,000 meters.
            </p>
          </article>
        </div>
      </section>

      <section className="relative flex h-[520px] items-center justify-center overflow-hidden bg-[#cfcfcf] px-4 text-center">
        <div className="max-w-2xl bg-[#767676] p-8 text-white md:p-12">
          <h2
            className="mb-6 text-3xl font-black uppercase tracking-[0.12em] md:text-4xl"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Tested In The Death Zone
          </h2>
          <div className="mx-auto mb-6 h-1 w-16 bg-[#fe5e1e]" />
          <p
            className="text-sm uppercase leading-7 text-white/80"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Validation field testing conducted at Aconcagua Base Camp, 4,260m
            elevation.
          </p>
        </div>
      </section>

      <section className="bg-[#eeeeee] px-4 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col justify-center border border-black bg-white p-8 md:p-12">
            <p
              className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-black/55"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Ancillary Component 01
            </p>
            <h2
              className="mb-6 text-4xl font-black uppercase leading-tight tracking-[-0.04em]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Carbon Axe Tether
            </h2>
            <p className="mb-8 text-base leading-8 text-black/70">
              Designed for the Alpha 45 quick-access system. Integrated
              high-tensile carbon core with a break strength of 2.5kN. Dual
              bungee routing prevents drag while maintaining reach for tool
              placement.
            </p>
            <div className="space-y-4">
              {[
                ["WEIGHT", "42.5G"],
                ["ATTACHMENT", "Y-GIRTH HITCH"],
                ["BREAK STRENGTH", "2.5KN"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex justify-between border-b border-black/10 pb-3 text-[12px] uppercase"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  <span>{label}</span>
                  <span className="font-black">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-black bg-white p-8">
            <div className="flex aspect-square flex-col items-center justify-center border border-dashed border-black/25 p-8 text-center">
              <Database className="mb-6 h-16 w-16 stroke-[1] text-black/20" />
              <p
                className="mb-6 text-sm uppercase leading-7 text-black/70"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Detailed technical schematic available in the 1:1 CAD archive.
              </p>
              <button
                className="border border-black px-6 py-3 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors hover:bg-black hover:text-white"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Access Archive
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 md:px-10">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span
              className="mb-4 inline-block bg-black px-3 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#fe5e1e]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              System Components
            </span>
            <h2
              className="text-4xl font-black uppercase leading-tight tracking-[-0.04em] md:text-5xl"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Equipment Ecosystem
            </h2>
          </div>
          <div
            className="text-left text-[12px] uppercase text-black/70 md:text-right"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <p>CATALOG: FW_2024_REV</p>
            <p>STATUS: DEPLOYED</p>
          </div>
        </div>

        <div className="grid grid-cols-1 border-l border-t border-black md:grid-cols-2">
          {[
            {
              tag: "NEW ARRIVAL",
              component: "[ COMPONENT_02 ]",
              image: "/assets/apex/apex-hardshell.png",
              name: "ALPHA SV // HARDSHELL",
              specs: [
                ["WEIGHT", "485G"],
                ["MATERIAL", "GORE-TEX PRO"],
              ],
            },
            {
              tag: "NEW ARRIVAL",
              component: "[ COMPONENT_03 ]",
              image: "/assets/apex/apex-technical-boot.png",
              name: "ACRUUX // TECHNICAL BOOT",
              specs: [
                ["WEIGHT", "720G"],
                ["RATING", "6000M"],
              ],
            },
          ].map((product) => (
            <article
              key={product.name}
              className="flex flex-col gap-6 border-b border-r border-black bg-white p-8"
            >
              <div
                className="flex items-start justify-between gap-6 text-[11px] font-bold uppercase tracking-[0.14em]"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                <span className="bg-[#fe5e1e] px-2 py-1 text-black">
                  {product.tag}
                </span>
                <span className="text-black/45">{product.component}</span>
              </div>
              <div className="flex aspect-square items-center justify-center overflow-hidden">
                <img
                  alt={product.name}
                  className="max-h-full w-auto object-contain"
                  src={product.image}
                />
              </div>
              <div>
                <h3
                  className="mb-4 text-xl font-black uppercase tracking-[0.04em]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {product.name}
                </h3>
                <div className="space-y-2">
                  {product.specs.map(([label, value]) => (
                    <div
                      key={label}
                      className="flex justify-between border-b border-black/10 pb-2 text-[12px] uppercase"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      <span className="text-black/45">{label}</span>
                      <span className="font-black">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-black bg-black px-4 py-12 text-white md:px-10">
        <div
          className="mx-auto grid max-w-7xl grid-cols-1 gap-8 text-[12px] uppercase tracking-[0.12em] md:grid-cols-4"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <div className="space-y-5">
            <p className="text-xl font-black">APEX ALPINE</p>
            <p className="text-[10px] leading-5 text-white/55">
              CLIMBING SYSTEMS
              <br />
              STUTTGART // CHAMONIX
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[#fe5e1e]">CORE_RESOURCES</span>
            {resources.slice(0, 3).map((item) => (
              <span key={item} className="text-white/70">
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[#fe5e1e]">LEGAL_PROTOCOLS</span>
            {resources.slice(1).map((item) => (
              <span key={item} className="text-white/70">
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[#fe5e1e]">SYSTEM_COMMS</span>
            <span className="text-white/70">CONTACT_HQ</span>
            <span className="text-white/70">B2B_PORTAL</span>
            <span className="text-white/70">DEALER_NET</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function ApexAlpine() {
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
              Outdoor Brand
            </p>
            <h1 className="mb-6 font-display text-6xl font-bold uppercase leading-none tracking-tighter md:text-7xl">
              Apex Alpine
            </h1>
            <p className="max-w-2xl font-serif text-lg leading-relaxed text-muted-foreground">
              A technical climbing brand needed a product system that felt
              engineered, field-tested, and uncompromising. We built a
              data-forward gear experience around the Apex Alpha 45 pack,
              pairing alpine photography with precise specification hierarchy.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-6 border-l-4 border-border pl-8">
            {[
              { label: "Client", value: "Apex Alpine Gear" },
              { label: "Category", value: "Outdoor Brand" },
              { label: "Year", value: "2024" },
              {
                label: "Deliverables",
                value:
                  "Website Design, E-Commerce, Product Taxonomy, Technical Data System",
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
              www.apexalpine.com
            </div>
          </div>
          <div className="portfolio-preview h-[640px] overflow-y-auto">
            <MockApexAlpine />
          </div>
        </div>

        <PortfolioPager slug="apex-alpine" />
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
