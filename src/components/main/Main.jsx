import React from 'react';
import Header from '../header/Header';
import OrderForm from './../orderform/OrderForm';
import Static from './../static/static';
import Tarifs from './../tarifs/Tarifs';
const Main = () => {
    return (
        <div>
            {/* <Header /> */}
            <OrderForm />
            <Static />
            <Tarifs />
        </div>
    );
}

export default Main;