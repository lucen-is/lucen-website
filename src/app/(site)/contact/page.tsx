import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Lucen about fixing your growth systems. Email, call, or WhatsApp us — we reply within one business day.",
};

const methods = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Best for project briefs and anything detailed.",
  },
  {
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
    note: "Mon–Fri, 9am–6pm GST.",
  },
  {
    label: "WhatsApp",
    value: "Message us directly",
    href: site.whatsapp,
    note: "Fastest way to reach us.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink text-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <p className="text-sm font-medium uppercase tracking-widest text-brand">
            Contact
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Tell us where growth is stuck.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            No discovery-call theatre. Send us the problem, and we&apos;ll come
            back with what we&apos;d fix first. We reply within one business
            day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-6 md:grid-cols-3">
          {methods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              {...(method.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-brand/60"
            >
              <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
                {method.label}
              </h2>
              <p className="mt-3 text-lg font-semibold tracking-tight text-zinc-50 group-hover:underline">
                {method.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {method.note}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-16 grid gap-12 border-t border-white/10 pt-16 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-50">
              Office
            </h2>
            <address className="mt-4 text-lg not-italic leading-relaxed text-zinc-400">
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
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-50">
              Elsewhere
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-zinc-400">
              Follow the work on{" "}
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-brand underline underline-offset-4 hover:text-brand-bright"
              >
                Instagram
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
