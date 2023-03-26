import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from '../components/CartItem'
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [total, setTotal] = useState(0)
  useEffect(()=>{
    setTotal(cart.reduce((acc,cur) => acc += Math.floor(cur.price)*cur.Qty,0))
  },[cart])
  //console.log(cart);
  return (
    <div className="cart--container">
      {cart.length > 0 ? cart.map((item,i)=>{
        return <CartItem  key={i} prod={item}/>
      }):<p>No Items in the cart</p>}
      <p className="total--price">Total Price:{total}</p>
    </div>
  );
};

export default Cart;
