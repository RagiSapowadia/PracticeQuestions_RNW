import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQty, minusQty, removeProduct } from "./CartAction";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      { 
        cart.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt={item.name} height="100%" />
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <button onClick={() => dispatch(minusQty(item.id))}>-</button>
            <span>{item.qty}</span>
            <button onClick={() => dispatch(addQty(item.id))}>+</button>
            <button onClick={() => dispatch(removeProduct(item.id))}>Remove</button>
          </div>
        ))
      }
    </div>
  );
}
