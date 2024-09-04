"use client";
import useScrollHandler from "@/lib/hooks/useScrollHandler";
import { IoIosArrowUp } from "react-icons/io";

const TopButton = () => {
  const { isTarget } = useScrollHandler(300);
  const elevator = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={elevator}
      className={`fixed right-2 bottom-2 bg-[#5380ea] text-white p-0.5 rounded-sm duration-700 ${
        isTarget
          ? "translate-x-0 opacity-1 visible"
          : "translate-x-10 opacity-0 invisible"
      }`}
      role="button"
      type="button"
      aria-label="navigate to top"
    >
      <IoIosArrowUp size={28} />
    </button>
  );
};

export default TopButton;
