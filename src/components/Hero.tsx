import { Reveal } from "./Reveal";

const Hero = () => {
  return (
    <div className="px-4 sm:px-8 md:px-[8vw] lg:px-[16vw]" id="About">
      <div className="bg-white">
        <div className="w-full mt-4">
          <Reveal dir="x" once={true}>
            <h1 className="text-8xl sm:text-7xl md:text-[10vw] lg:text-[14vw] font-extrabold text-light-gray leading-none">
              Hello!
            </h1>
          </Reveal>
          <Reveal dir="y" delay={0.75} once={true}>
            <div className="ml-2 sm:ml-3 -mt-12 sm:-mt-8 md:-mt-[5vw] lg:-mt-[7.5vw] text-7xl sm:text-5xl md:text-[6vw] lg:text-[8vw] tracking-tight font-extrabold text-black leading-none">
              <h1>I'm Jason</h1>
            </div>
          </Reveal>
          <Reveal dir="y" delay={1.25} once={true}>
            <hr className="ml-4 sm:ml-6 my-8 sm:my-12 md:my-16 border-b-[1.2px] border-gray-600 w-32 sm:w-48 md:w-[15vw]" />
            <p className="ml-4 sm:ml-6 text-lg sm:text-xl md:text-[1.5vw] w-full sm:w-3/4 md:w-1/2 font-light text-gray-600">
              A <span className="font-semibold">software engineer</span> with a
              focus on web and machine learning
            </p>
          </Reveal>
          <div className="flex justify-center mt-8 sm:mt-12">
            <a
              href="#Projects"
              className="material-symbols-outlined text-5xl sm:text-6xl md:text-7xl pb-12 sm:pb-16 md:pb-20 ml-0 sm:ml-[2vw] md:ml-[5vw] animate-bounce"
            >
              keyboard_arrow_down
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;