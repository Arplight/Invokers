import Image from "next/image";
import Logo from "../../../../../public/logo/logo.svg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { getTranslations } from "next-intl/server";
import Styles from "./footer.module.scss";

const Footer = async () => {
  const t = await getTranslations("navbar");

  const sections = [
    { sectionLabel: t("about"), sectionId: "about" },
    { sectionLabel: t("services"), sectionId: "services" },
    { sectionLabel: t("expertise"), sectionId: "expertise" },
    { sectionLabel: t("portfolio"), sectionId: "portfolio" },
    { sectionLabel: t("testimonials"), sectionId: "testimonials" },
  ];

  const socialLinks = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/",
      icon: <FaFacebookF size={18} />,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      icon: <FaInstagram size={18} />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/",
      icon: <FaLinkedinIn size={18} />,
    },
  ];

  return (
    <footer className={`py-2 ${Styles.footer}`}>
      <div className="container m-auto flex flex-col items-center gap-3 md:flex-row md:justify-between">
        <a href="#intro" aria-label="intro">
          <Image
            src={Logo}
            width={160}
            height={34}
            alt="Raseen logo"
            className="object-contain"
          />
        </a>

        <ul className="flex flex-wrap items-center justify-center gap-2">
          {sections.map((section) => (
            <li key={section.sectionId} className="flex">
              <a
                href={`#${section.sectionId}`}
                aria-label={section.sectionLabel}
                className={`large-paragraph font-bold ${Styles.navLink}`}
              >
                {section.sectionLabel}
              </a>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-2">
          {socialLinks.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={Styles.socialLink}
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
