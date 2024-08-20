import { FC, ReactNode } from "react";
interface IServiceCard {
  cardIcon: ReactNode;
  cardLabel: string;
}
const ServiceCard: FC<IServiceCard> = ({ cardIcon, cardLabel }) => {
  return (
    <div
      className="service-card flex flex-col gap-1 blue-color text-center items-center justify-center w-[200px] h-[160px] rounded-[5px] border-t-8 border-[#5380ea] bg-white hover:bg-[#5380ea] hover:text-[#ffffff] hover:border-t-[#ffffff] duration-300 hover:shadow-lg hover:shadow-[#5380ea50]"
      aria-label={cardLabel}
    >
      {cardIcon}
      <h3>{cardLabel}</h3>
    </div>
  );
};

export default ServiceCard;
