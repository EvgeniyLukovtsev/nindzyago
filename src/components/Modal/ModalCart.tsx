import { Link } from "react-router-dom";
import style from "./ModalCart.module.css";

interface ModalProps {
  isVisible: boolean;
  setIsVisible: (value:boolean)=> void;
  name: string;
  price: number;
  imageUrl: string;
  size: number;
  sizes: number[];
}

const ModalCart: React.FC<ModalProps> = ({
  isVisible,
  setIsVisible,
  name,
  price,
  imageUrl,
  size,
  sizes,
}) => {
  if (!isVisible) {
    return null;
  }
  return (
    <div className={style.root} onClick={() => setIsVisible(false)}>
      <div className={style.container} onClick={(e) => e.stopPropagation()}>
        <div className={style.modal_block}>
          <h2 className={style.text}>Товар добавлен в корзину</h2>
          <img src={imageUrl} className={style.img} />
          <h3 className={style.name}>{name}</h3>
          <p className={style.price}>
            Цена <strong>{price} ₽</strong>
          </p>
          <p className={style.size}>Размер {sizes[size]}</p>
          <div className={style.button_block}>
            <button
              className={style.button_back}
              onClick={() => setIsVisible(false)}
            >
              Продолжить покупки
            </button>
            <Link to="/cart">
              <button
                className={style.button_cart}
                onClick={() => setIsVisible(false)}
              >
                Перейти в корзину
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCart;
