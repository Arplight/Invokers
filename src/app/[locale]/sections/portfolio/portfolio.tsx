import MainSection from "@/components/main_section/mainSection";
import Image from "next/image";
import Underline from "../../../../../public/assets/underline.svg";
import PortfolioProjects, {
  PortfolioProject,
} from "./components/portfolioProjects";
import { getTranslations } from "next-intl/server";

const projects: PortfolioProject[] = [
  {
    name: "Automotive Booking Platform",
    image: "/assets/projects/technician-ideas.png",
    link: "https://technician-ideas.vercel.app/",
    category: "saas",
  },
  {
    name: "Agency Management SaaS",
    image: "/assets/projects/agency-dash.png",
    link: "https://agency-dash-frontend.vercel.app/login",
    category: "saas",
  },
  {
    name: "AI Document Assistant",
    image: "/assets/projects/ai-document-analyzer.png",
    link: "https://ai-document-analyzer-frontend-rosy.vercel.app/login",
    category: "ai",
  },
  {
    name: "Legal AI Assistant",
    image: "/assets/projects/mitchell-legal-bot.png",
    link: "https://mitchell-legal-chatbot-frontend.vercel.app/admin",
    category: "ai",
  },
  {
    name: "Halal Food E-commerce",
    image: "/assets/projects/shawerma.png",
    link: "https://shawermakrakow.com/KlubHaus/",
    category: "ecommerce",
  },
  {
    name: "Sleep Cycle Calculator",
    image: "/assets/projects/sleep-queue.png",
    link: "https://sleep-queue-frontend-igq3.vercel.app/",
    category: "saas",
  },
  {
    name: "Headphone Store",
    image: "/assets/projects/x-beat.png",
    link: "https://x-beat-source.raseen.workers.dev/",
    category: "ecommerce",
  },
  {
    name: "SEO Agency Website",
    image: "/assets/projects/tale.png",
    link: "https://tale-seo-agency.raseen.workers.dev/",
    category: "landingPage",
  },
  {
    name: "Construction Company Website",
    image: "/assets/projects/builderz.png",
    link: "https://builderz-construction.raseen.workers.dev/",
    category: "landingPage",
  },
  {
    name: "Nourscene",
    image: "/assets/projects/nourscene.png",
    link: "https://new-nourseen.vercel.app/",
    category: "landingPage",
  },
];

const Portfolio = async () => {
  const t = await getTranslations("Portfolio");

  return (
    <MainSection sectionId="portfolio">
      <div className="flex flex-col items-center">
        <h1 className="text-white">{t("title")}</h1>
        <Image
          src={Underline}
          width={180}
          alt="underline"
          className="sm:w-[190px] md:w-[210px]"
        />
      </div>
      <PortfolioProjects projects={projects} />
    </MainSection>
  );
};

export default Portfolio;
