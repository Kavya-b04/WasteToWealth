import React from 'react'
import "./Home.css";
import Product from './Product.js'

function Home() {
  return (
    <div  className="home">
      {/* <img className="home__image" src="016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="adv" /> */}
      <h3>     Welcome to Waste to Wealth, the ultimate casual idle website where you can turn trash into treasure</h3>
      {/* Product id title price rating image */}
   <div className="home__row">
       < Product 
       id="12" 
       title="news papers"
       price={10.96}
       rating={5}
       image="../knews.png"
       />
        < Product 
       id="13" 
       title="old books"
       price={12.45}
       rating={5}
       image="../kbook.png"
       />
    </div>
    <div className="home__row">
       < Product 
       id="14" 
       title="old newpaper"
       price={11.96}
       rating={5}
       image="../newspaper.png"
       />
        < Product 
       id="15" 
       title="books"
       price={11.96}
       rating={5}
       image="../booksold.png"
       />
        < Product 
       id="16" 
       title="newspaper"
       price={11.96}
       rating={5}
       image="../newspaper.png"
       />
      </div>
      <div className="home__row">
       < Product 
       id="17" 
       title="books"
       price={11.96}
       rating={5}
       image="../booksold.png"
       />
       </div>


       {/* Product */}








    </div>
  );
}

export default Home
