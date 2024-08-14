import ProjectCard from "./ProjectCard";
import Admin1 from "../assets/Projects/Admin1.png";
import Calculator from "../assets/Playground/Calculator.png";
import EtchASketch from "../assets/Playground/EtchASketch.png";
import GameOfSet from "../assets/Playground/GameOfSet.png";
import TicTacToe from "../assets/Playground/TicTacToe.png";
import MemoryGame from "../assets/Playground/MemoryGame.png";
import CVApplication from "../assets/Playground/CVApplication.png";

import { Reveal } from "./Reveal";
import PlayCard from "./PlayCard";
import ScrollTitle from "./ScrollTitle";
import { useRef } from "react";

const Projects = () => {
  const targetRef = useRef(null);

  return (
    <div className="flex justify-center py-12 px-24" id="Projects">
      <div className="mt-8 flex 2xl:w-[1536px] justify-center gap-28">
        <div className="sticky top-20 self-start text-8xl font-extrabold tracking-tighter flex-initial w-fit text-right">
          <Reveal dir="x">
            {/* <h1 className="text-[20rem] text-light-gray leading-[12rem]">01</h1> */}
            <ScrollTitle targetRef={targetRef} />
          </Reveal>
        </div>
        <div>
          <div className="flex flex-col gap-28 mb-24">
            <Reveal dir="y" delay={0.25}>
              <ProjectCard
                title="Admin Dashboard"
                description="Web application that streamlines the collection, collation, and analysis
              of audience evaluations for student presentations, providing efficient
              feedback mechanisms for grading and peer insights."
                image={Admin1}
                link="https://mysite-io31.onrender.com/"
                apps={["Ruby on Rails", "SQLite"]}
              />
            </Reveal>
            <Reveal dir="y">
              <ProjectCard
                title="Admin Dashboard"
                description="Web application that streamlines the collection, collation, and analysis
              of audience evaluations for student presentations, providing efficient
              feedback mechanisms for grading and peer insights."
                image={Admin1}
                link="https://mysite-io31.onrender.com/"
                apps={["Ruby on Rails", "SQLite"]}
              />
            </Reveal>
          </div>
          <div id="Play"></div>
          <Reveal dir="y">
            <div className="flex flex-col gap-12">
              <Reveal dir="y">
                <div className="flex gap-12">
                  <PlayCard
                    title="Game of Set"
                    image={GameOfSet}
                    link="https://jasonzhangggg.github.io/Set/"
                    apps={["HTML", "CSS", "JavaScript"]}
                  />
                  <PlayCard
                    title="CV Application"
                    image={CVApplication}
                    link="https://jasonzhangggg.github.io/Resume-Maker/"
                    apps={["React", "Pico CSS"]}
                  />
                </div>
              </Reveal>
              <Reveal dir="y">
                <div className="flex gap-12" ref={targetRef}>
                  <PlayCard
                    title="Tic-Tac-Toe"
                    image={TicTacToe}
                    link="https://jasonzhangggg.github.io/TicTacToe-Web/"
                    apps={["HTML", "CSS", "JavaScript"]}
                  />
                  <PlayCard
                    title="Memory Game"
                    image={MemoryGame}
                    link="https://jasonzhangggg.github.io/Memory-Game/"
                    apps={["React", "Tailwind", "PokéAPI"]}
                  />
                </div>
              </Reveal>
              <Reveal dir="y">
                <div className="flex gap-12">
                  <PlayCard
                    title="Calculator"
                    image={Calculator}
                    link="https://jasonzhangggg.github.io/Calculator/"
                    apps={["HTML", "CSS", "JavaScript"]}
                  />
                  <PlayCard
                    title="Etch-A-Sketch"
                    image={EtchASketch}
                    link="https://jasonzhangggg.github.io/EtchASketch/"
                    apps={["HTML", "CSS", "JavaScript"]}
                  />
                </div>
              </Reveal>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Projects;
