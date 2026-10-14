import Link from "next/link";

type IconProps = { className?: string };

function GitHubIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function BehanceGlyph() {
  return <span className="text-xs font-bold leading-none">Bē</span>;
}

const navLinks = [
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/melchizedek-mecer",
    icon: <LinkedInIcon className="h-3.5 w-3.5" />,
  },
  {
    label: "GitHub",
    href: "https://github.com/mecerzed",
    icon: <GitHubIcon className="h-3.5 w-3.5" />,
  },
  {
    label: "Behance",
    href: "https://www.behance.net/mecertinashe",
    icon: <BehanceGlyph />,
  },
];

const EMAIL = "mecertinashe@gmail.com";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-bg">
      <div className="px-6 pb-5 pt-9 md:px-12 lg:px-20">
        <div className="grid gap-7 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-6 lg:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight">
              Mecer The <span className="text-accent"> </span> Designer
            </Link>

            <p className="mt-2 max-w-xs text-sm leading-relaxed text-bg/60">
              Brand identity, product design and front-end development,
              from Harare to wherever the work is.
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="group mt-3 inline-flex items-center gap-2 text-sm font-medium text-bg transition-colors hover:text-accent"
            >
              {EMAIL}
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="mb-3 text-[11px] font-medium uppercase tracking-widest text-bg/40">
              Navigate
            </h4>

            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-bg/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Elsewhere */}
          <div>
            <h4 className="mb-3 text-[11px] font-medium uppercase tracking-widest text-bg/40">
              Elsewhere
            </h4>

            <ul className="space-y-2">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group inline-flex items-center gap-2.5 text-sm text-bg/70 transition-colors hover:text-accent"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-bg/15 transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-dark">
                      {social.icon}
                    </span>
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="mb-3 text-[11px] font-medium uppercase tracking-widest text-bg/40">
              Based in
            </h4>

            <p className="text-sm text-bg/70">Harare, Zimbabwe</p>
            <p className="mt-1 text-xs leading-relaxed text-bg/40">
              Working with clients worldwide
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-bg/10 pt-4 text-xs text-bg/40 sm:flex-row sm:items-center">
          <p>© {year} Melchizedek Tinashe Mecer. All rights reserved.</p>

          <a
            href="#"
            className="inline-flex items-center gap-2 transition-colors hover:text-accent"
          >
            Back to top
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
