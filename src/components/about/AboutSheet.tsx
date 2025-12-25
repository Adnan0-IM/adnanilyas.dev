import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Mail, FileText } from "lucide-react";

const AboutSheet = () => {
  return (
    <Sheet>
      <SheetTrigger className="underline animate-bounce underline-offset-4 text-primary hover:text-primary/80 cursor-pointer pl-2">
        read more...
      </SheetTrigger>
      <SheetContent side="right" className="sm:max-w-[40rem] overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-lg md:text-xl text-muted-foreground">
            How I build software
          </SheetTitle>
          <SheetDescription asChild>
            <div className="space-y-6 text-foreground leading-relaxed text-base">
              <div className="space-y-4">
                <p>
                  I approach software development by first understanding the
                  problem, not just the tools. I break ideas into clear steps,
                  think through user flows, and build solutions that are simple,
                  structured, and maintainable.
                </p>
                <p>
                  I pay attention to details and keep the bigger picture in mind
                  so what I build works in real use.
                </p>
                <p>
                  I take ownership end‑to‑end: planning, implementation,
                  testing, and deployment. If something breaks, I fix it. If I
                  don’t understand something, I learn it properly. My internship
                  work on production deadlines shaped my consistency and time
                  management.
                </p>
                <p>
                  I’m growing into a strong full‑stack developer focused on
                  React, TypeScript, backends, and deployment—building
                  practical, scalable products and learning by doing with
                  experienced teams.
                </p>
              </div>

              <div className="border-t border-border pt-4 grid gap-3">
                <h4 className="text-sm font-semibold text-muted-foreground">
                  Core principles
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>Clarity before code: understand the problem first.</li>
                  <li>Design simple, maintainable systems.</li>
                  <li>Own the work end‑to‑end.</li>
                </ul>
              </div>

              <div className="grid gap-2">
                <h4 className="text-sm font-semibold text-muted-foreground">
                  Currently
                </h4>
                <p className="text-sm text-muted-foreground">
                  Building full‑stack apps. Focus: React, TypeScript, Express,
                  Node. Learning React Native.
                </p>
              </div>

              <div className="border-t border-border pt-4 flex flex-wrap gap-3">
                <Button asChild size="sm" variant="default">
                  <a href="#contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact
                  </a>
                </Button>
                <Button asChild size="sm" variant="secondary">
                  <a href="/resume.pdf" target="_blank" rel="noreferrer">
                    <FileText className="mr-2 h-4 w-4" />
                    Resume
                  </a>
                </Button>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default AboutSheet;
