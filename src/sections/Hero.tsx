import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import { useRef } from "react";

const Hero = () => {
  // container and child variants
  const container = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
  };

  const imgContainerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: imgContainerRef,
    offset: ["start end", "end start"], // parallax as section enters/leaves
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [-16, 16]);

  return (
    <section id="home">
      <div className="container px-4 md:px-16 lg:px-32 xl:px-64 pt-24 mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-18">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex-col flex gap-4"
          >
            <motion.h1
              variants={item}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.05,
              }}
              className="text-2xl md:text-4xl"
            >
              Hey! I'm Adnan Iliyasu
            </motion.h1>

            <motion.p
              variants={item}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.17,
              }}
              className="text-lg"
            >
             Full-Stack Developer based in Kano, Nigeria
            </motion.p>

            <motion.p
              variants={item}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.29,
              }}
              className="text-lg"
            >
              I'm in my final year pursuing a Computer Science degree. I've
              built production apps and shipped websites viewed by international
              organizations.
            </motion.p>

            <motion.div
              variants={item}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.41,
              }}
              className="flex gap-4 mt-4 items-center"
            >
              <a target="_blank" href="/resume.pdf">
                <Button className="hover:text-white  hover:scale-105 cursor-pointer">
                  Resume <Download />
                </Button>
              </a>
              <a
                target="_blank"
                href="https://github.com/Adnan0-IM"
                className="cursor-pointer hover:scale-105 inline-block"
              >
                <Github />
              </a>
              <a
                target="_blank"
                href="https://linkedin.com/in/adnan-iliyasu-muhammad-90961028a"
                className="cursor-pointer hover:scale-105 inline-block"
              >
                <Linkedin />
              </a>
              <a
                target="_blank"
                href="mailto:adnanilyas969@gmail.com"
                className="cursor-pointer hover:scale-105 inline-block"
              >
                <Mail />
              </a>
            </motion.div>
          </motion.div>

          <div ref={imgContainerRef}>
            <motion.img
              style={{ y: prefersReduced ? undefined : yParallax }}
              whileHover={!prefersReduced ? { scale: 1.04 } : undefined}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="rounded-md hidden md:block will-change-transform"
              src={"/adnan-u.png"}
              alt="Adnan picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
