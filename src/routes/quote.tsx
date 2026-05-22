import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CheckCircle2, FileText, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote — Gavalter Industrial Supplies" },
      { name: "description", content: "Submit your RFQ to Gavalter Industrial Supplies. Detailed quotation returned within 24 hours." },
      { property: "og:title", content: "Request a Quote — Gavalter" },
      { property: "og:description", content: "Professional RFQ form for B2B industrial procurement." },
      { property: "og:url", content: "/quote" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: QuotePage,
});

function QuotePage() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      toast.success("RFQ submitted! Our team will contact you within 24 hours.");
    }, 900);
  }

  return (
    <SiteLayout>
      <Toaster richColors position="top-center" />
      <section className="relative pt-32 pb-16 bg-navy text-white overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="mx-auto max-w-7xl container-px relative">
          <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-4">RFQ</div>
          <h1 className="text-4xl md:text-5xl font-bold max-w-3xl">Request a quotation</h1>
          <p className="mt-4 text-lg text-white/80 max-w-2xl">
            Tell us what you need. Our team responds with a detailed quote within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl container-px grid lg:grid-cols-3 gap-10">
          <aside className="space-y-4 lg:sticky lg:top-28 self-start">
            <div className="rounded-2xl bg-card border border-border p-6 shadow-card">
              <div className="h-12 w-12 rounded-xl bg-gradient-accent grid place-items-center shadow-accent">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h2 className="mt-4 text-lg font-bold text-navy">What happens next?</h2>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  "We review your request within 2 business hours",
                  "Our specialist contacts you for any clarifications",
                  "Detailed quotation delivered within 24 hours",
                  "Free technical consultation included",
                ].map((t) => (
                  <li key={t} className="flex gap-2 items-start">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-navy text-white p-6">
              <p className="text-sm text-white/80">Need to talk first?</p>
              <p className="mt-2 font-bold text-lg">+256 700 123 456</p>
              <p className="text-sm text-white/70">sales@gavalter.co.ug</p>
            </div>
          </aside>

          <div className="lg:col-span-2">
            {sent ? (
              <div className="rounded-2xl bg-card border border-border p-10 shadow-card text-center">
                <CheckCircle2 className="h-16 w-16 text-accent mx-auto" />
                <h2 className="mt-4 text-2xl font-bold text-navy">Thank you!</h2>
                <p className="mt-2 text-muted-foreground">Your RFQ has been received. Our procurement team will contact you within 24 hours with a detailed quotation.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="rounded-2xl bg-card border border-border p-8 shadow-card">
                <h2 className="text-2xl font-bold text-navy">Quote request form</h2>
                <p className="mt-1 text-sm text-muted-foreground">All fields marked * are required.</p>

                <h3 className="mt-8 text-sm font-bold uppercase tracking-widest text-accent">Company details</h3>
                <div className="mt-4 grid sm:grid-cols-2 gap-5">
                  <Field label="Company name" name="company" required />
                  <Field label="Industry / Sector" name="industry" />
                  <Field label="Contact person" name="name" required />
                  <Field label="Job title" name="title" />
                  <Field label="Work email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" required />
                  <Field label="Country" name="country" />
                  <Field label="City" name="city" />
                </div>

                <h3 className="mt-10 text-sm font-bold uppercase tracking-widest text-accent">Requirement details</h3>
                <div className="mt-4 grid sm:grid-cols-2 gap-5">
                  <Field label="Products / Equipment needed" name="product" required />
                  <Field label="Quantity / Volume" name="quantity" required />
                  <Field label="Required by (date)" name="date" type="date" />
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">Delivery location</label>
                    <input name="delivery" className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="block text-sm font-semibold text-navy mb-1.5">Detailed message / specifications</label>
                  <textarea name="message" rows={6} required placeholder="Include specs, brand preferences, intended use, etc." className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>

                <div className="mt-6 flex items-start gap-2">
                  <input type="checkbox" id="agree" required className="mt-1" />
                  <label htmlFor="agree" className="text-sm text-muted-foreground">
                    I confirm the information provided is accurate and consent to be contacted regarding this enquiry.
                  </label>
                </div>

                <button disabled={sending} className="mt-7 inline-flex items-center gap-2 rounded-md bg-gradient-accent px-8 py-3.5 text-base font-semibold text-white shadow-accent hover:brightness-110 transition disabled:opacity-60">
                  {sending ? "Submitting..." : <>Submit RFQ <Send className="h-4 w-4" /></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-navy mb-1.5">
        {label}{required && <span className="text-accent"> *</span>}
      </label>
      <input type={type} name={name} required={required} className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
    </div>
  );
}
