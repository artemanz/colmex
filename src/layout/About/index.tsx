import { LowCost, Quality, Reliability } from "./assets/svg";
import repairBg from "./assets/repair-bg.webp";
import { showFormPopup } from "@/store/popups";

interface Props {}

const advantages = [
  {
    title: "Quality",
    icon: Quality,
    content: `Our team of skilled professionals have years of experience in their respective fields, and are trained to handle any job, big or small. From plumbing and electrical work to masonry and tiling, our experts can tackle it all with ease.`,
  },
  {
    title: "Low-cost",
    icon: LowCost,
    content: `We understand that home repairs and maintenance can be costly, which is why we offer competitive pricing without sacrificing quality. We believe that everyone deserves access to top-notch home services, and we strive to make our services affordable for all.`,
  },
  {
    title: "Reliability",
    icon: Reliability,
    content: `At Col Mex, we understand that your time is valuable, which is why we always arrive on time, and complete our work in a timely and efficient manner. We take pride in our work, and always strive to exceed our clients’ expectations.`,
  },
];

const About = (props: Props) => {
  return (
    <section id="about">
      <div className="px-4 py-16 content">
        <h2 className="mb-8 text-3xl font-bold text-center uppercase font-secondary">
          we`re col mex
        </h2>

        <p className="mb-8 text-center text-black desktop:text-xl">
          COL MEX provides a wide range of services related to the installation
          and maintenance of air conditioners and refrigeration equipment.
          <br />
          <br />
          We also offer comprehensive maintenance and repair services for
          various facilities. <br />
          <br />
          Our goal is to become one of the top choices throughout the state for
          our excellent work, competitive pricing, and adherence to industry
          standards.
        </p>

        <ul className="flex flex-col gap-5 mb-8 desktop:grid desktop:grid-cols-3">
          {advantages.map((a) => (
            <li className="px-4 py-6 text-black bg-accent_1" key={a.title}>
              <div className="flex items-center gap-8 mb-4">
                <a.icon />
                <span className="text-2xl">{a.title}</span>
              </div>
              <p>{a.content}</p>
            </li>
          ))}
        </ul>

        <button
          onClick={() => showFormPopup()}
          className="max-w-full mx-auto button w-80 desktop:w-[34rem]"
        >
          BOOK NOW
        </button>
      </div>

      <div className="relative px-4 py-40">
        <img
          className="absolute inset-0 object-cover w-full h-full max-w-none"
          src={repairBg}
          alt=""
        />

        <div className="absolute inset-0 bg-opacity-25 bg-neutral"></div>

        <div className="relative text-white content">
          <p className="mb-4 text-3xl font-bold uppercase font-secondary desktop:text-4xl">
            Your Repair Pros
          </p>
          <p className="mb-12 desktop:text-2xl">
            From Repairs to Renovations, <br /> We've Got You Covered
          </p>
          <button onClick={() => showFormPopup()} className="button w-80 desktop:w-[34rem]">
            BOOK NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export { About };
