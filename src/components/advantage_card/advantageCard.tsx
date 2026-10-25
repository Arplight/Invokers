import { FC, ReactNode } from "react";
import Styles from "./advantageCard.module.scss";

interface IAdvantageCard {
  cardIcon: ReactNode;
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
      className={`p-2 flex flex-col gap-1 rounded-[10px] items-center w-[300px] min-h-[280px] duration-300 hover:-translate-y-1 relative z-[10] text-center ${Styles.card}`}
    >
      <span className={`text-[50px] leading-none ${Styles.icon}`} aria-hidden>
        {cardIcon}
      </span>
      <h2 className="dark-blue-color">{cardTitle}</h2>
      <p className="small-paragraph paragraph-dark text-balance">
        {cardDescription}
      </p>
    </div>
  );
};

export default AdvantageCard;
