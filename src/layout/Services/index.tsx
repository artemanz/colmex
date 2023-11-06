import { showFormPopup } from "@/store/popups";
import { card1, card2, card3, card4, discountBg } from "./assets";
import { AcService, Handyman, Painting, Plumbing } from "@/assets/svg";
import { useTranslation } from "react-i18next";

interface Props {}

const Services = (props: Props) => {
  const { t } = useTranslation();
  const serviceCards = [
    {
      id: "acService",
      bg: card1,
      icon: (
        <div className="flex flex-col items-center justify-center gap-2 text-xs bg-white rounded-full desktop:text-lg w-28 desktop:w-36 h-28 desktop:h-36">
          <AcService />
          <span className="text-center whitespace-pre-line">
            {t("icons.ac")}
          </span>
        </div>
      ),
      services: [
        t("services.AC Duct Cleaning"),
        t("services.AC Installation"),
        t("services.AC Maintenance Service"),
        t("services.AC Repair"),
      ],
    },
    {
      id: "plumbing",
      bg: card2,
      icon: (
        <div className="flex flex-col items-center justify-center gap-2 text-xs bg-white rounded-full desktop:text-lg w-28 desktop:w-36 h-28 desktop:h-36">
          <Plumbing />
          <span className="text-center whitespace-pre-line">
            {t("icons.plumbing")}
          </span>
        </div>
      ),
      services: [
        t("services.Leakage inspection and repair"),
        t("services.Fixture installation and repair"),
        t("services.Bathtub installation and repair"),
        t("services.Drainage Cleaning"),
        t("services.Water tank cleaning"),
      ],
    },
    {
      id: "painting",
      bg: card3,
      icon: (
        <div className="flex flex-col items-center justify-center gap-2 text-xs bg-white rounded-full desktop:text-lg w-28 desktop:w-36 h-28 desktop:h-36">
          <Painting />
          <span className="text-center whitespace-pre-line">
            {t("icons.painting")}
          </span>
        </div>
      ),
      services: [
        t("services.Furniture Painting & Polishing"),
        t("services.House Painting"),
        t("services.Office Painting"),
        t("services.Wallpaper Installation or Removal"),
      ],
    },
    {
      id: "handyman",
      bg: card4,
      icon: (
        <div className="flex flex-col items-center justify-center gap-2 text-xs bg-white rounded-full desktop:text-lg w-28 desktop:w-36 h-28 desktop:h-36">
          <Handyman />
          <span className="text-center whitespace-pre-line">
            {t("icons.handyman")}
          </span>
        </div>
      ),
      services: [
        t("services.Furniture Assemble"),
        t("services.Curtain Hanging"),
        t("services.TV Mounting & Hanging"),
        t("services.Door lock, chandelier, shelves hanging repair"),
        t("services.Electrical and Lighting Upgrades"),
        t("services.Staircase Renovation"),
        t("services.Door and Window Casing Installation"),
      ],
    },
  ];

  return (
    <section id="services">
      <div className="py-20">
        <div className="desktop:px-8 content">
          <h2 className="mb-8 text-3xl font-bold text-center font-secondary">
            {t("servicesSection.title")}
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
                  <div className="mb-8 desktop:mb-24">{card.icon}</div>
                  <ul className="flex flex-col gap-4 mb-8 text-center text-black desktop:text-xl ">
                    {card.services.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <button
                    onClick={() => showFormPopup()}
                    className="mt-auto button w-80"
                  >
                    {t("button")}
                  </button>
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
              {t("servicesSection.banner.title.1")}{" "}
              <br className="hidden desktop:block" />{" "}
              {t("servicesSection.banner.title.2")}
            </p>
            <ol className="mb-8 desktop:text-2xl">
              <li>{t("servicesSection.banner.list.1")}</li>
              <li>
                {t("servicesSection.banner.list.2.1")} <br />
                &nbsp; &nbsp;{" "}
                <a
                  className="transition-colors hover:text-accent"
                  href="https://www.instagram.com/serviciosoperativoscolmex"
                  target="_blank"
                >
                  @serviciosoperativoscolmex
                </a>{" "}
                {t("servicesSection.banner.list.2.2")}
              </li>
              <li>{t("servicesSection.banner.list.3")}</li>
              <li>{t("servicesSection.banner.list.4")}</li>
              <li>{t("servicesSection.banner.list.5")}</li>
            </ol>
            <button
              onClick={() => showFormPopup()}
              className="button w-80 desktop:w-[34rem]"
            >
              {t("button")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services };
