import { useState } from "react";

import { MobileMenu, Header, Footer, Popup, Form } from "./components";

import { About, Feedback, Hero, Instagram, Work } from "./layout";
import { Services } from "./layout/Services";
import { Star } from "./assets/svg";
import { $popups } from "./store/popups";
import { useStore } from "effector-react";

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const popups = useStore($popups)

  return (
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
        <MobileMenu mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
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
  );
}

export default App;
