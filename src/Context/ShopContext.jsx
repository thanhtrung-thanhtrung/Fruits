// eslint-disable-next-line no-unused-vars
import { createContext, useEffect, useState } from "react";
import { products } from "../assets/products";
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom"
// Context to share shop data
// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setsearch] = useState("");
  const [showsearch, setshowsearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = async(itemId,size)=>{
    if (!size) {
      toast.error('Select product kilo');
      return;
    }

    let cartData = structuredClone(cartItems);
    if (cartData[itemId]){
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      }
      else{
        cartData[itemId][size] = 1;
      }
    }
    else{
      cartData[itemId]= {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  }

  
 const getCartCount = ()=>{
    let totalCount = 0 ;
    for(const items in cartItems){
      for(const item in cartItems[items]){
        try {
          if (cartItems[items][item]>0) {
            totalCount += cartItems[items][item];
          }
        // eslint-disable-next-line no-unused-vars
        } catch (error) { /* empty */ }
      }
    }
    return totalCount;
 }

 const updateQuantity = async (itemId,size,quantity)=>{

  let cartData = structuredClone(cartItems);
  cartData[itemId][size] = quantity;
  setCartItems(cartData);
 } 
 const getCartAmount =  () =>{
    let totalAmount = 0;
    for(const items in cartItems){
      let itemInfo = products.find((product)=> product.id==items);
      for(const item in cartItems[items]){
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        // eslint-disable-next-line no-unused-vars
        } catch (error) { /* empty */ }
      }
    }
    return totalAmount;
 }
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setsearch,
    showsearch,
    cartItems,
    updateQuantity,
    addToCart,
    getCartCount,
    getCartAmount,
    navigate,
    setshowsearch,
  };

  return (
    // eslint-disable-next-line react/prop-types
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
