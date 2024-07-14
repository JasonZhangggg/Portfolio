interface Props {
  title: string;
  description: string;
  image: string;
}

const PlayCard = ({ title, description, image }: Props) => {
  return (
    <div className="flex flex-col gap-8 group hover:cursor-pointer">
      <h2 className="text-3xl font-extrabold mt-4 flex items-center gap-4 ">
        {title}
      </h2>
      <div className="flex flex-col gap-8 bg-lighter-gray p-8 rounded-xl overflow-hidden">
        <img
          src={image}
          alt="Project Image"
          className="flex-1 duration-300 transform group-hover:scale-[1.1]"
        />
      </div>
    </div>
  );
};

export default PlayCard;
