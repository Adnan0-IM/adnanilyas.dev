import { Github, Linkedin, Mail, MapPin, FileText } from "lucide-react";
import { motion } from "motion/react";

const Contact = () => {
  // container and child variants
  const container = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
  };

  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <section id="contact" className="pt-8 sm:pt-16">
      <div className="container px-4 md:px-16 lg:px-32 xl:px-64 mx-auto">
        <div className="flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center gap-3"
          >
            <span className="h-6 w-1 rounded-sm bg-primary"></span>
            <h2 className="text-2xl md:text-3xl">Contact</h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            <div className="md:col-span-2">
              <h3 className="text-lg md:text-xl text-muted-foreground">
                Let’s connect
              </h3>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="md:col-span-3"
            >
              <div className="space-y-4 text-base leading-relaxed">
                <motion.p
                  variants={item}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.05,
                  }}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <MapPin className="h-4 w-4" /> Kano, Nigeria
                </motion.p>
                <motion.p
                  variants={item}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.17,
                  }}
                >
                  I’m open to internships, junior roles, and collaborations.
                  Email me or reach out on LinkedIn or GitHub.
                </motion.p>
                <div className="flex flex-wrap items-center gap-3">
                  <motion.a
                    variants={item}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.29,
                    }}
                    href="mailto:adnanilyas969@gmail.com"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-border hover:bg-muted/50"
                  >
                    <Mail className="h-4 w-4" /> adnanilyas969@gmail.com
                  </motion.a>
                  <motion.a
                    variants={item}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.29,
                    }}
                    href="https://linkedin.com/in/adnan-iliyasu-muhammad-90961028a"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-border hover:bg-muted/50"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </motion.a>
                  <motion.a
                    variants={item}
                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.41,
                    }}
                    href="https://github.com/Adnan0-IM"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-border hover:bg-muted/50"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </motion.a>
                  <motion.a
                    variants={item}
                    transition={{
                      duration: 0.8,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.41,
                    }}
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-border hover:bg-muted/50"
                  >
                    <FileText className="h-4 w-4" /> Resume
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
