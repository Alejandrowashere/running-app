import { Sparkles, Zap, Shield, Rocket, Layers, Heart, type LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  price?: string;
};

/**
 * Services / products list.
 * Edit this file to add, remove, or update items rendered on the home page.
 */
export const services: Service[] = [
  {
    id: "design",
    icon: Sparkles,
    title: "Beautifully designed",
    description: "Thoughtful defaults and a refined design system you can build on.",
    price: "From $29",
  },
  {
    id: "performance",
    icon: Zap,
    title: "Lightning fast",
    description: "Optimized for performance with modern tooling out of the box.",
    price: "From $49",
  },
  {
    id: "security",
    icon: Shield,
    title: "Production ready",
    description: "Accessible, responsive, and built with best practices in mind.",
    price: "From $79",
  },
  {
    id: "launch",
    icon: Rocket,
    title: "Ship faster",
    description: "Reusable building blocks help you go from idea to launch in days.",
    price: "From $99",
  },
  {
    id: "scale",
    icon: Layers,
    title: "Scales with you",
    description: "A composable architecture that grows alongside your product.",
    price: "From $129",
  },
  {
    id: "support",
    icon: Heart,
    title: "Loved by teams",
    description: "Crafted with care so your team enjoys every part of the workflow.",
    price: "From $19",
  },
];
