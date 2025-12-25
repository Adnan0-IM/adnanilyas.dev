import Education from "@/components/Experience&Education/Education";
import Experience from "@/components/Experience&Education/Experience";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "motion/react";
import { useState } from "react";

const ExperienceEducation = () => {
  const [tab, setTab] = useState<"experience" | "education">("experience");

  return (
    <section id="experience">
      <div className="container mx-auto px-4 md:px-16 lg:px-32 xl:px-64 pt-8 sm:pt-16">
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center gap-3"
          >
            <span className="h-6 w-1 rounded-sm bg-primary"></span>
            <h2 className="text-2xl md:text-3xl">Experience & Education</h2>
          </motion.div>
          <h3 className="text-lg md:text-xl text-muted-foreground">
            {tab === "experience"
              ? "My Work Experience"
              : "My Educations & Certifications"}
          </h3>
          <div>
            <Tabs value={tab} onValueChange={(v) => setTab(v as typeof tab)}>
              <TabsList className="w-full grid grid-cols-2">
                <TabsTrigger className="cursor-pointer" value="experience">
                  Experience
                </TabsTrigger>
                <TabsTrigger className="cursor-pointer" value="education">
                  Education
                </TabsTrigger>
              </TabsList>

              {/* Sliding content area */}
              <div className="relative mt-2 overflow-hidden border border-border rounded-md">
                <motion.div
                  className="flex w-[200%] will-change-transform"
                  animate={{ x: tab === "experience" ? "0%" : "-50%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <div className="w-1/2 shrink-0 p-4">
                    <TabsContent
                      value="experience"
                      forceMount
                      className="min-w-full"
                    >
                      <Experience />
                    </TabsContent>
                  </div>
                  <div className="w-1/2 shrink-0 p-4">
                    <TabsContent
                      value="education"
                      forceMount
                      className="min-w-full"
                    >
                      <Education />
                    </TabsContent>
                  </div>
                </motion.div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
