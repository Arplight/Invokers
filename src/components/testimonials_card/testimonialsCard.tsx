import Image from "next/image";
import { FC } from "react";
import Link from "../../../public/assets/External_link.svg";
interface ITestimonials {
  userImage: string;
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
  return (
    <div className="relative rounded-sm border-2 border-[#ffffff] bg-[#FFFFFF15] p-2 w-[300px] h-[150px]">
      <a
        href={feedbackLink}
        target="_blank"
        className="absolute top-[5px] right-[5px]"
      >
        <Image src={Link} width={24} height={24} alt="testimonial-link" />
      </a>

      <div className="flex items-center gap-0.5">
        <div className="w-[40px] h-[40px] relative rounded-full overflow-hidden">
          <Image
            src={userImage}
            fill
            alt={`${userName}-image`}
            className="object-center object-cover"
          />
        </div>
        <b className="text-[#ffffff] large-paragraph">{userName}</b>
      </div>
      <p className="paragraph-light text-justify small-paragraph pl-5">
        {userFeedback && userFeedback.length > 50
          ? userFeedback.slice(0, 50) + "..."
          : userFeedback}
      </p>
    </div>
  );
};

export default TestimonialsCard;
