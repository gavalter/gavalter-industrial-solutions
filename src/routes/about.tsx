import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Target, Eye, ShieldCheck, Award, Users, TrendingUp } from "lucide-react";
import teamImg from "@/assets/about-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Gavalter Industrial Supplies Ltd" },
      { name: "description", content: "Learn about Gavalter Industrial Supplies — our mission, vision, leadership, and 12+ years of serving East Africa's industrial sector." },
      { property: "og:title", content: "About Gavalter Industrial Supplies" },
      { property: "og:description", content: "Trusted B2B industrial partner in Uganda and East Africa." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <section className="relative pt-32 pb-20 bg-navy text-white overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="mx-auto max-w-7xl container-px relative">
        <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-4">{eyebrow}</div>
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">{title}</h1>
        <p className="mt-6 text-lg text-white/80 max-w-2xl">{subtitle}</p>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About us"
        title="Engineering trust, one delivery at a time"
        subtitle="For over a decade, Gavalter Industrial Supplies Ltd has been a reliable B2B partner powering East Africa's industrial backbone."
      />

      <section className="py-24">
        <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal rounded-3xl overflow-hidden shadow-elevated">
            <img src={teamImg} alt="Engineers at work" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="reveal">
            <SectionHeader center={false} eyebrow="Our story" title="Built by engineers for industries that move East Africa forward" />
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in Kampala in 2012, Gavalter Industrial Supplies began as a small specialist supplier serving local manufacturers. Today we operate as a full-service industrial partner — sourcing equipment, executing engineering projects, and supporting maintenance for clients across Uganda, Kenya, Tanzania, Rwanda and South Sudan.
              </p>
              <p>
                Our team of engineers, procurement specialists and logistics experts works hand-in-hand with global manufacturers to deliver authentic, warranty-backed equipment — fast, fairly priced, and supported on the ground.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/40">
        <div className="mx-auto max-w-7xl container-px">
          <SectionHeader eyebrow="What drives us" title="Mission & vision" />
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            <div className="reveal rounded-2xl bg-card border border-border p-8 shadow-card">
              <div className="h-12 w-12 rounded-xl bg-gradient-accent grid place-items-center shadow-accent">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-navy">Our Mission</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                To empower East African industries with reliable equipment, technical expertise and dependable service that keeps operations running without compromise.
              </p>
            </div>
            <div className="reveal rounded-2xl bg-card border border-border p-8 shadow-card">
              <div className="h-12 w-12 rounded-xl bg-navy grid place-items-center">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 text-2xl font-bold text-navy">Our Vision</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                To be the most trusted industrial supplies and engineering partner across East Africa — recognised for quality, integrity and speed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl container-px">
          <SectionHeader eyebrow="Core values" title="The principles that guide us" />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { i: ShieldCheck, t: "Integrity", d: "Honest pricing, authentic products, transparent dealings — every transaction." },
              { i: Award, t: "Quality", d: "We supply only certified, brand-warranted equipment from trusted manufacturers." },
              { i: TrendingUp, t: "Reliability", d: "We deliver on time, every time. Our clients' operations depend on it." },
              { i: Users, t: "Partnership", d: "We invest in long-term relationships, not one-off transactions." },
              { i: Target, t: "Expertise", d: "Our engineers bring deep domain knowledge to every project we touch." },
              { i: Eye, t: "Innovation", d: "We continuously adopt new technologies and smarter ways of working." },
            ].map((v) => (
              <div key={v.t} className="reveal rounded-2xl p-7 border border-border bg-card hover:shadow-card transition">
                <v.i className="h-8 w-8 text-accent" />
                <h3 className="mt-5 text-lg font-bold text-navy">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-navy-deep text-white">
        <div className="mx-auto max-w-7xl container-px">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">Our journey</div>
            <h2 className="text-3xl md:text-4xl font-bold">A decade of growth</h2>
          </div>
          <div className="mt-14 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/15" />
            <div className="space-y-10">
              {[
                { y: "2012", t: "Founded in Kampala", d: "Started as a specialist supplier to local manufacturers." },
                { y: "2015", t: "Expanded to engineering services", d: "Added technical consulting and project execution capabilities." },
                { y: "2018", t: "Regional expansion", d: "Began serving clients in Kenya, Tanzania and Rwanda." },
                { y: "2021", t: "Telecom & power partnerships", d: "Major contracts with regional telecom and energy operators." },
                { y: "2024", t: "500+ active B2B clients", d: "Trusted by leading enterprises across five East African markets." },
              ].map((m, i) => (
                <div key={m.y} className={`reveal md:grid md:grid-cols-2 md:gap-12 items-center ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
                  <div className={`md:text-right ${i % 2 === 1 ? "md:text-left" : ""}`}>
                    <div className="text-5xl font-bold text-accent">{m.y}</div>
                  </div>
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-6 mt-3 md:mt-0">
                    <h3 className="text-xl font-bold">{m.t}</h3>
                    <p className="mt-2 text-white/70 text-sm">{m.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl container-px">
          <SectionHeader eyebrow="Leadership" title="The team behind Gavalter" subtitle="Decades of combined experience across engineering, supply chain and industrial operations." />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "Daniel Mukasa", r: "Managing Director" },
              { n: "Sarah Kintu", r: "Head of Operations" },
              { n: "James Okello", r: "Chief Engineer" },
              { n: "Patricia Nansubuga", r: "Head of Procurement" },
            ].map((p) => (
              <div key={p.n} className="reveal rounded-2xl overflow-hidden border border-border bg-card shadow-card">
                <div className="aspect-square bg-gradient-to-br from-navy to-navy-deep grid place-items-center">
                  <div className="text-6xl font-bold text-white/90">{p.n.split(" ").map((s) => s[0]).join("")}</div>
                </div>
                <div className="p-5 text-center">
                  <div className="font-bold text-navy">{p.n}</div>
                  <div className="text-sm text-muted-foreground">{p.r}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl container-px">
          <div className="rounded-3xl bg-gradient-accent p-10 md:p-14 text-center text-white shadow-accent">
            <h2 className="text-2xl md:text-3xl font-bold">Work with a partner that delivers</h2>
            <p className="mt-3 text-white/90">Get in touch with our team today.</p>
            <Link to="/contact" className="mt-6 inline-flex rounded-md bg-white px-7 py-3 font-semibold text-navy hover:bg-white/90 transition">Contact Us</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
