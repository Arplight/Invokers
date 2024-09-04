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

interface ITestimonials {
  name: string;
  feedback: string;
  link: string;
  image: string;
  id: number;
}
const Testimonials = () => {
  const testimonialsData: ITestimonials[] = [
    {
      name: "Muhammad",
      feedback: "Outstanding experience",
      link: "https://wjfbsebhgb.com",
      image: "",
      id: 0,
    },
    {
      name: "Muhammad",
      feedback: "Outstanding experience",
      link: "https://wjfbsebhgb.com",
      image: "",
      id: 1,
    },
    {
      name: "Muhammad",
      feedback: "Outstanding experience",
      link: "https://wjfbsebhgb.com",
      image: "",
      id: 2,
    },
    {
      name: "Muhammad",
      feedback: "Outstanding experience",
      link: "https://wjfbsebhgb.com",
      image: "",
      id: 3,
    },
    {
      name: "Muhammad",
      feedback: "Outstanding experience",
      link: "https://wjfbsebhgb.com",
      image: "",
      id: 4,
    },
  ];
  return (
    <MainSection
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
        <h1 className="text-white ">Testimonials</h1>
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
