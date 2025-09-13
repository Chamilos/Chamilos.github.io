import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.jsx";

import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <main className="mx-auto mt-10 sm:mt-2 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
