import { workBg } from "./assets";
import { Discuss, Settings, Target } from "../Feedback/assets/svg";
import { showFormPopup } from "@/store/popups";

interface Props {}

const Work = (props: Props) => {
  return (
    <section>
      <div>
        <div className="relative px-4 py-40">
          <img
            className="absolute inset-0 object-cover w-full h-full max-w-none"
            src={workBg}
            alt=""
          />

          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          <div className="relative text-white content">
            <p className="mb-8 text-3xl font-bold uppercase font-secondary desktop:text-4xl ">
              Available Time <br />
              7:00 - 19:00
            </p>
            <button onClick={() => showFormPopup()} className="button w-80 desktop:w-[34rem]">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Work };
