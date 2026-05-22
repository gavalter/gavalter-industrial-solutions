import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ArrowRight } from "lucide-react";
import { categories, featuredProducts } from "@/data/catalog";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Industrial Categories | Gavalter" },
      { name: "description", content: "Explore our complete catalogue: safety, electrical, tools, construction, mechanical, power, telecom, pumps & valves." },
      { property: "og:title", content: "Industrial Products — Gavalter" },
      { property: "og:description", content: "Authentic, warranty-backed industrial equipment across 8 categories." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <SiteLayout>
      <section className="relative pt-32 pb-20 bg-navy text-white overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="mx-auto max-w-7xl container-px relative">
          <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-4">Our catalogue</div>
          <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">Industrial products that keep your operations running</h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            Eight specialised categories. Hundreds of brand-warranted products. One trusted partner.
          </p>
        </div>
      </section>

      {/* FEATURED PRODUCT */}
      {featuredProducts.length > 0 && (
        <section className="py-16 bg-muted/40">
          <div className="mx-auto max-w-7xl container-px">
            <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">Featured</div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy mb-8">Spotlight product</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredProducts.map((p) => (
                <Link key={p.slug} to="/products/$slug" params={{ slug: p.slug }} className="group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elevated transition">
                  <div className="aspect-[4/3] overflow-hidden bg-white">
                    <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-contain p-6 group-hover:scale-105 transition duration-500" />
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
            </div>
          </div>
        </section>
      )}

      <section className="py-20">
        <div className="mx-auto max-w-7xl container-px">
          <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">Browse categories</div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-10">All product categories</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((c, i) => (
              <article key={c.slug} className="reveal group rounded-2xl overflow-hidden bg-card border border-border shadow-card hover:shadow-elevated hover:-translate-y-1 transition" style={{ transitionDelay: `${i * 30}ms` }}>
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.description}</p>
                  <Link to="/quote" className="mt-5 inline-flex items-center gap-2 rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent transition">
                    Request Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
