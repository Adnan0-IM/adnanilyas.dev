import { motion } from "motion/react";
const Experience = () => {
  return (
    <motion.ul
      key={"experience"}
      layout
      initial={false}
      className="border-l ml-6 md:ml-10 list-none flex flex-col gap-6"
    >
      <li className="relative pl-8 md:pl-10">
        <a
          href="https://shamrockinnovations.com.ng"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-0 top-6 -translate-x-1/2"
        >
          <img
            className="size-10 md:size-12 rounded-full bg-white object-contain cursor-pointer shadow-sm ring-2 ring-muted-foreground/30"
            src="/shamrock-logo.png"
            alt="Shamrock logo"
          />
        </a>
        <div className="bg-background flex flex-col gap-2 p-4 rounded-md">
          <div>
            <h5 className="text-xs text-muted-foreground">
              July 2025 – December 2025
            </h5>
            <h3 className="text-foreground text-base font-medium">
              Shamrock Innovations Hub — Kano, Nigeria
            </h3>
            <h4 className="text-sm text-muted-foreground">
              Junior Full-Stack Developer (Intern)
            </h4>
          </div>
          <ul className="list-disc text-sm pl-6 md:pl-8">
            <li>
              Built and deployed production-ready web applications using React,
              TypeScript, Node.js, and Express in a startup environment.
            </li>
            <li>
              Contributed to the Finance-Teque Investment Platform, working
              across UI design, backend integration, and deployment.
            </li>
            <li>
              Designed and implemented a Business Analytics Dashboard with KPIs,
              sales and expense tracking, and CSV/PDF report exports.
            </li>
            <li>
              Worked with MongoDB and PostgreSQL for data persistence and
              modeling.
            </li>
            <li>
              Containerized applications using Docker and participated in
              CI/CD-based deployments.
            </li>
          </ul>
        </div>
      </li>

      <li className="relative pl-10">
        <a href="#" className="absolute left-0 top-6 -translate-x-1/2">
          <img
            className="size-12 rounded-full object-cover cursor-pointer shadow-sm ring-2 ring-muted-foreground/30"
            src="/startup-jigawa-logo.jpg"
            alt="Startup Jigawa logo"
          />
        </a>
        <div className="bg-background flex flex-col gap-2 p-4 rounded-md">
          <div>
            <h5 className="text-muted-foreground text-xs">2025</h5>
            <h3 className="text-foreground text-base font-medium">
              Startup Jigawa
            </h3>
            <h4 className="text-muted-foreground text-sm">
              Hands-On Software Development Bootcamp
            </h4>
          </div>
          <ul className="list-disc text-sm  pl-6 md:pl-8">
            <li>Built a portfolio website using HTML, CSS, and JavaScript</li>
            <li>Collaborated on functional, user-friendly projects</li>
            <li>Gained experience in cloud hosting and deployment</li>
          </ul>
        </div>
      </li>

      <li className="relative pl-10">
        <a
          href="https://frontendmentor.io"
          className="absolute left-0 top-6 -translate-x-1/2"
        >
          <img
            className="size-12 rounded-full bg-white object-cover cursor-pointer shadow-sm ring-2 ring-muted-foreground/30"
            src="/frontend-mentor-logo.svg"
            alt="Frontend Mentor logo"
          />
        </a>
        <div className="bg-background flex flex-col gap-2 p-4 rounded-md">
          <div>
            <h5 className="text-muted-foreground text-xs">2022</h5>
            <h3 className="text-foreground text-base font-medium">
              Front-End Mentor
            </h3>
            <h4 className="text-muted-foreground text-sm">Personal Projects</h4>
          </div>
          <ul className="list-disc text-sm  pl-6 md:pl-8">
            <li>Developed web apps using ReactJS and Tailwind CSS</li>
            <li>Maintained projects on GitHub</li>
            <li>Built responsive and scalable interfaces</li>
            <li>Used Tailwind CSS for clean, consistent UI</li>
          </ul>
        </div>
      </li>
    </motion.ul>
  );
};

export default Experience;
