import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";

import style from "./Header.module.css";
import logo from ".././assets/images/logonindzyago.png";
import cartLogo from "../assets/images/cart.png";
import Search from "./Search";
import { cartSelector } from "../redux/slices/cart/selectors";

export default function Header() {
  const { items, totalPrice } = useSelector(cartSelector);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem("cart", json);
    }
    isMounted.current = true;
  }, [items]);

  return (
    <div className={style.header}>
      <div className={style.conteiner}>
        <Link to="/">
          <img src={logo} alt="Nindzyago logo" className={style.logo} />
          <p className={style.text}>Ты в форме, пока ты в нашей форме</p>
        </Link>
      </div>
      <Search />
      <Link to="/cart">
        <button className={style.button}>
          <span>
            {totalPrice} ₽ | {items.length}
          </span>
          <img src={cartLogo} className={style.cartLogo} />
        </button>
      </Link>
    </div>
  );
}
