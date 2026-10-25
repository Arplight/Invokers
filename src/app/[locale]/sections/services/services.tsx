import MainSection from "@/components/main_section/mainSection";
import { ReactNode } from "react";
import EllipseYellow from "../../../../../public/assets/EllipseYellow.svg";
import EllipseTeal from "../../../../../public/assets/EllipseTeal.svg";
import EllipseWhite from "../../../../../public/assets/EllipseWhite.svg";
import ServiceCard from "@/components/service_card/serviceCard";
import { getTranslations } from "next-intl/server";
import {
  MdOutlineAutoAwesome,
  MdOutlineDashboardCustomize,
  MdOutlineStorefront,
  MdOutlineWeb,
} from "react-icons/md";

interface IServiceContent {
  title: string;
  description: string;
  capabilities: string[];
  button: string;
}

const Services = async () => {
  const t = await getTranslations("services_section");
  const serviceContent: IServiceContent[] = t.raw("services");
  const serviceIcons: ReactNode[] = [
    <MdOutlineWeb key="service-1" />,
    <MdOutlineDashboardCustomize key="service-2" />,
    <MdOutlineStorefront key="service-3" />,
    <MdOutlineAutoAwesome key="service-4" />,
  ];

  return (
    <MainSection
      sectionId="services"
      containerStyle="flex flex-col gap-4 xl:flex-row relative"
      withStyle="overflow-visible"
      stars={[
        {
          icon: EllipseYellow,
          position: "bottom-[60%] left-[2%]",
          size: 15,
          isAnimated: false,
        },
        {
          icon: EllipseWhite,
          position: "top-[2%] left-[40%]",
          size: 10,
          isAnimated: false,
        },
        {
          icon: EllipseTeal,
          position: "bottom-[5%] right-[2%]",
          size: 15,
          isAnimated: false,
        },
      ]}
    >
      <div className="sm:w-5/6 xl:w-2/6 xl:sticky top-8 z-20 h-fit ">
        <h2 className="primary-color">{t("eyebrow")}</h2>
        <h1 className="mt-2 text-white z-2 relative text-balance">
          {t.rich("title", {
            accent: (chunks) => <span className="accent-color">{chunks}</span>,
          })}
        </h1>
        <p className="paragraph-light large-paragraph mt-2 text-balance">
          {t("description")}
        </p>
      </div>
      <ul className="flex flex-wrap w-full xl:w-4/6">
        {serviceContent.map((service, index) => (
          <li key={service.title} className="flex w-full md:w-1/2 p-1">
            <ServiceCard
              cardLabel={service.title}
              cardDescription={service.description}
              capabilities={service.capabilities}
              buttonLabel={service.button}
              cardIcon={serviceIcons[index]}
            />
          </li>
        ))}
      </ul>
    </MainSection>
  );
};

export default Services;
