import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import carticon from "../images/cart-icon.png";
const Header = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="header">
      <nav className="navbar">
        <div className="navbar--logo">
          <NavLink to={"/"}>
            <h1 className="navbar--logo__title">Shopping Site</h1>
          </NavLink>
        </div>
        <div className="navbar--search__bar">
          <input
            type="text"
            placeholder="Search Product"
            onChange={(e) =>
              dispatch({ type: "SEARCH_PRODUCT", payload:  e.target.value.toLocaleLowerCase() })
            }
          />
        </div>
        <div className="navbar--cart">
          <span className="navbar--cart__icon">
            <NavLink to="/cart">
              <img src={carticon} alt="carticon" />
            </NavLink>
            <span>{cart.length}</span>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
