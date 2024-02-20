import { useState } from "react";
import style from "./Sort.module.css";

export default function Sort({ value, onClickSort }) {
  const [isVisible, setIsVisible] = useState(false);
  const list = [
    { name: "цене(от низ)", sortProperty: "-price" },
    { name: "цене(от выс)", sortProperty: "price" },
    { name: "алфавиту", sortProperty: "-name" },
  ];

  function onClickSelected(obj) {
    onClickSort(obj);
    setIsVisible(false);
  }

  return (
    <div className={style.sort}>
      <>
        <b>Сортировка по:</b>
        <span className={style.span} onClick={() => setIsVisible(!isVisible)}>
          {value.name}
        </span>
      </>
      {isVisible && (
        <div className={style.sort_popup}>
          <ul className={style.ul}>
            {list.map((obj, index) => (
              <li
                onClick={() => onClickSelected(obj)}
                className={
                  value.sortProperty === obj.sortProperty
                    ? style.li_active
                    : style.li
                }
                key={index}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
