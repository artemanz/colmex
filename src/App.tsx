import { useEffect, useState } from "react";

import { MobileMenu, Header, Footer, Popup, Form } from "./components";

import { About, Feedback, Hero, Instagram, Work } from "./layout";
import { Services } from "./layout/Services";
import { Star } from "./assets/svg";
import { $popups } from "./store/popups";
import { useStore } from "effector-react";
import { Route, Routes } from "react-router-dom";
import { changeLanguage } from "i18next";
import { $lang } from "./store/lang";

import { hideFormPopup, hideGreetingsPopup } from "@/store/popups";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  const [mobileMenu, setMobileMenu] = useState(false);
  const popups = useStore($popups);
  const lang = useStore($lang);

  useEffect(() => {
    if (lang.lang === "en") changeLanguage("en");
    else if (lang.lang === "esp") changeLanguage("esp");
  }, [lang]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="min-h-screen">
            <Header mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />

            <main>
              <Hero />
              <About />
              <Services />
              <Instagram />
              <Work />
              <Feedback />
            </main>
            <Footer />

            {mobileMenu && (
              <MobileMenu
                mobileMenu={mobileMenu}
                setMobileMenu={setMobileMenu}
              />
            )}

            {popups.form && (
              <Popup hide={hideFormPopup}>
                <div className="flex items-center justify-center gap-2 mb-8 text-accent">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <Form />
              </Popup>
            )}
            {popups.greetings && (
              <Popup hide={hideGreetingsPopup}>
                <div className="text-xl font-bold text-center">
                  {t("greetings.1")} <br />
                  {t("greetings.2")}
                </div>
              </Popup>
            )}
          </div>
        }
      />
    </Routes>
  );
}

export default App;
