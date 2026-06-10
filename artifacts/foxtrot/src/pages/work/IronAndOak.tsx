import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import SiteNav from "@/components/SiteNav";

function MockIronAndOak() {
  return (
    <div style={{ fontFamily: "'Helvetica Neue', Helvetica, sans-serif", background: "#fafafa", color: "#111", minHeight: "2600px" }}>
      {/* Nav */}
      <div style={{ background: "#fff", borderBottom: "1px solid #e5e5e5", padding: "0 48px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 10 }}>
        <span style={{ fontSize: "18px", fontWeight: "700", letterSpacing: "4px", textTransform: "uppercase" }}>Iron & Oak</span>
        <div style={{ display: "flex", gap: "32px", fontSize: "13px", letterSpacing: "1px", textTransform: "uppercase" }}>
          <span>Men's</span><span>Women's</span><span>Accessories</span><span>Sale</span>
        </div>
        <div style={{ display: "flex", gap: "20px", fontSize: "13px" }}>
          <span>Search</span><span>Account</span><span>Cart (0)</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div style={{ height: "520px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 80px", backgroundImage: "linear-gradient(rgba(10,10,10,0.82),rgba(10,10,10,0.82)),url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div>
          <p style={{ fontSize: "11px", letterSpacing: "5px", color: "#888", textTransform: "uppercase", marginBottom: "16px" }}>New Arrivals — Fall Collection</p>
          <h1 style={{ fontSize: "64px", fontWeight: "800", color: "#fff", lineHeight: 0.95, marginBottom: "24px", letterSpacing: "-2px" }}>Built<br/>to Last.</h1>
          <p style={{ color: "#aaa", fontSize: "15px", lineHeight: 1.7, maxWidth: "380px", marginBottom: "36px" }}>Premium workwear and weekend gear for those who demand the best from their clothing.</p>
          <div style={{ display: "flex", gap: "12px" }}>
            <div style={{ background: "#fff", color: "#111", padding: "14px 32px", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "700" }}>Shop Men's</div>
            <div style={{ border: "1px solid #555", color: "#fff", padding: "14px 32px", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase" }}>Shop Women's</div>
          </div>
        </div>
        <div style={{ width: "340px", height: "420px", overflow: "hidden", flexShrink: 0 }}>
          <img src="https://images.unsplash.com/photo-1489987707849-cf21b4e87213?auto=format&fit=crop&w=600&q=80" alt="Fall collection" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>

      {/* Category Strip */}
      <div style={{ padding: "56px 48px", background: "#fff" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "12px" }}>
          {[
            { name: "Outerwear", color: "#1a1a1a" },
            { name: "Trousers", color: "#2a2a2a" },
            { name: "Footwear", color: "#333" },
            { name: "Accessories", color: "#1f1f1f" },
          ].map(cat => (
            <div key={cat.name} style={{ background: cat.color, height: "280px", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "24px", cursor: "pointer" }}>
              <p style={{ color: "#fff", fontSize: "18px", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase" }}>{cat.name}</p>
              <p style={{ color: "#888", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", marginTop: "6px" }}>Shop Now →</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div style={{ padding: "56px 48px", background: "#f5f5f5" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "40px" }}>
          <h2 style={{ fontSize: "28px", fontWeight: "800", letterSpacing: "-1px", textTransform: "uppercase" }}>Best Sellers</h2>
          <span style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", borderBottom: "1px solid #111" }}>View All</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px" }}>
          {[
            { name: "Deadwood Canvas Jacket", price: "$298", tag: "Bestseller" },
            { name: "Ironclad Work Trouser", price: "$148", tag: "New" },
            { name: "Roughneck Boot", price: "$365", tag: "" },
            { name: "Field Flannel Shirt", price: "$128", tag: "Bestseller" },
            { name: "Workhorse Tote", price: "$195", tag: "New" },
            { name: "Foreman Wallet", price: "$89", tag: "" },
          ].map((p, i) => (
            <div key={i} style={{ background: "#fff" }}>
              <div style={{ height: "280px", background: `hsl(${i * 30}, 8%, ${85 - i * 3}%)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                {p.tag && <div style={{ position: "absolute", top: "12px", left: "12px", background: "#111", color: "#fff", fontSize: "10px", letterSpacing: "2px", padding: "4px 10px", textTransform: "uppercase" }}>{p.tag}</div>}
                <span style={{ color: "#aaa", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase" }}>Product</span>
              </div>
              <div style={{ padding: "16px" }}>
                <p style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "0.5px", marginBottom: "4px" }}>{p.name}</p>
                <p style={{ fontSize: "13px", color: "#555" }}>{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Story */}
      <div style={{ padding: "80px 48px", background: "#111", color: "#fff", display: "flex", gap: "80px", alignItems: "center" }}>
        <div style={{ width: "400px", height: "400px", flexShrink: 0, overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=700&q=80" alt="Brand story" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div>
          <p style={{ fontSize: "10px", letterSpacing: "5px", color: "#888", textTransform: "uppercase", marginBottom: "16px" }}>Our Story</p>
          <h2 style={{ fontSize: "42px", fontWeight: "800", letterSpacing: "-1px", marginBottom: "24px", lineHeight: 1.1 }}>Made in the USA.<br/>No Shortcuts.</h2>
          <p style={{ color: "#aaa", fontSize: "15px", lineHeight: 1.9, marginBottom: "32px" }}>Since 2008, Iron & Oak has crafted workwear and weekend essentials using American-milled materials and time-tested construction methods. We build things to be worn, not just worn out.</p>
          <div style={{ display: "inline-block", border: "1px solid #555", color: "#fff", padding: "12px 28px", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase" }}>Our Story</div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: "#0a0a0a", color: "#555", padding: "48px", borderTop: "1px solid #222" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontWeight: "800", fontSize: "18px", letterSpacing: "4px", textTransform: "uppercase", color: "#fff" }}>Iron & Oak</span>
          <div style={{ display: "flex", gap: "32px", fontSize: "12px", letterSpacing: "1px", textTransform: "uppercase" }}>
            <span>Shipping & Returns</span><span>Size Guide</span><span>Contact</span>
          </div>
        </div>
        <div style={{ marginTop: "32px", fontSize: "11px", letterSpacing: "1px" }}>&copy; 2024 Iron & Oak. All Rights Reserved.</div>
      </div>
    </div>
  );
}

export default function IronAndOak() {
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
            <p className="text-xs font-sans font-bold text-primary uppercase tracking-widest mb-4">Retail E-Commerce</p>
            <h1 className="text-6xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-none mb-6">Iron & Oak</h1>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A made-in-America apparel brand needed an e-commerce experience as uncompromising as their product. We built a clean, editorial storefront that lets the goods speak for themselves — no noise, no gimmicks, just product and purpose.
            </p>
          </div>
          <div className="border-l-4 border-border pl-8 flex flex-col gap-6 justify-center">
            {[
              { label: "Client", value: "Iron & Oak Goods Co." },
              { label: "Category", value: "Retail E-Commerce" },
              { label: "Year", value: "2024" },
              { label: "Deliverables", value: "Website Design, E-Commerce Development, Product Photography Art Direction" },
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
              www.ironandoakgoods.com
            </div>
          </div>
          <div className="portfolio-preview h-[640px] overflow-y-auto">
            <MockIronAndOak />
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
