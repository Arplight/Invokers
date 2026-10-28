import { FC } from "react";
import Image from "next/image";
import Styles from "./main-section.module.scss";

type Star = {
  icon: string;
  position: string;
  size: number;
  isAnimated: boolean;
};
interface IMainSection {
  withStyle?: string;
  containerStyle?: string;
  isOdd?: boolean;
  children: React.ReactNode;
  radial1?: string;
  radial2?: string;
  stars?: Star[];
  sectionId?: string;
  hasBorder?: boolean;
}
const MainSection: FC<IMainSection> = ({
  withStyle,
  containerStyle,
  isOdd = true,
  radial1,
  radial2,
  stars,
  children,
  sectionId = undefined,
  hasBorder = true,
}) => {
  return (
    <section
      id={sectionId}
      className={`flex relative py-4 lg:py-6 overflow-hidden scroll-mt-[63px] ${hasBorder && Styles.mainSectionBorder} min-h-[95dvh]  ${
        isOdd ? "dark-blue-bg" : "blue-bg"
      }  ${withStyle ? withStyle : ""}`}
    >
      <div className="flex-1 m-auto">
        {radial1 && (
          <div className="absolute top-0 left-0 z-[0]">
            <div className="inset-0 absolute backdrop-blur-md z-[10]"></div>
            <div className="relative  w-[30vw] h-[30vw] overflow-hidden opacity-50">
              <Image
                src={radial1}
                fill
                alt="left-radial"
                style={{ left: "-25%", top: "-10%" }}
              />
            </div>
          </div>
        )}
        {radial2 && (
          <div className="absolute bottom-0 right-0 z-[0] ">
            <div className="inset-0 absolute backdrop-blur-md z-[10]"></div>
            <div className="relative w-[30vw] h-[30vw] overflow-hidden opacity-50">
              <Image
                src={radial2}
                fill
                alt="left-radial"
                style={{ left: "25%", top: "5%" }}
              />
            </div>
          </div>
        )}
        {stars &&
          stars.map((star, index) => (
            <div className={`absolute z-0 ${star.position}`} key={index}>
              <Image
                src={star.icon}
                width={star.size}
                height={star.size}
                alt="star"
                className={star.isAnimated ? "star" : ""}
              />
            </div>
          ))}
        <div className={`container  m-auto relative ${containerStyle}`}>
          {children}
        </div>
      </div>
    </section>
  );
};

export default MainSection;
