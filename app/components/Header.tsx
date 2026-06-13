import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Ventures", href: "#ventures" },
  { label: "Careers", href: "#careers" },
  { label: "Tenders", href: "#tenders" },
];

export default function Header() {
  return (
    <header className="w-full px-6 py-6 md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Acolyte Technologies"
            width={300}
            height={100}
            className="h-12 w-auto md:h-14"
            priority
          />
        </Link>
        <nav className="flex items-center gap-5 md:gap-10 pr-20">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-lg text-white transition-opacity hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
