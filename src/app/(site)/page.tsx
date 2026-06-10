import type { Metadata } from "next";
import Link from "next/link";
import HomeScrollEffects from "@/components/HomeScrollEffects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Lucen | Senior-Led Digital Marketing Consultancy in Dubai",
  },
  description:
    "Lucen helps ambitious brands cut through noise, fix broken growth systems, and turn traffic into revenue. SEO, AI search optimization, PPC, and tracking — done by senior operators.",
};

const services = [
  {
    title: "SEO",
    description:
      "Qualified traffic, not vanity rankings. We fix technical issues, clean up site structure, and build pages around real search demand — so the visits you earn are the ones that convert.",
  },
  {
    title: "AI Search Optimization",
    description:
      "Search no longer ends at ten blue links. We structure your content and entities so your brand shows up in AI answers, summaries, and recommendations — not just classic results pages.",
  },
  {
    title: "PPC & Paid Media",
    description:
      "Campaigns run to clear cost targets with proper tracking and ruthless testing. Budgets follow proven returns — never habits, hunches, or platform defaults.",
  },
  {
    title: "Tracking, Data & Conversion",
    description:
      "Decisions are only as good as the data behind them. We rebuild conversion tracking, attribution, and reporting so you know exactly what drives revenue — and what wastes it.",
  },
];

const principles = [
  {
    title: "Senior-led, always",
    description:
      "No bloated teams. No hand-offs to juniors after the pitch. The people you meet are the people who do the work.",
  },
  {
    title: "Tied to commercial outcomes",
    description:
      "Every recommendation connects to revenue, cost, or conversion — not a slide deck. If it doesn't move a number that matters, we don't propose it.",
  },
  {
    title: "Measured, not guessed",
    description:
      "Clean tracking and honest reporting come first. When growth matters, guesswork is not an option.",
  },
];

const industries = [
  "Ecommerce",
  "Health & Wellness",
  "Professional Services",
  "International Markets",
];

export default function HomePage() {
  return (
    <>
      <HomeScrollEffects />
      {/* Hero */}
      <section className="bg-ink text-zinc-50">
        <div data-hero className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <p className="text-sm font-medium uppercase tracking-widest text-brand">
            Senior-led digital marketing consultancy
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Cut through noise. Fix broken growth systems. Turn traffic into
            revenue.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Lucen works with ambitious brands that need marketing to perform,
            not just look busy. No bloated teams. No hand-offs. Just
            experienced operators doing the work.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-bright"
            >
              Book a call
            </Link>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-50 transition-colors hover:border-zinc-500"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </section>

      {/* Tagline strip */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <p
            data-reveal
            className="text-center text-xl font-medium tracking-tight text-zinc-50 sm:text-2xl"
          >
            Clarity first. Results second. Noise never.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <h2
          data-reveal
          className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl"
        >
          What we do
        </h2>
        <p data-reveal className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
          We focus on what actually drives results — from search visibility and
          paid media to tracking, data, and conversion performance.
        </p>
        <div data-reveal-group className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="text-xl font-semibold tracking-tight text-zinc-50">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      <section className="bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <h2
            data-reveal
            className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl"
          >
            How we work
          </h2>
          <div data-reveal-group className="mt-12 grid gap-10 md:grid-cols-3">
            {principles.map((principle, index) => (
              <div key={principle.title}>
                <p className="font-mono text-sm text-brand">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-50">
                  {principle.title}
                </h3>
                <p className="mt-3 leading-relaxed text-zinc-400">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <h2
          data-reveal
          className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl"
        >
          Where we&apos;ve done it
        </h2>
        <p data-reveal className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
          We&apos;ve fixed growth systems and built performance across sectors
          and borders.
        </p>
        <ul data-reveal-group className="mt-10 flex flex-wrap gap-3">
          {industries.map((industry) => (
            <li
              key={industry}
              className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-zinc-300"
            >
              {industry}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-ink text-zinc-50">
        <div
          data-reveal
          className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s build a business that performs.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-zinc-400">
            Tell us where growth is stuck. We&apos;ll tell you what we&apos;d
            fix first — and what it&apos;s worth.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-bright"
            >
              Connect with us
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-50 transition-colors hover:border-zinc-500"
            >
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
