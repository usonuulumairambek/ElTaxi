import React from "react";

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
      <div className="header__phone"></div>
    </div>
  );
}

export default Header;
