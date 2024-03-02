import { useDispatch, useSelector } from "react-redux";

import style from "./Cartitem.module.css";
import { clearItems, removeItem } from "../redux/slices/cartSlice";

const CartItem = (id, name, price, size, imageUrl, sizes) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const onClicRemove = () => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      {items.map(({ id, imageUrl, name, price, size, sizes }, i) => {
        return (
          <div key={i} className={style.container}>
            <img src={imageUrl} className={style.img} />
            <div>
              <h3 className={style.name}>{name}</h3>
              <p className={style.size}>Размер {sizes[size]}</p>
            </div>
            <h2 className={style.price}>{price}₽</h2>
            <p onClick={onClicRemove} className={style.button}>
              💢
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
