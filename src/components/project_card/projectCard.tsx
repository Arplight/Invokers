import Image, { StaticImageData } from "next/image";
import { FC } from "react";
import Button from "../button/button";
import Styles from "./projectCard.module.scss";
interface IProjectCard {
  projectImage: StaticImageData;
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
      className={`w-[200px] h-[200px] overflow-hidden relative rounded-sm ${Styles.projectCard}`}
    >
      <div className="w-full h-full absolute flex items-center justify-center z-[10]">
        <Button buttonLabel="Visit" isPrimary={false} withLink={projectLink} />
      </div>
      <Image
        src={projectImage}
        fill
        alt={projectName}
        className="object-cover"
      />
    </div>
  );
};

export default ProjectCard;
