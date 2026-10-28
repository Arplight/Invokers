import AdvantageCard from "@/components/advantage_card/advantageCard";
import Radial3 from "../../../../../public/assets/Rectangle 78.svg";
import MainSection from "@/components/main_section/mainSection";
import Button from "@/components/button/button";
import { getTranslations } from "next-intl/server";
import {
  MdOutlineFactCheck,
  MdOutlineGpsFixed,
  MdOutlineLayers,
  MdOutlineLightbulb,
} from "react-icons/md";

const Advantages = async () => {
  const t = await getTranslations("Advantages");

  const advantages = [
    {
      icon: <MdOutlineLightbulb />,
      title: t("advantages.0.title"),
      description: t("advantages.0.description"),
    },
    {
      icon: <MdOutlineLayers />,
      title: t("advantages.1.title"),
      description: t("advantages.1.description"),
    },
    {
      icon: <MdOutlineGpsFixed />,
      title: t("advantages.2.title"),
      description: t("advantages.2.description"),
    },
    {
      icon: <MdOutlineFactCheck />,
      title: t("advantages.3.title"),
      description: t("advantages.3.description"),
    },
  ];

  return (
    <MainSection radial1={Radial3} isOdd={false} sectionId="expertise">
      <div className="text-center w-full lg:w-5/6 mx-auto">
        <h2 className="primary-color">{t("eyebrow")}</h2>
        <h1 className="secondary-color mt-2 text-balance">
          {t.rich("title", {
            accent: (chunks) => <span className="accent-color">{chunks}</span>,
          })}
        </h1>
        <p className="paragraph-light large-paragraph mt-2 text-balance">
          {t("description")}
        </p>
      </div>

      <ul className="flex flex-wrap justify-center gap-2 mt-8">
        {advantages.map((adv, index) => (
          <li key={index}>
            <AdvantageCard
              cardTitle={adv.title}
              cardIcon={adv.icon}
              cardDescription={adv.description}
            />
          </li>
        ))}
      </ul>

      <div className="mt-6 flex justify-center">
        <Button
          buttonLabel={t("button")}
          isPrimary={true}
          withLink="#contact"
        />
      </div>
    </MainSection>
  );
};

export default Advantages;
