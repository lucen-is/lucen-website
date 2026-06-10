import type { Metadata } from "next";
import Logo from "@/components/Logo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Get Found on Google & AI Search",
  description:
    "Search setup built for Google & AI. Tracking, landing pages, and campaign structure designed for visibility across Google Search, Performance Max, and AI-driven discovery.",
};

const gradeHref = `mailto:${site.email}?subject=${encodeURIComponent(
  "Grade my search setup"
)}&body=${encodeURIComponent(
  "Hi Lucen,\n\nI'd like you to grade my search setup. Here's my website:\n\n"
)}`;

const pillars = [
  "Google Search & Performance Max",
  "Conversion Tracking & Attribution",
  "AI Search Visibility & Discovery",
];

const problems = [
  {
    title: "Bad tracking",
    description:
      "Most businesses are making decisions using incomplete or misleading conversion data.",
  },
  {
    title: "Weak pages",
    description:
      "Ad traffic lands on pages built for browsing, not converting — so clicks never become customers.",
  },
  {
    title: "The AI search shift",
    description:
      "Search behaviour has moved beyond traditional Google results. If AI assistants can't read your site, you're invisible to a growing share of buyers.",
  },
  {
    title: "Poor attribution",
    description:
      "Ad platforms grade their own homework and overstate their influence on conversions.",
  },
  {
    title: "Generic setup",
    description:
      "Campaigns launched on default settings, with no structure built around how your customers actually search.",
  },
  {
    title: "Poor reporting",
    description:
      "Dashboards are useless when the underlying data cannot be trusted.",
  },
];

const setupComponents = [
  "Tracking setup",
  "Conversion signals",
  "Landing pages",
  "Reporting clarity",
  "Product feeds",
  "Search intent",
  "AI visibility",
  "Campaign structure",
];

const steps = [
  {
    title: "Audit",
    description:
      "We review your tracking, campaign structure, and landing pages to find exactly where performance is leaking.",
  },
  {
    title: "Fix",
    description:
      "We correct the issues that matter most first — tracking before targeting, structure before spend.",
  },
  {
    title: "Build",
    description:
      "We rebuild campaigns around real search intent, with pages designed to convert the traffic they receive.",
  },
  {
    title: "Improve",
    description:
      "We test, measure, and strengthen performance continuously — with reporting you can actually trust.",
  },
];

const benefits = [
  "Cleaner tracking and attribution",
  "Higher quality traffic signals",
  "Reduced wasted ad spend",
  "Better conversion consistency",
  "Visibility in AI answers and recommendations",
  "Reporting tied to revenue, not platform metrics",
];

export default function GetFoundOnGooglePage() {
  return (
    <>
      {/* Minimal landing header */}
      <header className="border-b border-white/10 bg-ink">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Logo />
          <a
            href={gradeHref}
            className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-brand-bright"
          >
            Grade your setup
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-ink text-zinc-50">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Search setup built for Google{" "}
              <span className="text-brand">&amp;</span> AI.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Tracking, landing pages, and campaign structure designed to make
              you visible across Google Search, Performance Max, and
              AI-driven discovery — and to turn that visibility into revenue.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={gradeHref}
                className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-bright"
              >
                Grade your setup
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-50 transition-colors hover:border-zinc-500"
              >
                WhatsApp us
              </a>
            </div>
            <ul className="mt-14 flex flex-wrap gap-3">
              {pillars.map((pillar) => (
                <li
                  key={pillar}
                  className="rounded-full border border-zinc-700 px-4 py-2 text-sm text-zinc-300"
                >
                  {pillar}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Problems */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            Why most ad accounts underperform
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
            It&apos;s rarely the budget. It&apos;s the setup underneath it.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem) => (
              <div
                key={problem.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-7"
              >
                <h3 className="text-lg font-semibold tracking-tight text-zinc-50">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Strong setup */}
        <section className="bg-white/[0.03]">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
              What a strong setup looks like
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Eight components, each one checked, fixed, and built to work
              together.
            </p>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {setupComponents.map((component, index) => (
                <li
                  key={component}
                  className="rounded-xl border border-white/10 p-5"
                >
                  <p className="font-mono text-xs text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-2 font-semibold tracking-tight text-zinc-50">
                    {component}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Process */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            How we work
          </h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title}>
                <p className="font-mono text-sm text-brand">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-50">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-white/[0.03]">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
              What better setup gets you
            </h2>
            <ul className="mt-10 grid gap-x-12 gap-y-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-lg text-zinc-300"
                >
                  <span aria-hidden className="mt-1 text-brand">
                    ✓
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-ink text-zinc-50">
          <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
              Find out what your setup is costing you.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-zinc-400">
              Send us your website and we&apos;ll grade your search setup —
              tracking, structure, pages, and AI visibility.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href={gradeHref}
                className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-brand-bright"
              >
                Grade your setup
              </a>
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
      </main>

      {/* Lean landing footer */}
      <footer className="bg-ink text-zinc-500">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-white/10 px-4 py-10 text-sm sm:px-6">
          <p className="text-zinc-300">
            Google Partner · Microsoft Advertising Partner · IFZA Licensed
          </p>
          <p>
            {site.legalName} · {site.address.line1}, {site.address.line2},{" "}
            {site.address.city}, UAE ·{" "}
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-zinc-50"
            >
              {site.email}
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
