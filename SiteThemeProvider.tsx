import { useEffect } from "react";
import { siteConfig } from "@/config/site";

/**
 * Applies colors from siteConfig to CSS variables on :root.
 * Allows config-driven theming without editing index.css.
 */
const SiteThemeProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const root = document.documentElement;
    const { colors } = siteConfig;

    root.style.setProperty("--primary", colors.primary);
    root.style.setProperty("--accent", colors.accent);
    root.style.setProperty("--ring", colors.accent);
    root.style.setProperty("--background", colors.background);
    root.style.setProperty("--foreground", colors.foreground);
    root.style.setProperty(
      "--gradient-hero",
      `linear-gradient(135deg, hsl(${colors.gradientFrom}) 0%, hsl(${colors.gradientTo}) 100%)`
    );

    // Update document title + meta description
    document.title = siteConfig.name;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", siteConfig.description);
  }, []);

  return <>{children}</>;
};

export default SiteThemeProvider;
