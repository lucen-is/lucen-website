import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-[#fafaf9]/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <nav className="flex items-center gap-5 sm:gap-8">
          <Link
            href="/about"
            className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-950"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-950"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="hidden rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-800 sm:inline-block"
          >
            Book a call
          </Link>
        </nav>
      </div>
    </header>
  );
}
