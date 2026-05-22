import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Mail, Phone, MapPin, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Gavalter Industrial Supplies, Kampala" },
      { name: "description", content: "Get in touch with Gavalter Industrial Supplies. Office in Kampala, Uganda. Phone, email and WhatsApp support." },
      { property: "og:title", content: "Contact Gavalter Industrial Supplies" },
      { property: "og:description", content: "Reach our team in Kampala, Uganda." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent! We'll respond within 24 hours.");
    }, 800);
  }

  return (
    <SiteLayout>
      <Toaster richColors position="top-center" />
      <section className="relative pt-32 pb-20 bg-navy text-white overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="mx-auto max-w-7xl container-px relative">
          <div className="text-xs font-semibold tracking-widest text-accent uppercase mb-4">Get in touch</div>
          <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">Let's discuss your industrial needs</h1>
          <p className="mt-6 text-lg text-white/80 max-w-2xl">
            Our team responds within 24 hours. For urgent enquiries, reach us via WhatsApp or phone.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl container-px grid lg:grid-cols-5 gap-10">
          {/* Contact form */}
          <form onSubmit={onSubmit} className="lg:col-span-3 rounded-2xl bg-card border border-border p-8 shadow-card">
            <h2 className="text-2xl font-bold text-navy">Send us a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">Fill out the form and we'll get back to you shortly.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-5">
              <Field label="Full name" name="name" required />
              <Field label="Company" name="company" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <div className="mt-5">
              <Field label="Subject" name="subject" required />
            </div>
            <div className="mt-5">
              <label className="block text-sm font-semibold text-navy mb-1.5">Message</label>
              <textarea name="message" rows={5} required className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
            </div>
            <button disabled={sending} className="mt-6 inline-flex items-center gap-2 rounded-md bg-gradient-accent px-7 py-3 text-sm font-semibold text-white shadow-accent hover:brightness-110 transition disabled:opacity-60">
              {sending ? "Sending..." : <>Send message <Send className="h-4 w-4" /></>}
            </button>
          </form>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            <InfoCard icon={MapPin} title="Office Location" lines={["Plot 24, Industrial Area", "Kampala, Uganda"]} />
            <InfoCard icon={Phone} title="Phone" lines={["+256 700 123 456", "+256 414 555 000"]} href="tel:+256700123456" />
            <InfoCard icon={Mail} title="Email" lines={["info@gavalter.co.ug", "sales@gavalter.co.ug"]} href="mailto:info@gavalter.co.ug" />
            <a href="https://wa.me/256700123456" target="_blank" rel="noreferrer" className="block rounded-2xl p-6 text-white shadow-accent" style={{ background: "#25D366" }}>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-white/20 grid place-items-center">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold">Chat on WhatsApp</div>
                  <div className="text-sm text-white/90">Fastest response — usually within minutes</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl container-px">
          <div className="rounded-2xl overflow-hidden border border-border shadow-card aspect-[16/7]">
            <iframe
              title="Office location"
              src="https://www.google.com/maps?q=Kampala+Industrial+Area&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-navy mb-1.5">{label}{required && <span className="text-accent"> *</span>}</label>
      <input type={type} name={name} required={required} className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
    </div>
  );
}

function InfoCard({ icon: Icon, title, lines, href }: { icon: typeof Mail; title: string; lines: string[]; href?: string }) {
  const inner = (
    <div className="rounded-2xl bg-card border border-border p-6 shadow-card hover:shadow-elevated transition">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 rounded-xl bg-navy text-white grid place-items-center">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <div className="font-bold text-navy">{title}</div>
          {lines.map((l) => (
            <div key={l} className="text-sm text-muted-foreground">{l}</div>
          ))}
        </div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
