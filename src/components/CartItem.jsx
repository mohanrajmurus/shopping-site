import React from "react";
import { useDispatch } from "react-redux";

const CartItem = ({ prod }) => {
  const dispatch = useDispatch();
  return (
    <div className="single--cart">
      <div className="product--image">
        <img src={prod.image} alt={prod.title} />
      </div>
      <div className="product--details">
        <span className="title">{prod.title}</span>
        <span className="price">Price:{Math.floor(prod.price)}</span>
        <div className="btns">
          <button
            className="increase"
            onClick={() => dispatch({ type: "INCREASE_QTY", payload: prod })}
          >
            +
          </button>
          <span>{prod.Qty}</span>
          <button
            className="decrease"
            disabled={prod.Qty === 1 ? true : false}
            onClick={() => dispatch({ type: "DECREASE_QTY", payload: prod })}
          >
            -
          </button>
          <span>
            <button className="remove"
              onClick={() => {
                dispatch({
                  type: "REMOVE_PRODUCT",
                  payload: prod,
                });
              }}
            >
              Remove
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
