import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface Props {}

const Instagram = (props: Props) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (window.WEBLAB_WIDGET) window.WEBLAB_WIDGET.init();
  }, []);

  return (
    <section id="instagram" className="pb-16">
      <div className="content">
        <h2 className="mb-8 text-3xl font-bold text-center uppercase font-secondary">
          {t("instagram.title")}
        </h2>

        <div id="instagram-widget-weblab"></div>
      </div>
    </section>
  );
};

export { Instagram };
