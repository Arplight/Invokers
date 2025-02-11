import Butterfly from "../../../../../public/assets/butterfly.svg";
import About1 from "../../../../../public/assets/about1.svg";
import About2 from "../../../../../public/assets/about2.svg";
import About3 from "../../../../../public/assets/about3.svg";
import MainSection from "@/components/main_section/mainSection";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

const About = async () => {
  interface IAbout {
    aboutIcon: string;
    aboutLabel: string;
    aboutCount: string;
  }

  const t = await getTranslations("about");

  const about: IAbout[] = [
    { aboutIcon: About1, aboutLabel: t("projects"), aboutCount: "65" },
    { aboutIcon: About2, aboutLabel: t("clients"), aboutCount: "30" },
    { aboutIcon: About3, aboutLabel: t("experience"), aboutCount: "7years" },
  ];

  return (
    <MainSection isOdd={false} sectionId="about">
      <div className="text-center w-full md:w-4/5 md:mx-auto">
        <h2 className="primary-color">{t("sectionTitle")}</h2>
        <h1 className="mt-2 text-white">
          Founded over 7 years ago, RR Technologies is now the main{" "}
          <span className="fuchsia-color">web design</span> and{" "}
          <span className="primary-color">web development</span> agency in
          Bangladesh.
        </h1>
        <p className="paragraph-light large-paragraph mt-2 text-justify">
          {t("paragraph1")}
        </p>
      </div>
      <div className="mt-8 flex flex-col-reverse md:flex-row gap-x-2 gap-y-4">
        <span className="w-full md:w-1/2">
          <p className="paragraph-light large-paragraph text-justify">
            {t("paragraph2")}
          </p>
        </span>
        <span className="w-full grow min-h-[300px] md:w-1/2  relative ">
          <Image src={Butterfly} fill alt="about-us" />
        </span>
      </div>
      <ul className="flex flex-wrap gap-12 justify-evenly mt-12">
        {about.map((aboutItem, index) => (
          <li key={index} className="flex flex-col gap-0.5 items-center">
            <Image
              src={aboutItem.aboutIcon}
              width={70}
              height={70}
              alt="about-icon"
              className="mb-1.5"
            />
            <h2 className="text-[#ffffff]">{aboutItem.aboutLabel}</h2>
            <p className="large-paragraph paragraph-light">
              {aboutItem.aboutCount}+
            </p>
          </li>
        ))}
      </ul>
    </MainSection>
  );
};

export default About;
