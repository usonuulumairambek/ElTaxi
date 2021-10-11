import React from 'react';
import Home from "./Home"
import {
  BrowserRouter,
  BrowserRouter as Route,
  Switch,
} from "react-router-dom";
import './App.css';
import Header from "./components/header/Header"
import Main from './components/main/Main';
function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Home />
      <Switch>
        <Route path="/about">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;