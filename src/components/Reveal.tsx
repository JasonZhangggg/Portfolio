import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  children: React.ReactNode;
  dir: string;
  delay?: number;
  once?: boolean;
}

export const Reveal = ({ children, dir, delay = 0, once = false }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: once });

  const controls = useAnimation();

  useEffect(() => {
    controls.start((inView ? "visible-" : "hidden-") + dir);
  }, [inView, controls, dir]);

  return (
    <div ref={ref}>
      <motion.div
        variants={{
          "hidden-y": { opacity: 0, y: 75 },
          "visible-y": { opacity: 1, y: 0 },
          "hidden-x": { opacity: 0, x: -75 },
          "visible-x": { opacity: 1, x: 0 },
        }}
        initial={"hidden-" + dir}
        animate={controls}
        transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index}>{child}</div>
        ))}
      </motion.div>
    </div>
  );
};
