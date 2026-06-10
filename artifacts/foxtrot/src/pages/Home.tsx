import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import SiteNav from "@/components/SiteNav";
import { PORTFOLIO_PROJECTS } from "@/data/portfolio";

const CONTACT_EMAIL = "hello@foxtrotagency.com";
const CONTACT_ENDPOINT = import.meta.env["VITE_CONTACT_ENDPOINT"] as
  | string
  | undefined;

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const SERVICES = [
  {
    title: "Website Design",
    desc: "Bespoke, hand-crafted digital storefronts built to outlast trends.",
  },
  {
    title: "Brand Identity",
    desc: "Logos, marks, and typography systems that command respect.",
  },
  {
    title: "Strategy & Positioning",
    desc: "Sharpening your message until it cuts through the noise.",
  },
  {
    title: "Digital Presence",
    desc: "End-to-end digital infrastructure for serious businesses.",
  },
];

const PORTFOLIO_HERO_IMAGES: Record<number, string> = {
  1: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=80",
  2: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
  3: "https://images.unsplash.com/photo-1436076863939-06870fe779c2?auto=format&fit=crop&w=1600&q=80",
  4: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1600&q=80",
  5: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
  6: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1600&q=80",
};

const getPortfolioHeroImage = (projectId: number) =>
  PORTFOLIO_HERO_IMAGES[projectId] ?? PORTFOLIO_HERO_IMAGES[1];

