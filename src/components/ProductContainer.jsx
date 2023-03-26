import React from "react";
import { useSelector } from "react-redux";
import SingleProduct from './SingleProduct'
const ProductContainer = () => {
  const product = useSelector((state) => state.product);
  const {Query} = useSelector(state => state.filter)
  console.log(Query);
  //console.log(product);
  return <div className="product--container">
    {Query ?product.filter(prod => prod.title.toLowerCase().includes(Query)).map((item,i)=>{
        return <SingleProduct prod={item} key={i}/>
    }):product.map((item,i)=>{
      return <SingleProduct prod={item} key={i}/>
  })}
  </div>;
};

export default ProductContainer;
