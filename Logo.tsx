import { siteConfig } from "@/config/site";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "h-8 w-8" }: LogoProps) => {
  if (siteConfig.logoSrc) {
    return (
      <img
        src={siteConfig.logoSrc}
        alt={`${siteConfig.name} logo`}
        className={`${className} rounded-lg object-contain`}
      />
    );
  }
  return <div className={`${className} rounded-lg bg-gradient-hero shadow-elegant`} />;
};

export default Logo;
