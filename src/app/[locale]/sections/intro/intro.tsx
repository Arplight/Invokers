import Radial1 from "../../../../../public/assets/Rectangle 75.svg";
import Radial2 from "../../../../../public/assets/Rectangle 76.svg";
import Ellipse from "../../../../../public/assets/Subtract.svg";
import Logo from "../../../../../public/logo/Logo.svg";
import Image from "next/image";
import Button from "@/components/button/button";
import Mouse from "../../../../../public/assets/mouse.svg";
import Star from "../../../../../public/assets/Star.svg";
import MainSection from "@/components/main_section/mainSection";

const Intro = () => {
  return (
    <MainSection
      radial1={Radial1}
      radial2={Radial2}
      containerStyle="flex flex-col items-center justify-center gap-6 h-[85vh]"
      stars={[
        {
          icon: Star,
          position: "bottom-[50%] left-[6%]",
          size: 60,
          isAnimated: true,
        },
        {
          icon: Star,
          position: "top-[42%] left-[60%]",
          size: 60,
          isAnimated: true,
        },
        {
          icon: Star,
          position: "bottom-[14%] right-[3%]",
          size: 60,
          isAnimated: true,
        },
      ]}
    >
      <div className="w-[700px] h-[300px] relative">
        <Image
          src={Logo}
          fill
          alt="logo"
          style={{ zIndex: 20 }}
          className="hero-logo"
        />
        <Image
          src={Ellipse}
          alt="logo"
          style={{
            position: "absolute",
            bottom: "5%",
          }}
          className="hero-logo"
        />
      </div>
      <div className="w-1/3 text-center">
        <p className="large-paragraph paragraph-light">
          Are you facing difficulties with your website? Do you have a website
          but lack traffic? No need to worry.
        </p>
        <Button buttonLabel="get started" isPrimary={false} withStyle="mt-2" />
      </div>
      <Image
        src={Mouse}
        alt="mouse"
        width={40}
        height={40}
        className="mouse mt-2"
      />
    </MainSection>
  );
};

export default Intro;
