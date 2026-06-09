import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import SiteNav from "@/components/SiteNav";

function MockTimberSteakhouse() {
  return (
    <div style={{ fontFamily: "'Georgia', serif", background: "#0a0704", color: "#f0e6d0", minHeight: "2600px" }}>
      {/* Nav */}
      <div style={{ background: "rgba(10,7,4,0.95)", borderBottom: "1px solid #5a3a18", padding: "0 48px", height: "70px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 10 }}>
        <div>
          <div style={{ fontSize: "22px", fontWeight: "700", letterSpacing: "4px", textTransform: "uppercase", color: "#e8c49a" }}>Timber</div>
          <div style={{ fontSize: "9px", letterSpacing: "5px", color: "#8a5a30", textTransform: "uppercase" }}>Steakhouse & Bar</div>
        </div>
        <div style={{ display: "flex", gap: "32px", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", color: "#8a6040" }}>
          <span>Menu</span><span>Reservations</span><span>Bar</span><span>Private Dining</span>
        </div>
        <div style={{ background: "#c17d2a", color: "#0a0704", padding: "10px 24px", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "700" }}>Reserve a Table</div>
      </div>

      {/* Hero */}
      <div style={{ height: "580px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", backgroundImage: "linear-gradient(rgba(6,4,2,0.78),rgba(6,4,2,0.78)),url('https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1400&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <p style={{ fontSize: "11px", letterSpacing: "7px", color: "#c17d2a", textTransform: "uppercase", marginBottom: "20px" }}>Est. 2015 · Portland, OR</p>
        <h1 style={{ fontSize: "88px", fontWeight: "400", letterSpacing: "12px", textTransform: "uppercase", marginBottom: "8px", lineHeight: 0.9 }}>Timber</h1>
        <h2 style={{ fontSize: "28px", fontWeight: "300", letterSpacing: "10px", color: "#8a6040", textTransform: "uppercase", marginBottom: "32px" }}>Steakhouse & Bar</h2>
        <div style={{ width: "80px", height: "1px", background: "#c17d2a", margin: "0 auto 32px" }} />
        <p style={{ color: "#8a6040", fontSize: "16px", maxWidth: "460px", lineHeight: 1.9, marginBottom: "48px" }}>
          Prime cuts, open fire, and old-growth ambiance. Dinner the way it was meant to be.
        </p>
        <div style={{ display: "flex", gap: "16px" }}>
          <div style={{ background: "#c17d2a", color: "#0a0704", padding: "14px 40px", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "700" }}>Make a Reservation</div>
          <div style={{ border: "1px solid #5a3a18", color: "#c17d2a", padding: "14px 40px", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase" }}>View the Menu</div>
        </div>
      </div>

      {/* Signature Section */}
      <div style={{ padding: "80px 48px", background: "#0d0a06", display: "flex", gap: "64px", alignItems: "center" }}>
        <div style={{ flex: 1, height: "400px", overflow: "hidden", flexShrink: 0 }}>
          <img src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80" alt="Open fire cooking" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "11px", letterSpacing: "5px", color: "#c17d2a", textTransform: "uppercase", marginBottom: "16px" }}>The Cut</p>
          <h2 style={{ fontSize: "44px", fontWeight: "400", letterSpacing: "2px", lineHeight: 1.1, marginBottom: "24px", textTransform: "uppercase" }}>
            Prime Beef.<br />Open Fire.<br />No Apology.
          </h2>
          <p style={{ color: "#7a5a30", lineHeight: 1.9, fontSize: "15px", marginBottom: "32px" }}>
            Every cut at Timber is dry-aged on premises and brought to temperature over a custom-built wood-fired grill fed by Pacific Northwest oak and cherry. Our butcher has been breaking down whole carcasses here since day one.
          </p>
          <div style={{ fontSize: "11px", letterSpacing: "3px", color: "#c17d2a", textTransform: "uppercase", borderBottom: "1px solid #c17d2a", display: "inline-block", paddingBottom: "2px" }}>View the Menu</div>
        </div>
      </div>

      {/* Menu Highlights */}
      <div style={{ padding: "80px 48px", background: "#0a0704" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "5px", color: "#c17d2a", textTransform: "uppercase", marginBottom: "12px" }}>From the Menu</p>
          <h2 style={{ fontSize: "46px", fontWeight: "400", letterSpacing: "4px", textTransform: "uppercase" }}>Signature Cuts</h2>
          <div style={{ width: "80px", height: "1px", background: "#5a3a18", margin: "20px auto 0" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
          {[
            { name: "32 oz Bone-In Ribeye", desc: "45-day dry aged, heritage breed. Open flame, rendered tallow baste.", price: "$98", tag: "House Specialty" },
            { name: "Filet Mignon", desc: "Center cut, 8 oz. Truffle butter, crispy shallots, sea salt.", price: "$72", tag: "" },
            { name: "Tomahawk for Two", desc: "2.5 lb USDA Prime tomahawk, carved tableside with bone marrow.", price: "$185", tag: "Shareable" },
            { name: "New York Strip", desc: "14 oz prime strip. Charred crust, medium rare preferred.", price: "$58", tag: "" },
          ].map((item, i) => (
            <div key={i} style={{ background: i % 2 === 0 ? "#100a05" : "#0d0804", padding: "40px 44px", borderBottom: "1px solid #1e1208", display: "flex", justifyContent: "space-between" }}>
              <div>
                {item.tag && <p style={{ fontSize: "10px", letterSpacing: "4px", color: "#c17d2a", textTransform: "uppercase", marginBottom: "8px" }}>{item.tag}</p>}
                <h3 style={{ fontSize: "22px", fontWeight: "400", letterSpacing: "1px", marginBottom: "12px" }}>{item.name}</h3>
                <p style={{ color: "#6a4a20", fontSize: "14px", lineHeight: 1.7, maxWidth: "360px" }}>{item.desc}</p>
              </div>
              <div style={{ textAlign: "right", marginLeft: "32px", flexShrink: 0 }}>
                <p style={{ color: "#c17d2a", fontSize: "26px", fontWeight: "300" }}>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <div style={{ border: "1px solid #5a3a18", color: "#c17d2a", padding: "14px 40px", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", display: "inline-block" }}>Full Menu</div>
        </div>
      </div>

      {/* Bar */}
      <div style={{ padding: "80px 48px", background: "#130e07", display: "flex", gap: "64px", alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "11px", letterSpacing: "5px", color: "#c17d2a", textTransform: "uppercase", marginBottom: "16px" }}>The Bar at Timber</p>
          <h2 style={{ fontSize: "44px", fontWeight: "400", textTransform: "uppercase", letterSpacing: "2px", lineHeight: 1.1, marginBottom: "24px" }}>Classic<br />Cocktails.<br />Rare Pours.</h2>
          <p style={{ color: "#7a5a30", lineHeight: 1.9, fontSize: "15px", marginBottom: "32px" }}>Our bar program features an American whiskey collection of over 180 bottles, classic cocktails executed without shortcut, and a wine list curated around the bold and the built-to-last.</p>
          <div style={{ display: "flex", gap: "40px", borderTop: "1px solid #2a1a08", paddingTop: "24px" }}>
            <div>
              <p style={{ color: "#c17d2a", fontSize: "26px", fontWeight: "300", marginBottom: "4px" }}>180+</p>
              <p style={{ fontSize: "10px", letterSpacing: "3px", color: "#5a3a18", textTransform: "uppercase" }}>Whiskey Selections</p>
            </div>
            <div>
              <p style={{ color: "#c17d2a", fontSize: "26px", fontWeight: "300", marginBottom: "4px" }}>6pm</p>
              <p style={{ fontSize: "10px", letterSpacing: "3px", color: "#5a3a18", textTransform: "uppercase" }}>Bar Opens Daily</p>
            </div>
          </div>
        </div>
        <div style={{ flex: 1, height: "380px", overflow: "hidden", flexShrink: 0 }}>
          <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80" alt="The bar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: "#060402", borderTop: "1px solid #2a1a08", padding: "48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontSize: "16px", fontWeight: "700", letterSpacing: "4px", color: "#c17d2a", textTransform: "uppercase", marginBottom: "8px" }}>Timber Steakhouse</div>
          <p style={{ fontSize: "11px", color: "#3a2010", letterSpacing: "2px" }}>842 NW Glisan · Portland, OR · (503) 555-0161</p>
        </div>
        <div style={{ fontSize: "11px", color: "#3a2010", letterSpacing: "2px", textAlign: "right" }}>
          <p>Reservations: (503) 555-0161</p>
          <p style={{ marginTop: "8px" }}>&copy; 2024 Timber Steakhouse</p>
        </div>
      </div>
    </div>
  );
}

export default function TimberSteakhouse() {
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
            <p className="text-xs font-sans font-bold text-primary uppercase tracking-widest mb-4">Restaurant</p>
            <h1 className="text-6xl md:text-7xl font-sans font-bold uppercase tracking-tighter leading-none mb-6">Timber Steakhouse</h1>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Portland's most serious steakhouse wanted a site as atmospheric as their dining room. Dark, deliberate, and focused on the food — we built an experience that makes you hungry before you've read a word, and drives reservations from page one.
            </p>
          </div>
          <div className="border-l-4 border-border pl-8 flex flex-col gap-6 justify-center">
            {[
              { label: "Client", value: "Timber Steakhouse & Bar" },
              { label: "Category", value: "Restaurant" },
              { label: "Year", value: "2024" },
              { label: "Deliverables", value: "Website Design, Reservation Integration, Menu CMS, Email Capture" },
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
              www.timbersteakhouse.com
            </div>
          </div>
          <div className="h-[640px] overflow-y-auto">
            <MockTimberSteakhouse />
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
