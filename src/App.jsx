import React, { useState } from 'react';
import { BrowserRouter as Router,   Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Carrousel from './components/Carousel'
import Card from './components/Card'
import Cart from './components/Cart'
import Product from './components/Product'

function App() {
  
  const [cart, setCart,] = useState([]);
 
  return (
    <div >
      <Router>
        <Header />
        <div className="container-xxl">
          <div className='row'>
            <div className='col-9'>
              <Card /></div>
            <div className='col-3'> 
            <Cart cart={cart}
              setCart={setCart}
              
            /></div>

            <div className='col-9'>
              <Carrousel /></div>
          </div>
            <div className='col-9'>
            <Product
              cart={cart}
              setCart={setCart}

            />  </div>
      
        </div>
          

        <Switch>



       


        </Switch>
      </Router>
    </div>

  );
}

export default App;
