import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import esp from "./esp";
import en from "./en";

export const init = () =>
  i18next.use(initReactI18next).init({
    resources: {
      en,
      esp,
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
