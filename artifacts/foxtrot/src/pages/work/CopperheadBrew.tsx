import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import SiteNav from "@/components/SiteNav";
import PortfolioPager from "@/components/PortfolioPager";

function MockCopperheadBrew() {
  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#0e0a04", color: "#f0e6d0", minHeight: "2500px" }}>
      {/* Nav */}
      <div style={{ background: "#0e0a04", borderBottom: "2px solid #c17d2a", padding: "0 48px", height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "linear-gradient(135deg, #c17d2a, #8a4e10)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>🍺</div>
          <div>
            <div style={{ fontSize: "16px", fontWeight: "700", letterSpacing: "3px", textTransform: "uppercase", color: "#c17d2a" }}>Copperhead</div>
            <div style={{ fontSize: "10px", letterSpacing: "4px", color: "#7a5a30", textTransform: "uppercase" }}>Brewing Co.</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "32px", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", color: "#c17d2a" }}>
          <span>Tap List</span><span>Taproom</span><span>Events</span><span>Shop</span>
        </div>
        <div style={{ background: "#c17d2a", color: "#0e0a04", padding: "10px 24px", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "bold" }}>Visit Us</div>
      </div>

      {/* Hero */}
      <div style={{ height: "560px", display: "flex", alignItems: "center", padding: "0 80px", backgroundImage: "linear-gradient(rgba(10,6,2,0.80),rgba(10,6,2,0.80)),url('https://images.unsplash.com/photo-1436076863939-06870fe779c2?auto=format&fit=crop&w=1400&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ maxWidth: "580px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "6px", color: "#c17d2a", textTransform: "uppercase", marginBottom: "20px" }}>Est. 2011 · Nashville, TN</p>
          <h1 style={{ fontSize: "72px", fontWeight: "400", lineHeight: 0.9, marginBottom: "32px", letterSpacing: "2px" }}>
            <span style={{ color: "#c17d2a" }}>Small Batch.</span><br />
            Big Character.
          </h1>
          <p style={{ fontSize: "16px", color: "#a08060", lineHeight: 1.8, marginBottom: "40px" }}>
            Hand-crafted ales, lagers, and seasonals brewed with obsessive attention to detail in our East Nashville taproom.
          </p>
          <div style={{ display: "flex", gap: "16px" }}>
            <div style={{ background: "#c17d2a", color: "#0e0a04", padding: "14px 32px", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "bold" }}>See Tap List</div>
            <div style={{ border: "1px solid #c17d2a", color: "#c17d2a", padding: "14px 32px", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase" }}>Plan a Visit</div>
          </div>
        </div>
      </div>

      {/* Tap List */}
      <div style={{ padding: "80px 48px", background: "#130e06" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "5px", color: "#c17d2a", textTransform: "uppercase", marginBottom: "12px" }}>Currently Pouring</p>
          <h2 style={{ fontSize: "48px", fontWeight: "400", letterSpacing: "4px", textTransform: "uppercase" }}>The Tap List</h2>
          <div style={{ width: "80px", height: "2px", background: "#c17d2a", margin: "20px auto 0" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
          {[
            { name: "Copperhead Amber", style: "American Amber Ale", abv: "5.8% ABV", ibu: "28 IBU", desc: "Caramel malt forward with a clean, dry finish. Our flagship." },
            { name: "Midnight Rambler Stout", style: "Oatmeal Stout", abv: "6.2% ABV", ibu: "35 IBU", desc: "Roasted coffee and dark chocolate notes. Velvety mouthfeel." },
            { name: "Rattlesnake IPA", style: "West Coast IPA", abv: "7.1% ABV", ibu: "68 IBU", desc: "Citrus and pine resin. Aggressively hopped. Not for the faint." },
            { name: "Gold Dust Pilsner", style: "Czech-Style Pilsner", abv: "4.7% ABV", ibu: "22 IBU", desc: "Crisp, clean, and crushable. Saaz hops, Bohemian tradition." },
            { name: "Harvest Moon Wheat", style: "Hefeweizen", abv: "5.2% ABV", ibu: "14 IBU", desc: "Banana and clove esters. Unfiltered and hazy gold." },
            { name: "Black Iron Porter", style: "Baltic Porter", abv: "7.8% ABV", ibu: "40 IBU", desc: "Rich and warming. Dark fruit, molasses, toasted oak." },
          ].map((beer, i) => (
            <div key={i} style={{ background: i % 2 === 0 ? "#180d05" : "#120a04", padding: "32px 36px", borderBottom: "1px solid #2a1a08", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: "11px", letterSpacing: "3px", color: "#c17d2a", textTransform: "uppercase", marginBottom: "6px" }}>{beer.style}</p>
                <h3 style={{ fontSize: "22px", fontWeight: "400", letterSpacing: "1px", marginBottom: "10px" }}>{beer.name}</h3>
                <p style={{ fontSize: "13px", color: "#7a5a30", lineHeight: 1.6 }}>{beer.desc}</p>
              </div>
              <div style={{ textAlign: "right", marginLeft: "32px" }}>
                <p style={{ color: "#c17d2a", fontSize: "18px", fontWeight: "700", marginBottom: "4px" }}>{beer.abv}</p>
                <p style={{ color: "#5a3a18", fontSize: "12px", letterSpacing: "2px" }}>{beer.ibu}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Taproom */}
      <div style={{ padding: "80px 48px", background: "#0e0a04", display: "flex", gap: "64px", alignItems: "center" }}>
        <div style={{ flex: 1, height: "380px", overflow: "hidden", flexShrink: 0 }}>
          <img src="https://images.unsplash.com/photo-1555658636-6e4a36218be7?auto=format&fit=crop&w=800&q=80" alt="The Taproom" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "11px", letterSpacing: "5px", color: "#c17d2a", textTransform: "uppercase", marginBottom: "16px" }}>East Nashville</p>
          <h2 style={{ fontSize: "42px", fontWeight: "400", letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1.1, marginBottom: "24px" }}>The Taproom</h2>
          <p style={{ color: "#7a5a30", lineHeight: 1.9, fontSize: "15px", marginBottom: "32px" }}>
            Our 4,000 square foot taproom sits in the heart of East Nashville. 24 taps, a full kitchen, a shaded patio, and a stage for live music every weekend. Open seven days a week.
          </p>
          <div style={{ display: "flex", gap: "40px", borderTop: "1px solid #2a1a08", paddingTop: "24px" }}>
            <div>
              <p style={{ fontSize: "11px", letterSpacing: "3px", color: "#c17d2a", textTransform: "uppercase", marginBottom: "6px" }}>Hours</p>
              <p style={{ color: "#a08060", fontSize: "13px", lineHeight: 1.8 }}>Mon–Thu 3–10pm<br />Fri 2pm–12am<br />Sat–Sun 12pm–12am</p>
            </div>
            <div>
              <p style={{ fontSize: "11px", letterSpacing: "3px", color: "#c17d2a", textTransform: "uppercase", marginBottom: "6px" }}>Find Us</p>
              <p style={{ color: "#a08060", fontSize: "13px", lineHeight: 1.8 }}>1224 Forrest Ave<br />Nashville, TN 37206<br />(615) 555-0147</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: "#080503", borderTop: "2px solid #c17d2a", padding: "48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "4px", color: "#c17d2a", textTransform: "uppercase" }}>Copperhead Brewing Co.</div>
          <div style={{ fontSize: "11px", color: "#4a2a10", marginTop: "6px", letterSpacing: "2px" }}>&copy; 2024 All Rights Reserved</div>
        </div>
        <div style={{ fontSize: "13px", color: "#4a2a10", letterSpacing: "2px", textTransform: "uppercase" }}>Please drink responsibly.</div>
      </div>
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
            <p className="text-xs font-sans font-bold text-primary uppercase tracking-widest mb-4">Food & Beverage</p>
            <h1 className="text-6xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-none mb-6">Copperhead Brew Co.</h1>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A craft brewery with a decade of Nashville roots needed a web presence that matched their uncompromising product. Rich, atmospheric, and built around their tap list — we created a digital taproom that earns a return visit.
            </p>
          </div>
          <div className="border-l-4 border-border pl-8 flex flex-col gap-6 justify-center">
            {[
              { label: "Client", value: "Copperhead Brewing Co." },
              { label: "Category", value: "Food & Beverage" },
              { label: "Year", value: "2023" },
              { label: "Deliverables", value: "Website Design, Tap List System, Events Calendar Integration" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs font-sans font-bold text-primary uppercase tracking-widest mb-1">{label}</p>
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
          <span className="text-background/90" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", letterSpacing: "0.05em" }}>FOXTROT</span>
          <p className="font-sans font-medium uppercase tracking-widest text-sm text-background/50">&copy; {new Date().getFullYear()} Foxtrot Agency. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
