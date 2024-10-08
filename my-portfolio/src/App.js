import "./App.css";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import PortfolioPage from "./pages/Portfolio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import IntroToDigital from "./pages/IntroToDigital";
import GoogleClone from "./projects/ITD/Google.com/GoogleClone";
import PersonalSite from "./projects/ITD/personal-site/PersonalSite";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/intro-to-digital" element={<IntroToDigital />} />
          <Route path="/personal-site" element={<PersonalSite />} />
          <Route path="/google-clone" element={<GoogleClone />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
