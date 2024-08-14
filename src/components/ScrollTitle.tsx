import { useEffect, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const ScrollTitle = ({
  targetRef,
}: {
  targetRef: React.RefObject<HTMLDivElement>;
}) => {
  const [content, setContent] = useState({
    number: "01",
    text: "Featured Projects.",
  });

  const isInView = useInView(targetRef);

  useEffect(() => {
    if (isInView) {
      setContent({ number: "02", text: "Play" });
    } else {
      setContent({ number: "01", text: "Featured Projects." });
    }
  }, [isInView]);

  const variants = {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.h1
          key={content.number}
          className="text-[20rem] text-light-gray leading-[12rem]"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.25 }}
        >
          {content.number}
        </motion.h1>
      </AnimatePresence>
      <div className="-mt-20">
        <AnimatePresence mode="wait">
          <motion.h1
            key={content.text}
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
