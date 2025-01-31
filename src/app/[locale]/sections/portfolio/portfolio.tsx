import MainSection from "@/components/main_section/mainSection";
import ProjectCard from "@/components/project_card/projectCard";
import Image from "next/image";
import ProjectImage from "../../../../../public/assets/projectCard.png";
import Underline from "../../../../../public/assets/underline.svg";
import CategoryList from "./components/categoryList";
import { getTranslations } from "next-intl/server"; // Import getTranslations

const Portfolio = async () => {
  const t = await getTranslations("Portfolio"); // Use getTranslations

  const projectsMock = [
    {
      name: "Shawerma",
      image: ProjectImage,
      link: "https://shawermakrakow.com/KlubHaus/",
    },
    {
      name: "Shawerma",
      image: ProjectImage,
      link: "https://shawermakrakow.com/KlubHaus/",
    },
    {
      name: "Shawerma",
      image: ProjectImage,
      link: "https://shawermakrakow.com/KlubHaus/",
    },
    {
      name: "Shawerma",
      image: ProjectImage,
      link: "https://shawermakrakow.com/KlubHaus/",
    },
    {
      name: "Shawerma",
      image: ProjectImage,
      link: "https://shawermakrakow.com/KlubHaus/",
    },
    {
      name: "Shawerma",
      image: ProjectImage,
      link: "https://shawermakrakow.com/KlubHaus/",
    },
    {
      name: "Shawerma",
      image: ProjectImage,
      link: "https://shawermakrakow.com/KlubHaus/",
    },
    {
      name: "Shawerma",
      image: ProjectImage,
      link: "https://shawermakrakow.com/KlubHaus/",
    },
    {
      name: "Shawerma",
      image: ProjectImage,
      link: "https://shawermakrakow.com/KlubHaus/",
    },
    {
      name: "Shawerma",
      image: ProjectImage,
      link: "https://shawermakrakow.com/KlubHaus/",
    },
  ];

  return (
    <MainSection sectionId="portfolio">
      <div className="flex flex-col items-center">
        <h1 className="text-white">{t("title")}</h1>{" "}
        {/* Use translated title */}
        <Image src={Underline} alt="underline" />
      </div>
      <div className="flex gap-4 mt-8">
        <span className="w-full md:w-1/5 flex justify-center">
          <CategoryList />
        </span>
        <span className="w-full md:w-4/5">
          <ul className="flex flex-wrap gap-2">
            {projectsMock &&
              projectsMock.map((project, index) => (
                <li key={index}>
                  <ProjectCard
                    projectImage={project.image}
                    projectLink={project.link}
                    projectName={project.name}
                  />
                </li>
              ))}
          </ul>
        </span>
      </div>
    </MainSection>
  );
};

export default Portfolio;
