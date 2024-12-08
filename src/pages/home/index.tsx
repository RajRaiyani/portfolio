import Hero from "./hero";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import "./style.scss";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <div className="h-28"></div>
    </>
  );
}

export default Home;
