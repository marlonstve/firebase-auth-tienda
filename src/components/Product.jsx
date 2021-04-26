import React from 'react';
import products from '../products.json'
import Carousel from 'react-elastic-carousel';
import '../stilos/Product.css'
import estrella from '../assets/icons/149220.svg'

export default function Products({ setCart, cart }) {
  

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };
return (
    <>
<Carousel itemsToShow={3} itemsToScroll={2} pagination={0}>
        {products.map((product, idx) => (
         <div className="card-1"key={idx}>
          <img className="card-img"src={product.image}  alt="..." ></img>
            <h5 className="col-6  card-text-1 "> {product.time}</h5>
           <h6 className="card-text">{product.name}</h6>
             <p className="card-title"><img src={estrella} alt='..' width='15' height='15' />{product.qualification}
              <button className="btn btn-outline-warning"onClick={() => addToCart(product)}>
              +
            </button></p>
      
            </div>
        
          
        ))}
        </Carousel>
        
    
    </>
  );
}