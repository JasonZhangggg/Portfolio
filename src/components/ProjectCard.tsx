import React, { useState } from "react";
import { TextBox } from "./TextBox";

interface Props {
  children: React.ReactNode;
  title: string;
  image: string;
  link: string;
  apps: string[];
}

const ProjectCard = ({ children, title, image, link, apps }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-5xl font-extrabold mt-4 flex items-center gap-4">
        {title}
        <span
          className={`material-symbols-outlined text-5xl transform duration-150 ${
            isHovered
              ? "translate-x-2 text-gray-600"
              : "hover:translate-x-2 group-hover:text-gray-600"
          }`}
        >
          arrow_forward
        </span>
      </h2>
      <div className="flex gap-4">
        {apps.map((app) => (
          <TextBox key={app} text={app} />
        ))}
      </div>
      <p className="text-lg text-gray-600">{children}</p>
      <div className="flex flex-col bg-lighter-gray p-8 rounded-xl overflow-hidden">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt="Project Image"
            className="h-96 object-contain w-auto duration-300 transform hover:scale-[1.1]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
