import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Flame,
  Leaf,
  Mountain,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";
import { Link } from "wouter";
import SiteNav from "@/components/SiteNav";
import PortfolioPager from "@/components/PortfolioPager";

const heritageRooms = [
  {
    name: "Heritage Suite",
    price: "$550",
    image: "/assets/heritage-inn-suite.png",
    description:
      "King suite with a fieldstone hearth, writing alcove, and private mountain-facing terrace.",
  },
  {
    name: "Forest View Deluxe",
    price: "$420",
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=900&q=80",
    description:
      "Quiet oak-lined room with linen bedding, deep window seats, and views into the maple woods.",
  },
  {
    name: "Garden Vista Loft",
    price: "$480",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
    description:
      "A lofted retreat with aged brass fixtures, soaking bath, and direct access to the garden walk.",
  },
];

const heritageAmenities = [
  {
    icon: UtensilsCrossed,
    title: "Artisan Dining",
    text: "Farm-to-table cuisine sourced from local Vermont valleys.",
  },
  {
    icon: Sparkles,
    title: "Luxury Spa",
    text: "Restorative treatments inspired by the quiet of the woods.",
  },
  {
    icon: Mountain,
    title: "Mountain Trails",
    text: "Private access to winding paths through ancient maple groves.",
  },
];

