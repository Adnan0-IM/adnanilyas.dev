import ProjectCard from "@/components/projects/ProjectCard";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="container mx-auto px-4 md:px-16 lg:px-32 xl:px-64 pt-8 sm:pt-16"
    >
      <div className="flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center gap-3"
        >
          <span className="h-6 w-1 rounded-sm bg-primary"></span>
          <h2 className="text-2xl md:text-3xl">Projects</h2>
        </motion.div>

        <h3 className="text-lg mb-6 md:text-xl text-muted-foreground">
          Selected work and deployments.
        </h3>
      </div>
      <ProjectCard />
    </section>
  );
};

export default Projects;
