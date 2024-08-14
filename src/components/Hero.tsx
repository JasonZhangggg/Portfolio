import { Reveal } from "./Reveal";

const Hero = () => {
  return (
    <div className="px-[16svw]" id="About">
      <div className="h-screen bg-white">
        <div className="w-full mt-4">
          <Reveal dir="x" once={true}>
            <h1 className="text-[18vw] font-extrabold text-light-gray leading-none">
              Hello!
            </h1>
          </Reveal>
          <Reveal dir="y" delay={0.75} once={true}>
            <div className="ml-3 -mt-32 text-[10vw] tracking-tight font-extrabold text-black leading-none">
              <h1>I'm Jason</h1>
            </div>
          </Reveal>
          <Reveal dir="y" delay={1.25} once={true}>
            <hr className="ml-6 my-16 border-b-[1.2px] border-gray-600 w-[15vw]" />
            <p className="ml-6 text-[2vw] w-1/2 font-light text-gray-600">
              A <span className="font-semibold">software engineer</span> with a
              focus on web and machine learning
            </p>
          </Reveal>
          <div className="flex justify-center mt-12">
            <span className="material-symbols-outlined text-6xl ml-[5vw] animate-bounce">
              keyboard_arrow_down
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
