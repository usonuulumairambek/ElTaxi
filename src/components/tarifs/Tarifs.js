import React from 'react'
import "./tarifs.css"
function Tarifs() {
  return (
    <div className="tarifs">
        <div className="zagolovki">
            <h1 className="cc">Тарифы</h1>
            <p className="cc">Выберите нужный вам тариф и закажите такси</p>
        </div>
        <div className="colums">
            <div className="col">
                <h2>Эконом</h2>
                <p>Автос рабочим объемом двигателяболее 125 куб. см.</p>
                <h1>45 сом</h1>
                <p>На линии 8 часов</p>
                <p>Авто компактные</p>
                <button><a href="#">Записаться</a></button>
            </div>
            <div className="col">
                <h2>Эконом</h2>
                <p>Автос рабочим объемом двигателяболее 125 куб. см.</p>
                <h1>45 сом</h1>
                <p>На линии 8 часов</p>
                <p>Авто компактные</p>
                <button><a href="#">Записаться</a></button>
            </div>
            <div className="col">
                <h2>Эконом</h2>
                <p>Автос рабочим объемом двигателяболее 125 куб. см.</p>
                <h1>45 сом</h1>
                <p>На линии 8 часов</p>
                <p>Авто компактные</p>
                <button><a href="#">Записаться</a></button></div>            
        </div>
    </div>
  )
}

export default Tarifs