import prismad from "@/assets/prisma-d.svg";
import gitd from "@/assets/git-d.svg";
import figmad from "@/assets/figma-d.svg";
import html5d from "@/assets/html5-d.svg";
import css3d from "@/assets/css3-d.svg";
import linuxd from "@/assets/linux-d.svg";
import neovimd from "@/assets/neovim-d.svg";
import dockerd from "@/assets/docker-d.svg";
import archLinuxd from "@/assets/arch-linux-d.svg";
import verceld from "@/assets/vercel-d.svg";
import eslintd from "@/assets/eslint-d.svg";
import prettierd from "@/assets/prettier-d.svg";
import jestd from "@/assets/jest-d.svg";
import bashd from "@/assets/bash-d.svg";
import postmand from "@/assets/postman-d.svg";
import nginxd from "@/assets/nginx-d.svg";
import vimd from "@/assets/vim-d.svg";
import prisma from "@/assets/prisma.svg";
import git from "@/assets/git.svg";
import figma from "@/assets/figma.svg";
import html5 from "@/assets/html5.svg";
import css3 from "@/assets/css3.svg";
import linux from "@/assets/linux.svg";
import neovim from "@/assets/neovim.svg";
import docker from "@/assets/docker.svg";
import archLinux from "@/assets/arch-linux.svg";
import eslint from "@/assets/eslint.svg";
import prettier from "@/assets/prettier.svg";
import jest from "@/assets/jest.svg";
import bash from "@/assets/terminal.svg";
import tmux from "@/assets/tmux-d.svg";
import postman from "@/assets/postman.svg";
import nginx from "@/assets/nginx.svg";
import vim from "@/assets/vim.svg";
import { motion } from "motion/react";
import { useTheme } from "../theme-provider";

export const RightToLeft = () => {
  let items = [
    prisma,
    git,
    html5,
    archLinux,
    docker,
    linux,
    neovim,
    eslint,
    prettier,
    jest,
    css3,
    bash,
    postman,
    vim,
    nginx,
    figma,
  ];
  const itemsDark = [
    prismad,
    gitd,
    html5d,
    archLinuxd,
    dockerd,
    linuxd,
    neovimd,
    eslintd,
    prettierd,
    jestd,
    bashd,
    verceld,
    tmux,
    css3d,
    postmand,
    vimd,
    nginxd,
    figmad,
  ];

  items = useTheme().theme === "light" ? itemsDark : items;
  return (
    <div className="flex mt-4 flex-col gap-2 items-center justify-center py-6">
      <h3 className="text-2xl font-medium">Some Helpers</h3>
      <div className="relative mx-auto max-w-[350px] sm:max-w-[510px] md:max-w-[600px]  lg:max-w-[770px] overflow-hidden py-6 ">
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {items.concat(items).map((item, idx) => (
            <motion.div
              whileHover={{ scale: 1.3, y: -10 }}
              key={`${item}-${idx}`}
              className="shrink-0 bg-muted text-foreground border border-border/40 hover:bg-muted/30 p-2 rounded-md"
            >
              <img
                decoding="async"
                loading="lazy"
                className="size-8  dark:brightness-110"
                src={item}
                alt="skills logo"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// const TechStack = () => {
//   const stacks = [
//     { name: "React", icon: react, description: "UI Library", mask: true },
//     { name: "Node.js", icon: nodejs, description: "JavaScript runtime", mask: true },
//     { name: "TypeScript", icon: typescript, description: "Type-safe JavaScript", mask: false },
//     { name: "MongoDB", icon: mongodb, description: "NoSQL database", mask: false },
//     { name: "PostgreSQL", icon: postgresql, description: "Relational database", mask: false },
//     { name: "Tailwind CSS", icon: tailwind, description: "CSS framework", mask: true },
//   ];
//   return (
//     <div className="container px-4 md:px-16 py-16  lg:px-64 mx-auto">
//       <div className="max-w-[600px] flex flex-col gap-4 items-center justify-center mx-auto">
//         <h2 className="text-2xl font-medium">My Tech Stack</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 mx-auto gap-3 md:gap-4">
//           {stacks.map((stack) => (
//             <motion.div
//               key={stack.name}
//               whileHover={{ scale: 1.05, y: -6 }}
//               className="group flex items-center justify-center gap-3 bg-muted text-foreground border border-border/10 ring-1 ring-border/5 hover:bg-muted/40 hover:border-border/20 p-2 rounded-md transition-all"
//             >
//               {stack.mask ? (
//                 <ThemedIcon
//                   src={stack.icon}
//                   className="h-8 w-8 bg-foreground dark:bg-muted-foreground group-hover:bg-foreground"
//                 />
//               ) : (
//                 <img className="h-8 w-8 dark:brightness-110" src={stack.icon} alt={stack.name} />
//               )}
//               <span className="text-sm text-muted-foreground">{stack.description}</span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//       <div className="flex mt-4 flex-col gap-6 items-center justify-center py-2">
//         <h3 className="text-2xl font-medium">Some Helpers</h3>
//         <RightToLeft />
//       </div>
//     </div>
//   );
// };

// const RightToLeft = () => {
//   const items = [
//     { src: prisma, mask: true },
//     { src: git, mask: true },
//     { src: figma, mask: false },
//     { src: html5, mask: false },
//     { src: css3, mask: false },
//     { src: archLinux, mask: true },
//     { src: docker, mask: true },
//     { src: linux, mask: true },
//     { src: neovim, mask: true },
//     { src: eslint, mask: false },
//     { src: prettier, mask: false },
//     { src: jest, mask: false },
//     { src: bash, mask: false },
//     { src: vercel, mask: true },
//     { src: tmux, mask: true },
//     { src: postman, mask: false },
//   ];

//   return (
//     <div className="relative mx-auto max-w-[800px] overflow-hidden py-4 ">
//       <motion.div
//         className="flex gap-4 w-max"
//         animate={{ x: ["0%", "-50%"] }}
//         transition={{ duration: 40, ease: "linear", repeat: Infinity }}
//       >
//         {items.concat(items).map((item, idx) => (
//           <motion.div
//             whileHover={{ scale: 1.3, y: -10 }}
//             key={`${item.src}-${idx}`}
//             className="group shrink-0 bg-muted text-foreground border border-border/10 ring-1 ring-border/5 hover:bg-muted/40 hover:border-border/20 p-2 rounded-md transition-all"
//           >
//             {item.mask ? (
//               <ThemedIcon
//                 src={item.src}
//                 className="size-8 bg-foreground dark:bg-muted-foreground group-hover:bg-foreground"
//               />
//             ) : (
//               <img className="size-8 dark:brightness-110" src={item.src} alt="" />
//             )}
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// }
// ...existing code...
