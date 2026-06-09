import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const PORTFOLIO_PROJECTS = [
  { id: 1, title: "The Heritage Inn", category: "Hospitality", image: "/assets/work-hotel.png" },
  { id: 2, title: "Iron & Oak", category: "Retail E-Commerce", image: "/assets/work-retail.png" },
  { id: 3, title: "Copperhead Brew Co.", category: "Food & Beverage", image: "/assets/work-brewery.png" },
  { id: 4, title: "Apex Alpine", category: "Outdoor Brand", image: "/assets/work-outdoor.png" },
  { id: 5, title: "Sterling & Wright", category: "Legal Services", image: "/assets/work-law.png" },
  { id: 6, title: "Timber Steakhouse", category: "Restaurant", image: "/assets/work-restaurant.png" },
];

const SERVICES = [
  { title: "Website Design", desc: "Bespoke, hand-crafted digital storefronts built to outlast trends." },
  { title: "Brand Identity", desc: "Logos, marks, and typography systems that command respect." },
  { title: "Strategy & Positioning", desc: "Sharpening your message until it cuts through the noise." },
  { title: "Digital Presence", desc: "End-to-end digital infrastructure for serious businesses." },
];

export default function Home() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = (data: ContactFormValues) => {
    toast({
      title: "Message Received",
      description: "We'll be in touch shortly. Back to work.",
      className: "bg-background border-border shadow-sm rounded-none font-sans font-medium uppercase",
    });
    form.reset();
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative selection:bg-primary selection:text-primary-foreground">
      
      {/* NAVIGATION */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b-4 border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('hero')} data-testid="nav-logo">
            <img src="/assets/foxtrot-logo-icon.png" alt="Foxtrot Icon" className="h-10 w-10 object-contain" />
            <span className="font-sans font-bold text-xl uppercase tracking-wider hidden sm:block">Foxtrot</span>
          </div>
          
          <nav className="flex items-center gap-6 md:gap-10 font-sans font-medium uppercase text-sm tracking-widest">
            <button onClick={() => scrollToSection('work')} className="hover:text-primary transition-colors" data-testid="nav-link-work">Work</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors hidden sm:block" data-testid="nav-link-services">Services</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors hidden md:block" data-testid="nav-link-about">About</button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="rounded-none border-2 border-border shadow-xs hover:shadow-sm font-sans uppercase font-bold tracking-widest"
              data-testid="nav-cta"
            >
              Start Project
            </Button>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="hero" className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 px-4 sm:px-6 lg:px-8 border-b-4 border-border overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none ruled-bg" />
        
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.img 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src="/assets/foxtrot-logo-full.png" 
            alt="Foxtrot Quality Made Goods" 
            className="w-full max-w-2xl mb-12"
          />
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold uppercase leading-[0.9] tracking-tighter max-w-4xl text-balance mb-8"
          >
            Digital craftsmanship <br/> for serious businesses.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl font-serif max-w-2xl text-muted-foreground mb-12 leading-relaxed"
          >
            We don't do "trendy." We build hard-working, utilitarian web presences that earn their keep. Ink, grid, and code—assembled with purpose since 1998.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button 
              size="lg" 
              onClick={() => scrollToSection('work')}
              className="rounded-none h-16 px-8 text-lg font-sans uppercase font-bold tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-border shadow-sm hover:shadow transition-all"
              data-testid="hero-cta-work"
            >
              See Our Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="rounded-none h-16 px-8 text-lg font-sans uppercase font-bold tracking-widest border-2 border-border shadow-xs hover:bg-border hover:text-background transition-all"
              data-testid="hero-cta-contact"
            >
              Start a Project
            </Button>
          </motion.div>
        </div>
      </section>

      {/* WORK / PORTFOLIO */}
      <section id="work" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b-4 border-border bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b-4 border-border pb-8">
            <div>
              <h2 className="text-sm font-sans font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-primary block"></span> Selected Works
              </h2>
              <h3 className="text-5xl md:text-6xl font-sans font-bold uppercase tracking-tighter">Built to Last</h3>
            </div>
            <p className="font-serif text-muted-foreground max-w-md text-right hidden md:block">
              A collection of our finest digital goods, crafted for clients who demand reliability and character.
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t-2 border-l-2 border-border"
          >
            {PORTFOLIO_PROJECTS.map((project) => (
              <motion.div 
                key={project.id} 
                variants={fadeUp}
                className="group border-r-2 border-b-2 border-border relative overflow-hidden bg-background p-4 flex flex-col cursor-pointer"
                data-testid={`portfolio-card-${project.id}`}
              >
                <div className="relative border-2 border-border overflow-hidden mb-4 aspect-[4/3] bg-muted">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-multiply" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>
                <div className="flex justify-between items-end mt-auto pt-2">
                  <div>
                    <p className="text-xs font-sans font-bold text-primary uppercase tracking-widest mb-1">{project.category}</p>
                    <h4 className="text-2xl font-sans font-bold uppercase tracking-tight">{project.title}</h4>
                  </div>
                  <div className="w-10 h-10 border-2 border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b-4 border-border relative">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <img src="/assets/foxtrot-logo-icon.png" alt="Decoration" className="w-64 h-64 object-contain" />
        </div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-sm font-sans font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary block"></span> Our Services
            </h2>
            <h3 className="text-5xl md:text-6xl font-sans font-bold uppercase tracking-tighter mb-6">What We Do</h3>
            <p className="font-serif text-lg text-muted-foreground mb-8">
              We specialize in the heavy lifting of digital design. No fluff, no flavor-of-the-month trends. Just solid strategy and meticulous execution.
            </p>
            <div className="inline-block border-4 border-border p-6 bg-card rotate-1 transform">
              <p className="font-sans font-bold uppercase text-2xl tracking-tighter text-center">
                Quality<br/>Guaranteed
              </p>
              <div className="w-full h-1 bg-border my-2"></div>
              <p className="font-sans font-medium text-xs text-center tracking-widest">Since 1998</p>
            </div>
          </div>
          
          <div className="lg:w-2/3 border-t-4 border-border">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="border-b-4 border-border py-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 group">
                <div className="text-5xl font-sans font-bold text-border opacity-20 w-16 group-hover:opacity-100 group-hover:text-primary transition-all">
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="text-3xl font-sans font-bold uppercase tracking-tight mb-2">{service.title}</h4>
                  <p className="font-serif text-muted-foreground">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b-4 border-border bg-card">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
          <div className="md:w-1/2 relative">
            <div className="aspect-[3/4] border-4 border-border bg-muted relative p-4">
               <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stucco.png')] mix-blend-multiply pointer-events-none"></div>
               <div className="w-full h-full border-2 border-border flex items-center justify-center flex-col bg-background/50 p-8 text-center relative overflow-hidden">
                 <img src="/assets/foxtrot-logo-full.png" alt="Foxtrot" className="w-full opacity-80" />
                 <div className="absolute bottom-8 left-8 right-8 border-t-2 border-border pt-4">
                    <p className="font-sans font-bold uppercase tracking-widest text-sm">Est. 1998 • Workshop</p>
                 </div>
               </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary border-4 border-border flex items-center justify-center text-primary-foreground font-sans font-bold uppercase tracking-tighter text-xl rotate-12 shadow-sm">
              Solid.
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-sm font-sans font-bold text-primary uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary block"></span> Our Story
            </h2>
            <h3 className="text-4xl md:text-5xl font-sans font-bold uppercase tracking-tighter mb-6">Hard at work. <br/> No excuses.</h3>
            <div className="font-serif text-lg space-y-6 text-foreground/80">
              <p>
                Foxtrot isn't a trendy Silicon Valley studio. We're a digital workshop modeled after the print shops and boot makers of the past. Every line of code, every pixel, every layout earns its place.
              </p>
              <p>
                Since 1998, we've believed in putting in the reps. We sweat the details so you don't have to. The result is a digital presence that feels substantial, performs flawlessly, and refuses to break down when you need it most.
              </p>
              <div className="flex gap-4 pt-4 border-t-2 border-border border-dashed">
                <div className="flex items-center gap-2 font-sans font-bold uppercase tracking-widest text-sm">
                  <Check className="w-5 h-5 text-primary" /> Utilitarian Design
                </div>
                <div className="flex items-center gap-2 font-sans font-bold uppercase tracking-widest text-sm">
                  <Check className="w-5 h-5 text-primary" /> Enduring Quality
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none ruled-bg" />
        
        <div className="max-w-4xl mx-auto bg-card border-4 border-border shadow-md p-8 md:p-12 lg:p-16 relative z-10">
          <div className="absolute top-0 right-0 w-16 h-16 border-l-4 border-b-4 border-border flex items-center justify-center bg-muted">
            <div className="w-4 h-4 bg-border rounded-full" />
          </div>
          
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-sans font-bold uppercase tracking-tighter mb-4">Start a Project</h2>
            <p className="font-serif text-lg text-muted-foreground">Drop us a line. Tell us what you're building. We'll bring the tools.</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans font-bold uppercase tracking-widest text-sm">Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Jane Doe" 
                          {...field} 
                          className="rounded-none border-2 border-border h-14 bg-background font-serif text-lg shadow-none focus-visible:ring-primary focus-visible:ring-offset-0 focus-visible:border-primary"
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage className="font-sans text-xs uppercase font-medium text-destructive" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-sans font-bold uppercase tracking-widest text-sm">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="jane@company.com" 
                          {...field} 
                          className="rounded-none border-2 border-border h-14 bg-background font-serif text-lg shadow-none focus-visible:ring-primary focus-visible:ring-offset-0 focus-visible:border-primary"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage className="font-sans text-xs uppercase font-medium text-destructive" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-sans font-bold uppercase tracking-widest text-sm">Project Details</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="What are we building?" 
                        {...field} 
                        className="rounded-none border-2 border-border min-h-[150px] bg-background font-serif text-lg resize-y shadow-none focus-visible:ring-primary focus-visible:ring-offset-0 focus-visible:border-primary"
                        data-testid="input-message"
                      />
                    </FormControl>
                    <FormMessage className="font-sans text-xs uppercase font-medium text-destructive" />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                size="lg" 
                className="w-full sm:w-auto rounded-none h-16 px-12 text-lg font-sans uppercase font-bold tracking-widest bg-foreground text-background hover:bg-primary border-2 border-border shadow-sm hover:shadow transition-all"
                data-testid="btn-submit"
              >
                Send Inquiry <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </Form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background py-16 px-4 sm:px-6 lg:px-8 border-t-8 border-primary">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <img src="/assets/foxtrot-logo-full.png" alt="Foxtrot" className="h-16 object-contain invert mb-6" />
            <p className="font-sans font-medium uppercase tracking-widest text-sm text-background/60">Quality Made Goods. Hard at work since 1998.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 font-sans font-bold uppercase tracking-widest text-sm">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('work')} className="text-left hover:text-primary transition-colors">Work</button>
              <button onClick={() => scrollToSection('services')} className="text-left hover:text-primary transition-colors">Services</button>
            </div>
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-primary transition-colors">Contact</button>
            </div>
            <div className="flex flex-col gap-4 text-background/40">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-background/20 font-sans font-medium uppercase tracking-widest text-xs text-background/40 flex flex-col sm:flex-row justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Foxtrot Agency. All Rights Reserved.</p>
          <p>Built with intent.</p>
        </div>
      </footer>
    </div>
  );
}
