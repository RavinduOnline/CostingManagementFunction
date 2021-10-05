import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import CashierHome from './components/CashierHome';
import CashierFooter from './components/CashierFooter';
import CategoryBar from './components/CategoryBar';
import CustomerCreate from './components/CustomerCreate';


export default class App extends Component {                     // <--------------this APP class we extends using Component class
  render() {
    return (

      <div>
      <BrowserRouter>
        <div className="containerCashier">

          <Route path="/" exact component = {CashierHome}></Route>

          <Route path="/add" component={CustomerCreate}></Route>

        </div>
        
        <CategoryBar/>
        <CashierFooter/>
        
      </BrowserRouter>

      </div>

    )
  }
}