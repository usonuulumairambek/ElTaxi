import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">"Цифровое такси"</div>
      <div className="header__navbar">
        <ul>
          <li>
            <a href="http://eltaxi.site/">О нас</a>
          </li>
          <li>
            <a href="http://eltaxi.site/">Таксопарк</a>
          </li>
          <li>
            <a href="http://eltaxi.site/">Сервис</a>
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
