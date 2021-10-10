import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__logo">"Цифровое такси"</div>
      <div className="header__navbar">
        <ul>
          <li>
            <NavLink to="/about">О нас</NavLink>
          </li>
          <li>
          <NavLink to="/about">Таксопарк</NavLink>

          </li>
          <li>
          <NavLink to="/about">Сервис</NavLink>

          </li>
        </ul>
      </div>
      <div className="header__phone">
        <button className="header__phone-btn">
          <a href="tel:+996709909443">+996 707 22 57 22</a>
        </button>
      </div>
    </div>
  );
}

export default Header;
