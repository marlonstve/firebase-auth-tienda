import React from 'react';
import '../stilos/cart.css'
import relog from '../assets/icons/149316.svg'
import emoji from '../assets/icons/emosol.png'
import eliminar from '../assets/icons/borrar.png'
import Botonpago from './PaypalCheckoutButton'
export default function Cart({ cart, setCart }) {

  const order = () => setCart([]);
  const total = () => {
    return cart.reduce(
      (sum, { price, quantity }) => sum + price * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.name === product.name
    ).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

  return (
<>
   
    <div className=' cart' >
      <h1> My<img src={emoji} alt='...' width='20' height='20' /> </h1> 
      <h1> Order  </h1>
      <div className="col-12-xxl card-1">
  <div className="col-12 card-body-1">
    <h5 className="row card-title"><br></br>625 St Marks Ave  <a href="#" className="card-link">Edit</a></h5>
   <button className="row btn btn-outline-warning"><img src={relog} alt='..' width='10' height='10' /></button>
   <h4> 35 min </h4><a href="#" className="card-link"><h6>Choose time</h6></a>
   </div>
</div>
      {cart.length > 0 && (
      <button className='btn-2' onClick={clearCart}><img src={eliminar} alt='...' width='20' height='20' /></button>
      )}
      <div >
      <br></br>
        {cart.map((product, idx) => (
          <div className=' row' key={idx}>
          <img className='col-3 rounde' src={product.image} alt='' />
            <input
              value={product.quantity}
              onChange={(e) =>
                setQuantity(
                  product,
                  parseInt(e.target.value)
                )
              }
            />
            <h2>x</h2><h5 className='col-5'>{product.name}</h5>
            <h6 className='col-2 price'>${product.price} <button className='btn-3' onClick={() => removeFromCart(product)}>
              -
            </button></h6>
           
          </div>
          
        ))}
      </div>
      
      <div className='row total'><h1 className='col'>Total:</h1> <h2 className='col'>${total()}</h2></div>
      
        
            <Botonpago />
         
      
      </div>
    </>
  );
}