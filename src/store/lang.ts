import { createEffect, createEvent, createStore } from "effector";

export const changeLang = createEvent<"en" | "esp">();

const getInitialLang = () => {
  const lang = localStorage.getItem("lang");
  if (lang) {
    const parsed = JSON.parse(lang);
    if (["en", "esp"].includes(parsed)) return parsed;
  }
  return "en";
};

export const $lang = createStore({
  lang: getInitialLang(),
}).on(changeLang, (_, payload) => {
  localStorage.setItem("lang", JSON.stringify(payload));
  return { lang: payload };
});
