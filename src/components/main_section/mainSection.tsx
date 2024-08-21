import { FC } from "react";
import Image from "next/image";

type Star = {
  icon: string;
  position: string;
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
      className={`relative py-6 ${
        isOdd ? "dark-blue-bg" : "blue-bg"
      }  ${withStyle}`}
    >
      {radial1 && (
        <div className="absolute top-0 left-0">
          <div className="relative  w-[35vw] h-[35vw] overflow-hidden">
            <Image
              src={radial1}
              fill
              alt="left-radial"
              style={{ left: "-25%" }}
            />
          </div>
        </div>
      )}
      {radial2 && (
        <div className="absolute bottom-0 right-0">
          <div className="relative w-[35vw] h-[35vw] overflow-hidden">
            <Image
              src={radial2}
              fill
              alt="left-radial"
              style={{ left: "25%" }}
            />
          </div>
        </div>
      )}

      {stars &&
        stars.map((star, index) => (
          <div className={`absolute ${star.position}`} key={index}>
            <Image
              src={star.icon}
              width={60}
              height={60}
              alt="star"
              className="star"
            />
          </div>
        ))}
      <div className={`container  m-auto ${containerStyle}`}>{children}</div>
    </section>
  );
};

export default MainSection;