export default function Home() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    const subject = encodeURIComponent("Project Inquiry from Foxtrot Website");
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nProject Details:\n${data.message}`,
    );

    if (CONTACT_ENDPOINT) {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        toast({
          title: "Message Failed",
          description:
            "Something jammed up. Email us directly and we'll get it handled.",
          className:
            "bg-background border-border shadow-sm rounded-none font-display font-medium uppercase",
        });
        return;
      }

      toast({
        title: "Message Received",
        description: "We'll be in touch shortly. Back to work.",
        className:
          "bg-background border-border shadow-sm rounded-none font-display font-medium uppercase",
      });
      form.reset();
      return;
    }

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    toast({
      title: "Email Draft Opened",
      description: "Your inquiry is ready to send from your email app.",
      className:
        "bg-background border-border shadow-sm rounded-none font-display font-medium uppercase",
    });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative selection:bg-primary selection:text-primary-foreground">
      <SiteNav />

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 px-4 sm:px-6 lg:px-8 border-b-4 border-border overflow-hidden"
      >
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

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="max-w-3xl mb-10"
          >
            <h1 className="text-4xl md:text-6xl font-display uppercase tracking-tighter mb-4">
              Website Design & Brand Identity in Normal, Illinois
            </h1>
            <p className="font-serif text-lg text-muted-foreground leading-relaxed">
              Durable websites, sharper brands, and digital strategy for
              businesses in Normal, Bloomington, and across Central Illinois.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("work")}
              className="rounded-none h-16 px-8 text-lg font-display uppercase font-bold tracking-widest bg-primary text-primary-foreground hover:bg-primary/90 border-2 border-border shadow-sm hover:shadow transition-all"
              data-testid="hero-cta-work"
            >
              See Our Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="rounded-none h-16 px-8 text-lg font-display uppercase font-bold tracking-widest border-2 border-border shadow-xs hover:bg-border hover:text-background transition-all"
              data-testid="hero-cta-contact"
            >
              Start a Project
            </Button>
          </motion.div>
        </div>
      </section>

      {/* WORK / PORTFOLIO */}
      <section
        id="work"
        className="scroll-mt-20 bg-black px-4 py-16 text-white sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex items-end justify-between gap-6">
            <h3 className="font-sans text-xl font-medium uppercase tracking-tight md:text-2xl">
              Selected Works
            </h3>
            <p className="hidden font-mono text-[10px] uppercase tracking-tight text-white/45 sm:block">
              {PORTFOLIO_PROJECTS.length} Projects
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-2">
            {PORTFOLIO_PROJECTS.map((project) => (
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                className="group block no-underline"
                data-testid={`portfolio-card-${project.id}`}
              >
                <div className="aspect-[16/8.4] overflow-hidden rounded-xl bg-white/5">
                  <img
                    src={getPortfolioHeroImage(project.id)}
                    alt={`${project.title} brand hero image`}
                    className="h-full w-full object-cover opacity-85 grayscale-[0.1] transition-all duration-700 group-hover:scale-[1.03] group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
                <div className="mt-1.5 flex items-center justify-between gap-4 font-mono text-[10px] uppercase leading-none tracking-tight text-white/80">
                  <span className="truncate">{project.client}</span>
                  <span className="shrink-0 text-white/60">
                    {project.category}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b-4 border-border relative"
      >
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <img
            src="/assets/foxtrot-logo-icon.png"
            alt=""
            className="w-64 h-64 object-contain"
          />
        </div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="mb-4 flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-tight text-primary">
              <span className="w-8 h-[2px] bg-primary block"></span> Our
              Services
            </h2>
            <h3 className="mb-6 font-sans text-4xl font-medium uppercase leading-none tracking-tight md:text-6xl">
              What We Do
            </h3>
            <p className="mb-8 font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
              We specialize in the heavy lifting of digital design. No fluff, no
              flavor-of-the-month trends. Just solid strategy and meticulous
              execution.
            </p>
            <div className="inline-block border-4 border-border p-6 bg-card rotate-1 transform">
              <p className="text-center font-sans text-2xl font-medium uppercase leading-none tracking-tight">
                Quality
                <br />
                Guaranteed
              </p>
              <div className="w-full h-1 bg-border my-2"></div>
              <p className="text-center font-mono text-[10px] uppercase tracking-tight">
                Since 1998
              </p>
            </div>
          </div>

          <div className="lg:w-2/3 border-t-4 border-border">
            {SERVICES.map((service, idx) => (
              <div
                key={idx}
                className="border-b-4 border-border py-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 group"
              >
                <div className="w-16 font-mono text-4xl font-medium text-border opacity-20 transition-all group-hover:text-primary group-hover:opacity-100">
                  0{idx + 1}
                </div>
                <div>
                  <h4 className="mb-2 font-sans text-2xl font-medium uppercase tracking-tight md:text-3xl">
                    {service.title}
                  </h4>
                  <p className="font-sans leading-relaxed text-muted-foreground">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b-4 border-border bg-card"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 items-center">
          <div className="md:w-1/2 relative">
            <div className="aspect-[3/4] border-4 border-border bg-muted relative p-4">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stucco.png')] mix-blend-multiply pointer-events-none"></div>
              <div className="w-full h-full border-2 border-border flex items-center justify-center flex-col bg-background/50 p-8 text-center relative overflow-hidden">
                <img
                  src="/assets/foxtrot-logo-full.png"
                  alt="Foxtrot"
                  className="w-full opacity-80"
                />
                <div className="absolute bottom-8 left-8 right-8 border-t-2 border-border pt-4">
                  <p className="font-mono text-[10px] uppercase tracking-tight">
                    Est. 1998 · Workshop
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 right-2 flex h-20 w-20 rotate-6 items-center justify-center border-4 border-border bg-primary font-sans text-lg font-medium uppercase tracking-tight text-primary-foreground shadow-sm sm:-bottom-6 sm:-right-6 sm:h-24 sm:w-24 sm:rotate-12 sm:text-xl">
              Solid.
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="mb-4 flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-tight text-primary">
              <span className="w-8 h-[2px] bg-primary block"></span> Our Story
            </h2>
            <h3 className="mb-6 font-sans text-4xl font-medium uppercase leading-none tracking-tight md:text-5xl">
              Hard at work. <br /> No excuses.
            </h3>
            <div className="space-y-6 font-sans text-base leading-relaxed text-foreground/75 md:text-lg">
              <p>
                Foxtrot is a Normal, Illinois digital workshop modeled after the
                print shops and boot makers of the past. Every line of code,
                every pixel, every layout earns its place.
              </p>
              <p>
                Since 1998, we've believed in putting in the reps. We sweat the
                details so you don't have to. The result is a digital presence
                that feels substantial, performs flawlessly, and refuses to
                break down when you need it most.
              </p>
              <div className="flex gap-4 pt-4 border-t-2 border-border border-dashed">
                <div className="flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-tight">
                  <Check className="w-5 h-5 text-primary" /> Utilitarian Design
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-tight">
                  <Check className="w-5 h-5 text-primary" /> Enduring Quality
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none ruled-bg" />

        <div className="max-w-4xl mx-auto bg-card border-4 border-border shadow-md p-8 md:p-12 lg:p-16 relative z-10">
          <div className="absolute top-0 right-0 w-16 h-16 border-l-4 border-b-4 border-border flex items-center justify-center bg-muted">
            <div className="w-4 h-4 bg-border rounded-full" />
          </div>

          <div className="mb-12">
            <h2 className="mb-4 font-sans text-4xl font-medium uppercase leading-none tracking-tight md:text-6xl">
              Start a Project
            </h2>
            <p className="font-sans text-base leading-relaxed text-muted-foreground md:text-lg">
              Drop us a line. Tell us what you're building. We'll bring the
              tools. You can also email{" "}
              <a
                className="font-bold underline decoration-2 underline-offset-4 hover:text-primary"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-[11px] font-medium uppercase tracking-tight">
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Jane Doe"
                          {...field}
                          className="h-14 rounded-none border-2 border-border bg-background font-sans text-base shadow-none focus-visible:border-primary focus-visible:ring-primary focus-visible:ring-offset-0"
                          data-testid="input-name"
                        />
                      </FormControl>
                      <FormMessage className="font-mono text-[11px] uppercase tracking-tight text-destructive" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-mono text-[11px] font-medium uppercase tracking-tight">
                        Email Address
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="jane@company.com"
                          {...field}
                          className="h-14 rounded-none border-2 border-border bg-background font-sans text-base shadow-none focus-visible:border-primary focus-visible:ring-primary focus-visible:ring-offset-0"
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage className="font-mono text-[11px] uppercase tracking-tight text-destructive" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-mono text-[11px] font-medium uppercase tracking-tight">
                      Project Details
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="What are we building?"
                        {...field}
                        className="min-h-[150px] resize-y rounded-none border-2 border-border bg-background font-sans text-base shadow-none focus-visible:border-primary focus-visible:ring-primary focus-visible:ring-offset-0"
                        data-testid="input-message"
                      />
                    </FormControl>
                    <FormMessage className="font-mono text-[11px] uppercase tracking-tight text-destructive" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                size="lg"
                disabled={form.formState.isSubmitting}
                className="h-14 w-full rounded-none border-2 border-border bg-foreground px-10 font-mono text-xs font-medium uppercase tracking-tight text-background shadow-sm transition-all hover:bg-primary hover:shadow sm:w-auto"
                data-testid="btn-submit"
              >
                {form.formState.isSubmitting ? "Sending" : "Send Inquiry"}{" "}
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </Form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background py-16 px-4 sm:px-6 lg:px-8 border-t-8 border-primary">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <span className="mb-4 block font-sans text-4xl font-semibold uppercase tracking-tight text-background/90">
              FOXTROT
            </span>
            <p className="font-mono text-[11px] uppercase tracking-tight text-background/60">
              Hard at work since 1998.
            </p>
          </div>

          <div className="flex flex-col gap-8 font-mono text-[11px] font-medium uppercase tracking-tight sm:flex-row sm:gap-16">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("work")}
                className="text-left hover:text-primary transition-colors"
                data-testid="footer-link-work"
              >
                Work
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left hover:text-primary transition-colors"
                data-testid="footer-link-services"
              >
                Services
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left hover:text-primary transition-colors"
                data-testid="footer-link-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left hover:text-primary transition-colors"
                data-testid="footer-link-contact"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-background/20 font-mono text-[10px] font-medium uppercase tracking-tight text-background/40 flex flex-col sm:flex-row justify-between gap-4">
          <p>
            &copy; {new Date().getFullYear()} Foxtrot Agency. All Rights
            Reserved.
          </p>
          <p>Built with intent.</p>
        </div>
      </footer>
    </div>
  );
}
