import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="contain">
      <div className="container_inside">
        <div className="logo">
          <img
            src="https://mulberryprefab.com/wp-content/uploads/2021/11/Unknown-2-2-768x220.webp"
            alt="logo"
            className="img_logo"
          />
        </div>
          { menuOpen ?  <button className="hamburger" onClick={toggleMenu}>X</button> : <button className="hamburger" onClick={toggleMenu}> ☰ </button> }
       
        <div className={`navbar-items py-2 lg-w-75 ${menuOpen ? 'd-flex' : 'd-none'}`}>
          <ul className="navbar_list">
            <li><a href='/mulberry-art'>Mulberry Art</a></li>
            <li><a href='/designer-villas'>Designer Villas</a></li>
            <li><a href="#About">About Us</a></li>
            <li><a href="#Footer1">Contact Us</a></li>
            <li className="active"><a href='/live-projects'>Live Projects</a></li>
            <li><a href='/complete-projects'>Completed Projects</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