function MockHeritageInn() {
  return (
    <div
      className="min-h-[2320px] overflow-hidden bg-[#fcf9f8] text-[#1b1c1c]"
      style={{ fontFamily: "Montserrat, Arial, sans-serif" }}
      data-testid="heritage-mock"
    >
      <nav className="sticky top-0 z-20 flex items-center justify-between border-b border-white/20 bg-[#061b0e]/95 px-5 py-4 text-white backdrop-blur md:px-12">
        <div className="min-w-0">
          <p
            className="truncate text-lg font-semibold tracking-tight md:text-2xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            THE HERITAGE INN
          </p>
          <p className="hidden text-[10px] uppercase tracking-[0.28em] text-[#c5a059] sm:block">
            Stowe, Vermont
          </p>
        </div>
        <div className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.24em] md:flex">
          <span>Rooms</span>
          <span>Dining</span>
          <span>Spa</span>
          <span>Events</span>
        </div>
        <button className="shrink-0 bg-[#c5a059] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#061b0e] transition-colors hover:bg-white">
          Reserve
        </button>
      </nav>

      <header className="relative flex min-h-[680px] items-center justify-center overflow-hidden px-5 text-center text-white">
        <img
          alt="The Heritage Inn exterior at twilight"
          className="absolute inset-0 h-full w-full object-cover"
          src="/assets/heritage-inn-exterior.png"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061b0e]/45 via-[#061b0e]/55 to-[#061b0e]/85" />
        <div className="relative z-10 max-w-4xl">
          <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.36em] text-[#c5a059]">
            Est. 1887 · Green Mountains
          </p>
          <h1
            className="mb-10 text-5xl font-bold leading-[1.08] md:text-7xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Timeless Comfort in the{" "}
            <span className="italic text-[#c5a059]">Heart</span> of Vermont
          </h1>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="min-h-14 min-w-56 bg-[#c5a059] px-8 text-[12px] font-bold uppercase tracking-[0.22em] text-[#061b0e] transition-colors hover:bg-white">
              Reserve a Room
            </button>
            <button className="min-h-14 min-w-56 border border-white px-8 text-[12px] font-bold uppercase tracking-[0.22em] text-white transition-colors hover:bg-white hover:text-[#061b0e]">
              Explore the Property
            </button>
          </div>
        </div>
        <div className="absolute bottom-9 left-1/2 hidden -translate-x-1/2 flex-col items-center text-white/65 md:flex">
          <span className="mb-2 text-[10px] uppercase tracking-[0.28em]">
            Scroll
          </span>
          <ArrowRight className="h-5 w-5 rotate-90" />
        </div>
      </header>

      <section className="border-b border-[#c3c8c1]/60 bg-[#fcf9f8] px-5 py-16 md:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 text-center md:grid-cols-3">
          {heritageAmenities.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col items-center">
              <Icon className="mb-5 h-10 w-10 stroke-[1.4] text-[#061b0e]" />
              <h2 className="mb-3 text-[12px] font-bold uppercase tracking-[0.26em] text-[#061b0e]">
                {title}
              </h2>
              <p className="max-w-[280px] text-sm leading-7 text-[#434843]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#fcf9f8] px-5 py-20 md:px-12 md:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="mb-8 h-px w-14 bg-[#c5a059]" />
            <h2
              className="mb-8 text-4xl font-semibold leading-tight text-[#061b0e] md:text-6xl"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Refinement Reclaimed
            </h2>
            <p className="mb-10 text-base leading-8 text-[#434843] md:text-lg">
              Nestled within the misty peaks of the Green Mountains, The
              Heritage Inn stands as a testament to architectural grace and
              Vermont's enduring warmth. Here, luxury is not a statement. It is
              a feeling of home, crafted with stone, wood, and fire.
            </p>
            <button className="group inline-flex items-center gap-3 border-b border-[#061b0e] pb-1 text-[12px] font-bold uppercase tracking-[0.24em] text-[#061b0e] transition-colors hover:border-[#c5a059] hover:text-[#c5a059]">
              Our Heritage
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                alt="Warm stone fireplace inside The Heritage Inn"
                className="h-full w-full object-cover"
                src="/assets/heritage-inn-suite.png"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f0eded] px-5 py-20 md:px-12 md:py-28">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <h2
            className="mb-4 text-4xl font-semibold text-[#061b0e] md:text-5xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Sanctuaries of Rest
          </h2>
          <p className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#737973]">
            Selected Suites & Rooms
          </p>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
          {heritageRooms.map((room) => (
            <article key={room.name} className="group bg-[#061b0e] text-white">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  alt={`${room.name} interior`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={room.image}
                />
                <div className="absolute inset-0 bg-[#061b0e]/20 transition-colors duration-500 group-hover:bg-[#061b0e]/45" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#c5a059]">
                    From {room.price} / Night
                  </p>
                  <h3
                    className="mb-3 text-3xl font-semibold"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {room.name}
                  </h3>
                  <p className="text-sm leading-6 text-white/75">
                    {room.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#061b0e] px-5 py-20 text-center text-white md:px-12 md:py-28">
        <Leaf className="absolute -right-12 top-10 h-64 w-64 stroke-[0.4] text-[#c5a059]/15" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <Flame className="mx-auto mb-8 h-10 w-10 stroke-[1.2] text-[#c5a059]" />
          <h2
            className="mb-8 text-4xl font-semibold leading-tight text-[#c5a059] md:text-5xl"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Begin Your Journey Into the Quiet Wild
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-base leading-8 text-[#b4cdb8]">
            Reserve your escape and experience the timeless seasonal beauty of
            our Vermont estate.
          </p>
          <button className="inline-flex min-h-14 items-center gap-3 bg-[#c5a059] px-9 text-[12px] font-bold uppercase tracking-[0.24em] text-[#061b0e] transition-colors hover:bg-white">
            <CalendarDays className="h-4 w-4" />
            Book Your Stay
          </button>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#041109] px-5 py-12 text-white md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p
              className="mb-2 text-3xl font-semibold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              THE HERITAGE INN
            </p>
            <p className="text-sm text-white/55">
              1200 Heritage Way, Stowe, Vermont 05672
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
            <span>Rooms</span>
            <span>Dining</span>
            <span>Spa</span>
            <span>Events</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function HeritageInn() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-sans font-bold uppercase tracking-widest text-sm hover:text-primary transition-colors mb-12 group"
          data-testid="back-link"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          All Work
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
          <div className="lg:col-span-2">
            <p className="text-xs font-sans font-bold text-primary uppercase tracking-widest mb-4">
              Hospitality
            </p>
            <h1 className="text-6xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-none mb-6">
              The Heritage Inn
            </h1>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A storied Vermont inn needed a digital presence worthy of its
              130-year legacy. We built a full-service booking experience that
              communicates old-world hospitality through modern craft — rich
              typography, deliberate pacing, and a visual language rooted in the
              property's golden-era aesthetic.
            </p>
          </div>
          <div className="border-l-4 border-border pl-8 flex flex-col gap-6 justify-center">
            {[
              { label: "Client", value: "The Heritage Inn" },
              { label: "Category", value: "Hospitality" },
              { label: "Year", value: "2023" },
              {
                label: "Deliverables",
                value:
                  "Website Design, Booking Integration, Brand Photography Direction",
              },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs font-sans font-bold text-primary uppercase tracking-widest mb-1">
                  {label}
                </p>
                <p className="font-serif text-sm text-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Browser window */}
        <div className="border-4 border-border shadow-md overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-4 py-3 flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-border opacity-50" />
              <div className="w-3 h-3 rounded-full bg-border opacity-50" />
              <div className="w-3 h-3 rounded-full bg-primary opacity-70" />
            </div>
            <div className="flex-1 bg-background border border-border px-3 py-1 text-xs font-mono text-muted-foreground">
              www.theheritageinn.com
            </div>
          </div>
          <div className="portfolio-preview h-[640px] overflow-y-auto">
            <MockHeritageInn />
          </div>
        </div>

        <PortfolioPager slug="heritage-inn" />
      </div>

      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8 border-t-8 border-primary mt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
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
          <p className="font-sans font-medium uppercase tracking-widest text-sm text-background/50">
            &copy; {new Date().getFullYear()} Foxtrot Agency. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
