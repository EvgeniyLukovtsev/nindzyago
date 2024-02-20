import { useState } from "react";

import style from "./SneakersBlock.module.css";

export default function SneakersBlock({ name, sizes, price, imageUrl }) {
  const [size, setSize] = useState(0);

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
      <div className={style.price}>{price} P</div>
      <button className={style.button}>В карзину</button>
    </div>
  );
}
