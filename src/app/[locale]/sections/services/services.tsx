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

const Services = () => {
  interface IServiceCard {
    serviceIcon: ReactNode;
    serviceLabel: string;
  }
  const services: IServiceCard[] = [
    { serviceIcon: <Service1 />, serviceLabel: "Web Design & Web Development" },
    { serviceIcon: <Service2 />, serviceLabel: "E-commerce Solutions" },
    {
      serviceIcon: <Service3 />,
      serviceLabel: "Customized application development",
    },
    {
      serviceIcon: <Service4 />,
      serviceLabel: "Search Engine Optimization & Digital Marketing",
    },
  ];
  return (
    <MainSection
      containerStyle="flex gap-2"
      stars={[
        {
          icon: EllipseRed,
          position: "bottom-[60%] left-[3%]",
          size: 15,
          isAnimated: false,
        },
        {
          icon: EllipseBlue,
          position: "top-[5%] left-[40%]",
          size: 10,
          isAnimated: false,
        },
        {
          icon: EllipseYellow,
          position: "bottom-[5%] right-[3%]",
          size: 15,
          isAnimated: false,
        },
      ]}
    >
      <span className="w-full md:w-1/2">
        <h2 className="primary-color">Services we offer </h2>
        <h1 className="mt-2 text-white text-justify z-2 relative">
          We believe in true partnership and thus get our{" "}
          <span className="fuchsia-color">customers</span> and a bang for their
          bucks. There are various areas in which we function, here are a few of
          them:
        </h1>
      </span>
      <span className="w-full md:w-1/2">
        <ul className="grid grid-cols-2 grid-rows-2 gap-y-2">
          {services.map((service, index) => (
            <li key={index} className="flex justify-center">
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
