import { FC } from "react";
import Image from "next/image";

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
}
const MainSection: FC<IMainSection> = ({
  withStyle,
  containerStyle,
  isOdd = true,
  radial1,
  radial2,
  stars,
  children,
}) => {
  return (
    <section
      className={`relative py-6 overflow-hidden ${
        isOdd ? "dark-blue-bg" : "blue-bg"
      }  ${withStyle ? withStyle : ""}`}
    >
      {radial1 && (
        <div className="absolute top-0 left-0 z-[0]">
          <div className="relative  w-[35vw] h-[35vw] overflow-hidden">
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
        <div className="absolute bottom-0 right-0 z-[0]">
          <div className="relative w-[35vw] h-[35vw] overflow-hidden">
            <Image
              src={radial2}
              fill
              alt="left-radial"
              style={{ left: "25%", top: "10%" }}
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
      <div className={`container  m-auto ${containerStyle}`}>{children}</div>
    </section>
  );
};

export default MainSection;
