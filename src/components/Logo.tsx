import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <Image
        src="/lucen-logo.png"
        alt="Lucen logo"
        width={28}
        height={28}
        className="rounded-md"
        priority
      />
      <span className="text-2xl font-semibold tracking-tight text-zinc-50">
        lucen<span className="text-brand">.</span>
      </span>
    </Link>
  );
}
