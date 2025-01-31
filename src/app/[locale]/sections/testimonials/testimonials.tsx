"use client";
import MainSection from "@/components/main_section/mainSection";
import Radial3 from "../../../../../public/assets/Rectangle 80.svg";
import Radial4 from "../../../../../public/assets/Rectangle 81.svg";
import StartQuote from "../../../../../public/assets/startQuote.svg";
import EndQuote from "../../../../../public/assets/endQuote.svg";
import TestimonialsCard from "@/components/testimonials_card/testimonialsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Key } from "react";

interface ITestimonials {
  name: string;
  feedback: string;
  link: string;
  image: string;
  id: number;
}

const Testimonials = () => {
  const t = useTranslations("Testimonials"); // Use useTranslations

  const testimonialsData: ITestimonials[] = t
    .raw("testimonials")
    .map((testimonial: ITestimonials, index: Key) => ({
      ...testimonial,
      link: "https://wjfbsebhgb.com",
      image: "",
      id: index,
    }));

  return (
    <MainSection
      sectionId="testimonials"
      radial1={Radial3}
      radial2={Radial4}
      isOdd={false}
      containerStyle="flex flex-col justify-center gap-8 items-center h-[50vh]"
    >
      <div className="relative w-max px-3">
        <Image
          src={StartQuote}
          alt="start-quote"
          className="absolute left-0 top-0"
        />
        <h1 className="text-white">{t("title")}</h1>{" "}
        {/* Use translated title */}
        <Image
          src={EndQuote}
          alt="end-quote"
          className="absolute right-0 bottom-0"
        />
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={3}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper w-full"
      >
        {testimonialsData &&
          testimonialsData.map((testimonial) => (
            <SwiperSlide
              key={testimonial.id}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TestimonialsCard
                userName={testimonial.name}
                userFeedback={testimonial.feedback}
                feedbackLink={testimonial.link}
                userImage={testimonial.image}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </MainSection>
  );
};

export default Testimonials;
