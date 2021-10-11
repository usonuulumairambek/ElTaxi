import React from "react";
import "./home.css";
import logo from "./images/logo.jpg";
import location from "./images/location.svg";
import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom";
import kurerom from "./images/kurerom.svg";
import partneram from "./images/parteram.svg";
import vakansii from "./images/vakansii.svg";
import voditelem from "./images/voditelem.svg";
import Header from "./components/header/Header";
import OrderForm from "./components/orderform/OrderForm";
import App from "./components/app/App";
import Delivery from "./components/delivery/Delivery";
import Business from "./components/busines/Business";
import Driver from "./components/driver/Driver";
import Curer from "./components/curer/Curer";
import Vacancies from "./components/vacancies/Vacancies";
import Partners from "./components/partners/Partners";
function Home() {
  return (
    <BrowserRouter>
      <div className="home">
        <div className="home__left">
          <div className="home__left-logo">
            <img src={logo} alt="" />
          </div>
          <div className="home__left-order-taxi">
            <div className="home__left-order-taxi-h1">
              <a href="#">
                {" "}
                <img src={location} alt="" />
                Заказ такси
              </a>
            </div>
            <div className="home__left-order-nav">
              <ul>
                <li>
                  <NavLink to="/online">Заказ онлайн</NavLink>
                </li>{" "}
                <li>
                  <NavLink to="/app">Приложение для заказа</NavLink>
                </li>{" "}
                <li>
                  <NavLink to="/delivery">Доставка</NavLink>
                </li>{" "}
                <li>
                  <NavLink to="/taxi-for-business">Такси для бизнеса</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="home__left-navbar">
            <ul>
              <NavLink to="/by-driver">
                <li>
                  <img src={voditelem} alt="" />
                  Водителям
                </li>
              </NavLink>
              <NavLink to="/couriers">
                <li>
                  <img src={kurerom} alt="" />
                  Курьерам
                </li>
              </NavLink>
              <NavLink to="/vacancies">
                <li>
                  <img src={vakansii} alt="" />
                  Вакансии
                </li>
              </NavLink>
              <NavLink to="/partners">
                <li>
                  <img src={partneram} alt="" />
                  Партнерам
                </li>
              </NavLink>
            </ul>
          </div>
          <div className="home__left-links">
            <ul>
              <li>
                <NavLink to="blog">Блог</NavLink>
              </li>
              <li>
                <NavLink to="company">О компании</NavLink>
              </li>
              <li>
                <NavLink to="contacts">Контакты</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="home__right">
          {/* <Header /> */}
          <Switch>
            <Route path="/online">
              <OrderForm />
            </Route>
            <Route path="/app">
              <App />
            </Route>
            <Route path="/delivery">
              <Delivery />
            </Route>
            <Route path="/taxi-for-business">
              <Business />
            </Route>
            <Route path="/by-driver">
              <Driver />
            </Route>
            <Route path="/couriers">
              <Curer />
            </Route>
            <Route path="/vacancies">
              <Vacancies />
            </Route>
            <Route path="/partners">
              <Partners />
            </Route>
            <Route path="/blog">
              <h1>Блог</h1> <br />
              Страница в процессе разработки!!!
            </Route>
            <Route path="/company">
              <h1>О компании</h1> <br />
              Страница в процессе разработки!!!
            </Route> <Route path="/contacts">
              <h1>Контакты</h1> <br />
              Страница в процессе разработки!!!
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Home;
