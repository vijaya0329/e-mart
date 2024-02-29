import React from "react";
import { useCart } from "./context/CardContext";

const UserCard = () => {
  const { cartItems, addToCart } = useCart();

  return (
    <div>
      <div> Total No of products :: {cartItems.length}  </div>
      {cartItems.map((item) => {
        return <div className="cart-section">
          <div className="cart-img">
            <img src={item.image} alt="" />
          </div>
          <div className="cart-details">
            <h3>{item.product}</h3>
            <h2>{item.price}</h2>
            <h3>{item.model}</h3>
          </div>
        </div>;
      })}
    </div>
  );
};

export default UserCard;
