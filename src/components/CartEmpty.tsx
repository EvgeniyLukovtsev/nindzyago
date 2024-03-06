import { Link } from "react-router-dom";

import style from "./CartEmpty.module.css";
import image from "../assets/images/cartempty.png";

const CartEmpty: React.FC = () => (
  <div className={style.root}>
    <h2 className={style.text}>Корзина пустая 😕</h2>
    <p className={style.text_second}>
      Вероятней всего, вы еще не добавили товар.
      <br />
      Для того, чтобы добавить товар, перейди на главную страницу.
    </p>
    <div>
      <img className={style.img} src={image} alt="Empty cart" />
    </div>
    <Link to="/">
      <button className={style.button}>Вернуться назад</button>
    </Link>
  </div>
);

export default CartEmpty;
