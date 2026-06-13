import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full px-6 pt-16 pb-8 md:px-12 md:pt-24 md:pb-12 lg:px-16 lg:pt-28 lg:pb-0">
      <div className="mx-auto max-w-7xl flex flex-col items-start">
        {/* Text block */}
        <div>
          <h1 className="text-[80px] md:text-[110px] lg:text-[130px] leading-[1] font-medium text-white">
            Acolyte
            <br />
            Technologies
          </h1>
          <p className="mt-6 text-[20px] md:text-[22px] lg:text-[24px] leading-[1.3] text-white/90">
            Embrace the talent revolution to{" "}
            <span className="block">remain relevant in the future!</span>
          </p>
        </div>

        {/* Image overlapping text, no clipping */}
        <div className="w-full flex justify-end">
          <Image
            src="/images/hero-graphic.png"
            alt=""
            width={1120}
            height={1232}
            className="h-auto w-[75%] md:w-[65%] lg:w-[55%] object-contain -translate-y-16 translate-x-8"
            priority
          />
        </div>
      </div>
    </section>
  );
}

