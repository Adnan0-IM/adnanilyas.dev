import Layout from "./components/layout/Layout";
import About from "./sections/About";
import Contact from "./sections/Contact";
import ExperienceEducation from "./sections/ExperienceEducation";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import TechStack from "./sections/TechStack";
import ReadingProgress from "./components/anim/ReadingProgress";
import RefreshToTop from "./components/RefreshToTop";

function App() {
  return (
    <Layout>
      <RefreshToTop/>
      <ReadingProgress />
      <Hero />
      <About />
      <TechStack />
      <ExperienceEducation />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
