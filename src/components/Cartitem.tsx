import { useDispatch } from "react-redux";
import React from "react";

import style from "./Cartitem.module.css";
import { removeItem } from "../redux/cart/slice";

interface CartItemProps {
  number: number;
  id: number;
  name: string;
  price: number;
  size: number;
  imageUrl: string;
  sizes: number[];
}

const CartItem: React.FC<CartItemProps> = ({
  number,
  id,
  name,
  price,
  size,
  imageUrl,
  sizes,
}) => {
  const dispatch = useDispatch();

  const onClicRemove = () => {
    dispatch(removeItem(number));
  };

  return (
    <div>
      <div className={style.container}>
        <img src={imageUrl} className={style.img} alt="sneaker" />
        <div>
          <h3 className={style.name}>{name}</h3>
          <p className={style.size}>Размер {sizes[size]}</p>
        </div>
        <h2 className={style.price}>{price}₽</h2>
        <p onClick={onClicRemove} className={style.button}>
          💢
        </p>
      </div>
    </div>
  );
};

export default CartItem;
