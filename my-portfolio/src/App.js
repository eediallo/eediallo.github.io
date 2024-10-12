import "./App.css";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import PortfolioPage from "./pages/Portfolio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import IntroToDigital from "./pages/IntroToDigital";
import IntroToProgramming from "./components/ITP";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div id="page-body" >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/intro-to-digital" element={<IntroToDigital />} />
          <Route path="/intro-to-programming" element={<IntroToProgramming />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
