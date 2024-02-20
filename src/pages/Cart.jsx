import { Link } from "react-router-dom";
import style from "./Cart.modules.css";

const Cart = () => {
  return (
    <div className={style.container}>
      <div className={style.buttons}>
        <Link to="/">
          <button>Вернуться назад</button>
        </Link>
        <button>Оплатить</button>
      </div>
    </div>
  );
};

export default Cart;
