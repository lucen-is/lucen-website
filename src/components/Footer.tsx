import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              {site.tagline}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              A senior-led digital marketing consultancy focused on clarity,
              execution, and measurable outcomes.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-50">
              Office
            </h3>
            <address className="mt-4 text-sm not-italic leading-relaxed">
              {site.legalName}
              <br />
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.city}, {site.address.country}
            </address>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-50">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-zinc-50"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="transition-colors hover:text-zinc-50"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-zinc-50"
                >
                  WhatsApp us
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-zinc-50"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-800 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <nav className="flex gap-6">
            <Link href="/about" className="transition-colors hover:text-zinc-50">
              About
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-zinc-50"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
