import Radial1 from "../../../../../public/assets/Rectangle 75.svg";
import Radial2 from "../../../../../public/assets/Rectangle 76.svg";
import Logo from "../../../../../public/logo/logo.svg";
import Image from "next/image";
import Button from "@/components/button/button";
import Star from "../../../../../public/assets/Star.svg";
import MainSection from "@/components/main_section/mainSection";
import Mouse from "../../../../../public/assets/mouse.svg";
import { getTranslations } from "next-intl/server";
const Intro = async () => {
  const t = await getTranslations("intro");
  return (
    <MainSection
      sectionId="intro"
      radial2={Radial2}
      containerStyle="flex flex-col items-center justify-center gap-6 h-[70vh] 2xl:h-[80vh]"
      stars={[
        {
          icon: Star,
          position: "bottom-[50%] left-[6%]",
          size: 60,
          isAnimated: true,
        },
        {
          icon: Star,
          position: "top-[40%] left-[60%]",
          size: 60,
          isAnimated: true,
        },
        {
          icon: Star,
          position: "bottom-[14%] right-[25%]",
          size: 60,
          isAnimated: true,
        },
      ]}
    >
      <div className="w-[700px] h-[150px] relative">
        <Image
          src={Logo}
          fill
          alt="logo"
          style={{ zIndex: 20 }}
          className="hero-logo"
        />
      </div>
      <div className="w-1/3 text-center">
        <p className="large-paragraph paragraph-light">{t("message")}</p>
        <Button
          buttonLabel={t("button")}
          isPrimary={false}
          withStyle="mt-3"
          withLink="#contact"
        />
      </div>
      <a href="#about" className="relative">
        <Image
          src={Mouse}
          alt="mouse"
          width={40}
          height={40}
          className="mouse mt-2"
        />
      </a>
    </MainSection>
  );
};

export default Intro;
