const initialState = {
    products: [
      {
        id: 1,
        name: "Shoes",
        price: "100$",
        img: "https://www.bing.com/th?id=OIP.NEkAY7UwnLf9sQ_3j2Ay0QHaHa&w=190&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
      },
      {
        id: 2,
        name: "Bag",
        price: "200$",
        img: "https://th.bing.com/th/id/OIP.YpPuZ7DcrFogvoTa0B1sbwHaJ4?w=154&h=205&c=7&r=0&o=5&pid=1.7"
      },
      {
        id: 3,
        name: "Smartphone",
        price: "500$",
        img: "https://th.bing.com/th/id/OIP.9YtA4DAk-6twHeqP8j4qvQAAAA?w=165&h=180&c=7&r=0&o=5&pid=1.7"
      }
    ],
    cart: [],
  };
  export const CartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, qty: 1 }]  
        };
  
      case "ADD_QTY":
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
          )
        };
  
      case "MINUS_QTY":
        return {
          ...state,
          cart: state.cart
            .map(item =>
              item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
            )
            .filter(item => item.qty > 0)  
        };
  
      case "REMOVE_PRODUCT":
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload)
        };
  
      default:
        return state;
    }
  };
  