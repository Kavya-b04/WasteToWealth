import React from 'react';
import Header from './Header.js'
import { useStateValue } from './StateProvider.js';
import "./checkout.css";
import CheckoutProduct from './CheckoutProduct.js';
import Subtotal from './Subtotal';


function Checkout() {

    const [{basket}] = useStateValue();


  return (
    <div>
       <Header/>
    <div className="checkout">
       
      <div className='checkout__left'>
      <img  className="checkout__ad" src="../Primevedio.png" alt="" />

        {basket?.length === 0 ? (
          <div>
            <h2>Your Basket is empty</h2>
          </div>
        ):(
          <div>
            <h2 className="checkout__title">YOUR BASKET</h2>
        {/* list  */}
        {basket?.map(item => (
          <CheckoutProduct
           id={item.id}
           title={item.title}
           image={item.image}
           price={item.price}
           rating={item.rating}
          
          
          />
        ))}
          </div>
        )}
        </div>
        {basket.length > 0 && (
         <div className='checkout__right'>
          <h1>subtotal</h1>
          <Subtotal/>
         </div>
        )}
    </div>
    </div>
  );
}

export default Checkout;