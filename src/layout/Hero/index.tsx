import { Star } from "@/assets/svg";
import heroBg from "./assets/hero-bg.webp";
import heroPicture from "./assets/hero-picture.webp";
import { Form } from "@/components";

interface Props {}

const Hero = (props: Props) => {
  return (
    <section className="relative pt-5 bg-accent_1 font-secondary desktop:min-h-[48rem] desktop:flex">
      <img
        className="absolute bottom-0 z-0 object-cover w-full h-full max-w-none"
        src={heroBg}
        alt=""
      />

      <div className="relative flex-row-reverse justify-between w-full desktop:flex content desktop:mt-16">
        <div className="w-full max-w-xs mx-auto mb-2 desktop:max-w-lg">
          <div className="flex items-center justify-center gap-2 mb-5 text-accent">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>

          <h1 className="mb-8 font-bold text-center uppercase">
            Professional AC, PLUBMING, <br />
            PAINTINg, Repairs <br />
            and Handyman Services
          </h1>

          <Form />
        </div>

        <picture className="flex justify-center desktop:self-end desktop:h-[42rem] h-[28rem]">
          <img src={heroPicture} alt="" />
        </picture>
      </div>
    </section>
  );
};

export { Hero };
