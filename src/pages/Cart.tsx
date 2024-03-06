import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import style from "./Cart.module.css";
import cartLogo from "../assets/images/cart.png";
import CartItem from "../components/Cartitem";
import CartEmpty from "../components/CartEmpty";
import { clearItems } from "../redux/slices/cartSlice";
import { cartSelector } from "../redux/slices/cartSlice";

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector(cartSelector);

  const onClickClear = () => {
    dispatch(clearItems());
  };

  if (!totalPrice) {
    return <CartEmpty />;
  }

  return (
    <div>
      <div className={style.header}>
        <img src={cartLogo} className={style.cartLogo} />
        <h2 className={style.cart}>Корзина</h2>
        <h3 onClick={onClickClear} className={style.clear_cart}>
          🗑️Очистить корзину
        </h3>
      </div>
      <div className={style.container}>
        {items.map((item: any, i) => (
          <CartItem key={i} {...item} />
        ))}
      </div>
      <div className={style.count_price}>
        <p className={style.count_item}>
          Всего товаров: <b>{items.length}</b>
        </p>
        <p className={style.total_price}>
          Сумма заказа: <b>{totalPrice} ₽</b>
        </p>
      </div>
      <div className={style.buttons}>
        <Link to="/">
          <button className={style.button_1}>⇦ Вернуться назад</button>
        </Link>
        <button className={style.button_2}>Оплатить</button>
      </div>
    </div>
  );
};

export default Cart;
