import Link from "next/link"

const footerLinks = {
  services: [
    { href: "/services#flyer-design", label: "Flyer & Graphic Design" },
    { href: "/services#facebook-management", label: "Facebook Management" },
    { href: "/services#website-design", label: "School Website Design" },
    { href: "/services#website-management", label: "Website Management" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/packages", label: "Packages" },
    { href: "/contact", label: "Contact" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-accent text-accent-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary">
                <span className="text-lg font-bold text-primary-foreground">D</span>
              </div>
              <span className="text-xl font-bold">DesignX</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-accent-foreground/80 leading-relaxed">
              Helping primary and secondary schools grow online through professional digital marketing, Facebook management, and website design.
            </p>
            <p className="mt-4 text-sm text-accent-foreground/70">
              Based in Zimbabwe
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent-foreground/80 transition-colors hover:text-accent-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-accent-foreground/80 transition-colors hover:text-accent-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-accent-foreground/20 pt-8">
          <p className="text-center text-sm text-accent-foreground/70">
            {new Date().getFullYear()} DesignX. All rights reserved. We work exclusively with primary and secondary schools.
          </p>
        </div>
      </div>
    </footer>
  )
}
