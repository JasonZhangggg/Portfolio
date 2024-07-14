import PlayCard from "./PlayCard";
import Admin1 from "../assets/Projects/Admin1.png";
import { Reveal } from "./Reveal";

const Play = () => {
  return (
    <div className="flex justify-center py-12 mt-12 px-24" id="Projects">
      <div className="mt-8 flex 2xl:w-[1536px] justify-center gap-28">
        <div className="sticky top-12 self-start text-8xl font-extrabold tracking-tighter flex-initial w-fit text-right">
          <Reveal dir="x">
            <h1 className="text-[20rem] text-light-gray">02</h1>
            <div className="-mt-32">
              <h1>Play.</h1>
            </div>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <Reveal dir="y" delay={0.25}>
            <PlayCard
              title="Admin Dashboard"
              description="Web application that streamlines the collection, collation, and analysis
              of audience evaluations for student presentations, providing efficient
              feedback mechanisms for grading and peer insights."
              image={Admin1}
            />
          </Reveal>
          <Reveal dir="y">
            <PlayCard
              title="Admin Dashboard"
              description="Web application that streamlines the collection, collation, and analysis
              of audience evaluations for student presentations, providing efficient
              feedback mechanisms for grading and peer insights."
              image={Admin1}
            />
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Play;
