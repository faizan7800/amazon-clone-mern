import React from "react";
import "../styles/Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
          alt="..."
        />
        <div className="home__row">
          <Product
            id="120"
            title="Amazon Basics Low-Profile Wired USB Keyboard with US Layout (QWERTY),"
            price={11.54}
            imgUrl="https://m.media-amazon.com/images/I/81cg9myC9kL._AC_UY218_.jpg"
            stars={5}
          />
          <Product
            id="122"
            title="Apple AirPods (2nd Generation) Wireless Earbuds with Lightning Charging Case Included. Over 24 Hours of Battery Life"
            price={12.11}
            imgUrl="https://m.media-amazon.com/images/I/7120GgUKj3L._AC_UL320_.jpg"
            stars={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="124"
            title="Sony ZX Series Wired On-Ear Headphones, Black MDR-ZX110"
            price={15.22}
            imgUrl="https://m.media-amazon.com/images/I/71ZC0hq5mGL._AC_UL320_.jpg"
            stars={3}
          />
          <Product
            id="125"
            title="iOttie Easy One Touch 5 Dashboard & Windshield Universal Car Mount Phone Holder Desk Stand for -iPhone"
            price={22.11}
            imgUrl="https://m.media-amazon.com/images/I/61Ei0ywt1lL._AC_UL320_.jpg"
            stars={5}
          />
          <Product
            id="126"
            title="LEVOIT Humidifiers for Bedroom Large Room Home, 6L Cool Mist Top Fill Essential Oil Diffuser for Baby and Plants, Smart App & Voice Control"
            price={99.1}
            imgUrl="https://m.media-amazon.com/images/I/61W8U9+GjyL._AC_UL320_.jpg"
            stars={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="127"
            title="SAMSUNG 85-Inch Class Crystal 4K UHD AU8000 Series HDR, 3 HDMI Ports, Motion Xcelerator, Tap View, PC on TV, Q Symphony, Smart TV with Alexa Built-In (UN85AU8000FXZA, 2021 Model)"
            price={139.0}
            imgUrl="https://m.media-amazon.com/images/I/71LJJrKbezL._AC_SL1500_.jpg"
            stars={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
