import Head from 'next/head'
import React, { useState } from 'react';
import Link from 'next/link'

export default function Home() {
  const [isHidden, setIsHidden ] = useState(true);
  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
 };
  const tog = () => {
    if(isHidden === true) {
      console.log('was true')
      return setIsHidden(false);
      
    }
   
    else {
      console.log('was fale ')
      setIsHidden(true);
    } 

  }
  return (
    <div className="container">
      <Head>
        <title>Pinatta</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>

      </Head>
    {/* pop up box */}
      <div className={isHidden ? 'hidden' : 'box'} >
        <div className="intro_pop">
          <div className="logo_cont_pop">
          <h2 id="home_top" onClick={tog} className={['logo_mine', 'pink'].join(' ')}>Piñatta</h2>
          <h2 onClick={tog} className="white">X</h2>
          </div>
       
         
        <div className="intro_pop_container">
        <p>Whould you like to order our prefix menu. It's 50 dollars and we will accept cash or venmo</p>
        </div>
       
        </div>
        <div className="pop_menu">
          <h2 className="menu_pop_text">MENU</h2>
          <div className="pop_items">
            <div>
            <p>Waffled Hash Brown Breakfast Sandwich</p>
            <p className="pop_item">$10.00</p>
            </div>
            <div>
            <p>Hickory Pulled Pork Fries</p>
            <p className="price_item">$10.00</p>
            </div>
            <div>
            <p>Mexi-Cheese Lava Fry Tower</p>
            <p className="price_item">$10.00</p>
            </div>
            <div>
            <p>Roasted Garlic Spinach Artichoke Dip</p>
            <p className="price_item">$10.00</p>
            </div>
            <div>
            <p>Southwest Queso</p>
            <p className="price_item">$10.00</p>
            </div>
            <div>
            <p>Mexi-Cheese Lava Fry Tower</p>
            <p className="price_item">$10.00</p>
            </div>
          </div>
          <h2 className="price_pop">$10.00</h2>
        </div>
        <div>
          <img className="icon_image" src="./instagram.png" alt=""/>
        </div>
        <div className="call_pop">
         
          <p>Click Below to call and place an order</p>
          <button className="phone_pop"><a href="tel:1-562-867-5309">777-888-8888</a></button>

          <div className="pop_footer">
          <h2 className={`${!isHidden ? "hidden" : ["logo_mine", "pink"].join(' ') }`}>Piñatta</h2>
          </div>
        </div>
    
      </div>
      
      {/* end of pop box  */}
     
      <main className={`${!isHidden ? "hidden" : "main" }`}>
        <section className="side_bar">
            <h2 className="logo_mine">Piñatta</h2>
            <div className="nav_bar">
            <p onClick={tog} className="link">Order</p>
            </div>

        </section>
        <section className="hero">
          <h1 className="hero_text">Pop Up In Chcicago</h1>
          <p onClick={tog}>Order Now</p>
        </section>
        <section className="main_content">
            <div className="image_grid">
              {/* put images */}
              <div className="img_2"></div>
              <div className="grid_four">

              <div className="img_1"></div>
              <div className="img_1"></div>
              <div className="img_1"></div>
              <div className="img_1"></div>
              <div className="img_1"></div>
              <div className="img_1"></div>

              </div>
              
            </div>
            <section className="main_second">
              <div className="menu">
                <h1 className="menu_heading">MENU</h1>
                <div className="event">
                  <div className="inner_event">
                  <h2 className="date">Febuary 8th</h2>
                  <div className="border_date"></div>
                  <div className="border_date">
            <div>
            <p>Waffled Hash Brown Breakfast Sandwich</p>
            <p className="price_item">$10.00</p>
            </div>
            <div>
            <p>Hickory Pulled Pork Fries</p>
            <p className="price_item">$10.00</p>
            </div>
            <div>
            <p>Mexi-Cheese Lava Fry Tower</p>
            <p className="price_item">$10.00</p>
            </div>
            <div>
            <p>Roasted Garlic Spinach Artichoke Dip</p>
            <p className="price_item">$10.00</p>
            </div>
            <div>
            <p>Southwest Queso</p>
            <p className="price_item">$10.00</p>
            </div>
            <div>
            <p>Mexi-Cheese Lava Fry Tower</p>
            <p className="price_item">$10.00</p>
            </div>
          </div>
                  <div className="price">
                    <p>$120.00</p>
                  </div>
                  </div>
                </div>
                <button onClick={tog}  className="order_btn">Order Now</button>
              </div>
            </section>
        </section>
        <section className="mobile_image_grid}">
            <img src="food_1.jpg" alt=""/>
            <img src="food_1.jpg" alt=""/>
            <img src="food_1.jpg" alt=""/>
            <img src="food_1.jpg" alt=""/>
            <img src="food_1.jpg" alt=""/>
            <img src="food_1.jpg" alt=""/>
        </section>
        <footer className="footer">
        <Link href="https://google.com">
        <img  className="point" src="./instagram.png" alt=""/>
        </Link>
        </footer>
      </main>

    </div>
  )
}
