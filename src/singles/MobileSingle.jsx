import React from "react";
import { mobileData } from "../stores/components/data/mobiles";
import { useParams } from "react-router-dom";
import { useCart } from "../stores/context/CardContext";

const MobileSingle = () => {
  const { id } = useParams();

  const { addToCart, cartItems, removeFromCart } = useCart();

  const product = mobileData.find((item) => item.id === id);

  return (
    <div className="ind-page">
      <div className="ind-img">
        <img src={product.image} alt="" />
      </div>
      <div className="ind-details space">
        <div className="ind-company">
          <h2>{product.company}</h2>
        </div>
        <div className="ind-model space">
          <h3>{product.model}</h3>
        </div>
        <div className="ind-price space">
          <h2>{product.price}</h2>
        </div>
        <div className="ind-desc" space>
          <p>{product.description}</p>
        </div>
        {cartItems.includes(product) ? (
          <div>Added to Cart. <button onClick={() => removeFromCart(product)}>Remove</button></div>
        ) : (
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default MobileSingle;
