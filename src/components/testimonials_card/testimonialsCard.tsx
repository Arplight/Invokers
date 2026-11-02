import Image from "next/image";
import { FC } from "react";
import Link from "../../../public/assets/External_link.svg";
import Styles from "./testimonialsCard.module.scss";

interface ITestimonials {
  userImage?: string;
  userName: string;
  userFeedback: string;
  feedbackLink: string;
}
const TestimonialsCard: FC<ITestimonials> = ({
  userImage,
  userName,
  userFeedback,
  feedbackLink,
}) => {
  const initial = userName?.trim()?.charAt(0)?.toUpperCase() || "?";

  return (
    <div className={`relative rounded-sm p-2 w-full h-[180px] ${Styles.card}`}>
      <a
        href={feedbackLink}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-[5px] ltr:right-[5px] rtl:left-[5px]"
      >
        <Image
          src={Link}
          width={24}
          height={24}
          alt="testimonial-link"
          className="rtl:rotate-[270deg]"
        />
      </a>

      <div className="flex items-center gap-1.5">
        <div
          className={`w-[50px] h-[50px] relative rounded-full overflow-hidden shrink-0 flex items-center justify-center ${Styles.avatarFallback}`}
        >
          {userImage ? (
            <Image
              src={userImage}
              fill
              alt={`${userName}-image`}
              className="object-center object-cover"
            />
          ) : (
            <span className="text-white font-semibold text-sm">{initial}</span>
          )}
        </div>
        <b className={`large-paragraph ${Styles.userName}`}>{userName}</b>
      </div>
      <p className="paragraph-light text-pretty small-paragraph ltr:pl-7 rtl:pr-7">
        {userFeedback && userFeedback.length > 120
          ? userFeedback.slice(0, 120) + "..."
          : userFeedback}
      </p>
    </div>
  );
};

export default TestimonialsCard;
