import Link from "next/link";
import Wordmark from "./Wordmark";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/method", label: "Method" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-10 flex items-center gap-7 border-b border-hairline bg-paper px-12 py-5">
      <Link href="/" className="mr-auto">
        <Wordmark />
      </Link>
      {links.map((l) => (
        <Link key={l.href} href={l.href} className="text-sm text-muted hover:text-ink">
          {l.label}
        </Link>
      ))}
      <a
        href="#"
        className="ml-2 rounded bg-ink px-4 py-2 text-sm font-semibold text-paper"
      >
        Download CV
      </a>
    </header>
  );
}
