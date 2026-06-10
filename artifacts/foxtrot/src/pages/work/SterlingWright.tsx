import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import SiteNav from "@/components/SiteNav";
import PortfolioPager from "@/components/PortfolioPager";

function MockSterlingWright() {
  return (
    <div style={{ fontFamily: "'Times New Roman', Times, serif", background: "#f8f7f4", color: "#1a1a2e", minHeight: "2600px" }}>
      {/* Nav */}
      <div style={{ background: "#1a1a2e", padding: "0 48px", height: "70px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{ width: "1px", height: "36px", background: "#8a7d5a" }} />
          <div>
            <div style={{ fontSize: "15px", fontWeight: "700", letterSpacing: "5px", textTransform: "uppercase", color: "#fff" }}>Sterling & Wright</div>
            <div style={{ fontSize: "9px", letterSpacing: "4px", color: "#8a7d5a", textTransform: "uppercase" }}>Attorneys at Law</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "32px", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", color: "#8a7d5a" }}>
          <span>Practice Areas</span><span>Attorneys</span><span>Results</span><span>About</span>
        </div>
        <div style={{ background: "#8a7d5a", color: "#1a1a2e", padding: "10px 24px", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "700" }}>Free Consultation</div>
      </div>

      {/* Hero */}
      <div style={{ height: "540px", display: "flex", alignItems: "center", padding: "0 80px", position: "relative", backgroundImage: "linear-gradient(rgba(10,10,22,0.82),rgba(10,10,22,0.82)),url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div style={{ position: "absolute", right: "80px", top: "50%", transform: "translateY(-50%)", zIndex: 2, textAlign: "right" }}>
          <div style={{ width: "80px", height: "80px", border: "2px solid #8a7d5a", margin: "0 0 20px auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: "36px" }}>⚖</span>
          </div>
          <p style={{ color: "#8a7d5a", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase" }}>Est. 1987</p>
          <p style={{ color: "#8a7d5a", fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase" }}>New York, NY</p>
        </div>
        <div style={{ maxWidth: "520px", position: "relative", zIndex: 2 }}>
          <p style={{ fontSize: "11px", letterSpacing: "5px", color: "#8a7d5a", textTransform: "uppercase", marginBottom: "20px" }}>Sterling & Wright LLP</p>
          <h1 style={{ fontSize: "58px", fontWeight: "400", color: "#fff", lineHeight: 1.1, marginBottom: "28px", letterSpacing: "1px" }}>
            When It Matters Most, Choose Experience.
          </h1>
          <p style={{ color: "#8a9ab0", fontSize: "15px", lineHeight: 1.8, marginBottom: "40px" }}>
            35 years of proven results in corporate law, litigation, and estate planning. Our attorneys are trusted advisors to individuals and enterprises alike.
          </p>
          <div style={{ display: "flex", gap: "16px" }}>
            <div style={{ background: "#8a7d5a", color: "#1a1a2e", padding: "14px 32px", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", fontWeight: "700" }}>Free Consultation</div>
            <div style={{ border: "1px solid #8a7d5a", color: "#8a7d5a", padding: "14px 32px", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase" }}>Our Results</div>
          </div>
        </div>
      </div>

      {/* Practice Areas */}
      <div style={{ padding: "80px 48px", background: "#fff" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "5px", color: "#8a7d5a", textTransform: "uppercase", marginBottom: "12px" }}>Our Expertise</p>
          <h2 style={{ fontSize: "42px", fontWeight: "400", letterSpacing: "2px" }}>Practice Areas</h2>
          <div style={{ width: "60px", height: "2px", background: "#8a7d5a", margin: "20px auto 0" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px" }}>
          {[
            { area: "Corporate Law", desc: "Mergers, acquisitions, contract negotiations, and corporate governance for businesses of every size.", icon: "🏛" },
            { area: "Civil Litigation", desc: "Aggressive, experienced representation in complex commercial and civil disputes.", icon: "⚖" },
            { area: "Estate Planning", desc: "Comprehensive wills, trusts, and estate administration tailored to your legacy.", icon: "📜" },
            { area: "Real Estate", desc: "Commercial and residential transactions, zoning, development, and financing.", icon: "🏢" },
            { area: "Employment Law", desc: "Employer counsel and employee rights advocacy for workplace disputes.", icon: "👤" },
            { area: "Intellectual Property", desc: "Patents, trademarks, copyrights, and licensing for creative and technology firms.", icon: "💡" },
          ].map((p, i) => (
            <div key={i} style={{ border: "1px solid #e5e0d0", padding: "36px", transition: "all 0.2s" }}>
              <div style={{ fontSize: "28px", marginBottom: "16px" }}>{p.icon}</div>
              <h3 style={{ fontWeight: "600", letterSpacing: "1px", marginBottom: "12px", textTransform: "uppercase", fontSize: "15px" }}>{p.area}</h3>
              <p style={{ color: "#6a6a7e", fontSize: "14px", lineHeight: 1.8 }}>{p.desc}</p>
              <div style={{ marginTop: "24px", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#8a7d5a", borderBottom: "1px solid #8a7d5a", display: "inline-block", paddingBottom: "2px" }}>Learn More</div>
            </div>
          ))}
        </div>
      </div>

      {/* Results */}
      <div style={{ padding: "80px 48px", background: "#1a1a2e", color: "#fff", textAlign: "center" }}>
        <p style={{ fontSize: "11px", letterSpacing: "5px", color: "#8a7d5a", textTransform: "uppercase", marginBottom: "12px" }}>Our Track Record</p>
        <h2 style={{ fontSize: "42px", fontWeight: "400", letterSpacing: "2px", marginBottom: "56px" }}>Proven Results</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "48px" }}>
          {[["$2.4B+", "Recovered"], ["97%", "Success Rate"], ["35+", "Years Practice"], ["500+", "Cases Won"]].map(([num, label]) => (
            <div key={label} style={{ borderTop: "1px solid #3a3a5e", paddingTop: "32px" }}>
              <p style={{ fontSize: "48px", fontWeight: "300", color: "#8a7d5a", marginBottom: "8px" }}>{num}</p>
              <p style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", color: "#8a9ab0" }}>{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Attorneys */}
      <div style={{ padding: "80px 48px", background: "#f8f7f4" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <p style={{ fontSize: "11px", letterSpacing: "5px", color: "#8a7d5a", textTransform: "uppercase", marginBottom: "12px" }}>Our Team</p>
          <h2 style={{ fontSize: "42px", fontWeight: "400", letterSpacing: "2px" }}>Our Attorneys</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "32px" }}>
          {[
            { name: "James R. Sterling", title: "Founding Partner", focus: "Corporate & M&A" },
            { name: "Patricia Wright", title: "Senior Partner", focus: "Civil Litigation" },
            { name: "David Chen", title: "Partner", focus: "Intellectual Property" },
          ].map((a, i) => (
            <div key={a.name} style={{ background: "#fff", overflow: "hidden" }}>
              <div style={{ height: "280px", overflow: "hidden" }}>
                <img
                  src={[
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
                  ][i]}
                  alt={a.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                />
              </div>
              <div style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "17px", fontWeight: "600", marginBottom: "4px" }}>{a.name}</h3>
                <p style={{ fontSize: "11px", letterSpacing: "3px", color: "#8a7d5a", textTransform: "uppercase", marginBottom: "8px" }}>{a.title}</p>
                <p style={{ fontSize: "12px", color: "#6a6a7e", letterSpacing: "1px" }}>Focus: {a.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: "#1a1a2e", color: "#8a9ab0", padding: "48px", borderTop: "2px solid #3a3a5e" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontWeight: "700", fontSize: "13px", letterSpacing: "4px", color: "#fff", textTransform: "uppercase", marginBottom: "8px" }}>Sterling & Wright LLP</div>
            <p style={{ fontSize: "12px", lineHeight: 1.8, color: "#4a4a6e" }}>555 Fifth Avenue, 22nd Floor<br />New York, NY 10017<br />(212) 555-0182</p>
          </div>
          <div style={{ fontSize: "11px", color: "#4a4a6e", letterSpacing: "1px", textAlign: "right" }}>
            <p>Attorney Advertising.</p>
            <p style={{ marginTop: "8px" }}>&copy; 2024 Sterling & Wright LLP. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SterlingWright() {
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
            <p className="text-xs font-sans font-bold text-primary uppercase tracking-widest mb-4">Legal Services</p>
            <h1 className="text-6xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-none mb-6">Sterling & Wright</h1>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A 35-year-old New York law firm needed a digital presence that communicated authority without sacrificing approachability. We built a site that commands confidence — authoritative typography, clear practice area navigation, and a conversion architecture that drives consultations.
            </p>
          </div>
          <div className="border-l-4 border-border pl-8 flex flex-col gap-6 justify-center">
            {[
              { label: "Client", value: "Sterling & Wright LLP" },
              { label: "Category", value: "Legal Services" },
              { label: "Year", value: "2023" },
              { label: "Deliverables", value: "Website Design, CMS Integration, Case Study Framework" },
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
              www.sterlingwrightlaw.com
            </div>
          </div>
          <div className="portfolio-preview h-[640px] overflow-y-auto">
            <MockSterlingWright />
          </div>
        </div>

        <PortfolioPager slug="sterling-wright" />
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
