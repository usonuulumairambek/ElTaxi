import React from 'react';
import './App.css';
import Header from './components/header/Header';
import OrderForm from './components/orderform/OrderForm';
import Static from './components/static/static';
import Tarifs from './components/tarifs/Tarifs';

function App() {
  return (
    <div className="Main">
      <Header />
      <OrderForm />
      <Static />
      <Tarifs />
    </div>
  );
}

export default App;
