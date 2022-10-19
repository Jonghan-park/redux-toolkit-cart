import React from "react";
import { ChevronUp, ChevronDown } from "../icons";
import { removeItem, increse, decrese } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt="title" />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => dispatch(increse({ id }))}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            amount > 1 ? dispatch(decrese({ id })) : dispatch(removeItem(id));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
