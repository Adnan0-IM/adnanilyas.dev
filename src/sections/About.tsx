import AboutSheet from "@/components/about/AboutSheet";
import { motion } from "motion/react";

const About = () => {
  return (
    <section id="about" className="pt-8 sm:pt-16">
      <div className="container px-4 md:px-16 lg:px-32 xl:px-64 mx-auto">
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center gap-3"
          >
            <span className="h-6 w-1 rounded-sm bg-primary"></span>
            <h2 className="text-2xl md:text-3xl">About</h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-lg md:text-xl text-muted-foreground">
                How I build software
              </h3>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1,
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="md:col-span-3"
            >
              <div className="space-y-4 relative text-justify text-foreground leading-relaxed text-base">
                <p>
                  I approach software development by first understanding the
                  problem, not just the tools. I like breaking ideas down into
                  clear steps, thinking through how users will interact with a
                  system, and then building solutions that are simple,
                  structured, and easy to maintain.
                  <AboutSheet />
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
