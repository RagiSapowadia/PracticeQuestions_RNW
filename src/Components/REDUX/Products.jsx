import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartAction";
import { Link } from "react-router";

export default function Products() {
  const products = useSelector((state) => state.products);  
  const dispatch = useDispatch();

  function handleAddToCart(item) {
    dispatch(addToCart(item));  
  }

  return (
    <div>
      <h1>Products</h1>
      { 
        products.map((item, index) => (
          <div key={index}>
            <img src={item.img} height="100%" alt={item.name} />
            <p>{item.name} </p>
            <span>{item.price}</span>
            <Link to={`/product/${item.id}`}>
            
            <button onClick={() => handleAddToCart(item)}>ADD TO CART</button> {/* ✅ Pass item */}
            </Link>
          </div>
        ))
    }
    </div>
  );
}
