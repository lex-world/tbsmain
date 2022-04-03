import React from "react";
import './styles/style.css'

// import Logo from "../../assets/Logo.png";

export default function Navbar() {
  return (
    <div className="navbar__container">
      <div className="navbar__container__left">
        <div className="navbar__container__left__logo">
          <img src="https://ik.imagekit.io/theboringschool/The_Boring_School_-_UI/logo192_Gk6fJ0Sok.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648473703252" alt="The Boring School" />
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
