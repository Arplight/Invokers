import { FC, ReactNode } from "react";
import Button from "@/components/button/button";
import Styles from "./serviceCard.module.scss";

interface IServiceCard {
  cardIcon: ReactNode;
  cardLabel: string;
  cardDescription: string;
  capabilities: string[];
  buttonLabel: string;
}
const ServiceCard: FC<IServiceCard> = ({
  cardIcon,
  cardLabel,
  cardDescription,
  capabilities,
  buttonLabel,
}) => {
  return (
    <div
      className={`service-card flex h-full flex-col gap-1.5 p-2 dark-blue-color w-full rounded-[5px] duration-300 z-10 ${Styles.card}`}
      aria-label={cardLabel}
    >
      <div className="flex flex-col items-center gap-1 text-center">
        <span className="service-card-icon text-[48px] leading-none" aria-hidden>
          {cardIcon}
        </span>
        <h3 className="w-full">{cardLabel}</h3>
      </div>
      <p className="small-paragraph grow text-balance">{cardDescription}</p>
      <ul className="flex flex-col gap-0.5 text-start w-full">
        {capabilities.map((capability) => (
          <li key={capability} className="small-paragraph">
            • {capability}
          </li>
        ))}
      </ul>
      <div className="mt-1 flex justify-center">
        <Button
          buttonLabel={buttonLabel}
          isPrimary={true}
          withLink="#contact"
          withStyle="!text-[12px]"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
