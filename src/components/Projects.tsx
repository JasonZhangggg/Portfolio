import ProjectCard from "./ProjectCard";
import Admin1 from "../assets/Projects/Admin1.png";
import Colorize from "../assets/Projects/Gray2Color.png";
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
    <div className="flex justify-center py-8 sm:py-12 px-4 sm:px-8 md:px-16 lg:px-24" id="Projects">
      <div className="mt-4 sm:mt-8 flex flex-col lg:flex-row 2xl:w-[1536px] justify-center gap-8 lg:gap-28">
      <div className="hidden lg:block lg:sticky lg:top-20 self-start font-extrabold tracking-tighter w-full lg:w-fit text-left lg:text-right">
      <Reveal dir="x">
            <ScrollTitle targetRef={targetRef} />
          </Reveal>
        </div>
        <div className="w-full lg:w-auto">
          {/* Mobile: 01 Featured Projects title */}
          <div className="block lg:hidden mb-6">
            <ScrollTitle
              targetRef={{ current: null }}
              forceContent={{ number: "01", text: "Featured Projects." }}
            />
          </div>
          <div className="flex flex-col gap-16 sm:gap-28 mb-16 sm:mb-24">
            <Reveal dir="y">
              <ProjectCard
                title="Black and White Image Colorization"
                image={Colorize}
                link="https://huggingface.co/spaces/Jasonzhangggg/Gray2Color"
                apps={["PyTorch", "Hugging Face", "Colab"]}
              >
                <p>
                  Built a generative adversarial network utilizing a U-Net with
                  a ResNet backbone as the generator to achieve realistic
                  colorization of grayscale images. Pretrained generator,
                  accelerating convergence and improving initial colorization
                  quality. Deployed model on Hugging Face Spaces.
                </p>
                <a
                  href="https://colab.research.google.com/drive/1XSbTB-c6jVikcu5BIpKcwsSzPRlseBEa?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline"
                >
                  View Colab Notebook
                </a>
              </ProjectCard>
            </Reveal>
            <Reveal dir="y">
              <ProjectCard
                title="Admin Dashboard"
                image={Admin1}
                link="https://mysite-io31.onrender.com/"
                apps={["Ruby on Rails", "SQLite"]}
              >
                <p>
                  Web application that streamlines the collection, collation,
                  and analysis of audience evaluations for student
                  presentations, providing efficient feedback mechanisms for
                  grading and peer insights.
                </p>
                <span className="text-red-600 font-medium">
                  Note: Page will take about 1 min to start
                </span>
              </ProjectCard>
            </Reveal>
          </div>
          <div ref={targetRef} className="w-full" id="Play">
            <div className="block lg:hidden mb-6">
              <ScrollTitle
                targetRef={{ current: null }}
                forceContent={{ number: "02", text: "Sandbox." }}
              />
            </div>
            <Reveal dir="y">
              <div className="flex flex-col gap-8 sm:gap-12">
                <Reveal dir="y">
                  <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
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
                  <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
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
                  <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
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
    </div>
  );
};

export default Projects;