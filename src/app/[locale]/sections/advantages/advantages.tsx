import AdvantageCard from "@/components/advantage_card/advantageCard";
import Advantage1 from "../../../../../public/assets/advantage1.svg";
import Advantage2 from "../../../../../public/assets/advantage2.svg";
import Advantage3 from "../../../../../public/assets/advantage3.svg";
import Advantage4 from "../../../../../public/assets/advantage4.svg";
import Radial3 from "../../../../../public/assets/Rectangle 78.svg";
import Radial4 from "../../../../../public/assets/Rectangle 79.svg";
import MainSection from "@/components/main_section/mainSection";
import { getTranslations } from "next-intl/server";

const Advantages = async () => {
  const t = await getTranslations("Advantages");

  const advantages = [
    {
      icon: Advantage1,
      title: t("advantages.0.title"),
      description: t("advantages.0.description"),
    },
    {
      icon: Advantage2,
      title: t("advantages.1.title"),
      description: t("advantages.1.description"),
    },
    {
      icon: Advantage3,
      title: t("advantages.2.title"),
      description: t("advantages.2.description"),
    },
    {
      icon: Advantage4,
      title: t("advantages.3.title"),
      description: t("advantages.3.description"),
    },
  ];

  return (
    <MainSection
      radial1={Radial3}
      radial2={Radial4}
      isOdd={false}
      sectionId="expertise"
    >
      <div className="text-center w-4/5 mx-auto">
        <h2 className="primary-color">{t("title")}</h2>
        <h1 className="text-white">{t("subtitle")}</h1>
        <p className="paragraph-light large-paragraph mt-2">
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
    </MainSection>
  );
};

export default Advantages;
