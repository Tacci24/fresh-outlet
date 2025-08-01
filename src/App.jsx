import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [expandedCards, setExpandedCards] = useState([]);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleCard = (index) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <Router>
      <div>
        <header className="main-header">
          <div className="container">
            <h1 className="logo">Fresh Outlet</h1>
            <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
              <Link to="/" onClick={closeMenu}>
                Home
              </Link>
              <Link to="/about" onClick={closeMenu}>
                About
              </Link>
              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </nav>
            <div className="header-actions">
              <button className="theme-toggle" onClick={toggleTheme}>
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
              <button className="menu-toggle" onClick={toggleMenu}>
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </header>
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <Home expandedCards={expandedCards} toggleCard={toggleCard} />
              }
            />
            <Route
              path="/about"
              element={
                <About expandedCards={expandedCards} toggleCard={toggleCard} />
              }
            />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
