/**
 * Site configuration
 * Edit this file to customize the site name, description, logo, and colors.
 * Colors are HSL values (without the hsl() wrapper) and feed into CSS variables.
 */
export const siteConfig = {
  name: "Lumen",
  description: "A clean, modern foundation for your next project.",
  // Logo: provide either an image URL (logoSrc) or fallback to a gradient mark
  logoSrc: "" as string, // e.g. "/logo.svg" — leave empty to use the gradient mark
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  footerSections: [
    { title: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
    { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
    { title: "Resources", links: ["Documentation", "Help center", "Community", "Status"] },
  ],
  social: {
    twitter: "#",
    github: "#",
    linkedin: "#",
  },
  /**
   * Theme colors as HSL strings (e.g. "221 83% 53%").
   * These override the matching CSS variables in :root at runtime.
   */
  colors: {
    primary: "222 47% 14%",
    accent: "221 83% 53%",
    background: "0 0% 100%",
    foreground: "222 25% 12%",
    // Hero gradient stops
    gradientFrom: "221 83% 53%",
    gradientTo: "262 83% 58%",
  },
} as const;

export type SiteConfig = typeof siteConfig;
