import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Burger, Chats, Logo, User, Close, Arrow, Globe } from "@/assets/svg";
import { accordions } from "../accordions";
import clsx from "clsx";
import { motion } from "framer-motion";
import { links } from "../links";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { changeLang } from "@/store/lang";

interface Props {
  mobileMenu: boolean;
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ mobileMenu, setMobileMenu }: Props) => {
  const [accordion, setAccordion] = useState(-1);
  const { t } = useTranslation();

  useEffect(() => {
    function hideAccordion(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-selector=trigger-accordion]"))
        setAccordion(-1);
    }

    window.addEventListener("click", hideAccordion);

    return () => window.removeEventListener("click", hideAccordion);
  }, []);

  return (
    <header className="relative z-10 font-secondary">
      <div className="px-4 bg-foreground">
        <div className="flex items-center justify-between content">
          <div className="gap-4 desktop:flex">
            <a
              className="flex items-center gap-1 text-white group"
              href="https://wa.me/+529844513615"
              target="_blank"
            >
              <div className="w-6 desktop:w-10">
                <Chats />
              </div>
              <div className="flex flex-col">
                <span className="hidden text-sm font-normal desktop:block text-neutral">
                  {t("header.contact")}
                </span>
                <span className="font-bold transition-colors group-hover:text-accent">
                  +529844513615
                </span>
              </div>
            </a>
            <a
              className="flex items-center gap-1 font-bold text-white group"
              href="mailto:serviciosoperativoscolmex@gmail.com"
            >
              <div className="w-6 desktop:w-10">
                <User />
              </div>
              <div className="flex flex-col">
                <span className="hidden text-sm font-normal desktop:block text-neutral">
                  {t("header.question")}
                </span>
                <span className="font-bold transition-colors group-hover:text-accent">
                  serviciosoperativoscolmex@gmail.com
                </span>
              </div>
            </a>
          </div>

          <nav className="hidden gap-4 py-2 desktop:flex text-neutral">
            <ul className="flex gap-4">
              {links.map((li) => (
                <li
                  className="transition-colors hover:text-accent"
                  key={li.text}
                >
                  <a className="flex flex-col items-center" href={li.href}>
                    <div>
                      <li.icon />
                    </div>
                    <span>{t(li.text)}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col items-center">
              <Globe />
              <span>
                <button
                  onClick={() => changeLang("en")}
                  className="transition-colors hover:text-accent"
                >
                  ENG
                </button>{" "}
                /{" "}
                <button
                  onClick={() => changeLang("esp")}
                  className="transition-colors hover:text-accent"
                >
                  ESP
                </button>
              </span>
            </div>
          </nav>
        </div>
      </div>

      {/* MOBILE HEADER */}
      <div className="flex items-center gap-2 px-2 py-6 desktop:hidden">
        <a href="/">
          <Logo />
        </a>

        {mobileMenu ? (
          <button
            onClick={() => setMobileMenu(false)}
            className="flex justify-center w-8 ml-auto text-center text-accent"
          >
            <Close />
          </button>
        ) : (
          <button
            onClick={() => setMobileMenu(true)}
            className="flex justify-center w-8 ml-auto text-center text-accent"
          >
            <Burger />
          </button>
        )}
      </div>

      {/* DESKTOP HEADER */}
      <div className="relative items-center justify-center hidden gap-2 px-2 py-6 bg-white desktop:flex content">
        <ul className="flex items-center gap-16">
          <li
            key={accordions[0].title}
            className="py-3 transition-all duration-300"
          >
            <button
              data-selector="trigger-accordion"
              onClick={() => {
                if (accordion === 0) setAccordion(-1);
                else setAccordion(0);
              }}
              className="flex items-center justify-between"
            >
              <span>{t(accordions[0].title)}</span>
              <span
                className={clsx(
                  "transition-all duration-300",
                  accordion === 0 && "-rotate-180"
                )}
              >
                <Arrow />
              </span>
            </button>
          </li>
          <li
            key={accordions[1].title}
            className="py-3 transition-all duration-300"
          >
            <button
              data-selector="trigger-accordion"
              onClick={() => {
                if (accordion === 1) setAccordion(-1);
                else setAccordion(1);
              }}
              className="flex items-center justify-between"
            >
              <span>{t(accordions[1].title)}</span>
              <span
                className={clsx(
                  "transition-all duration-300",
                  accordion === 1 && "-rotate-180"
                )}
              >
                <Arrow />
              </span>
            </button>
          </li>
          <Logo />
          <li
            key={accordions[2].title}
            className="py-3 transition-all duration-300"
          >
            <button
              data-selector="trigger-accordion"
              onClick={() => {
                if (accordion === 2) setAccordion(-1);
                else setAccordion(2);
              }}
              className="flex items-center justify-between"
            >
              <span>{t(accordions[2].title)}</span>
              <span
                className={clsx(
                  "transition-all duration-300",
                  accordion === 2 && "-rotate-180"
                )}
              >
                <Arrow />
              </span>
            </button>
          </li>
          <li
            key={accordions[3].title}
            className="py-3 transition-all duration-300"
          >
            <button
              data-selector="trigger-accordion"
              onClick={() => {
                if (accordion === 3) setAccordion(-1);
                else setAccordion(3);
              }}
              className="flex items-center justify-between"
            >
              <span>{t(accordions[3].title)}</span>
              <span
                className={clsx(
                  "transition-all duration-300",
                  accordion === 3 && "-rotate-180"
                )}
              >
                <Arrow />
              </span>
            </button>
          </li>
        </ul>
        {/* HEADER POPUP */}
        {accordion !== -1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1, originY: 0 }}
            style={{
              left: accordion === 0 ? "0" : accordion === 1 ? "15%" : "auto",
              right: accordion === 2 ? "15%" : accordion === 3 ? "0" : "auto",
            }}
            className="absolute z-10 top-[110%]"
          >
            <ul className="grid items-center max-w-2xl grid-cols-2 p-5 bg-white border gap-y-2 gap-x-5 border-accent rounded-xl">
              {accordions[accordion].content.map((c) => (
                <li key={c.text}>
                  <a className="flex items-center gap-2" href="#services">
                    <img className="w-16 h-16" src={c.icon} alt="" />
                    <span>{t(c.text)}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export { Header };
