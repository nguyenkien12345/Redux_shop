// import package
import  React from 'react';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
// import components
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import ProductDetail from './components/ProductDetail';
import NotFound from './components/NotFound';
// import css
import './App.css';

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
