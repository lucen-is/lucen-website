import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lucen is a senior-led digital marketing consultancy built on precision and accountability. Learn about our mission, our vision, and how we work.",
};

const standards = [
  {
    title: "Commercial outcomes only",
    description:
      "Every recommendation is tied to a commercial outcome, not a slide deck. We measure our work in revenue, cost efficiency, and conversion — the numbers your business actually runs on.",
  },
  {
    title: "No bloated teams, no hand-offs",
    description:
      "You work directly with experienced operators. The people who scope the work do the work — there is no account-manager relay and no junior bench learning on your budget.",
  },
  {
    title: "Evidence over opinion",
    description:
      "We fix tracking and data before we touch strategy, because decisions built on bad data fail quietly and expensively. When growth matters, guesswork is not an option.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-zinc-950 text-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
          <p className="text-sm font-medium uppercase tracking-widest text-amber-400">
            About Lucen
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            A consultancy built on precision and accountability.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            We&apos;re a senior-led digital marketing consultancy focused on
            clarity, execution, and measurable outcomes. Lucen works with
            ambitious brands to cut through noise, fix broken growth systems,
            and turn traffic into revenue.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
              Our mission
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              Our mission is to help businesses grow by making smarter
              marketing decisions. We focus on what actually drives results —
              from search visibility and paid media to tracking, data, and
              conversion performance.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
              Every recommendation is tied to a commercial outcome, not a
              slide deck.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-950">
              Our vision
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              Our vision is to build a consultancy known for precision and
              accountability — a partner businesses trust when growth matters
              and guesswork is not an option.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
              We aim to set a higher standard for how digital marketing should
              be planned, executed, and measured.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            The standard we hold ourselves to
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {standards.map((standard, index) => (
              <div key={standard.title}>
                <p className="font-mono text-sm text-amber-600">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-zinc-950">
                  {standard.title}
                </h3>
                <p className="mt-3 leading-relaxed text-zinc-600">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
        <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
          Growth shouldn&apos;t be a guessing game.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-zinc-600">
          If you want a partner who measures what matters and owns the
          outcome, let&apos;s talk.
        </p>
        <div className="mt-10">
          <Link
            href="/contact"
            className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-zinc-50 transition-colors hover:bg-zinc-800"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
