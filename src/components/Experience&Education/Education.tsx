import { Award } from "lucide-react";
import { motion } from "motion/react";

const Education = () => {
  return (
    <motion.ul
      key={"education"}
      layout
      initial={false}
      className="border-l ml-6 md:ml-10 list-none flex flex-col gap-6"
    >
      <li className="relative pl-8 md:pl-10">
        <a
          href="https://fud.edu.ng"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-0 top-6 -translate-x-1/2"
        >
          <img
            className="size-10 md:size-12 rounded-full bg-white object-contain cursor-pointer shadow-sm ring-2 ring-muted-foreground/30"
            src="/fud.png"
            alt="Federal University Dutse logo"
          />
        </a>
        <div className="bg-background flex flex-col gap-2 p-4 rounded-md">
          <div>
            <h5 className="text-sm text-muted-foreground">
              In View — Expected 2026
            </h5>
            <h3 className="text-foreground text-base font-medium">
              B.Sc. Computer Science — Federal University Dutse, Nigeria
            </h3>
          </div>
          <ul className="list-disc text-sm  pl-6 md:pl-8">
            <li>GPA: 4.39</li>
            <li>Honors: Top Scorer Award</li>
            <li>Relevant Coursework: System Analysis and Design</li>
          </ul>
        </div>
      </li>

      <li className="relative pl-10">
        <a href="#" className="absolute left-0 top-6 -translate-x-1/2">
          <img
            className="size-12 rounded-full bg-white object-cover cursor-pointer shadow-sm ring-2 ring-muted-foreground/30"
            src="/iman-sec.jpeg"
            alt="Iman Secondary School logo"
          />
        </a>
        <div className="bg-background flex flex-col gap-2 p-4 rounded-md">
          <div>
            <h5 className="text-sm text-muted-foreground">2016 – 2021</h5>
            <h3 className="text-foreground text-base font-medium">
              Iman Secondary School, Sharada Kano
            </h3>
            <h4 className="text-sm text-muted-foreground">
              Secondary Certificate
            </h4>
          </div>
        </div>
      </li>

      <li className="relative pl-10">
        <div className="absolute left-0 top-6 -translate-x-1/2">
          <span className="size-12 grid place-items-center rounded-full bg-primary/60 text-foreground shadow-sm ring-2 ring-muted-foreground/30">
            <Award className="size-6" aria-hidden="true" />
            <span className="sr-only">Certifications</span>
          </span>
        </div>
        <div className="bg-background flex flex-col gap-2 p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h3 className="text-foreground text-base font-medium">
              Certifications
            </h3>
            <span className="text-xs rounded-full bg-muted px-2 py-1">
              3 total
            </span>
          </div>
          <p className="text-sm text-muted-foreground">Selected credentials</p>

          <div className="mt-2 space-y-3">
            {/* Full-Stack certificate */}
            <a
              href="/certificates/fullstack-web-developer.pdf"
              className="block group"
            >
              <div className="flex items-start gap-3 rounded-md p-3 border border-muted-foreground/10 hover:border-muted-foreground/20 hover:bg-muted/10 transition">
                <img
                  className="size-8 rounded bg-white object-contain shadow-sm ring-1 ring-muted-foreground/20"
                  src="/shamrock-logo.png"
                  alt="Certificate icon"
                />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-medium text-foreground">
                      Full‑Stack Web Developer Certificate
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Shamrock Innovations
                    </span>
                    <span className="text-xs rounded-full bg-muted px-2 py-0.5">
                      2025
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    JavaScript • React • Node.js • Databases
                  </p>
                </div>
              </div>
            </a>
            <a href="/certificates/blockchain-developer.pdf">
              <div className="flex items-start gap-3 rounded-md p-3 border border-muted-foreground/10 hover:border-muted-foreground/20 hover:bg-muted/10 transition">
                <img
                  className="size-8 rounded bg-sky-700 shadow-sm ring-1 ring-muted-foreground/20"
                  src="/simplilearn.svg"
                  alt="Certificate icon"
                />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-medium text-foreground">
                      Blockchain Developer Certificate
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Simplilearn
                    </span>
                    <span className="text-xs rounded-full bg-muted px-2 py-0.5">
                      Sep 2023
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Smart contracts • DApps • Networks
                  </p>
                </div>
              </div>
            </a>
            <a href="/certificates/blockchain-professional.pdf">
              <div className="flex items-start gap-3 rounded-md p-3 border border-muted-foreground/10 hover:border-muted-foreground/20 hover:bg-muted/10 transition">
                <img
                  className="size-8 rounded bg-white shadow-sm ring-1 ring-muted-foreground/20"
                  src="/bsv.svg"
                  alt="Certificate icon"
                />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-medium text-foreground">
                      Blockchain Professional Certificate
                    </span>
                    <span className="text-xs text-muted-foreground">
                      BSV Blockchain Association
                    </span>
                    <span className="text-xs rounded-full bg-muted px-2 py-0.5">
                      Jul 2023
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Protocol • Security • Ecosystem
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </li>
    </motion.ul>
  );
};

export default Education;
