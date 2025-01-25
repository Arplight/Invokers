import { useLocale, useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import Arabic from "../../../../../public/assets/flags/arabic.svg";
import English from "../../../../../public/assets/flags/english.svg";
import Styles from "./navbar.module.scss";
interface LangOption {
  langIcon: StaticImageData;
  langLabel: string;
  locale: string;
}

const LangMenu: React.FC = () => {
  const router = useRouter();
  const currentLocale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("navbar");
  const navLang: LangOption[] = [
    { langIcon: English, langLabel: t("english"), locale: "en" },
    { langIcon: Arabic, langLabel: t("arabic"), locale: "ar" },
  ];
  const params = useParams();

  const switchLanguage = (locale: string) => {
    if (locale !== currentLocale) {
      router.replace({ pathname, params }, { locale: locale });
    }
  };

  return (
    <ul
      className={`${
        Styles["lang-menu"]
      } p-[10px] bottom-[-94px] sm:bottom-[-110px] md:bottom-[-112px] ${
        currentLocale === "en" ? "right-[0px]" : "left-[0px]"
      } `}
    >
      {navLang.map((lang, index) => (
        <li
          key={index}
          className="flex items-center gap-[5px] cursor-pointer"
          onClick={() => switchLanguage(lang.locale)}
        >
          <Image
            src={lang.langIcon}
            alt={lang.langLabel}
            width={20}
            height={20}
            className="w-[20px] h-[20px]"
          />
          <p className="paragraph-light small-paragraph duration-300">
            {lang.langLabel}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default LangMenu;
