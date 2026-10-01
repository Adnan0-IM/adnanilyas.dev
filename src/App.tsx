import { lazy, Suspense } from "react";

import { ThemeProvider } from "./components/theme-provider";

const Layout = lazy(() => import("./components/layout/Layout"));
const About = lazy(() => import("./sections/About"));
const Contact = lazy(() => import("./sections/Contact"));
const ExperienceEducation = lazy(
  () => import("./sections/ExperienceEducation"),
);
const Hero = lazy(() => import("./sections/Hero"));
const Projects = lazy(() => import("./sections/Projects"));
const TechStack = lazy(() => import("./sections/TechStack"));
const ReadingProgress = lazy(() => import("./components/anim/ReadingProgress"));
const RefreshToTop = lazy(() => import("./components/RefreshToTop"));
import { Spinner } from "./components/ui/spinner";

import "./index.css";

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          <Spinner />
        </div>
      }
    >
      <ThemeProvider>
        <Layout>
          <RefreshToTop />
          <ReadingProgress />
          <Hero />
          <About />
          <TechStack />
          <ExperienceEducation />
          <Projects />
          <Contact />
        </Layout>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
