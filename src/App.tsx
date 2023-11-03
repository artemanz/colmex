import { useEffect, useState } from "react";

import { MobileMenu, Header, Footer, Popup, Form } from "./components";

import { About, Feedback, Hero, Instagram, Work } from "./layout";
import { Services } from "./layout/Services";
import { Star } from "./assets/svg";
import { $popups } from "./store/popups";
import { useStore } from "effector-react";
import { Route, Routes, useLocation } from "react-router-dom";
import { changeLanguage } from "i18next";
function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const popups = useStore($popups);
  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#en") changeLanguage("en");
    else if (location.hash === "#esp") changeLanguage("esp");
    console.log(location.hash);

  }, [location.hash]);

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
              <Popup>
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
          </div>
        }
      />
    </Routes>
  );
}

export default App;
