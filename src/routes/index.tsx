import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Truck, Wrench, Zap, Award, Users, Factory, Globe, CheckCircle2, Quote } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { categories, featuredProducts } from "@/data/catalog";
import heroImg from "@/assets/hero-industrial.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gavalter Industrial Supplies — Engineering Solutions in Uganda" },
      { name: "description", content: "Reliable industrial supplies, equipment and engineering solutions for factories, contractors, telecom, energy and construction across Uganda and East Africa." },
      { property: "og:title", content: "Gavalter Industrial Supplies Ltd" },
      { property: "og:description", content: "B2B industrial supply and engineering partner serving East Africa." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <img src={heroImg} alt="Industrial facility" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative mx-auto max-w-7xl container-px py-32 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/15 text-xs font-medium tracking-wider mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> SERVING EAST AFRICA SINCE 2012
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
              Reliable Industrial Supplies & <span className="text-accent">Engineering Solutions</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
              Powering factories, contractors, telecom, energy and construction across Uganda and East Africa with quality equipment, on-time delivery and expert technical support.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/quote" className="inline-flex items-center gap-2 rounded-md bg-gradient-accent px-7 py-3.5 text-base font-semibold text-white shadow-accent hover:brightness-110 transition">
                Request Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-white/10 backdrop-blur border border-white/20 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/20 transition">
                Contact Us
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
              {[
                { v: "12+", l: "Years experience" },
                { v: "500+", l: "B2B clients" },
                { v: "8", l: "Sectors served" },
                { v: "24/7", l: "Logistics support" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-3xl md:text-4xl font-bold text-white">{s.v}</div>
                  <div className="text-xs md:text-sm text-white/70 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* TRUSTED BY */}
      <section className="py-12 border-b border-border">
        <div className="mx-auto max-w-7xl container-px">
          <p className="text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Trusted by leading organisations across the region
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-60">
            {["MTN", "UMEME", "ROKO", "TOTAL", "CIPLA", "DOTT"].map((n) => (
              <div key={n} className="text-center text-navy font-bold tracking-widest text-lg">{n}</div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl container-px">
          <SectionHeader eyebrow="What we do" title="End-to-end industrial solutions" subtitle="From procurement to installation and ongoing maintenance, we are your single trusted partner for industrial operations." />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { i: Wrench, t: "Industrial Procurement", d: "Sourcing genuine parts and equipment from global manufacturers." },
              { i: Zap, t: "Engineering Support", d: "Expert technical consulting for project design and execution." },
              { i: Truck, t: "Logistics & Delivery", d: "Reliable nationwide and cross-border delivery across East Africa." },
              { i: ShieldCheck, t: "Equipment Supply", d: "Quality-assured equipment with manufacturer warranties." },
              { i: Award, t: "Technical Consultation", d: "Site assessment, specification and product recommendation." },
              { i: Users, t: "Maintenance Support", d: "Preventive and corrective maintenance for industrial assets." },
            ].map((s, i) => (
              <div key={s.t} className="reveal group rounded-2xl border border-border bg-card p-7 shadow-card hover:shadow-elevated hover:-translate-y-1 transition" style={{ transitionDelay: `${i * 40}ms` }}>
                <div className="h-12 w-12 rounded-xl bg-navy text-white grid place-items-center group-hover:bg-accent transition">
                  <s.i className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-24 bg-muted/40">
        <div className="mx-auto max-w-7xl container-px">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <SectionHeader center={false} eyebrow="Featured" title="Product spotlight" subtitle="Highlighted equipment from our growing catalogue." />
            <Link to="/products" className="text-sm font-semibold text-accent hover:underline inline-flex items-center gap-1">
              View all products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {featuredProducts.map((p) => (
              <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="reveal group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elevated transition">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold tracking-widest text-accent uppercase">{p.category}</div>
                  <h3 className="mt-2 text-lg font-bold text-navy">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.tagline}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy group-hover:text-accent">
                    View details <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
            {categories.slice(0, 2).map((c) => (
              <Link key={c.slug} to="/products" className="reveal group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elevated transition">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold tracking-widest text-accent uppercase">Category</div>
                  <h3 className="mt-2 text-lg font-bold text-navy">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{c.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <SectionHeader center={false} eyebrow="Why Gavalter" title="Built for industries that can't afford downtime" subtitle="When operations stop, money stops. We deliver the right equipment, on time, with the technical backing to keep your business running." />
            <ul className="mt-8 space-y-4">
              {[
                "Authentic, brand-warranted equipment from certified channels",
                "Same-day quotes and fast delivery across Uganda & East Africa",
                "Dedicated account managers for enterprise clients",
                "Technical engineers on standby for installation & support",
                "Flexible credit terms for verified corporate customers",
              ].map((t) => (
                <li key={t} className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal grid grid-cols-2 gap-5">
            {[
              { i: Factory, v: "500+", l: "Active Industrial Clients" },
              { i: Globe, v: "5", l: "Countries Served" },
              { i: Truck, v: "10,000+", l: "Deliveries Completed" },
              { i: Users, v: "30+", l: "Expert Engineers" },
            ].map((s, idx) => (
              <div key={s.l} className={`rounded-2xl p-7 border border-border shadow-card ${idx % 2 === 0 ? "bg-navy text-white" : "bg-card"}`}>
                <s.i className={`h-7 w-7 ${idx % 2 === 0 ? "text-accent" : "text-navy"}`} />
                <div className={`mt-6 text-4xl font-bold ${idx % 2 === 0 ? "text-white" : "text-navy"}`}>{s.v}</div>
                <div className={`mt-1 text-sm ${idx % 2 === 0 ? "text-white/70" : "text-muted-foreground"}`}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-navy-deep text-white relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="mx-auto max-w-7xl container-px relative">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">Testimonials</div>
            <h2 className="text-3xl md:text-4xl font-bold">What our clients say</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { q: "Gavalter consistently delivers quality equipment on schedule. They've become a trusted extension of our procurement team.", a: "Procurement Manager", c: "Manufacturing Co., Kampala" },
              { q: "Their technical team helped us spec out the right generators for our telecom sites. Service is outstanding.", a: "Operations Director", c: "Regional Telecom Operator" },
              { q: "Same-day quotes, fair pricing, and they always have what we need in stock. Highly recommended.", a: "Site Engineer", c: "Construction Group, Entebbe" },
            ].map((t, i) => (
              <div key={i} className="reveal rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-7">
                <Quote className="h-8 w-8 text-accent" />
                <p className="mt-4 text-white/90 leading-relaxed">"{t.q}"</p>
                <div className="mt-5 pt-5 border-t border-white/10">
                  <div className="font-semibold">{t.a}</div>
                  <div className="text-sm text-white/60">{t.c}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl container-px">
          <div className="rounded-3xl bg-gradient-accent p-10 md:p-16 text-center text-white shadow-accent">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to power up your operations?</h2>
            <p className="mt-4 text-white/90 max-w-2xl mx-auto">Send us your requirements and get a detailed quotation within 24 hours.</p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link to="/quote" className="inline-flex items-center gap-2 rounded-md bg-white px-7 py-3.5 text-base font-semibold text-navy hover:bg-white/90 transition">
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/40 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition">
                Talk to an Engineer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
