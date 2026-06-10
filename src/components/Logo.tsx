import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      className={`text-2xl font-semibold tracking-tight ${
        light ? "text-zinc-50" : "text-zinc-950"
      }`}
    >
      lucen<span className="text-amber-500">.</span>
    </Link>
  );
}
