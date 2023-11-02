import { showFormPopup } from "@/store/popups";
import { card1, card2, card3, card4, discountBg } from "./assets";
import { AcService, Handyman, Painting, Plumbing } from "./assets/svg";

interface Props {}

const serviceCards = [
  {
    id: "acService",
    bg: card1,
    icon: AcService,
    services: [
      "AC Duct Cleaning",
      "AC Installation",
      "AC Maintenance Service",
      "AC Repair",
    ],
  },
  {
    id: "plumbing",
    bg: card2,
    icon: Plumbing,
    services: [
      "Leakage inspection and repair",
      "Fixture installation and repair",
      "Bathtub installation and repair",
      "Drainage Cleaning",
      "Water tank cleaning",
    ],
  },
  {
    id: "painting",
    bg: card3,
    icon: Painting,
    services: [
      "Furniture Painting & Polishing",
      "House Painting",
      "Office Painting",
      "Wallpaper Installation or Removal",
    ],
  },
  {
    id: "AcService",
    bg: card4,
    icon: Handyman,
    services: [
      "Furniture Assemble",
      "Curtain Hanging",
      "TV Mounting & Hanging",
      "Door lock, chandelier, shelves hanging repair",
      "Electrical and Lighting Upgrades",
      "Staircase Renovation",
      "Door and Window Casing Installation",
    ],
  },
];

const Services = (props: Props) => {
  return (
    <section id="services">
      <div className="py-20">
        <div className="desktop:px-8 content">
          <h2 className="mb-8 text-3xl font-bold text-center font-secondary">
            SERVICES
          </h2>

          <ul className="flex flex-col gap-5 desktop:grid desktop:grid-cols-2 desktop:auto-rows-[44rem] mb-8">
            {serviceCards.map((card) => (
              <li className="relative py-10" key={card.id}>
                <img
                  className="absolute inset-0 object-cover w-full h-full"
                  src={card.bg}
                  alt=""
                />
                <div className="absolute inset-0 bg-accent_1 bg-opacity-70" />

                <div className="relative flex flex-col items-center justify-center h-full">
                  <div className="mb-8 desktop:mb-24">
                    <card.icon />
                  </div>
                  <ul className="flex flex-col gap-4 mb-8 text-center text-black desktop:text-xl ">
                    {card.services.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <button onClick={() => showFormPopup()} className="mt-auto button w-80">BOOK NOW</button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div id="offers" className="relative px-4 py-28">
          <img
            className="absolute inset-0 object-cover object-top w-full h-full"
            src={discountBg}
            alt=""
          />

          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          <div className="relative text-white content">
            <p className="mb-4 text-3xl font-bold uppercase font-secondary desktop:text-4xl">
              Claim a Discount When <br className="hidden desktop:block" /> You
              Share a Video Review!
            </p>
            <ol className="mb-8 desktop:text-2xl">
              <li>1. Post a Video Review in Your Instagram</li>
              <li>
                2. Include Our Instagram Link <br />
                &nbsp; &nbsp;{" "}
                <a
                  className="transition-colors hover:text-accent"
                  href="https://www.instagram.com/serviciosoperativoscolmex"
                  target="_blank"
                >
                  @serviciosoperativoscolmex
                </a>{" "}
                in the Description
              </li>
              <li>3. Send it to Us</li>
              <li>4. Wait for Confirmation</li>
              <li>5. Receive Your Discount</li>
            </ol>
            <button onClick={() => showFormPopup()} className="button w-80 desktop:w-[34rem]">BOOK NOW</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services };
