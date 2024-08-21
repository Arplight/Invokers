import Butterfly from "../../../../public/assets/butterfly.svg";
import About1 from "../../../../public/assets/about1.svg";
import About2 from "../../../../public/assets/about2.svg";
import About3 from "../../../../public/assets/about3.svg";
import MainSection from "@/components/main_section/mainSection";
import Image from "next/image";

const About = () => {
  interface IAbout {
    aboutIcon: string;
    aboutLabel: string;
    aboutCount: string;
  }
  const about: IAbout[] = [
    { aboutIcon: About1, aboutLabel: "Projects", aboutCount: "65" },
    { aboutIcon: About2, aboutLabel: "Clients", aboutCount: "30" },
    { aboutIcon: About3, aboutLabel: "Experience", aboutCount: "7years" },
  ];
  return (
    <MainSection isOdd={false}>
      <div className="text-center w-4/5 mx-auto">
        <h2 className="primary-color">Thank you for your interest in us!</h2>
        <h1 className="mt-2 text-white">
          Founded over 7 years ago, RR Technologies is now the main{" "}
          <span className="fuchsia-color">web design</span> and{" "}
          <span className="primary-color">web development</span> agency in
          Bangladesh.
        </h1>
        <p className="paragraph-light large-paragraph mt-2">
          Technology and business fused together can bear fruitful results
          talking in terms of business flourishment and success. And this is
          what exactly we aim to deliver to our esteemed clients, offering our
          mix of reliability, capability, and longevity to get your website
          blossoming. We at RR Technologies excel in the area of digital
          marketing, web software, web development, web designing, and other web
          solutions that you may consider availing for your website growth.
        </p>
      </div>
      <div className="mt-8 flex gap-2">
        <span className="w-full md:w-1/2">
          <p className="paragraph-light large-paragraph text-justify">
            Are you facing difficulties with your website? Do you have a website
            but lack traffic? No need to worry. We at RR Technologies use our
            technological expertise amalgamated with our experience to scoop out
            the right potion of success for your firm. We are highly passionate
            about our work and leave no stones unturned to delight our customers
            with high-quality work and efficient project management that comes
            as a surprise bearing bounteous outcomes. Owing to the years of
            expertise in web development and web designing, our in-house
            professionals have been highly successful in catering projects. May
            it be your small size or large-scale business; we excel in providing
            you with the best interactive surfaces.
          </p>
        </span>
        <span className="w-full md:w-1/2 h-[300px] relative ">
          <Image src={Butterfly} fill alt="about-us" />
        </span>
      </div>
      <ul className="flex justify-evenly mt-12">
        {about.map((about, index) => (
          <li key={index} className="flex flex-col gap-0.5 items-center">
            <Image
              src={about.aboutIcon}
              width={70}
              height={70}
              alt="about-icon"
              className="mb-1.5"
            />
            <h2 className="text-[#ffffff]">{about.aboutLabel}</h2>
            <p className="large-paragraph paragraph-light">
              {about.aboutCount}+
            </p>
          </li>
        ))}
      </ul>
    </MainSection>
  );
};

export default About;
