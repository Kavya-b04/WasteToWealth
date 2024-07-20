import React from 'react'
import "./Product.css";
import GradeIcon from '@mui/icons-material/Grade';
// import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import { useStateValue } from './StateProvider';


function Product ({id,title,image,price,rating}) {

  const [{basket},dispatch] = useStateValue();

  const addToBasket= () => {
    //add item to basket....
     dispatch ({
      type:'ADD_TO_BASKET',
      item:{
        id :id,
        title :title,
         image : image,
         price:price,
         rating:rating
      },
     })
  };

  return (
    <div className="product">
       <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
         <small>E</small>
         <strong>{price}</strong>
        </p>
      <div className="product__rating">
        {
            Array(rating)
            .fill()
            .map((_) => (
                <p><GradeIcon/> 
               
                </p>
            ))
        }
        </div> 
        
      </div>
    <img src={image} alt="book" />
    <button className="product__button" onClick={addToBasket} >add to basket</button>
   
    </div>
  );
}

export default Product
