import styles from "./App.module.css";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
