import {lazy, Suspense} from "react";

const Layout = lazy(() => import("./components/layout/Layout"));
const About = lazy(() => import("./sections/About"));
const Contact = lazy(() => import("./sections/Contact"));
const ExperienceEducation = lazy(() => import("./sections/ExperienceEducation"));
const Hero = lazy(() => import("./sections/Hero"));
const Projects = lazy(() => import("./sections/Projects"));
const TechStack = lazy(() => import("./sections/TechStack"));
const ReadingProgress = lazy(() => import("./components/anim/ReadingProgress"));
const RefreshToTop = lazy(() => import("./components/RefreshToTop"));

import "./index.css";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
}

export default App;

