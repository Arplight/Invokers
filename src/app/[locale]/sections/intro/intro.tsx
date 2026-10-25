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
      containerStyle="flex flex-col items-center justify-center gap-2 lg:gap-4 md:gap-6 min-h-[70vh] 2xl:min-h-[80vh]"
      stars={[
        {
          icon: Star,
          position: "bottom-[50%] left-[3%]",
          size: 60,
          isAnimated: true,
        },
        {
          icon: Star,
          position: "top-[30%] left-[75%]",
          size: 60,
          isAnimated: true,
        },
        {
          icon: Star,
          position: "bottom-[10%] right-[25%]",
          size: 60,
          isAnimated: true,
        },
      ]}
    >
      <div className="w-[280px] sm:w-[420px] md:w-[700px] h-[80px] sm:h-[110px] md:h-[150px] relative">
        <Image
          src={Logo}
          fill
          alt="Raseen logo"
          style={{ zIndex: 20 }}
          className="hero-logo"
        />
      </div>
      <div className="w-full max-w-3xl text-center lg:w-5/6">
        <h2 className="primary-color mb-2">{t("eyebrow")}</h2>
        <h1 className="text-white mb-3 text-balance">{t("headline")}</h1>
        <p className="large-paragraph paragraph-light text-balance">
          {t("message")}
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-1 md:gap-2">
          <Button
            buttonLabel={t("primaryButton")}
            isPrimary={true}
            withLink="#contact"
          />
          <Button
            buttonLabel={t("secondaryButton")}
            isPrimary={false}
            withLink="#portfolio"
          />
        </div>
      </div>
      <a href="#about" className="relative" aria-label="Scroll to about">
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
