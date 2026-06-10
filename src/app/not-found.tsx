import Link from "next/link";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-32 text-center">
      <Logo />
      <h1 className="mt-8 text-4xl font-semibold tracking-tight text-zinc-950">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-lg leading-relaxed text-zinc-600">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-zinc-50 transition-colors hover:bg-zinc-800"
      >
        Back to home
      </Link>
    </div>
  );
}
