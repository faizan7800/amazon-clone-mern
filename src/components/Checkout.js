import React from "react";
import { useStateValue } from "../StateProvider";
import "../styles/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import FlipMove from "react-flip-move";
import { useState } from "react";
function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <img
            className="checkout__ad"
            src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_NotApproved._TTW_.jpg"
            alt=""
          />
          <h3>Hello, {user?.email || "Guest"}</h3>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket.map(({ id, title, imgUrl, price, stars }) => (
            <CheckoutProduct
              id={id}
              title={title}
              imgUrl={imgUrl}
              price={price}
              stars={stars}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
