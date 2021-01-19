import React from 'react'
import "./Home.css";
import Product from "./Product";


function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image" 
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                    alt="" 
                />
                <div className="home__row">
                    <Product 
                        id=""
                        title='The lean starturp: How Constanst Inovation Creates Radically Succesful Businesses Paperback' 
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                        rating={3}
                    />
                    <Product 
                        id="49538094"
                        title="Kenwood kMixStandMixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisky, 5 little Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://www.grooves.land/images/dgh/497436_00.png"
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="4903850"
                        title="Samsumg LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={1499.0}
                        rating = {5}
                        image= "https://static.datart.cz/c49rg90-lc49rg90ssuxen/media_4186633.jpg?size=800"
                    />
                    <Product 
                        id="23445930"
                        title="All-new Echo Dot (4th generation) | Smart speaker with clock and Alexa | Glacier White"
                        price={79.0}
                        rating = {3}
                        image="https://images-eu.ssl-images-amazon.com/images/I/617uaPe8gzL._AC_UL160_SR160,160_.jpg"
                    />
                    <Product 
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved Led Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />                   
                </div>        
            </div>    
        </div>
    )
}

export default Home
