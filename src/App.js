import React from 'react';
import './App.css';
import Header from './components/header/Header';
import OrderForm from './components/orderform/OrderForm';

function App() {
  return (
    <div className="Main">
      <Header />
      <OrderForm />
    </div>
  );
}

export default App;
