import MainSection from "@/components/main_section/mainSection";
import NotFoundImage from "../../../public/assets/not-found.svg";
import Image from "next/image";
import Radial2 from "../../../public/assets/Rectangle 76.svg";
import Star from "../../../public/assets/Star.svg";
import Button from "@/components/button/button";
import { getTranslations } from "next-intl/server";

const NotFound = async () => {
  const t = await getTranslations("notFoundPage");

  return (
    <MainSection
      sectionId="not-found"
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
          position: "top-[10%] left-[60%]",
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
      hasBorder={false}
    >
      <div className="flex flex-col items-center justify-center">
        <Image
          src={NotFoundImage}
          alt="not found"
          width={500}
          height={500}
          className="mb-6"
        />
        <h1 className="font-bold secondary-color">{t("title")}</h1>
        <Button
          buttonLabel={t("button")}
          isPrimary={true}
          withStyle="mt-2"
          withLink="/#intro"
        />
      </div>
    </MainSection>
  );
};

export default NotFound;
