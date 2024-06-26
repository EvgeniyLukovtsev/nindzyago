import { useState } from "react";
import { useDispatch } from "react-redux";

import { addItem } from "../redux/cart/slice";
import style from "./SneakersBlock.module.css";
import ModalImage from "./Modal/ModalImage";
import ModalCart from "./Modal/ModalCart";

interface SneakersBlockProps {
  id: number;
  name: string;
  price: number;
  sizes: number[];
  imageUrl: string;
  imagesUrl: string[]
}

const SneakersBlock: React.FC<SneakersBlockProps> = ({
  id,
  name,
  sizes,
  price,
  imageUrl,
  imagesUrl
}) => {
  const dispatch = useDispatch();
  const [size, setSize] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  const onClickAdd = () => {
    const item = {
      number: Math.random(),
      id,
      name,
      price,
      imageUrl,
      size,
      sizes,
      imagesUrl
    };
    dispatch(addItem(item));
    setIsVisible(true);
  };

  return (
    <>
      <ModalCart
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        name={name}
        price={price}
        imageUrl={imageUrl}
        size={size}
        sizes={sizes}
      />
      <ModalImage
        visible={visible}
        setVisible={setVisible}
        imagesUrl={imagesUrl}
      />
      <div className={style.sneakersBlock}>
        <img
          src={imageUrl}
          onClick={() => setVisible(true)}
          alt="Sneakers"
          className={style.img}
        />
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
          В корзину
        </button>
      </div>
    </>
  );
};

export default SneakersBlock;
