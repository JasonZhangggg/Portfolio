import { useEffect, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const ScrollTitle = ({
  targetRef,
  forceContent,
}: {
  targetRef: React.RefObject<HTMLDivElement>;
  forceContent?: { number: string; text: string };
}) => {
  const [content, setContent] = useState({
    number: "01",
    text: "Featured Projects.",
  });

  const isInView = useInView(targetRef, { margin: "-30% 0px -60% 0px" });

  useEffect(() => {
    if (forceContent) {
      setContent(forceContent);
    } else if (isInView) {
      setContent({ number: "02", text: "Sandbox." });
    } else {
      setContent({ number: "01", text: "Featured Projects." });
    }
  }, [isInView, forceContent]);

  const variants = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  };

  return (
    <div className="text-left lg:text-right w-full">
      <div className="w-full min-w-[12rem] sm:min-w-[16rem] md:min-w-[20rem] lg:min-w-[24rem]">
        <AnimatePresence mode="wait">
          <motion.h1
            key={content.number}
            className="text-9xl sm:text-[11rem] md:text-[14rem] lg:text-[20rem] text-light-gray leading-[0.7] font-black break-words transition-all duration-300"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.25 }}
          >
            {content.number}
          </motion.h1>
        </AnimatePresence>
      </div>
      <div className="-mt-6 sm:-mt-10 md:-mt-16 lg:-mt-24 min-w-[12rem] sm:min-w-[16rem] md:min-w-[20rem] lg:min-w-[24rem]">
        <AnimatePresence mode="wait">
          <motion.h1
            key={content.text}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-black transition-all duration-300"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.25 }}
          >
            {content.text}
          </motion.h1>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ScrollTitle;