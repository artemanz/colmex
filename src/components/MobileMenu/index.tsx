import { motion } from "framer-motion";
import { Arrow, Globe } from "@/assets/svg";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import clsx from "clsx";
import { accordions } from "../accordions";
import { links } from "../links";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { changeLang } from "@/store/lang";

interface Props {
  mobileMenu: boolean;
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu = ({ mobileMenu, setMobileMenu }: Props) => {
  const [accordion, setAccordion] = useState(-1);
  const { t } = useTranslation();

  useEffect(() => {
    document.documentElement.style.overflowY = "hidden";
    return () => {
      document.documentElement.style.overflowY = "auto";
    };
  }, []);

  return (
    <motion.div
      initial={{ scaleY: 0, transformOrigin: "top" }}
      animate={{ scaleY: 1, transition: { ease: "easeOut" } }}
      className="fixed inset-x-0 flex flex-col gap-8 px-5 py-8 overflow-y-auto bg-white top-36 md:top-32 h-[70vh] desktop:hidden"
    >
      <ul className="flex justify-between">
        {links.map((li) => (
          <li key={li.text}>
            <a
              onClick={() => setMobileMenu(false)}
              className="flex flex-col items-center"
              href={li.href}
            >
              {<li.icon />}
              <span>{t(li.text)}</span>
            </a>
          </li>
        ))}
      </ul>

      <ul className="flex flex-col">
        {accordions.map((a, idx) => (
          <li
            key={a.title}
            className={clsx(
              "grid grid-rows-[0fr_0fr] transition-all duration-300 py-3",
              accordion == idx && "grid grid-rows-[0fr_1fr]"
            )}
          >
            <button
              onClick={() => {
                if (accordion === idx) setAccordion(-1);
                else setAccordion(idx);
              }}
              className="flex items-center justify-between w-full mx-auto"
            >
              <span>{t(a.title)}</span>
              <span
                className={clsx(
                  "transition-all duration-300",
                  accordion === idx && "-rotate-180"
                )}
              >
                <Arrow />
              </span>
            </button>
            <div
              className={clsx(
                "transition-all duration-300 px-2 overflow-hidden rounded-xl border-accent mx-auto w-full",
                accordion === idx && "border py-2 mt-5"
              )}
            >
              <ul className="flex flex-col gap-5">
                {a.content.map((c) => (
                  <li key={c.text}>
                    <a
                      onClick={() => setMobileMenu(false)}
                      className="flex items-center gap-4"
                      href="#services"
                    >
                      {c.icon && <img className="w-7" src={c.icon} alt="" />}
                      <span>{t(c.text)}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex flex-col items-center mt-auto">
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
    </motion.div>
  );
};

export { MobileMenu };
