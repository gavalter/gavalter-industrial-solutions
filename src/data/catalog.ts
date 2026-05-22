import safety from "@/assets/cat-safety.jpg";
import electrical from "@/assets/cat-electrical.jpg";
import tools from "@/assets/cat-tools.jpg";
import construction from "@/assets/cat-construction.jpg";
import mechanical from "@/assets/cat-mechanical.jpg";
import power from "@/assets/cat-power.jpg";
import telecom from "@/assets/cat-telecom.jpg";
import pumps from "@/assets/cat-pumps.jpg";
import printer1 from "@/assets/printer-1.jpg";

export type Category = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  { slug: "safety-equipment", name: "Safety Equipment", description: "PPE, helmets, gloves, harnesses and high-visibility gear for every job site.", image: safety },
  { slug: "electrical-supplies", name: "Electrical Supplies", description: "Cables, breakers, switchgear, distribution boards and lighting accessories.", image: electrical },
  { slug: "industrial-tools", name: "Industrial Tools", description: "Heavy-duty power and hand tools from globally trusted manufacturers.", image: tools },
  { slug: "construction-materials", name: "Construction Materials", description: "Cement, steel, rebar, fasteners and structural building supplies.", image: construction },
  { slug: "mechanical-parts", name: "Mechanical Parts", description: "Bearings, gears, drives, seals and precision-machined components.", image: mechanical },
  { slug: "power-solutions", name: "Power Solutions", description: "Generators, UPS, solar, batteries and complete backup systems.", image: power },
  { slug: "telecom-equipment", name: "Telecom Equipment", description: "Fiber optics, antennas, RF gear and tower hardware for telecom networks.", image: telecom },
  { slug: "pumps-valves", name: "Pumps & Valves", description: "Industrial pumps, valves, fittings and complete fluid handling systems.", image: pumps },
];

export type FeaturedProduct = {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  category: string;
};

export const featuredProducts: FeaturedProduct[] = [
  {
    slug: "proseries-handheld-printer",
    name: "ProSeries 1-Inch Handheld Inkjet Printer",
    tagline: "All-in-one industrial batch coder · 600 DPI · 25.4mm print height",
    image: printer1,
    category: "Industrial Tools",
  },
];
