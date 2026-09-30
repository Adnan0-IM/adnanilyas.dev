import react from "@/assets/tech-stack/react.svg";
import nodejs from "@/assets/tech-stack/nodejs.svg";
import typescript from "@/assets/tech-stack/typescript.svg";
import tailwind from "@/assets/tech-stack/tailwind.svg";
import mongodb from "@/assets/tech-stack/mongodb.svg";
import postgresql from "@/assets/tech-stack/postgresql.svg";
import reactd from "@/assets/tech-stack/react-d.svg";
import nodejsd from "@/assets/tech-stack/nodejs-d.svg";
import typescriptd from "@/assets/tech-stack/typescript-d.svg";
import tailwindd from "@/assets/tech-stack/tailwind-d.svg";
import mongodbd from "@/assets/tech-stack/mongodb-d.svg";
import postgresqld from "@/assets/tech-stack/postgresql-d.svg";

import { motion } from "motion/react";
import { useTheme } from "../components/theme-provider";
import { RightToLeft } from "../components/stack/RightToLeft";

const TechStack = () => {
  const { theme } = useTheme();
  let stacks = [
    { name: "React", icon: react, description: "UI Library" },
    { name: "Node.js", icon: nodejs, description: "JavaScript runtime" },
    {
      name: "TypeScript",
      icon: typescript,
      description: "Type-safe JavaScript",
    },
    { name: "MongoDB", icon: mongodb, description: "NoSQL database" },
    {
      name: "PostgreSQL",
      icon: postgresql,
      description: "Relational database",
    },
    { name: "Tailwind CSS", icon: tailwind, description: "CSS framework" },
  ];
  const stacksDark = [
    { name: "React", icon: reactd, description: "UI Library" },
    { name: "Node.js", icon: nodejsd, description: "JavaScript runtime" },
    {
      name: "TypeScript",
      icon: typescriptd,
      description: "Type-safe JavaScript",
    },
    { name: "MongoDB", icon: mongodbd, description: "NoSQL database" },
    {
      name: "PostgreSQL",
      icon: postgresqld,
      description: "Relational database",
    },
    { name: "Tailwind CSS", icon: tailwindd, description: "CSS framework" },
  ];
  stacks = theme === "light" ? stacksDark : stacks;
  return (
    <div className="container px-4 md:px-16 pt-12 sm:pt-20 lg:px-24 mx-auto">
      <div className="max-w-[600px] flex flex-col gap-4 items-center justify-center mx-auto">
        <h2 className="text-2xl font-medium">My Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 mx-auto gap-3 md:gap-4">
          {stacks.map((stack) => (
            <motion.div
              key={stack.name}
              whileHover={{ scale: 1.05, y: -6 }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: 0.1,
                duration: 0.5,
              }}
              className="flex items-center justify-center gap-3 bg-muted text-foreground border border-border/40 hover:bg-muted/30 p-2 rounded-md"
            >
              <img
                className="h-8 w-8 dark:brightness-110"
                src={stack.icon}
                loading="lazy"
                alt={stack.name}
              />
              <span className="text-sm text-muted-foreground">
                {stack.description}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      <RightToLeft />
    </div>
  );
};

export default TechStack;
