import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
};

export default App;
