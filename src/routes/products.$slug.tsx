import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ArrowRight, Check, Cpu, Droplets, Zap, Layers, Box, Battery, Languages, Gauge } from "lucide-react";
import printer1 from "@/assets/printer-1.jpg";
import printer2 from "@/assets/printer-2.jpg";
import printer3 from "@/assets/printer-3.jpg";
import printer4 from "@/assets/printer-4.jpg";
import { useState } from "react";

type Product = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string[];
  images: string[];
  highlights: { icon: typeof Cpu; title: string; text: string }[];
  specs: { label: string; value: string }[];
  included: string[];
};

const products: Record<string, Product> = {
  "proseries-handheld-printer": {
    slug: "proseries-handheld-printer",
    name: "ProSeries 1-Inch (25.4mm) High-Resolution Handheld Inkjet Printer Gun",
    category: "Industrial Tools · Coding & Marking",
    tagline: "All-in-one industrial batch coder — 600 DPI, 25.4mm print height, 60 m/min.",
    description: [
      "Take full control of your packaging line with the ultimate heavy-duty industrial marking solution. The ProSeries 1-Inch Handheld Inkjet Printer scales smoothly from tiny 2mm expiration dates all the way up to 25.4mm (1-inch) high-definition brand logos, shipping barcodes and QR codes.",
      "Equipped with an intuitive 4.3-inch LED touchscreen — no computer or smartphone app required. Simply type your content or insert a USB drive to instantly stamp clean tracking details across metal, plastic, wood, glass, carton boxes and fabric surfaces.",
    ],
    images: [printer1, printer2, printer3, printer4],
    highlights: [
      { icon: Layers, title: "Wide-format printing", text: "Adjust print height freely from 2mm up to 25.4mm. Print 1 to 10 clean lines simultaneously." },
      { icon: Droplets, title: "Quick-dry solvent ink", text: "Premium quick-drying cartridge prevents smudging on non-porous and slick surfaces." },
      { icon: Gauge, title: "True 360° spraying", text: "Print cleanly across flat, uneven or curved shapes. Includes auxiliary roller guide." },
      { icon: Zap, title: "Automated inline capability", text: "Integrated photocell sensor port for conveyor-mounted automated production tracking." },
    ],
    specs: [
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
    ],
    included: [
      "1 × ProSeries 1-Inch Handheld Intelligent Inkjet Device",
      "1 × Premium 72ml Black Quick-Drying Solvent Ink Cartridge",
      "1 × Removable Auxiliary Alignment Roller Guide",
      "1 × Metal Sheet Positioning Alignment Plate",
      "1 × USB Flash Drive (for logo graphic imports)",
      "1 × AC/DC Secure Charging Power Adapter",
      "1 × Heavy-Duty Protective Storage Travel Case",
    ],
  },
};

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products[params.slug];
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Gavalter` },
          { name: "description", content: loaderData.product.tagline },
          { property: "og:title", content: loaderData.product.name },
          { property: "og:description", content: loaderData.product.tagline },
          { property: "og:type", content: "product" },
          { property: "og:url", content: `/products/${loaderData.product.slug}` },
          { property: "og:image", content: loaderData.product.images[0] },
        ]
      : [],
    links: loaderData ? [{ rel: "canonical", href: `/products/${loaderData.product.slug}` }] : [],
  }),
  component: ProductDetailPage,
  notFoundComponent: () => (
    <SiteLayout>
      <section className="pt-40 pb-24 text-center">
        <h1 className="text-3xl font-bold text-navy">Product not found</h1>
        <Link to="/products" className="mt-6 inline-flex text-accent font-semibold">Browse all products</Link>
      </section>
    </SiteLayout>
  ),
});

function ProductDetailPage() {
  const { product } = Route.useLoaderData() as { product: Product };
  const [active, setActive] = useState(0);

  return (
    <SiteLayout>
      <section className="pt-28 pb-12 bg-muted/40">
        <div className="mx-auto max-w-7xl container-px">
          <nav className="text-sm text-muted-foreground mb-6">
            <Link to="/products" className="hover:text-accent">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-navy font-medium">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="aspect-square rounded-2xl bg-white border border-border shadow-card overflow-hidden grid place-items-center p-8">
                <img src={product.images[active]} alt={product.name} className="max-h-full max-w-full object-contain" />
              </div>
              <div className="mt-4 grid grid-cols-4 gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`aspect-square rounded-lg overflow-hidden bg-white border-2 p-2 transition ${
                      active === i ? "border-accent shadow-accent" : "border-border hover:border-navy/40"
                    }`}
                  >
                    <img src={img} alt={`${product.name} ${i + 1}`} className="h-full w-full object-contain" />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold tracking-widest text-accent uppercase">{product.category}</div>
              <h1 className="mt-3 text-3xl md:text-4xl font-bold text-navy leading-tight">{product.name}</h1>
              <p className="mt-4 text-lg text-muted-foreground">{product.tagline}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/quote" search={{ product: product.name } as never} className="inline-flex items-center gap-2 rounded-md bg-gradient-accent px-7 py-3.5 text-base font-semibold text-white shadow-accent hover:brightness-110 transition">
                  Request Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="https://wa.me/256700123456" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-navy/20 px-7 py-3.5 text-base font-semibold text-navy hover:bg-navy hover:text-white transition">
                  WhatsApp Sales
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { i: Cpu, t: "Cortex-A9 Quad-Core" },
                  { i: Gauge, t: "600 DPI · 60 m/min" },
                  { i: Battery, t: "10-hour battery" },
                  { i: Languages, t: "25+ languages" },
                ].map((b) => (
                  <div key={b.t} className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3">
                    <b.i className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium text-navy">{b.t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-semibold tracking-widest text-accent uppercase">Overview</div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy">Product description</h2>
            {product.description.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
            ))}
          </div>
          <aside className="rounded-2xl border border-border bg-card p-7 shadow-card h-fit">
            <h3 className="text-lg font-bold text-navy flex items-center gap-2"><Box className="h-5 w-5 text-accent" /> In the box</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {product.included.map((it) => (
                <li key={it} className="flex gap-2 items-start">
                  <Check className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="py-20 bg-muted/40">
        <div className="mx-auto max-w-7xl container-px">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">Key features</div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Built for industrial production</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.highlights.map((h) => (
              <div key={h.title} className="reveal rounded-2xl bg-card border border-border p-6 shadow-card">
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

      <section className="py-20">
        <div className="mx-auto max-w-7xl container-px">
          <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">Specifications</div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">Technical details</h2>
          <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden">
            <dl className="divide-y divide-border">
              {product.specs.map((s) => (
                <div key={s.label} className="grid md:grid-cols-3 gap-2 px-6 py-4 md:py-5 hover:bg-muted/40 transition">
                  <dt className="font-semibold text-navy">{s.label}</dt>
                  <dd className="md:col-span-2 text-muted-foreground">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl container-px">
          <div className="rounded-3xl bg-gradient-accent p-10 md:p-14 text-center text-white shadow-accent">
            <h2 className="text-2xl md:text-3xl font-bold">Ready to upgrade your batch coding?</h2>
            <p className="mt-3 text-white/90 max-w-xl mx-auto">Request a tailored quote — bulk pricing available for distributors and OEMs.</p>
            <Link to="/quote" className="mt-6 inline-flex rounded-md bg-white px-7 py-3 font-semibold text-navy hover:bg-white/90 transition">Request Quote</Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
