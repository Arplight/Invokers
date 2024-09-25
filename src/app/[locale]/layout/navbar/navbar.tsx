"use client";
import Image from "next/image";
import NavIcon from "../../../../../public/logo/navIcon.svg";
import Button from "@/components/button/button";
import useScrollHandler from "@/lib/hooks/useScrollHandler";
const Navbar = () => {
  interface ISection {
    sectionLabel: string;
    sectionPosition: string;
  }
  const sections: ISection[] = [
    { sectionLabel: "Services", sectionPosition: "" },
    { sectionLabel: "Portfolio", sectionPosition: "" },
    { sectionLabel: "About Us", sectionPosition: "" },
    { sectionLabel: "Testimonials", sectionPosition: "" },
  ];
  const { isTarget } = useScrollHandler(300);
  // git test
  return (
    <nav
      className={`sticky top-0 z-50 duration-700  backdrop-blur-md bg-[#0a1e40e7]  ${
        isTarget && " shadow-lg shadow-[#5380ea25]"
      }`}
    >
      <ul className="flex items-center container m-auto py-2 justify-between">
        <li key={"logo"}>
          <Image src={NavIcon} width={50} height={50} alt="navbar-icon" />
        </li>
        <li key={"pages"}>
          <ul className="flex gap-2">
            {sections.map((section, index) => (
              <li key={index}>
                <button
                  className="large-paragraph paragraph-light hover:text-[#ffffff] duration-300 flex"
                  role="button"
                  aria-label={section.sectionLabel}
                >
                  {section.sectionLabel}
                </button>
              </li>
            ))}
          </ul>
        </li>
        <li className="flex" key={"contact-button"}>
          <Button buttonLabel="Contact-Us" isPrimary={true} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
