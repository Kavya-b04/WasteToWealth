import React from 'react'
import  './Header.css';
import {Link  } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import CenterFocusStrongIcon from '@mui/icons-material/CenterFocusStrong';
import {useStateValue } from "./StateProvider";
// import {auth} from  "./firebase"


function Header() {

   const [{basket,user}] = useStateValue();

   const login = () =>{
    // if(user){
    //   auth.signOut();
    // }
   };

  return (
     <nav className="header">
   
      {/* logo on left ->img */}
      <Link to="/">
      <img className="header__logo" src="../w.png" alt="Logo" />
      
      </Link> 

      {/* Search box */}
      <div className="header__search">
     <input type="text" className="header__searchInput" />
      <SearchIcon className="header__searchIcon" />
      </div>
      {/* 3links */}
      <div className="header__nav">

        {/*1st link */}
        <Link  to={!user && "/login"} className="header__link">
        <div onClick={login} className="header__option">
            <span className="header__optionLineOne">Hello{user}</span>
            <span className="header__optionLinetwo">{user ? 'Sign Out' : 'Sign in'}</span>
        </div>
        
        </Link>

        {/*2nd link */}

        <Link  to="/" className="header__link">
        <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLinetwo">& Orders</span>
        </div>
        
        </Link>


        {/*3rd link */}

        <Link  to="/login" className="header__link">
        <div className="header__option">
            <span className="header__optionLineOne">Yours</span>
            <span className="header__optionLinetwo">Prime</span>
        </div>
        
        </Link>

         {/*4st link */}
         

         <Link to="/checkout" className="header__link" >
           <div className="header__optionBasket ">
            {/**shopping basket icon */}
            <ShoppingBasketRoundedIcon />
           
            {/**number of item in basket */}
            <span className="header__basketCount">{basket?.length}</span>

            <CenterFocusStrongIcon/>
            <span className='header_ai'>AI</span>
           </div>
         </Link>

      </div>

      {/* Basket icon eith number*/}
    </nav>
  );
}


export default Header
