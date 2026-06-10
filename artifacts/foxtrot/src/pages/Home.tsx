import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, type Variants } from "framer-motion";
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

const CONTACT_EMAIL = "thefoxtrotagency@gmail.com";
const FORMSPREE_ENDPOINT = (import.meta.env["VITE_FORMSPREE_ENDPOINT"] ??
  import.meta.env["VITE_CONTACT_ENDPOINT"]) as string | undefined;

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

const SERVICE_META = [
  ["UX Architecture", "Responsive Builds", "Conversion Paths"],
  ["Identity Systems", "Type & Color", "Launch Assets"],
  ["Positioning", "Messaging", "Offer Clarity"],
  ["SEO Foundations", "Analytics", "Maintenance"],
];

const PORTFOLIO_HERO_IMAGES: Record<number, string> = {
  1: "/assets/heritage-inn-exterior.png",
  2: "/assets/iron/iron-oak-hero.png",
  3: "/assets/copperhead/copperhead-hero.png",
  4: "/assets/apex/apex-mountain-hero.png",
  5: "/assets/tidal/tidal-hero.png",
  6: "/assets/soko-cup-hero.png",
};

const getPortfolioHeroImage = (projectId: number) =>
  PORTFOLIO_HERO_IMAGES[projectId] ?? PORTFOLIO_HERO_IMAGES[1];

const scrollViewport = { once: true, amount: 0.18 };

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerGroup: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

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

    if (FORMSPREE_ENDPOINT) {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          _replyto: data.email,
          _subject: "Project Inquiry from Foxtrot Website",
          recipient: CONTACT_EMAIL,
        }),
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
        className="relative pt-24 pb-32 lg:pt-32 lg:pb-40 px-4 sm:px-6 lg:px-8 border-b-4 border-border overflow-hidden bg-[#89bbe5]"
      >
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none ruled-bg" />

        <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src="/assets/foxtrot-logo-full.png"
            alt="Foxtrot Quality Made Goods"
            className="w-full max-w-2xl"
          />

        </div>
      </section>

      {/* WORK / PORTFOLIO */}
      <section
        id="work"
        className="scroll-mt-20 bg-black px-4 py-16 text-white sm:px-6 lg:px-8"
      >
        <motion.div
          className="mx-auto max-w-7xl"
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerGroup}
        >
          <motion.div
            className="mb-5 flex items-end justify-between gap-6"
            variants={fadeUp}
          >
            <h3 className="font-sans text-xl font-medium uppercase tracking-tight md:text-2xl">
              Selected Works
            </h3>
            <p className="hidden font-mono text-[10px] uppercase tracking-tight text-white/45 sm:block">
              {PORTFOLIO_PROJECTS.length} Projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-2">
            {PORTFOLIO_PROJECTS.map((project) => (
              <motion.div key={project.id} variants={fadeUp}>
                <Link
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="relative overflow-hidden border-b-4 border-border bg-[#f3eee6] px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
      >
        <div className="absolute -right-16 -top-16 pointer-events-none opacity-[0.07]">
          <img
            src="/assets/foxtrot-logo-icon.png"
            alt=""
            className="h-96 w-96 object-contain"
          />
        </div>
        <motion.div
          className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerGroup}
        >
          <motion.div className="lg:col-span-5" variants={fadeUp}>
            <h2 className="mb-4 flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-tight text-primary">
              <span className="w-8 h-[2px] bg-primary block"></span> Our
              Services
            </h2>
            <h3 className="max-w-xl font-display text-6xl uppercase leading-[0.85] tracking-tight md:text-8xl">
              What We Build
            </h3>
            <p className="mt-8 max-w-md font-sans text-lg leading-relaxed text-foreground/75">
              We make brands look sharper, websites feel easier, and digital
              presence stop acting like an afterthought.
            </p>
            <div className="mt-10 max-w-md border-2 border-border bg-primary p-6 text-primary-foreground shadow-[8px_8px_0_0_hsl(var(--border))]">
              <p className="font-display text-4xl uppercase leading-none tracking-tight">
                Built clean. Launched sharp.
              </p>
              <p className="mt-4 font-mono text-[11px] font-medium uppercase leading-relaxed tracking-tight text-primary-foreground/80">
                Clear scope, useful strategy, durable design, and the kind of
                implementation that does not collapse after launch.
              </p>
            </div>
          </motion.div>

          <motion.div className="lg:col-span-7" variants={staggerGroup}>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {SERVICES.map((service, idx) => (
                <motion.div
                  key={idx}
                  className="group relative min-h-[280px] overflow-hidden border-2 border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-foreground hover:text-background"
                  variants={fadeUp}
                >
                  <div className="mb-10 flex items-start justify-between gap-6">
                    <span className="font-mono text-[11px] font-medium uppercase tracking-tight text-primary group-hover:text-background/60">
                      {
                        [
                          "Make it work",
                          "Make it yours",
                          "Make it sharp",
                          "Keep it moving",
                        ][idx]
                      }
                    </span>
                    <span className="font-display text-6xl leading-none text-border transition-colors group-hover:text-background/20">
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="mb-4 font-sans text-3xl font-medium uppercase leading-none tracking-tight md:text-4xl">
                    {service.title}
                  </h4>
                  <p className="font-sans leading-relaxed text-muted-foreground transition-colors group-hover:text-background/70">
                    {service.desc}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {SERVICE_META[idx].map((tag) => (
                      <span
                        key={tag}
                        className="border border-border px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-tight text-foreground/70 transition-colors group-hover:border-background/30 group-hover:text-background/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 border-b-4 border-border bg-card"
      >
        <motion.div
          className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-24 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={staggerGroup}
        >
          <motion.div className="md:w-1/2 relative" variants={fadeUp}>
            <div className="aspect-square border-4 border-border bg-muted relative p-4">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stucco.png')] mix-blend-multiply pointer-events-none"></div>
              <div className="relative h-full w-full overflow-hidden border-2 border-border bg-background/50">
                <img
                  src="/assets/about/foxtrot-founders-polaroid.png"
                  alt="Foxtrot founders"
                  className="h-full w-full scale-110 object-cover"
                />
                <div className="absolute bottom-4 left-4 border-2 border-border bg-background px-3 py-2">
                  <p className="font-mono text-[10px] font-medium uppercase tracking-tight">
                    Est. 1998
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="md:w-1/2" variants={fadeUp}>
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
          </motion.div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none ruled-bg" />

        <motion.div
          className="max-w-4xl mx-auto bg-card border-4 border-border shadow-md p-8 md:p-12 lg:p-16 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={scrollViewport}
          variants={fadeUp}
        >
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
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground text-background py-16 px-4 sm:px-6 lg:px-8 border-t-8 border-primary">
        <motion.div
          className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={staggerGroup}
        >
          <div>
            <img
              src="/assets/foxtrot-nav-wordmark.png"
              alt="FOXTROT"
              className="mb-4 h-8 w-auto invert"
            />
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
        </motion.div>
        <motion.div
          className="max-w-7xl mx-auto mt-16 pt-8 border-t border-background/20 font-mono text-[10px] font-medium uppercase tracking-tight text-background/40 flex flex-col sm:flex-row justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p>
            &copy; {new Date().getFullYear()} Foxtrot Agency. All Rights
            Reserved.
          </p>
          <p>Built with intent.</p>
        </motion.div>
      </footer>
    </div>
  );
}
