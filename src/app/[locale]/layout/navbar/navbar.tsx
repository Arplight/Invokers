"use client";
import Image from "next/image";
import NavIcon from "../../../../../public/logo/navIcon.svg";
import Button from "@/components/button/button";
import useScrollHandler from "@/lib/hooks/useScrollHandler";
import useSectionObserver from "@/lib/hooks/useSectionObserver";
import { useEffect, useState } from "react";
import { IoLanguage } from "react-icons/io5";
import LangMenu from "./LangMenu";
import Styles from "./navbar.module.scss";
import { useTranslations } from "next-intl";
const Navbar = () => {
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const t = useTranslations("navbar");
  interface ISection {
    sectionLabel: string;
    sectionId: string;
  }
  const sections: ISection[] = [
    { sectionLabel: t("about"), sectionId: "about" },
    { sectionLabel: t("services"), sectionId: "services" },
    { sectionLabel: t("expertise"), sectionId: "expertise" },
    { sectionLabel: t("portfolio"), sectionId: "portfolio" },
    { sectionLabel: t("testimonials"), sectionId: "testimonials" },
  ];

  const { isTarget } = useScrollHandler(300);
  const sectionsIds: string[] = sections
    .map((section) => section.sectionId)
    .concat(["intro", "contact"]);
  // handlers
  useSectionObserver(sectionsIds);
  useEffect(() => {
    const locationHandler = () => {
      const location: string | null = window?.location?.hash?.slice(1) ?? null;
      setCurrentSection(location);
    };
    window.addEventListener("scroll", locationHandler);
    return () => window.removeEventListener("scroll", locationHandler);
  }, []);
  return (
    <header
      className={`sticky top-0 z-50 duration-700  backdrop-blur-md bg-[#0a1e40e7]  border-b border-[#5380ea1e] ${
        isTarget && " shadow-lg shadow-[#5380ea25]"
      }`}
    >
      <nav>
        <ul className="flex items-center container m-auto py-1.5 justify-between">
          <li key={"logo"}>
            <a href="#intro" aria-label="intro">
              <Image
                src={NavIcon}
                width={30}
                height={40}
                alt="navbar-icon"
                objectFit="contain"
              />
            </a>
          </li>
          <li key={"pages"}>
            <ul className="flex gap-2">
              {sections.map((section, index) => (
                <li key={index}>
                  {/* the following condition is not working */}
                  <a
                    className={`large-paragraph paragraph-light hover:text-[#5380ea] duration-300 flex ${
                      currentSection === section.sectionId ? "nav-active" : ""
                    } `}
                    aria-label={section.sectionLabel}
                    href={`#${section.sectionId}`}
                  >
                    {section.sectionLabel}
                  </a>
                </li>
              ))}
            </ul>
          </li>

          <li
            className="leading-[18px] flex items-center gap-2"
            key={"contact-button"}
          >
            <span className={`${Styles.lang} relative`}>
              <IoLanguage size={24} fill="#fff" />
              <LangMenu />
            </span>
            <span>
              <Button
                buttonLabel={t("contactUs")}
                isPrimary={true}
                withLink="#contact"
              />
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
