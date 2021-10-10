import React from "react";
import "./home.css"
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__container-about">
                    <h1>ЭлTaxi – Цифровое такси</h1>
                </div>
                <div className="home__container-order">
                    <form action className="railway">
                        <div classname="stripes-block">
                            <div classname="line" />
                        </div>
                        <h3>Заказывайте такси онлайн</h3>
                        <div classname="form-group">
                            <input type="text" id="name" required /><label htmlFor="name">Имя</label>
                            <input type="text" id="pass" required /><label htmlFor="pass">Паспортные данные</label>
                            <input type="email" id="email" required /><label htmlFor="email">Email</label>
                            <input type="text" id="phone" required /><label htmlFor="phone">Номер телефона</label>
                        </div>
                        <div classname="submit-block">
                            <div classname="submit-button">
                                <i classname="fa fa-train" aria-hidden="true" /><br />
                                <input type="submit" defaultValue="Отправить" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home