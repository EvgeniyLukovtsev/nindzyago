import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import style from "./Header.module.css";
import logo from ".././assets/images/logonindzyago.png";
import cartLogo from "../assets/images/cart.png";
import Search from "./Search";

export default function Header() {
  const { items, totalPrice } = useSelector((state) => state.cart);

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
