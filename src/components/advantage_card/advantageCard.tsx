import Image from "next/image";
import { FC } from "react";
import Styles from "./advantageCard.module.scss";

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
    <div
      className={`p-2 flex flex-col gap-1 rounded-[10px] items-center w-[300px] h-[400px] duration-300 hover:-translate-y-1 relative z-[10] ${Styles.card}`}
    >
      <Image src={cardIcon} width={50} height={50} alt={cardTitle} />
      <h2 className="dark-blue-color">{cardTitle}</h2>
      <p className="small-paragraph paragraph-dark text-justify">
        {cardDescription}
      </p>
    </div>
  );
};

export default AdvantageCard;
