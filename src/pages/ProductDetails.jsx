import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  //console.log(id);
  const products = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart);
  //console.log(cart);
  //console.log(products);
  const product = products.filter((item) => item.id === Number(id));
  //console.log(product);

  return (
    <>
      {product.map((item, i) => {
        return (
          <div className="product--details--container" key={i}>
            <div className="product--image">
              <img src={item.image} alt={item.title} />
              <div className="btns">
                {!cart.some((p) => p.id === item.id) ? (
                  <button
                    className="cart"
                    onClick={() => {
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: item,
                      });
                    }}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <button
                    className="cart remove"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_PRODUCT",
                        payload: item,
                      });
                    }}
                  >
                    Remove From Cart
                  </button>
                )}
                <button className="cart">Buy Now</button>
              </div>
            </div>
            <div className="product--details">
              <span className="title">{item.title}</span>
              <span className="price">$ {Math.floor(item.price)}</span>
              <span className="ratings">
                <span>Ratings:{item.rating.rate}</span>
              </span>
              <span className="description">
                <span>Description</span>
                <span>{item.description}</span>
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductDetails;
