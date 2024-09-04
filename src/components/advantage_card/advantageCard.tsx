import Image from "next/image";
import { FC } from "react";
interface IAdvantageCard {
  cardIcon: string;
  cardTitle: string;
  cardDescription: string;
}
const AdvantageCard: FC<IAdvantageCard> = ({
  cardIcon,
  cardTitle,
  cardDescription,
}) => {
  return (
    <div className="bg-white p-2 flex flex-col gap-1 rounded-[10px] items-center w-[300px] h-[400px] hover:shadow-lg hover:shadow-[#ffffff50] duration-300 hover:-translate-y-1 relative z-[10]">
      <Image src={cardIcon} width={50} height={50} alt={cardTitle} />
      <h2 className="blue-color">{cardTitle}</h2>
      <p className="small-paragraph paragraph-dark text-justify">
        {cardDescription}
      </p>
    </div>
  );
};

export default AdvantageCard;
