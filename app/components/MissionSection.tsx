import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="w-full px-6 pt-0 pb-12 md:px-12 md:pb-16 lg:px-16 lg:pb-20 -mt-24 md:-mt-32 lg:-mt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1 lg:pr-8 -mt-8 md:-mt-12 lg:-mt-16">
          <h2 className="text-5xl font-medium text-white md:text-6xl lg:text-7xl">Our Mission</h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-white/75 md:text-lg lg:text-xl">
            The primary goal of Acolyte is to provide solutions by engaging with
            our customers and ensuring their satisfaction.
          </p>
        </div>
        <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end -mt-8 md:-mt-12 lg:-mt-16">
          <Image
            src="/images/mission-graphic.png"
            alt=""
            width={770}
            height={770}
            className="h-auto w-full max-w-sm object-contain lg:max-w-lg xl:max-w-xl"
          />
        </div>
      </div>
    </section>
  );
}