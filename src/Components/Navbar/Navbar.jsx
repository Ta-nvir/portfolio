import React, { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`navbar ${atTop ? "show" : "hide"}`}>
        <h1><span>Tanvir</span></h1>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </div>

        <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#About">About Me</a></li>
          <li><a href="#Certification">Certification</a></li>
          <li><a href="#Project">Project</a></li>
          <li><a href="#Contact">Contact</a></li>
          <a href="#Contact" style={{ textDecoration: "none" }}>
            <div className="nav-connect">Connect With Me</div>
          </a>
        </ul>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
    </>
  )
}

export default Navbar
