import { FC, ReactNode } from "react";
import Styles from "./serviceCard.module.scss";

interface IServiceCard {
  cardIcon: ReactNode;
  cardLabel: string;
}
const ServiceCard: FC<IServiceCard> = ({ cardIcon, cardLabel }) => {
  return (
    <div
      className={`service-card flex flex-col gap-1 p-1 dark-blue-color text-center items-center justify-center w-full h-[200px] rounded-[5px] duration-300 z-10 ${Styles.card}`}
      aria-label={cardLabel}
    >
      {cardIcon}
      <h3 className="w-3/5">{cardLabel}</h3>
    </div>
  );
};

export default ServiceCard;
