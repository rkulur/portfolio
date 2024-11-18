import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
export default function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed  top-0 -z-10 h-full w-full ">
        <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(75,0,130,0.5),rgba(0,0,139,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

