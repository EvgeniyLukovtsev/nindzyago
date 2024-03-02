import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../redux/slices/cartSlice";

import style from "./SneakersBlock.module.css";

export default function SneakersBlock({ id, name, sizes, price, imageUrl }) {
  const dispatch = useDispatch();
  const [size, setSize] = useState(0);

  const onClickAdd = () => {
    const item = {
      id,
      name,
      price,
      imageUrl,
      size,
      sizes,
    };
    dispatch(addItem(item));
  };

  return (
    <div className={style.sneakersBlock}>
      <img src={imageUrl} alt="Sneakers" className={style.img} />
      <h4 className={style.name}>{name}</h4>
      <div className={style.sizes}>
        <ul>
          {sizes.map((value, index) => (
            <li
              onClick={() => setSize(index)}
              className={size === index ? style.li_active : style.li}
              key={value}
            >
              {value}
            </li>
          ))}
        </ul>
      </div>
      <div className={style.price}>{price} ₽</div>
      <button onClick={onClickAdd} className={style.button}>
        В карзину
      </button>
    </div>
  );
}
