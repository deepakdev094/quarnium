import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${
        isScrolled
          ? "bg-[#121522b3] backdrop-blur-lg  shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 transition-all duration-300 ${
          isScrolled ? "py-2 mt-1 mb-1" : "py-4 mt-3 mb-3"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link to="/">
            <div
              className={`shrink-0  font-bold drop-shadow-md transition-all duration-300 ${
                isScrolled ? "text-2xl" : "text-3xl"
              }`}
            >
              Quranium
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-5 text-lg font-medium text-[#c9d1d9]">
            <Link
              to="/about"
              className="interactive relative group hover:text-[#7f5af0] transition-colors duration-300"
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#7f5af0]  transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <a className="relative group hover:text-[#7f5af0] transition-colors duration-300">
              Technical
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#7f5af0]   transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a className="relative group hover:text-[#7f5af0] transition-colors duration-300">
              Initiatives
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#7f5af0]   transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a className="relative group hover:text-[#7f5af0] transition-colors duration-300">
              Ecosystem
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#7f5af0]  transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a className="relative group hover:text-[#7f5af0] transition-colors duration-300">
              Resources
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#7f5af0]  transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a className="relative group hover:text-[#7f5af0] transition-colors duration-300">
              Careers
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#7f5af0]   transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a className="relative group hover:text-[#7f5af0] transition-colors duration-300">
              Contact Us
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#7f5af0]   transition-all duration-300 group-hover:w-full"></span>
            </a>

            <a className="bg-[#7f5af0] px-4 py-2 rounded-full font-semibold hover:bg-[#7f5af0] hover:shadow-[0_0_10px_#7f5af0aa,0_0_20px_#7f5af0aa] transition text-white">
              QSafe Wallet
            </a>
            <a className="bg-[#7f5af0] px-4 py-2 rounded-full font-semibold hover:bg-[#7f5af0] hover:shadow-[0_0_10px_#7f5af0aa,0_0_20px_#7f5af0aa] transition text-white">
              Node Sale
            </a>
          </nav>

          <button
            className="md:hidden text-[#f3f3f3] text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-3 text-lg font-medium text-[#c9d1d9] backdrop-blur-md bg-[#121522cc] rounded-xl px-4 py-4 border border-white/10 shadow-lg">
            <Link to="/about" className="hover:text-[#89b4fa] transition">
              About
            </Link>
            <a className="hover:text-[#89b4fa] transition cursor-pointer">
              Technical
            </a>
            <a className="hover:text-[#89b4fa] transition cursor-pointer">
              Initiatives
            </a>
            <a className="hover:text-[#89b4fa] transition cursor-pointer">
              Ecosystem
            </a>
            <a className="hover:text-[#89b4fa] transition cursor-pointer">
              Resources
            </a>
            <a className="hover:text-[#89b4fa] transition cursor-pointer">
              Careers
            </a>
            <a className="hover:text-[#89b4fa] transition cursor-pointer">
              Contact Us
            </a>
            <a className="bg-[#7f5af0] text-white px-4 py-2 rounded-full text-center font-semibold hover:shadow-[0_0_10px_#7f5af0aa,0_0_20px_#7f5af0aa] transition">
              QSafe Wallet
            </a>
            <a className="bg-[#7f5af0] text-white px-4 py-2 rounded-full text-center font-semibold hover:shadow-[0_0_10px_#7f5af0aa,0_0_20px_#7f5af0aa] transition">
              Node Sale
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
