import { Star } from "@/assets/svg";
import { Discuss, Settings, Target } from "./assets/svg";
import { Form } from "@/components";
import { useTranslation } from "react-i18next";

interface Props {}

const Feedback = (props: Props) => {
  const { t } = useTranslation();
  return (
    <section id="feedback">
      <div className="desktop:flex">
        <div className="px-4 py-20 text-white bg-foreground basis-1/2">
          <div className="max-w-xl mx-auto">
            <div className="mb-8 text-center">
              <p className="mb-2 text-accent">{t("feedback.accent")}</p>
              <h2 className="mb-4 text-3xl font-bold uppercase font-secondary">
                {t("feedback.title")}
              </h2>
              <p>{t("feedback.subtitle")}</p>
            </div>
            <ul className="flex flex-col gap-5">
              <li className="flex items-center gap-5">
                <div className="flex-shrink-0 basis-16 min-w-[64px]">
                  <Discuss />
                </div>
                <p>
                  {t("feedback.list.1.1")} <br /> {t("feedback.list.1.2")}
                </p>
              </li>
              <li className="flex items-center gap-5">
                <div className="flex-shrink-0 basis-16 min-w-[64px]">
                  <Settings />
                </div>
                <p>
                  {t("feedback.list.2.1")} <br /> {t("feedback.list.2.2")}
                </p>
              </li>
              <li className="flex items-center gap-5">
                <div className="flex-shrink-0 basis-16 min-w-[64px]">
                  <Target />
                </div>
                <p>
                  {t("feedback.list.3.1")} <br /> {t("feedback.list.3.2")}
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-20 desktop:basis-1/2">
          <div className="flex items-center justify-center gap-2 mb-5 text-accent">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>

          <div className="w-full max-w-xs desktop:max-w-lg">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feedback };
