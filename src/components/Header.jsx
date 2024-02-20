import { Link } from "react-router-dom";

import style from "./Header.module.css";
import logo from ".././assets/images/logonindzyago.png";
import Search from "./Search";

export default function Header() {
  return (
    <div className={style.header}>
      <Link to="/">
        <div className={style.conteiner}>
          <img src={logo} alt="Nindzyago logo" className={style.logo} />
          <p className={style.text}>Ты в форме, пока ты в нашей форме</p>
        </div>
      </Link>
      <Search />
      <Link to="/cart">
        <button className={style.button}>Корзина</button>
      </Link>
    </div>
  );
}
