import AboutImage from "../../../../../public/assets/about.svg";
import MainSection from "@/components/main_section/mainSection";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

const About = async () => {
  const t = await getTranslations("about");
  const paragraphs: string[] = t.raw("paragraphs");
  const points: string[] = t.raw("points");

  return (
    <MainSection isOdd={false} sectionId="about">
      <div className="text-center w-full md:w-4/5 md:mx-auto ">
        <h2 className="primary-color">{t("eyebrow")}</h2>
        <h1 className="mt-2 text-white text-balance lg:w-5/6 mx-auto">
          {t.rich("heading", {
            accent: (chunks) => <span className="accent-color">{chunks}</span>,
          })}
        </h1>
      </div>
      <div className="mt-8 flex flex-col-reverse md:flex-row gap-x-2 gap-y-4">
        <span className="w-full md:w-1/2 flex flex-col gap-2">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="paragraph-light large-paragraph text-balance"
            >
              {paragraph}
            </p>
          ))}
        </span>
        <span className="w-full grow min-h-[300px] md:w-1/2 relative">
          <Image src={AboutImage} fill alt="about-us" />
        </span>
      </div>
      <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {points.map((point, index) => (
          <li
            key={index}
            className="rounded-[10px] border border-white/10 bg-white/5 p-2"
          >
            <p className="large-paragraph paragraph-light">{point}</p>
          </li>
        ))}
      </ul>
    </MainSection>
  );
};

export default About;
