import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import Button from "../button/button";
import Styles from "./projectCard.module.scss";

interface IProjectCard {
  projectImage: StaticImageData | string;
  projectLink: string;
  projectName: string;
}
const ProjectCard: FC<IProjectCard> = ({
  projectImage,
  projectLink,
  projectName,
}) => {
  return (
    <div
      className={`w-full h-full overflow-hidden relative rounded-sm ${Styles.projectCard}`}
    >
      <div className="w-full h-full absolute flex flex-col items-center justify-center gap-1 z-[10] px-3 text-center">
        <h2 className="font-bold secondary-color leading-snug">
          {projectName}
        </h2>
        <Button buttonLabel="Visit" isPrimary={false} withLink={projectLink} />
      </div>
      <Image
        src={projectImage}
        fill
        alt={projectName}
        className="object-cover object-center"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
    </div>
  );
};

export default ProjectCard;
