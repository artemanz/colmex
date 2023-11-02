import { motion } from "framer-motion";
import { Arrow, Globe } from "@/assets/svg";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import clsx from "clsx";
import { accordions } from "../accordions";
import { links } from "../links";

interface Props {
  mobileMenu: boolean;
  setMobileMenu: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu = ({ mobileMenu, setMobileMenu }: Props) => {
  const [accordion, setAccordion] = useState(-1);

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
      className="fixed inset-x-0 flex flex-col gap-8 px-5 py-8 overflow-y-auto bg-white top-40 h-[70vh] desktop:hidden"
    >
      <ul className="flex justify-evenly">
        {links.map((li) => (
          <li key={li.text}>
            <a
              onClick={() => setMobileMenu(false)}
              className="flex flex-col items-center"
              href={li.href}
            >
              {<li.icon />}
              <span>{li.text}</span>
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
              className="flex items-center justify-between max-w-[75%] mx-auto w-full"
            >
              <span>{a.title}</span>
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
                "transition-all duration-300 px-2 overflow-hidden rounded-xl border-accent max-w-[75%] mx-auto w-full",
                accordion === idx && "border py-2 mt-5"
              )}
            >
              <ul className="flex flex-col gap-5">
                {a.content.map((c) => (
                  <li key={c.text}>
                    <a className="flex items-center gap-4" href="#">
                      {c.icon && <img className="w-7" src={c.icon} alt="" />}
                      <span>{c.text}</span>
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
          <a href="#">ENG</a> / <a href="#">ESP</a>
        </span>
      </div>
    </motion.div>
  );
};

export { MobileMenu };