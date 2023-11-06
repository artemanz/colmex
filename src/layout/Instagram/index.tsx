import { useEffect, useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

interface Props {}

const Instagram = (props: Props) => {
  const { t } = useTranslation();

  const widget = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://g6zcd6-3000.csb.app/widget.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="instagram" className="pb-16">
      <div className="content">
        <h2 className="mb-8 text-3xl font-bold text-center uppercase font-secondary">
          {t("instagram.title")}
        </h2>

        <div ref={widget} id="instagram-widget-weblab"></div>
      </div>
    </section>
  );
};

export { Instagram };
