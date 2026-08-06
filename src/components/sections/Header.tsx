export default function Header() {
    const year = new Date().getFullYear();

    const links = [
        { label: "Work", href: "#work" },
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Contact", href: "#contact" },
    ];

    const socials = [
        { label: "LinkedIn", href: "https://linkedin.com/in/melchizedek-mecer" },
        // { label: "Instagram", href: "https://instagram.com/yourprofile" },
        { label: "GitHub", href: "https://github.com/mecerzed" },
    ];

    return (
        <footer className="px-8 md:px-16 lg:px-24 py-12 border-t border-dark/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <p className="font-semibold text-dark">Melchizedek Tinashe Mecer</p>
                    <p className="text-sm text-text/50 mt-1">Harare, Zimbabwe</p>
                </div>

                <nav className="flex gap-6">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="text-sm text-text/60 hover:text-accent transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="flex gap-6">
                    {socials.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-text/60 hover:text-accent transition-colors"
                        >
                            {social.label}
                        </a>
                    ))}
                </div>
            </div>

            <p className="text-xs text-text/40 mt-8">
                © {year} Melchizedek Tinashe Mecer. All rights reserved.
            </p>
        </footer>
    );
}