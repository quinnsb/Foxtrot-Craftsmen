import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import SiteNav from "@/components/SiteNav";

function MockApexAlpine() {
  return (
    <div style={{ fontFamily: "'Helvetica Neue', Helvetica, sans-serif", background: "#f2ede6", color: "#1a1a1a", minHeight: "2600px" }}>
      {/* Nav */}
      <div style={{ background: "#1a2818", padding: "0 48px", height: "68px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ color: "#e8c840", fontSize: "20px" }}>▲</span>
          <div>
            <span style={{ fontWeight: "900", fontSize: "16px", letterSpacing: "5px", textTransform: "uppercase", color: "#fff" }}>Apex</span>
            <span style={{ fontWeight: "300", fontSize: "16px", letterSpacing: "3px", textTransform: "uppercase", color: "#e8c840" }}> Alpine</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: "32px", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "#a0b090" }}>
          <span>Climb</span><span>Ski</span><span>Camp</span><span>Run</span><span>Sale</span>
        </div>
        <div style={{ display: "flex", gap: "16px", fontSize: "13px", color: "#a0b090" }}>
          <span>Search</span><span>Cart</span>
        </div>
      </div>

      {/* Hero */}
      <div style={{ height: "600px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", backgroundImage: "linear-gradient(rgba(8,14,6,0.75),rgba(8,14,6,0.75)),url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <p style={{ fontSize: "11px", letterSpacing: "6px", color: "#e8c840", textTransform: "uppercase", marginBottom: "20px" }}>Fall / Winter 2024</p>
        <h1 style={{ fontSize: "80px", fontWeight: "900", color: "#fff", lineHeight: 0.9, marginBottom: "24px", letterSpacing: "-3px", textTransform: "uppercase" }}>
          Go<br /><span style={{ color: "#e8c840" }}>Higher.</span>
        </h1>
        <p style={{ color: "#a0b090", fontSize: "16px", maxWidth: "440px", lineHeight: 1.7, marginBottom: "40px" }}>
          Technical gear for alpine climbing, backcountry skiing, and high-route trekking. Engineered for the places where it counts.
        </p>
        <div style={{ display: "flex", gap: "12px" }}>
          <div style={{ background: "#e8c840", color: "#1a1a1a", padding: "14px 36px", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "800" }}>Shop FW24</div>
          <div style={{ border: "1px solid #a0b090", color: "#fff", padding: "14px 36px", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase" }}>Gear Guides</div>
        </div>
      </div>

      {/* Disciplines */}
      <div style={{ padding: "64px 48px", background: "#fff" }}>
        <h2 style={{ fontSize: "11px", letterSpacing: "5px", textTransform: "uppercase", color: "#888", marginBottom: "40px", textAlign: "center" }}>Gear by Discipline</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "16px" }}>
          {[
            { name: "Alpine Climbing", icon: "⛰", bg: "#1a2818", color: "#e8c840" },
            { name: "Backcountry Ski", icon: "🎿", bg: "#2a3520", color: "#fff" },
            { name: "High Route Trek", icon: "🥾", bg: "#354528", color: "#e8c840" },
            { name: "Mountain Run", icon: "🏔", bg: "#1e2e18", color: "#fff" },
          ].map(d => (
            <div key={d.name} style={{ background: d.bg, height: "320px", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "28px 24px", cursor: "pointer", transition: "transform 0.2s" }}>
              <div style={{ fontSize: "32px", marginBottom: "12px" }}>{d.icon}</div>
              <h3 style={{ color: d.color, fontWeight: "700", fontSize: "16px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>{d.name}</h3>
              <p style={{ color: "#a0b090", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" }}>Shop →</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Gear */}
      <div style={{ padding: "64px 48px", background: "#f2ede6" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: "900", letterSpacing: "-1px", textTransform: "uppercase" }}>Featured Gear</h2>
          <span style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", borderBottom: "1px solid #1a1a1a" }}>See All Gear</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
          {[
            { name: "Summit Shell Jacket", price: "$549", tag: "Best in Class", bg: "#2d4a24" },
            { name: "Couloir Bib Pants", price: "$395", tag: "New", bg: "#1a2818" },
            { name: "Ridge Runner Boot", price: "$485", tag: "", bg: "#354528" },
            { name: "Alpenglow Insulator", price: "$298", tag: "Staff Pick", bg: "#243520" },
            { name: "Storm Anchor Crampon", price: "$165", tag: "", bg: "#1e2e18" },
            { name: "Alpine Rope 60m", price: "$285", tag: "New", bg: "#2a3520" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#fff", overflow: "hidden" }}>
              <div style={{ height: "260px", background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                {item.tag && <div style={{ position: "absolute", top: "12px", left: "12px", background: "#e8c840", color: "#1a1a1a", fontSize: "10px", letterSpacing: "2px", padding: "4px 10px", textTransform: "uppercase", fontWeight: "700" }}>{item.tag}</div>}
                <span style={{ color: "#4a6040", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" }}>Product</span>
              </div>
              <div style={{ padding: "16px" }}>
                <p style={{ fontSize: "14px", fontWeight: "600", marginBottom: "4px", letterSpacing: "0.5px" }}>{item.name}</p>
                <p style={{ fontSize: "14px", color: "#555", fontWeight: "700" }}>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <div style={{ padding: "80px 48px", background: "#1a2818", color: "#fff", display: "flex", gap: "80px", alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "11px", letterSpacing: "5px", color: "#e8c840", textTransform: "uppercase", marginBottom: "16px" }}>Built for the Mountain</p>
          <h2 style={{ fontSize: "44px", fontWeight: "900", letterSpacing: "-1px", lineHeight: 1.05, marginBottom: "24px", textTransform: "uppercase" }}>Gear That<br />Goes Where<br />You Do.</h2>
          <p style={{ color: "#a0b090", fontSize: "15px", lineHeight: 1.9, marginBottom: "32px" }}>Every Apex product is field-tested by professional guides and serious alpinists before it reaches the shop floor. We make gear that performs, period.</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            {[["12+", "Years Testing"], ["340+", "Products"], ["4", "Continents Used"], ["100%", "Satisfaction"]].map(([num, label]) => (
              <div key={label}>
                <p style={{ fontSize: "36px", fontWeight: "900", color: "#e8c840" }}>{num}</p>
                <p style={{ fontSize: "11px", letterSpacing: "3px", color: "#a0b090", textTransform: "uppercase" }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: 1, height: "400px", overflow: "hidden", flexShrink: 0 }}>
          <img src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80" alt="Alpine lifestyle" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: "#0d1508", borderTop: "2px solid #2a3520", padding: "48px", display: "flex", justifyContent: "space-between" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <span style={{ color: "#e8c840", fontSize: "18px" }}>▲</span>
            <span style={{ fontWeight: "900", fontSize: "15px", letterSpacing: "4px", color: "#fff", textTransform: "uppercase" }}>Apex Alpine</span>
          </div>
          <p style={{ fontSize: "11px", color: "#3a5a30", letterSpacing: "2px" }}>&copy; 2024 Apex Alpine. All rights reserved.</p>
        </div>
        <div style={{ display: "flex", gap: "40px", fontSize: "12px", color: "#4a6040", letterSpacing: "2px", textTransform: "uppercase", alignItems: "flex-start" }}>
          <span>Warranty</span><span>Returns</span><span>Size Guide</span><span>Contact</span>
        </div>
      </div>
    </div>
  );
}

export default function ApexAlpine() {
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
            <p className="text-xs font-sans font-bold text-primary uppercase tracking-widest mb-4">Outdoor Brand</p>
            <h1 className="text-6xl md:text-7xl font-sans font-bold uppercase tracking-tighter leading-none mb-6">Apex Alpine</h1>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed max-w-2xl">
              An outdoor gear brand with serious technical credibility needed a site that matched the rugged confidence of their product line. Bold, dark, and built for movement — we created a digital storefront worthy of the alpine.
            </p>
          </div>
          <div className="border-l-4 border-border pl-8 flex flex-col gap-6 justify-center">
            {[
              { label: "Client", value: "Apex Alpine Gear" },
              { label: "Category", value: "Outdoor Brand" },
              { label: "Year", value: "2024" },
              { label: "Deliverables", value: "Website Design, E-Commerce, Product Taxonomy, Email Marketing" },
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
              www.apexalpine.com
            </div>
          </div>
          <div className="h-[640px] overflow-y-auto">
            <MockApexAlpine />
          </div>
        </div>
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
