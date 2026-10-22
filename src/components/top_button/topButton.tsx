"use client";
import useScrollHandler from "@/lib/hooks/useScrollHandler";
import { IoIosArrowUp } from "react-icons/io";
import Styles from "./topButton.module.scss";

const TopButton = () => {
  const { isTarget } = useScrollHandler(300);
  const elevator = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={elevator}
      className={`fixed z-50 ltr:right-2 rtl:left-2 bottom-2 p-0.5 rounded-sm duration-700 ${Styles.button} ${
        isTarget
          ? "translate-x-0 opacity-1 visible"
          : "ltr:translate-x-10 rtl:-translate-x-10 opacity-0 invisible"
      }`}
      role="button"
      type="button"
      aria-label="navigate to top"
    >
      <IoIosArrowUp className="w-[22px] h-[22px] md:w-[28px] md:h-[28px]" />
    </button>
  );
};

export default TopButton;
