export const addToCart = (payload) => ({
    type: "ADD_TO_CART",
    payload
  });
  
  export const addQty = (id) => ({
    type: "ADD_QTY",
    payload: id
  });
  
  export const minusQty = (id) => ({
    type: "MINUS_QTY",
    payload: id
  });
  
  export const removeProduct = (id) => ({
    type: "REMOVE_PRODUCT",
    payload: id
  });
  