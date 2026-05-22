import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, Check, Cpu, Droplets, Zap, Layers, Box, Battery, Languages, Gauge,
  ShieldCheck, Truck, Award, CheckCircle2, Factory,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import printer1 from "@/assets/printer-1.jpg";
import printer2 from "@/assets/printer-2.jpg";
import printer3 from "@/assets/printer-3.jpg";
import printer4 from "@/assets/printer-4.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ProSeries 1-Inch Handheld Inkjet Printer — Gavalter Industrial Supplies" },
      { name: "description", content: "All-in-one industrial batch coder. 600 DPI, 25.4mm print height, 60 m/min. Print dates, logos, barcodes on any surface. Sold by Gavalter Industrial Supplies,[...]
      { property: "og:title", content: "ProSeries 1-Inch Handheld Inkjet Printer — Gavalter" },
      { property: "og:description", content: "Heavy-duty industrial handheld inkjet printer. 600 DPI, 1-10 lines, 25+ languages, 10-hour battery." },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: printer1 },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const images = [printer1, printer2, printer3, printer4];

const highlights = [
  { icon: Layers, title: "Wide-format printing", text: "Adjust print height freely from 2mm up to 25.4mm. Print 1 to 10 clean lines simultaneously." },
  { icon: Droplets, title: "Quick-dry solvent ink", text: "Premium quick-drying cartridge prevents smudging on non-porous and slick surfaces." },
  { icon: Gauge, title: "True 360° spraying", text: "Print cleanly across flat, uneven or curved shapes. Includes auxiliary roller guide." },
  { icon: Zap, title: "Automated inline ready", text: "Integrated photocell sensor port for conveyor-mounted automated production tracking." },
];

const specs = [
  { label: "Print Head Nozzle Size", value: "1.0 Inch (25.4mm)" },
  { label: "Print Height Adjustment", value: "2mm – 25.4mm (0.08\" – 1.00\")" },
  { label: "Printing Lines", value: "1 to 10 lines (fully adjustable)" },
  { label: "Print Resolution", value: "600 DPI High-Definition" },
  { label: "Display Panel", value: "4.3-Inch Intelligent LED Touchscreen" },
  { label: "Processor", value: "Upgraded Cortex-A9 Quad-Core" },
  { label: "Max Printing Speed", value: "Up to 60 meters per minute" },
  { label: "Supported Content", value: "Text, Dates, Lot Numbers, QR Codes, Barcodes, Counters, Logos, BMP Images" },
  { label: "Supported Materials", value: "Wood, Cardboard, Plastics (PET, HDPE), Metal, Glass, Pipes, Aluminum, Textiles" },
  { label: "Languages", value: "25+ Global Languages (English, Spanish, French, Arabic, etc.)" },
  { label: "Internal Memory", value: "50MB+ (thousands of templates stored)" },
  { label: "Battery", value: "2600mAh Li-ion (up to 10 hours active use)" },
  { label: "Ink Cartridge", value: "72ml High-Capacity Quick-Drying Solvent Ink" },
  { label: "Interfaces", value: "USB Flash Drive Port + Photocell Automation Sensor Jack" },
];

const included = [
  "1 × ProSeries 1-Inch Handheld Intelligent Inkjet Device",
  "1 × Premium 72ml Black Quick-Drying Solvent Ink Cartridge",
  "1 × Removable Auxiliary Alignment Roller Guide",
  "1 × Metal Sheet Positioning Alignment Plate",
  "1 × USB Flash Drive (for logo graphic imports)",
  "1 × AC/DC Secure Charging Power Adapter",
  "1 × Heavy-Duty Protective Storage Travel Case",
];

const trustPoints = [
  { icon: ShieldCheck, title: "1-year warranty", text: "Full manufacturer warranty with local technical support in Kampala." },
  { icon: Truck, title: "Fast delivery", text: "Same-week dispatch across Uganda and East Africa." },
  { icon: Award, title: "Authentic stock", text: "Genuine units, original cartridges and accessories — never refurbished." },
];

