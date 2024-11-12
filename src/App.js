import "./App.css";
import "./css/NavBar.css";
import "./css/Footer.css";
import "./css/skills.css";
import "./css/contact.css";
import "./css/contact.css";
import "./css/portfolio.css";
import HomePage from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./pages/Footer";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
