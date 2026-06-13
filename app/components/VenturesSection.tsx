import Image from "next/image";

const ventures = [
  {
    chevronColor: "text-[#4ade80]",
    logo: "/images/projectvala-logo.png",
    logoWidth: 314,
    logoHeight: 176,
    href: "https://projectvala.com/",
    description:
      "ProjectVala is an online platform to order content for educational and professional needs.",
  },
  {
    chevronColor: "text-[#60a5fa]",
    logo: "/images/zestur-logo.png",
    logoWidth: 388,
    logoHeight: 134,
    href: "https://zestur.com/",
    description:
      "Find the perfect freelancer for your business. People use zestur to turn their ideas into reality.",
  },
  {
    chevronColor: "text-[#c084fc]",
    logo: "/images/startupflora-logo.png",
    logoWidth: 574,
    logoHeight: 134,
    href: "https://startupflora.com/",
    description:
      "StartupFlora is a services platform to help entrepreneurs start and grow their Startups",
  },
];

export default function VenturesSection() {
  return (
    <section id="ventures" className="w-full px-6 pb-16 pt-0 md:px-12 md:pb-20 lg:px-16 lg:pb-24 ">
    <div className="mx-auto max-w-7xl">
      <div className="flex justify-center">
        <div className="h-[2px] w-3/4 bg-white" />
      </div>
      <h2 className="mt-16 text-center text-3xl font-medium text-white md:text-4xl">
        Our Ventures
      </h2>
        <div className="mt-16 grid gap-16 md:grid-cols-3 md:gap-8 lg:gap-12">
          {ventures.map((venture) => (
            <div key={venture.href} className="flex flex-col">
              <span
                className={`mb-8 text-5xl font-light leading-none ${venture.chevronColor}`}
                aria-hidden="true"
              >
                ›
              </span>
              <a
                href={venture.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-6 inline-block transition-opacity hover:opacity-80"
              >
                <Image
                  src={venture.logo}
                  alt=""
                  width={venture.logoWidth}
                  height={venture.logoHeight}
                  className="h-auto w-auto max-h-16 object-contain object-left"
                />
              </a>
              <p className="text-sm leading-relaxed text-white/75 md:text-base">
                {venture.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
