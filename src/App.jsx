import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUser,
  faHeart,
  faBell,
  faHome,
  faInfoCircle,
  faEnvelope,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./styles/App.css";

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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Router>
      <div className="app-container">
        {/* Header */}
        <header className="main-header">
          <div className="header-content">
            <button className="menu-toggle" onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className="logo-icon">
              <FontAwesomeIcon icon={faLeaf} className="brand-icon" />
              <h1 className="logo">Fresh Outlet</h1>
            </div>
            <form className="search-bar">
              <input
                type="text"
                placeholder="Search for gas or vegetables...."
              />
            </form>
            <div className="header-actions">
              <button className="header-btn">
                <FontAwesomeIcon icon={faBell} />
              </button>
              <button className="header-btn">
                <FontAwesomeIcon icon={faHeart} />
              </button>
              <button className="header-btn">
                <FontAwesomeIcon icon={faShoppingCart} />
              </button>
              <button className="header-btn">
                <FontAwesomeIcon icon={faUser} />
              </button>
              <button className="theme-toggle" onClick={toggleTheme}>
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </div>
          </div>
        </header>

        {/* Main Grid Layout */}
        <div className="main-layout">
          {/* Sidebar */}
          <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
            <nav className="sidebar-nav">
              <Link
                to="/"
                onClick={() => {
                  scrollToTop();
                  closeMenu();
                }}
                className="nav-item"
              >
                <FontAwesomeIcon icon={faHome} />
                <span>Home</span>
              </Link>
              <Link
                to="/about"
                onClick={() => {
                  scrollToTop();
                  closeMenu();
                }}
                className="nav-item"
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                <span>About</span>
              </Link>
              <Link
                to="/contact"
                onClick={() => {
                  scrollToTop();
                  closeMenu();
                }}
                className="nav-item"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                <span>Contact</span>
              </Link>
            </nav>
          </aside>

          {/* Main Content */}
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
                  <About
                    expandedCards={expandedCards}
                    toggleCard={toggleCard}
                  />
                }
              />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>

        {/* Footer */}
        <Footer scrollToTop={scrollToTop} />

        {/* Overlay for mobile */}
        {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
      </div>
    </Router>
  );
}

export default App;
