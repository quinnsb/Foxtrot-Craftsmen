import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import SiteNav from "@/components/SiteNav";

function MockHeritageInn() {
  return (
    <div style={{ fontFamily: "Georgia, serif", background: "#0a0a0a", color: "#f5f0e8", minHeight: "2400px" }}>
      {/* Fake Nav */}
      <div style={{ background: "rgba(10,10,10,0.9)", borderBottom: "1px solid #c9a84c", padding: "16px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 10 }}>
        <span style={{ fontFamily: "'Times New Roman', serif", fontSize: "20px", letterSpacing: "6px", textTransform: "uppercase", color: "#c9a84c" }}>The Heritage Inn</span>
        <div style={{ display: "flex", gap: "32px", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", color: "#c9a84c" }}>
          <span>Rooms</span><span>Dining</span><span>Spa</span><span>Events</span>
        </div>
        <div style={{ background: "#c9a84c", color: "#0a0a0a", padding: "10px 24px", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "bold", cursor: "pointer" }}>Book Now</div>
      </div>

      {/* Hero */}
      <div style={{ height: "580px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", backgroundImage: "linear-gradient(rgba(8,5,2,0.72),rgba(8,5,2,0.72)),url('https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1400&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ borderTop: "1px solid #c9a84c", borderBottom: "1px solid #c9a84c", padding: "12px 0", marginBottom: "24px", width: "200px" }}>
          <span style={{ fontSize: "10px", letterSpacing: "5px", color: "#c9a84c", textTransform: "uppercase" }}>Est. 1887 · Vermont</span>
        </div>
        <h1 style={{ fontSize: "72px", fontWeight: "300", letterSpacing: "12px", textTransform: "uppercase", marginBottom: "16px", lineHeight: 1 }}>The Heritage</h1>
        <h1 style={{ fontSize: "72px", fontWeight: "300", letterSpacing: "12px", textTransform: "uppercase", marginBottom: "32px", lineHeight: 1, color: "#c9a84c" }}>Inn</h1>
        <p style={{ fontSize: "14px", letterSpacing: "3px", color: "#a89070", textTransform: "uppercase", maxWidth: "400px", lineHeight: 1.8 }}>A timeless retreat in the heart of the Green Mountains</p>
        <div style={{ marginTop: "48px", display: "flex", gap: "16px" }}>
          <div style={{ background: "#c9a84c", color: "#0a0a0a", padding: "14px 36px", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "bold" }}>Reserve a Room</div>
          <div style={{ border: "1px solid #c9a84c", color: "#c9a84c", padding: "14px 36px", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase" }}>Explore the Property</div>
        </div>
      </div>

      {/* Rooms Section */}
      <div style={{ padding: "80px 40px", background: "#0f0e0b" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span style={{ fontSize: "10px", letterSpacing: "5px", color: "#c9a84c", textTransform: "uppercase" }}>Accommodations</span>
          <h2 style={{ fontSize: "42px", fontWeight: "300", letterSpacing: "8px", textTransform: "uppercase", marginTop: "12px" }}>Our Rooms & Suites</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2px" }}>
          {[
            { name: "Classic Room", price: "$295", size: "340 sq ft", color: "#1e1a10" },
            { name: "Heritage Suite", price: "$495", size: "680 sq ft", color: "#1a1508" },
            { name: "Grand Manor Suite", price: "$895", size: "1,200 sq ft", color: "#1e1a10" },
          ].map((room) => (
            <div key={room.name} style={{ background: room.color, padding: "40px 32px" }}>
              <div style={{ height: "180px", marginBottom: "24px", overflow: "hidden" }}>
                <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=600&q=80" alt="Room" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ fontSize: "10px", letterSpacing: "4px", color: "#c9a84c", textTransform: "uppercase", marginBottom: "8px" }}>{room.size}</div>
              <h3 style={{ fontSize: "20px", fontWeight: "300", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "16px" }}>{room.name}</h3>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ color: "#c9a84c", fontSize: "24px", fontWeight: "300" }}>{room.price}<span style={{ fontSize: "12px", letterSpacing: "2px", color: "#a89070" }}> / night</span></span>
                <span style={{ fontSize: "10px", letterSpacing: "3px", color: "#c9a84c", textTransform: "uppercase", borderBottom: "1px solid #c9a84c" }}>Book</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dining */}
      <div style={{ padding: "80px 40px", background: "#0a0a0a", display: "flex", gap: "80px", alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <span style={{ fontSize: "10px", letterSpacing: "5px", color: "#c9a84c", textTransform: "uppercase" }}>The Hearthroom</span>
          <h2 style={{ fontSize: "38px", fontWeight: "300", letterSpacing: "6px", textTransform: "uppercase", marginTop: "12px", marginBottom: "24px" }}>Farm-to-Table Dining</h2>
          <p style={{ color: "#a89070", lineHeight: 2, fontSize: "15px", marginBottom: "32px" }}>Our award-winning restaurant sources ingredients from local Vermont farms and foragers. Chef Marcus Ellroy presents a menu that honors regional tradition while pushing the boundaries of seasonal cuisine.</p>
          <div style={{ display: "flex", gap: "32px", marginBottom: "40px" }}>
            {["Breakfast 7–10am", "Lunch 12–2pm", "Dinner 6–9pm"].map(h => (
              <div key={h} style={{ fontSize: "11px", letterSpacing: "2px", color: "#c9a84c", textTransform: "uppercase" }}>{h}</div>
            ))}
          </div>
          <div style={{ border: "1px solid #c9a84c", color: "#c9a84c", padding: "12px 28px", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", display: "inline-block" }}>View Menu</div>
        </div>
        <div style={{ flex: 1, height: "360px", overflow: "hidden", flexShrink: 0 }}>
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80" alt="The Hearthroom" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>

      {/* Amenities */}
      <div style={{ padding: "80px 40px", background: "#0d0b07", textAlign: "center" }}>
        <span style={{ fontSize: "10px", letterSpacing: "5px", color: "#c9a84c", textTransform: "uppercase" }}>The Full Experience</span>
        <h2 style={{ fontSize: "38px", fontWeight: "300", letterSpacing: "6px", textTransform: "uppercase", marginTop: "12px", marginBottom: "56px" }}>Estate Amenities</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px" }}>
          {["Spa & Wellness", "Heated Pool", "Equestrian Center", "Private Wine Cellar", "Fly Fishing", "Clay Shooting", "Mountain Trails", "Event Spaces"].map(a => (
            <div key={a} style={{ borderTop: "1px solid #3a3020", paddingTop: "24px" }}>
              <div style={{ width: "40px", height: "40px", border: "1px solid #c9a84c", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#c9a84c", fontSize: "18px" }}>◆</span>
              </div>
              <p style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#c9a84c" }}>{a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: "#060504", borderTop: "1px solid #c9a84c", padding: "48px 40px", textAlign: "center" }}>
        <div style={{ fontSize: "13px", letterSpacing: "8px", textTransform: "uppercase", color: "#c9a84c", marginBottom: "16px" }}>The Heritage Inn</div>
        <div style={{ fontSize: "11px", letterSpacing: "2px", color: "#5a4a30", textTransform: "uppercase" }}>124 Mountain Road · Stowe, Vermont · (802) 555-0194</div>
      </div>
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
            <p className="text-xs font-sans font-bold text-primary uppercase tracking-widest mb-4">Hospitality</p>
            <h1 className="text-6xl md:text-7xl font-sans font-bold uppercase tracking-tighter leading-none mb-6">The Heritage Inn</h1>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A storied Vermont inn needed a digital presence worthy of its 130-year legacy. We built a full-service booking experience that communicates old-world hospitality through modern craft — rich typography, deliberate pacing, and a visual language rooted in the property's golden-era aesthetic.
            </p>
          </div>
          <div className="border-l-4 border-border pl-8 flex flex-col gap-6 justify-center">
            {[
              { label: "Client", value: "The Heritage Inn" },
              { label: "Category", value: "Hospitality" },
              { label: "Year", value: "2023" },
              { label: "Deliverables", value: "Website Design, Booking Integration, Brand Photography Direction" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs font-sans font-bold text-primary uppercase tracking-widest mb-1">{label}</p>
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
          <div className="h-[640px] overflow-y-auto">
            <MockHeritageInn />
          </div>
        </div>
      </div>

      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8 border-t-8 border-primary mt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-background/90" style={{ fontFamily: "'TAYDumpling', sans-serif", fontSize: "2rem", letterSpacing: "0.05em" }}>FOXTROT</span>
          <p className="font-sans font-medium uppercase tracking-widest text-sm text-background/50">&copy; {new Date().getFullYear()} Foxtrot Agency. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
