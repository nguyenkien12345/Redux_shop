import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NotFound from './components/NotFound';
import ProductDetail from './components/ProductDetail';
import ProductsList from './components/ProductsList';

function App() {

  return (
    <BrowserRouter>
      <>
      <Header/>
      <Switch>
          <Route exact path='/' component={ProductsList}/>
          <Route path='/product/:productId' component={ProductDetail}/>
          <Route path='' component={NotFound}/>
      </Switch>
      </>
    </BrowserRouter>
  );

}

export default App;
