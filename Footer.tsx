import { Github, Twitter, Linkedin } from "lucide-react";
import Logo from "@/components/Logo";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const socials = [
    { Icon: Twitter, href: siteConfig.social.twitter },
    { Icon: Github, href: siteConfig.social.github },
    { Icon: Linkedin, href: siteConfig.social.linkedin },
  ];

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <a href="#home" className="flex items-center gap-2">
              <Logo />
              <span className="text-lg font-semibold tracking-tight">{siteConfig.name}</span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          {siteConfig.footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socials.map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="inline-flex items-center justify-center h-9 w-9 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-smooth"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
