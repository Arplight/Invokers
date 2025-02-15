import MainSection from "@/components/main_section/mainSection";
import { ReactNode } from "react";
import EllipseRed from "../../../../../public/assets/EllipseRed.svg";
import EllipseYellow from "../../../../../public/assets/EllipseYellow.svg";
import EllipseBlue from "../../../../../public/assets/EllipseBlue.svg";
import Service1 from "../../../../../public/assets/service1";
import Service2 from "../../../../../public/assets/service2";
import Service3 from "../../../../../public/assets/service3";
import Service4 from "../../../../../public/assets/service4";
import ServiceCard from "@/components/service_card/serviceCard";
import { getTranslations } from "next-intl/server";

const Services = async () => {
  const t = await getTranslations("services_section");

  interface IServiceCard {
    serviceIcon: ReactNode;
    serviceLabel: string;
  }
  const services: IServiceCard[] = [
    { serviceIcon: <Service1 />, serviceLabel: t("web_design") },
    { serviceIcon: <Service2 />, serviceLabel: t("ecommerce") },
    {
      serviceIcon: <Service3 />,
      serviceLabel: t("custom_apps"),
    },
    {
      serviceIcon: <Service4 />,
      serviceLabel: t("seo_marketing"),
    },
  ];
  return (
    <MainSection
      sectionId="services"
      containerStyle="flex flex-col lg:flex-row gap-2"
      stars={[
        {
          icon: EllipseRed,
          position: "bottom-[60%] left-[2%]",
          size: 15,
          isAnimated: false,
        },
        {
          icon: EllipseBlue,
          position: "top-[3%] left-[40%]",
          size: 10,
          isAnimated: false,
        },
        {
          icon: EllipseYellow,
          position: "bottom-[5%] right-[2%]",
          size: 15,
          isAnimated: false,
        },
      ]}
    >
      <span className="w-full lg:w-1/2">
        <h2 className="primary-color">{t("title")}</h2>
        <h1 className="mt-2 text-white text-justify z-2 relative">
          We believe in true partnership and thus get our{" "}
          <span className="fuchsia-color">customers</span> and a bang for their
          bucks. There are various areas in which we function, here are a few of
          them:
        </h1>
      </span>
      <span className="w-full lg:w-1/2">
        <ul className="flex flex-wrap w-full">
          {services.map((service, index) => (
            <li key={index} className="flex justify-center w-full sm:w-1/2 p-1">
              <ServiceCard
                cardLabel={service.serviceLabel}
                cardIcon={service.serviceIcon}
              />
            </li>
          ))}
        </ul>
      </span>
    </MainSection>
  );
};

export default Services;
