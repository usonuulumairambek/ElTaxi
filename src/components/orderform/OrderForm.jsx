import React from "react";
import "./orderform.css";
function OrderForm() {
  return (
    <div className="orderform">
      <div className="container">
        <div className="right">
          <h1 className="zagolovok">
            Цифровое Такси
            <br /> в Бишкеке
          </h1>
          <p className="p">Такси для "Народа" от 45 сомов...</p>
        </div>
        <div className="left">
          <p className="zacaz">заказывайте такси</p>
          <p className="ppp">Первый заказ в черте города "бесплатно".</p>
          <input type="text" placeholder="имя" />
          <br />
          <br />
          <input type="text" placeholder="телефон" />
          <br />
          <br />
          <button className="knopka">
            <a href="#">заказать</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderForm;
