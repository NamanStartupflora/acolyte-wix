import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { label: "Facebook", href: "#", icon: "/images/facebook.png" },
  { label: "Instagram", href: "#", icon: "/images/instagram.png" },
  { label: "LinkedIn", href: "#", icon: "/images/linkedin.png" },
];

export default function Footer() {
  return (
    <footer className="mt-8 w-full border-t border-white/10 bg-[#111111] px-6 py-8 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex flex-col items-start gap-1">
            <Image
              src="/images/footer-logo.png"
              alt="Acolyte Living"
              width={242}
              height={62}
              className="h-8 w-auto object-contain"
            />
            <span className="text-sm text-white/70">Powered by Acolyte Living</span>
          </div>
          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="transition-opacity hover:opacity-70"
                >
                  <Image src={icon} alt={label} width={44} height={44} className="h-8 w-8" />
                </Link>
              ))}
            </div>
            <a
              href="mailto:info@acolyte.co.in"
              className="text-sm text-white/80 tracking-wide transition-opacity hover:opacity-70"
            >
              info@acolyte.co.in
            </a>
          </div>
        </div>
        <p className="mt-12 text-center text-[10px] text-white/40 md:text-xs">
          © Acolyte Technologies Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
