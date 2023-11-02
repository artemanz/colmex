import { Close } from "@/assets/svg";
import { hideFormPopup } from "@/store/popups";
import { motion } from "framer-motion";
import { Dispatch, ReactNode, SetStateAction, useEffect } from "react";

interface Props {
  children: ReactNode;
}

const Popup = ({ children }: Props) => {
  useEffect(() => {
    document.documentElement.style.overflowY = "hidden";
    return () => {
      document.documentElement.style.overflowY = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center">
      <div
        onClick={() => hideFormPopup()}
        className="fixed inset-0 bg-black bg-opacity-75"
      />

      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative w-full max-w-xl p-8 mx-2 bg-white desktop:p-12 rounded-xl"
      >
        {children}
        <button
          onClick={() => hideFormPopup()}
          className="absolute sm:scale-125 desktop:scale-150 top-4 right-4 text-accent desktop:top-8 desktop:right-8"
        >
          <Close />
        </button>
      </motion.div>
    </div>
  );
};

export { Popup };
