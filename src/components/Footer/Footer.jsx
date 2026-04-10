import React from "react";
import { GithubLogo, LinkedinLogo, InstagramLogo, EnvelopeSimple } from "@phosphor-icons/react";

const socialLinks = [
  { href: "https://github.com/rshivam973", label: "GitHub", icon: GithubLogo },
  { href: "https://www.linkedin.com/in/shivamrajput3339", label: "LinkedIn", icon: LinkedinLogo },
  { href: "https://www.instagram.com/shivamrajput3339", label: "Instagram", icon: InstagramLogo },
  { href: "mailto:rshivam973@gmail.com", label: "Email", icon: EnvelopeSimple },
];

const Footer = () => {
  return (
    <footer className="border-t border-glass-border mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-dim text-sm">
          {new Date().getFullYear()} Shivam Rajput
        </p>
        <div className="flex items-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-text-muted hover:text-accent transition-colors duration-300"
            >
              <link.icon size={20} weight="regular" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
