"use client";

import { FC, useMemo, useState } from "react";
import ProjectCard from "@/components/project_card/projectCard";
import CategoryList, { PortfolioCategoryId } from "./categoryList";

export type PortfolioProject = {
  name: string;
  image: string;
  link: string;
  category: PortfolioCategoryId;
};

type PortfolioProjectsProps = {
  projects: PortfolioProject[];
};

const PortfolioProjects: FC<PortfolioProjectsProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] =
    useState<PortfolioCategoryId>("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory, projects]);

  return (
    <div className="flex flex-col md:flex-row gap-4 mt-8">
      <span className="w-full md:w-1/5 flex justify-center">
        <CategoryList
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      </span>
      <span className="w-full md:w-4/5">
        <ul className="flex flex-wrap">
          {filteredProjects.map((project) => (
            <li
              key={`${project.name}-${project.link}`}
              className="w-1/2 md:w-1/3 lg:w-1/4 aspect-square p-0.5"
            >
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
  );
};

export default PortfolioProjects;
