import Image from "next/image";

export default function VisionSection() {
  return (
    <section className="w-full px-6 pt-0 pb-12 md:px-12 md:pb-16 lg:px-16 lg:pb-20 -mt-24 md:-mt-32 lg:-mt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="relative flex justify-center lg:justify-start">
          <Image
            src="/images/vision-graphic.png"
            alt=""
            width={644}
            height={864}
            className="h-auto w-full max-w-sm object-contain lg:max-w-md"
          />
        </div>
        <div className="lg:pl-8 -mt-8 md:-mt-12 lg:-mt-16">
          <h2 className="text-5xl font-medium text-white md:text-6xl lg:text-7xl">Our Vision</h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-white/75 md:text-lg lg:text-xl">
            Creating value from data and relationships between objects helps us
            evaluate the use case and make digital solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
