import { Chats, Globe, User } from "@/assets/svg";
import { Logo } from "./svg";
import { links } from "../links";
import { useTranslation } from "react-i18next";
import { changeLang } from "@/store/lang";

interface Props {}

const Footer = (props: Props) => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="px-4 pt-4 pb-12 text-white bg-foreground desktop:pt-12">
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

        <div className="flex justify-center my-32 desktop:mb-8">
          <Logo />
        </div>

        <p className="text-lg text-center">
          © COL MEX, {new Date().getFullYear()} <br />
          {t("footer.weblab")}{" "}
          <a className="transition-colors hover:text-accent" href="https://weblab420.com/" target="_blank">
            WEBLAB 420
          </a>
        </p>
      </div>
    </footer>
  );
};

export { Footer };
