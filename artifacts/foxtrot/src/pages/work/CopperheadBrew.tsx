import { ArrowLeft, ArrowRight, MapPin, Star } from "lucide-react";
import { Link } from "wouter";
import SiteNav from "@/components/SiteNav";
import PortfolioPager from "@/components/PortfolioPager";

const tapList = [
  ["Old Rattler Pale", "Pale Ale - American", "5.4% ABV", "4.2"],
  ["Copperhead Gold", "Pilsner - Other", "4.8% ABV", "3.9"],
  ["Smokey Ridge", "Porter - Smoked", "6.2% ABV", "4.5"],
  ["Cosmic Harvest", "IPA - Farmhouse", "7.5% ABV", "4.7"],
  ["Kitchen Sink Stout", "Imperial Stout", "10.5% ABV", "4.8"],
  ["Hill Country IPA", "West Coast IPA", "7.0% ABV", "4.4"],
];

function MockCopperheadBrew() {
  return (
    <div
      className="min-h-[2860px] overflow-hidden bg-[#000804] text-[#fef9f2]"
      data-testid="copperhead-mock"
      style={{ fontFamily: "Domine, Georgia, serif" }}
    >
      <header className="sticky top-0 z-20 border-b border-[#344c40] bg-[#000804]/95 px-5 py-4 backdrop-blur-sm md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <h1 className="font-[Syne] text-2xl font-extrabold uppercase leading-none tracking-[-0.05em] text-[#fe932c] md:text-3xl">
            Copperhead Brew Co.
          </h1>
          <nav className="hidden items-center gap-7 font-['Barlow_Condensed'] text-base font-bold uppercase tracking-[0.12em] text-[#e6e2db] md:flex">
            <span>The Brews</span>
            <span>Taproom</span>
            <span>Events</span>
            <span>Store</span>
          </nav>
          <button className="bg-[#fe932c] px-5 py-2 font-['Barlow_Condensed'] text-base font-bold uppercase tracking-[0.12em] text-[#663500] transition-colors hover:bg-[#ffdcc3]">
            Book a Table
          </button>
        </div>
      </header>

      <main>
        <section className="relative flex min-h-[760px] items-center justify-center overflow-hidden px-5 pt-16 text-center">
          <img
            alt="Bartender pouring a pint at Copperhead Brew Co."
            className="absolute inset-0 h-full w-full object-cover grayscale-[0.15] contrast-125"
            src="/assets/copperhead/copperhead-hero.png"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000804] via-[#000804]/45 to-[#000804]/20" />
          <div className="relative z-10 mx-auto max-w-5xl">
            <h2 className="mb-5 font-[Syne] text-6xl font-extrabold uppercase leading-[0.86] tracking-[-0.07em] text-[#fef9f2] drop-shadow-[0_6px_16px_rgba(0,0,0,0.75)] md:text-8xl">
              Copperhead Brew Co.
            </h2>
            <p className="mb-10 font-['Barlow_Condensed'] text-lg font-bold uppercase tracking-[0.22em] text-[#fe932c]">
              Nashville, TN - brewed with obsession since 2019
            </p>
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <a className="grid h-40 w-40 place-items-center rounded-full border-4 border-[#904d00]/60 bg-[#b45309] px-6 text-center font-['Barlow_Condensed'] text-xl font-bold uppercase tracking-[0.1em] text-[#fef9f2] shadow-[inset_2px_2px_8px_rgba(0,0,0,0.45),0_12px_24px_rgba(8,32,22,0.45)] transition-transform active:scale-95">
                See the Tap List
              </a>
              <a className="inline-flex min-h-16 items-center gap-3 bg-[#f2ede6] px-10 font-['Barlow_Condensed'] text-xl font-bold uppercase tracking-[0.1em] text-[#000804] transition-colors hover:bg-[#fe932c]">
                <MapPin className="h-5 w-5" />
                Plan Your Visit
              </a>
            </div>
          </div>
        </section>

        <section className="relative bg-[#0b2319] px-5 py-20 md:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="inline-block border-b-2 border-[#904d00] pb-2 font-['Domine'] text-3xl font-bold uppercase text-[#fe932c]">
                The Current Tap List
              </h2>
              <p className="mt-4 font-['Newsreader'] text-xl italic text-[#e6e2db]">
                Fresh from the tanks. Poured with pride.
              </p>
            </div>

            <div className="mx-auto max-w-4xl border border-[#904d00]/35 bg-[#000804]/60 p-6 shadow-2xl md:p-8">
              <div className="mb-6 flex items-center justify-between border-b border-[#904d00]/20 pb-4">
                <div className="flex items-center gap-3 font-['Barlow_Condensed'] text-base font-bold uppercase tracking-[0.16em]">
                  <Star className="h-5 w-5 fill-[#fe932c] text-[#fe932c]" />
                  Verified Venue Menu
                </div>
                <span className="hidden font-['Barlow_Condensed'] text-xs uppercase tracking-[0.18em] text-[#727974] sm:inline">
                  Powered by Untappd
                </span>
              </div>
              <div className="space-y-5">
                {tapList.map(([name, style, abv, rating]) => (
                  <div
                    key={name}
                    className="flex items-center justify-between gap-6 border-b border-[#c2c8c2]/10 pb-4 last:border-b-0"
                  >
                    <div>
                      <h3 className="font-['Domine'] text-xl font-bold uppercase text-[#fef9f2]">
                        {name}
                      </h3>
                      <p className="font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-[0.12em] text-[#fe932c]">
                        {style} - {abv}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-[#fe932c]">{rating} ★</p>
                      <p className="font-['Barlow_Condensed'] text-[10px] uppercase tracking-[0.14em] text-[#727974]">
                        rating
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="h-[560px] overflow-hidden">
          <img
            alt="Copperhead taproom full of guests"
            className="h-full w-full object-cover"
            src="/assets/copperhead/copperhead-taproom.png"
          />
        </section>

        <section className="bg-[#000804] px-5 py-20 text-center md:px-10">
          <div className="mx-auto max-w-4xl">
            <p className="font-['Barlow_Condensed'] text-lg font-bold uppercase tracking-[0.3em] text-[#fe932c]">
              Special Release
            </p>
            <h2 className="mb-10 mt-4 font-[Syne] text-5xl font-extrabold uppercase leading-none tracking-[-0.05em] text-[#fef9f2] md:text-7xl">
              The Seasonal Spotlight
            </h2>
            <img
              alt="Cosmic Harvest Psychedelic Ale poster"
              className="mx-auto w-full max-w-xl border-4 border-[#0b2319] shadow-2xl"
              src="/assets/copperhead/cosmic-harvest-poster.png"
            />
            <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center justify-center gap-8 md:flex-row">
              <div className="text-left">
                <h3 className="mb-2 font-['Domine'] text-2xl font-bold uppercase text-[#fe932c]">
                  Cosmic Harvest
                </h3>
                <p className="text-[#e6e2db]">
                  Our annual celebration of the hop harvest. A psychedelic trip
                  of flavor that only comes around when the moon is right.
                </p>
              </div>
              <button className="grid h-32 w-32 shrink-0 place-items-center rounded-full border-2 border-[#904d00] bg-[#b45309] font-['Barlow_Condensed'] text-lg font-bold uppercase text-[#fef9f2] shadow-[inset_2px_2px_8px_rgba(0,0,0,0.45)]">
                Buy Cans
              </button>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f3ec] px-5 py-20 text-[#000804] md:px-10">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <img
                alt="Smoker and copper brewing tanks"
                className="w-full border-2 border-[#904d00]/30 object-cover shadow-xl"
                src="/assets/copperhead/copperhead-smokehouse.png"
              />
            </div>
            <div className="space-y-7 md:col-span-7 md:pl-10">
              <h2 className="font-[Syne] text-5xl font-extrabold uppercase leading-none tracking-[-0.05em] md:text-6xl">
                Roots in the Smoke, Heart in the Brew.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-[#424844]">
                Copperhead started in the back of a family smokehouse just
                outside Nashville. Every batch is a tribute to bold Southern
                flavor and analog craft.
              </p>
              <div className="grid grid-cols-2 gap-8 border-y border-[#c2c8c2] py-7">
                <div>
                  <p className="font-['Barlow_Condensed'] text-4xl font-bold text-[#904d00]">
                    1972
                  </p>
                  <p className="font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-[0.14em]">
                    The Inspiration
                  </p>
                </div>
                <div>
                  <p className="font-['Barlow_Condensed'] text-4xl font-bold text-[#904d00]">
                    2019
                  </p>
                  <p className="font-['Barlow_Condensed'] text-sm font-bold uppercase tracking-[0.14em]">
                    The First Barrel
                  </p>
                </div>
              </div>
              <button className="inline-flex items-center gap-2 font-['Barlow_Condensed'] text-lg font-bold uppercase tracking-[0.12em] text-[#904d00]">
                Read the whole story
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#c2c8c2]/30 bg-[#0b2319] px-5 py-14 text-[#fe932c] md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="mb-4 font-[Syne] text-4xl font-extrabold uppercase tracking-[-0.05em]">
              Copperhead
            </h2>
            <p className="max-w-sm text-[#e6e2db]">
              © 1972 Copperhead Brewing Co. Hand-crafted in the heart of the
              hills.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12 font-['Barlow_Condensed'] text-base font-bold uppercase tracking-[0.12em] text-[#e6e2db]">
            <div className="flex flex-col gap-3">
              <span>Our Story</span>
              <span>Wholesale</span>
              <span>Careers</span>
            </div>
            <div className="flex flex-col gap-3">
              <span>Privacy</span>
              <span>Shipping</span>
              <span>Terms</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function CopperheadBrew() {
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
              Food & Beverage
            </p>
            <h1 className="text-6xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-none mb-6">
              Copperhead Brew Co.
            </h1>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A craft brewery with a decade of Nashville roots needed a web
              presence that matched their uncompromising product. Rich,
              atmospheric, and built around their tap list — we created a
              digital taproom that earns a return visit.
            </p>
          </div>
          <div className="border-l-4 border-border pl-8 flex flex-col gap-6 justify-center">
            {[
              { label: "Client", value: "Copperhead Brewing Co." },
              { label: "Category", value: "Food & Beverage" },
              { label: "Year", value: "2023" },
              {
                label: "Deliverables",
                value:
                  "Website Design, Tap List System, Events Calendar Integration",
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

        <div className="border-4 border-border shadow-md overflow-hidden">
          <div className="bg-muted border-b-2 border-border px-4 py-3 flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-border opacity-50" />
              <div className="w-3 h-3 rounded-full bg-border opacity-50" />
              <div className="w-3 h-3 rounded-full bg-primary opacity-70" />
            </div>
            <div className="flex-1 bg-background border border-border px-3 py-1 text-xs font-mono text-muted-foreground">
              www.copperheadbrewing.com
            </div>
          </div>
          <div className="portfolio-preview h-[640px] overflow-y-auto">
            <MockCopperheadBrew />
          </div>
        </div>

        <PortfolioPager slug="copperhead-brew" />
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
