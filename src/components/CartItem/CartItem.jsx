import React from "react";

import {
  addToCart,
  removeFromCart,
  decrement,
} from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";

import Counter from "../Counter/Counter";
import styles from "./CartItem.module.scss";

const CartItem = ({ id, counter, name, imageUrl, totalItemPrice, price }) => {
  const dispatch = useDispatch();

  const onClickRemove = () => {
    dispatch(removeFromCart(id));
  };

  const onClickIncrement = () => {
    if (counter < 30) dispatch(addToCart({ id, counter: 1, price }));
  };
  const onClickDecrement = () => {
    if (counter > 1) dispatch(decrement({ id, counter, price }));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.img_holder}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.price}>{(price * counter).toFixed(2)}₴</div>
      </div>
      <div className={styles.counter_wrapper}>
        <Counter
          flex={true}
          counter={counter}
          onClickAdd={() => onClickIncrement()}
          onClickRemove={() => onClickDecrement()}
        />
      </div>
      <button onClick={() => onClickRemove()} className={styles.remove_button}>
        Delete
      </button>
    </div>
  );
};

export default CartItem;