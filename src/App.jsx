import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Indh from "./pages/Indh";
import Faq from "./pages/Faq";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/indh" element={<Indh />} />
        <Route path="/events" element={<Events />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
