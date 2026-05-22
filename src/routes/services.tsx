import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Wrench, Zap, Truck, ShieldCheck, Award, Users, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Gavalter Industrial Supplies" },
      { name: "description", content: "Industrial procurement, engineering support, equipment supply, logistics, technical consultation, and maintenance services." },
      { property: "og:title", content: "Industrial Services — Gavalter" },
      { property: "og:description", content: "End-to-end industrial services for East African enterprises." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { i: Wrench, t: "Industrial Procurement", d: "We source authentic, brand-warranted equipment from certified global manufacturers — at competitive prices and with full traceability.", b: ["Genuine OEM parts", "Bulk procurement", "Custom sourcing", "Supplier vetting"] },
  { i: Zap, t: "Engineering Support", d: "Our engineering team helps you design, spec, and execute industrial projects from concept to commissioning.", b: ["Project design", "Site assessment", "Specification", "Commissioning"] },
  { i: ShieldCheck, t: "Equipment Supply", d: "Comprehensive equipment supply backed by manufacturer warranties and after-sales support.", b: ["Warranty backed", "Quality assured", "Wide catalogue", "Stocked locally"] },
  { i: Truck, t: "Logistics & Delivery", d: "Reliable nationwide and cross-border delivery across East Africa with real-time tracking.", b: ["Same-day Kampala", "Cross-border to KE, TZ, RW, SS", "Cold chain available", "Real-time tracking"] },
  { i: Award, t: "Technical Consultation", d: "Independent technical advice to help you choose the right equipment for your application.", b: ["Application analysis", "Cost optimisation", "Standards compliance", "Vendor comparison"] },
  { i: Users, t: "Maintenance Support", d: "Preventive and corrective maintenance programmes designed to keep your industrial assets running.", b: ["Preventive maintenance", "Emergency repairs", "Spare parts stocking", "On-call engineers"] },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="relative pt-32 pb-20 bg-navy text-white overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="mx-auto max-w-7xl container-px relative">
          <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-4">Our services</div>
          <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">Full-spectrum industrial services under one roof</h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            From sourcing the right parts to keeping your equipment running, we cover every step of your industrial operations.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl container-px">
          <div className="grid lg:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <article key={s.t} className="reveal group rounded-2xl bg-card border border-border p-8 shadow-card hover:shadow-elevated transition" style={{ transitionDelay: `${i * 50}ms` }}>
                <div className="flex items-start gap-5">
                  <div className="h-14 w-14 rounded-xl bg-navy text-white grid place-items-center group-hover:bg-accent transition shrink-0">
                    <s.i className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-navy">{s.t}</h2>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{s.d}</p>
                  </div>
                </div>
                <ul className="mt-6 grid grid-cols-2 gap-2 pl-[76px]">
                  {s.b.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl container-px">
          <SectionHeader eyebrow="How we work" title="A simple, transparent process" />
          <div className="mt-14 grid md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Consult", d: "Tell us your requirements and constraints." },
              { n: "02", t: "Quote", d: "Receive a detailed quotation within 24 hours." },
              { n: "03", t: "Deliver", d: "Fast delivery with full documentation." },
              { n: "04", t: "Support", d: "Ongoing technical and maintenance support." },
            ].map((step) => (
              <div key={step.n} className="reveal rounded-2xl bg-card border border-border p-7 shadow-card">
                <div className="text-4xl font-bold text-accent">{step.n}</div>
                <h3 className="mt-4 text-xl font-bold text-navy">{step.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl container-px">
          <div className="rounded-3xl bg-gradient-accent p-10 md:p-14 text-center text-white shadow-accent">
            <h2 className="text-2xl md:text-3xl font-bold">Let's talk about your project</h2>
            <p className="mt-3 text-white/90">Get a free consultation with one of our engineers.</p>
            <Link to="/quote" className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-7 py-3 font-semibold text-navy hover:bg-white/90 transition">
              Request Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
