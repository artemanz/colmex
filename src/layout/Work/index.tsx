import { workBg } from "./assets";
import { showFormPopup } from "@/store/popups";
import { useTranslation } from "react-i18next";

interface Props {}

const Work = (props: Props) => {
  const { t } = useTranslation();
  return (
    <section>
      <div>
        <div className="relative px-4 py-40">
          <img
            className="absolute inset-0 object-cover w-full h-full max-w-none"
            src={workBg}
            alt=""
          />

          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          <div className="relative text-white content">
            <p className="mb-8 text-3xl font-bold uppercase font-secondary desktop:text-4xl ">
              {t("work.title")} <br />
              7:00 - 19:00
            </p>
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

export { Work };
