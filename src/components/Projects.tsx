import ProjectCard from "./ProjectCard";
import Admin1 from "../assets/Projects/Admin1.png";
import { Reveal } from "./Reveal";

const Projects = () => {
  return (
    <div className="flex justify-center py-12 px-24" id="Projects">
      <div className="mt-8 flex 2xl:w-[1536px] justify-center gap-28">
        <div className="sticky top-12 self-start text-8xl font-extrabold tracking-tighter flex-initial w-fit text-right">
          <Reveal dir="x">
            <h1 className="text-[20rem] text-light-gray">01</h1>
            <div className="-mt-32">
              <h1>Featured</h1>
              <h1>Projects.</h1>
            </div>
          </Reveal>
        </div>
        <div className="flex flex-col gap-28">
          <Reveal dir="y" delay={0.25}>
            <ProjectCard
              title="Admin Dashboard"
              description="Web application that streamlines the collection, collation, and analysis
              of audience evaluations for student presentations, providing efficient
              feedback mechanisms for grading and peer insights."
              image={Admin1}
            />
          </Reveal>
          <Reveal dir="y">
            <ProjectCard
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

export default Projects;
