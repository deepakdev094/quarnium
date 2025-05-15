import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // Install react-icons if not already

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50  transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md shadow-md"
          : "bg-black/30 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 mt-3 mb-3">
        <div className="flex items-center justify-between">
          <div className="shrink-0 text-white text-3xl font-bold">Quranium</div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-4  text-white text-lg font-medium">
            <Link to="/about" className="hover:text-yellow-400">About</Link>
            <a className="hover:text-yellow-400">Technical</a>
            <a className="hover:text-yellow-400">Initiatives</a>
            <a className="hover:text-yellow-400">Ecosystem</a>
            <a className="hover:text-yellow-400">Resources</a>
            <a className="hover:text-yellow-400">Careers</a>
            <a className="hover:text-yellow-400">Contact Us</a>
            <a className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-300 transition">
              QSafe Wallet
            </a>
            <a className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-300 transition">
              Node Sale
            </a>
          </nav>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-3 text-white text-lg font-medium">
            <Link to="/about" className="hover:text-yellow-400">About</Link>
            <a className="hover:text-yellow-400">Technical</a>
            <a className="hover:text-yellow-400">Initiatives</a>
            <a className="hover:text-yellow-400">Ecosystem</a>
            <a className="hover:text-yellow-400">Resources</a>
            <a className="hover:text-yellow-400">Careers</a>
            <a className="hover:text-yellow-400">Contact Us</a>
            <a className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-300 transition text-center">
              QSafe Wallet
            </a>
            <a className="bg-yellow-500 px-4 py-2 rounded hover:bg-yellow-300 transition text-center">
              Node Sale
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
