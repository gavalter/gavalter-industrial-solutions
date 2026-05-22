import { Link } from "@tanstack/react-router";
import { Factory, Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="mx-auto max-w-7xl container-px py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-gradient-accent grid place-items-center">
              <Factory className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="font-bold text-white">GAVALTER</div>
              <div className="text-xs tracking-widest text-white/60">INDUSTRIAL SUPPLIES</div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Trusted partner for industrial supplies and engineering solutions across Uganda and East Africa.
          </p>
          <div className="mt-5 flex gap-3">
            {[Linkedin, Facebook, Twitter, Instagram].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social" className="h-9 w-9 grid place-items-center rounded-md bg-white/10 hover:bg-accent transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-accent">Product</Link></li>
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/quote" className="hover:text-accent">Request Quote</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Sectors</h4>
          <ul className="space-y-2 text-sm">
            <li>Manufacturing</li>
            <li>Construction</li>
            <li>Telecom</li>
            <li>Energy & Power</li>
            <li>Mining & Oil</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" /> Plot 24, Industrial Area, Kampala, Uganda</li>
            <li className="flex gap-3"><Phone className="h-4 w-4 text-accent shrink-0 mt-0.5" /> +256 780 162 178</li>
            <li className="flex gap-3"><Mail className="h-4 w-4 text-accent shrink-0 mt-0.5" /> info@gavalter.co.ug</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl container-px py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Gavalter Industrial Supplies Ltd. All rights reserved.</p>
          <p>Kampala · Uganda · East Africa</p>
        </div>
      </div>
    </footer>
  );
}
