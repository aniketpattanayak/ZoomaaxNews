import React, { useEffect, useRef, useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navbarRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle mobile menu

  useEffect(() => {
    // GSAP Animation for Navbar on Scroll
    gsap.fromTo(
      navbarRef.current,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: navbarRef.current,
          start: "top top",
        },
      }
    );
  }, []);

  // Toggle Menu Handler
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div ref={navbarRef} className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">Zoomster News</div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center space-x-6 text-lg">
          {["Home", "World", "Technology", "Sports", "Entertainment"].map(
            (link) => (
              <a
                key={link}
                href="#"
                className="hover:text-gray-400 transition duration-300"
              >
                {link}
              </a>
            )
          )}
        </div>

        {/* Search Bar */}
        <div className="hidden sm:flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-l-md bg-gray-700 text-white focus:outline-none h-10 w-40 md:w-64"
          />
          <button className="px-4 py-2 bg-yellow-500 text-white rounded-r-md h-10 flex items-center justify-center">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-900 text-white">
          <div className="flex flex-col space-y-4 px-4 py-4">
            {/* Navigation Links */}
            {["Home", "World", "Technology", "Sports", "Entertainment"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-gray-400 transition duration-300"
                >
                  {link}
                </a>
              )
            )}
            {/* Search Bar */}
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 rounded-l-md bg-gray-700 text-white focus:outline-none w-full"
              />
              <button className="px-4 py-2 bg-yellow-500 text-white rounded-r-md flex items-center justify-center">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
