import { useEffect, useId, useRef, useState, type RefObject } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Github, Globe2 } from "lucide-react";
import { cards } from "./ProjectsData";
import { CloseIcon } from "./CloseIcon";

export default function ProjectCard() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as RefObject<HTMLDivElement>, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-100">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-muted text-foreground rounded-lg h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] min-height-[80%] h-fit md:h-fit md:max-h-[90%] flex flex-col bg-card text-card-foreground sm:rounded-lg overflow-hidden border border-border"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  loading="lazy"
                  src={active.src}
                  alt={active.title}
                  className="w-full rounded-tr-md rounded-tl-md object-contain object-center"
                />
              </motion.div>

              <div>
                <div className="flex relative  justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-foreground text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-muted-foreground absolute sm:inline max-w-[350px] sm:max-w-fit  top-16 text-sm sm:text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <div className="flex items-center gap-4">
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.liveDemo}
                      target="_blank"
                      className="px-4 flex gap-2 items-center  py-2 text-sm rounded-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Globe2 className="mb-0.5" size={15} />{" "}
                      {active.liveDemoText}
                    </motion.a>
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.githubLink}
                      target="_blank"
                      className="px-4 py-2 flex gap-2 items-center text-sm rounded-lg font-bold bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    >
                      <Github size={18} /> {active.githubLinkText}
                    </motion.a>
                  </div>
                </div>
                <div className={`${active.title.length >= 16 ? "pt-7": "pt-10"} relative  sm:pt-8 px-4`}>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-muted-foreground text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="mx-auto w-full grid grid-cols-1 sm:grid-cols-2 items-start gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 300, damping : 24, duration: 0.4 , delay: 0.1 }}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col bg-card text-card-foreground hover:bg-muted/40 rounded-md cursor-pointer border border-border"
          >
            <div className="flex gap-3 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  loading="lazy"
                  src={card.src}
                  alt={card.title}
                  className="w-full rounded-md object-contain object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-foreground text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-muted-foreground text-center text-sm "
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}
