import "./App.css";
import "./css/NavBar.css";
import "./css/Footer.css"
import "./css/skills.css"
import "./css/contact.css"
import "./css/contact.css"
import "./css/portfolio.css"
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import IntroToProgramming from "./components/ITP";
import Footer from "./pages/Footer";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div id="page-body" >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/intro-to-programming" element={<IntroToProgramming />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
