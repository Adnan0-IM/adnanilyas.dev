import { motion, useScroll, useSpring, useReducedMotion } from "motion/react";

const ReadingProgress = () => {
  const { scrollYProgress } = useScroll();
  const prefersReduced = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.15,
  });

  if (prefersReduced) return null;

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed top-0 left-0 right-0 h-1 bg-primary/70 z-50"
    />
  );
};

export default ReadingProgress;
