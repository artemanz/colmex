import { LowCost, Quality, Reliability } from "./assets/svg";
import repairBg from "./assets/repair-bg.webp";
import { showFormPopup } from "@/store/popups";
import { useTranslation } from "react-i18next";

interface Props {}

const About = (props: Props) => {
  const { t } = useTranslation();

  const advantages = [
    {
      title: t("about.cards.quality.title"),
      icon: Quality,
      content: t("about.cards.quality.text"),
    },
    {
      title: t("about.cards.lowcost.title"),
      icon: LowCost,
      content: t("about.cards.lowcost.text"),
    },
    {
      title: t("about.cards.reliability.title"),
      icon: Reliability,
      content: t("about.cards.reliability.text"),
    },
  ];

  return (
    <section id="about">
      <div className="px-4 py-16 content">
        <h2 className="mb-8 text-3xl font-bold text-center uppercase font-secondary">
          {t("about.title")}
        </h2>

        <p className="mb-8 text-center text-black desktop:text-xl">
          {t("about.text.1")}
          <br />
          <br />
          {t("about.text.2")}
          <br />
          <br />
          {t("about.text.3")}
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
          {t("button")}
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
          <p className="mb-4 text-3xl font-bold uppercase whitespace-pre-line font-secondary desktop:text-4xl">
            {t("about.banner.title")}
          </p>
          <p className="mb-12 desktop:text-2xl">
            {t("about.banner.text.1")} <br /> {t("about.banner.text.2")}
          </p>
          <button
            onClick={() => showFormPopup()}
            className="button w-80 desktop:w-[34rem]"
          >
            {t("button")}
          </button>
        </div>
      </div>
    </section>
  );
};

export { About };
