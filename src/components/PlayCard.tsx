import { useState } from "react";
import { TextBoxSmall } from "./TextBox";

interface Props {
  title: string;
  image: string;
  link: string;
  apps: string[];
}

const PlayCard = ({ title, image, link, apps }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex-1 flex flex-col gap-6">
      <h2 className="text-3xl font-extrabold mt-4 flex items-center gap-4">
        {title}
        <span
          className={`material-symbols-outlined text-3xl transform duration-150 ${
            isHovered
              ? "translate-x-2 text-gray-600"
              : "hover:translate-x-2 hover:text-gray-600"
          }`}
        >
          arrow_forward
        </span>
      </h2>
      <div className="flex gap-4">
        {apps.map((app) => (
          <TextBoxSmall key={app} text={app} />
        ))}
      </div>
      <div className="flex flex-col gap-8 bg-lighter-gray p-4 h-92 rounded-xl overflow-hidden justify-center items-center">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt="Project Image"
            className="h-64 object-contain w-auto duration-300 transform hover:scale-[1.1]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </a>
      </div>
    </div>
  );
};

export default PlayCard;
