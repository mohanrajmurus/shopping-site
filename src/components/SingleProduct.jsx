import React from 'react'
import { NavLink } from 'react-router-dom';

const SingleProduct = ({prod}) => {
  //console.log(prod);
  return (
    <div className='product'>
      <div className="product--image">
        <img src={prod.image} alt="" />
      </div>
      <div className="product--title">
        <NavLink to={`products/${prod.id}`}>
        <span>{prod.title}</span>
        </NavLink>
      </div>
      <div className="product--details">
        <span className="rating">Ratings:{prod.rating.rate}</span>
        <span className="count">Stock: {prod.rating.count}</span>
      </div>
    </div>
  )
}

export default SingleProduct