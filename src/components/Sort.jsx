import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setSort } from "../redux/slices/filterSlice";

import style from "./Sort.module.css";

const list = [
  { name: "цене(от низ)", sortProperty: "-price" },
  { name: "цене(от выс)", sortProperty: "price" },
  { name: "алфавиту", sortProperty: "-name" },
];

export default function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);

  const [isVisible, setIsVisible] = useState(false);

  function onClickSelected(obj) {
    dispatch(setSort(obj));
    setIsVisible(false);
  }

  return (
    <div className={style.sort}>
      <>
        <b>Сортировка по:</b>
        <span className={style.span} onClick={() => setIsVisible(!isVisible)}>
          {sort.name}
        </span>
      </>
      {isVisible && (
        <div className={style.sort_popup}>
          <ul className={style.ul}>
            {list.map((obj, index) => (
              <li
                onClick={() => onClickSelected(obj)}
                className={
                  sort.sortProperty === obj.sortProperty
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