function HomePage() {
  const [active, setActive] = useState(0);

  return (
    <SiteLayout>
      {/* HERO + PRODUCT */}
      <section id="product" className="relative pt-28 md:pt-32 pb-16 bg-gradient-to-b from-navy-deep via-navy to-navy-deep overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl container-px">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/15 text-xs font-medium tracking-wider mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> NOW AVAILABLE IN UGANDA
              </div>
              <div className="text-xs font-semibold tracking-widest text-accent uppercase">Industrial Coding & Marking</div>
              <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1]">
                ProSeries 1-Inch Handheld <span className="text-accent">Inkjet Printer</span>
              </h1>
              <p className="mt-5 text-lg text-white/80 max-w-xl leading-relaxed">
                All-in-one industrial batch coder. 600 DPI, 25.4mm print height, 60 m/min. Print dates, logos, barcodes and QR codes on virtually any surface — no PC required.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/quote" className="inline-flex items-center gap-2 rounded-md bg-gradient-accent px-7 py-3.5 text-base font-semibold text-white shadow-accent hover:brightness-110 transiti[...]
                  Request Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="https://wa.me/256780162178" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-7 py-3.5 text-base font-semibol[...]
                  WhatsApp Sales
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
                {[
                  { i: Cpu, t: "Cortex-A9 Quad-Core" },
                  { i: Gauge, t: "600 DPI · 60 m/min" },
                  { i: Battery, t: "10-hour battery" },
                  { i: Languages, t: "25+ languages" },
                ].map((b) => (
                  <div key={b.t} className="flex items-center gap-3 rounded-lg border border-white/15 bg-white/5 backdrop-blur px-4 py-3">
                    <b.i className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium text-white">{b.t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="aspect-square rounded-2xl bg-white border border-white/10 shadow-elevated overflow-hidden grid place-items-center p-8">
                <img src={images[active]} alt="ProSeries Handheld Inkjet Printer" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="mt-4 grid grid-cols-4 gap-3">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`aspect-square rounded-lg overflow-hidden bg-white border-2 p-2 transition ${
                      active === i ? "border-accent shadow-accent" : "border-white/20 hover:border-white/60"
                    }`}
                  >
                    <img src={img} alt={`ProSeries printer view ${i + 1}`} className="h-full w-full object-contain" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-12 bg-muted/40 border-y border-border">
        <div className="mx-auto max-w-7xl container-px grid md:grid-cols-3 gap-6">
          {trustPoints.map((t) => (
            <div key={t.title} className="flex gap-4 items-start">
              <div className="h-11 w-11 rounded-xl bg-gradient-accent grid place-items-center shadow-accent shrink-0">
                <t.icon className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-navy">{t.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OVERVIEW + IN THE BOX */}
      <section id="overview" className="py-20">
        <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4 reveal">
            <div className="text-xs font-semibold tracking-widest text-accent uppercase">Overview</div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy">A wide-format powerhouse, in the palm of your hand</h2>
            <p className="text-muted-foreground leading-relaxed">
              Take full control of your packaging line with the ultimate heavy-duty industrial marking solution. The ProSeries 1-Inch Handheld Inkjet Printer scales smoothly from tiny 2mm expirat[...]
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Equipped with an intuitive 4.3-inch LED touchscreen — no computer or smartphone app required. Simply type your content or insert a USB drive to instantly stamp clean tracking deta[...]
            </p>
          </div>
          <aside className="rounded-2xl border border-border bg-card p-7 shadow-card h-fit reveal">
            <h3 className="text-lg font-bold text-navy flex items-center gap-2"><Box className="h-5 w-5 text-accent" /> In the box</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {included.map((it) => (
                <li key={it} className="flex gap-2 items-start">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl container-px">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">Key features</div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Built for industrial production</h2>
            <p className="mt-4 text-muted-foreground">Engineered to keep up with high-volume manufacturing, warehousing, and logistics.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h) => (
              <div key={h.title} className="reveal rounded-2xl bg-card border border-border p-6 shadow-card hover:shadow-elevated transition">
                <div className="h-12 w-12 rounded-xl bg-gradient-accent grid place-items-center shadow-accent">
                  <h.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">{h.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section id="specs" className="py-20">
        <div className="mx-auto max-w-7xl container-px">
          <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">Specifications</div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">Technical details</h2>
          <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
            <dl className="divide-y divide-border">
              {specs.map((s) => (
                <div key={s.label} className="grid md:grid-cols-3 gap-2 px-6 py-4 md:py-5 hover:bg-muted/40 transition">
                  <dt className="font-semibold text-navy">{s.label}</dt>
                  <dd className="md:col-span-2 text-muted-foreground">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl container-px">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">Where it works</div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Trusted across industries</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Food & beverage batch/expiry coding",
              "Pharmaceutical lot number tracking",
              "Carton box shipping marks & barcodes",
              "Pipe, cable and metal part labeling",
              "Construction material identification",
              "Logistics, warehousing & export",
            ].map((u) => (
              <div key={u} className="flex items-start gap-3 rounded-xl bg-card border border-border p-5 shadow-card">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="font-medium text-navy">{u}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT GAVALTER */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">About Gavalter</div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
              Your trusted industrial partner in East Africa
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Gavalter Industrial Supplies Ltd is a Kampala-based supplier serving manufacturers, contractors, and logistics operators across Uganda and East Africa. We focus on best-in-class ind[...]
            </p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { v: "500+", l: "Units deployed" },
                { v: "24h", l: "Quote turnaround" },
                { v: "10+", l: "Years in market" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-border bg-card p-4 text-center shadow-card">
                  <div className="text-2xl font-bold text-navy">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-navy to-navy-deep p-10 text-white shadow-elevated">
            <Factory className="h-10 w-10 text-accent" />
            <h3 className="mt-4 text-2xl font-bold">Bulk pricing & OEM</h3>
            <p className="mt-3 text-white/80">
              Distributors, factories and procurement teams — talk to us about volume pricing, branded packaging and aftersales service contracts.
            </p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 font-semibold text-navy hover:bg-white/90 transition">
              Talk to sales <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16">
        <div className="mx-auto max-w-7xl container-px">
          <div className="rounded-3xl bg-gradient-accent p-10 md:p-14 text-center text-white shadow-accent">
            <h2 className="text-2xl md:text-3xl font-bold">Ready to upgrade your batch coding?</h2>
            <p className="mt-3 text-white/90 max-w-xl mx-auto">Request a tailored quote — bulk pricing available for distributors and OEMs.</p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Link to="/quote" className="inline-flex rounded-md bg-white px-7 py-3 font-semibold text-navy hover:bg-white/90 transition">Request Quote</Link>
              <a href="https://wa.me/256780162178" target="_blank" rel="noreferrer" className="inline-flex rounded-md border border-white/40 px-7 py-3 font-semibold text-white hover:bg-white/10 t[...]
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
