import React from "react";
import './styles/style.css'

import Logo from "../../assets/Logo.png";

export default function Navbar() {
  return (
    <div className="navbar__container">
      <div className="navbar__container__left">
        <div className="navbar__container__left__logo">
          <img src={Logo} alt="The Boring School" />
          <p>The Boring School</p>
        </div>
      </div>

      <div className="navbar__container__center">
          <ul>
              <li>Case Studies</li>
              <li>Solutions</li>
          </ul>
      </div>

      <div className="navbar__container__right">
          <ul>
              <li>Products</li>
              <li>About</li>
              <li className="highlight">Contact</li>
          </ul>
      </div>
    </div>
  );
}
