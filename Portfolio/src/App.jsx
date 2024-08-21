import styles from "./App.module.css";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";
import { About } from "./components/About";
import { Experience } from "./components/Experience";

function App() {
  return (
    <div>
      <Navbar />
      <Profile />
      <About />
      <Experience />
    </div>
  );
}

export default App;
