import { useSelector, useDispatch } from "react-redux";
import { memo, useRef, useState } from "react";
import { setSort } from "../redux/slices/filter/slice";

import style from "./Sort.module.css";
import { RootState } from "../redux/store";

interface IList {
  name: string;
  sortProperty: string;
  sortType?: string;
}

export const list: IList[] = [
  { name: "цене(от низ)", sortProperty: "-price" },
  { name: "цене(от выс)", sortProperty: "price" },
  { name: "алфавиту", sortProperty: "-name" },
];

const Sort: React.FC = memo(() => {
  const dispatch = useDispatch();
  const sort = useSelector((state: RootState) => state.filter.sort);
  const sortRef = useRef<HTMLDivElement>(null);

  const [isVisible, setIsVisible] = useState(false);

  function onClickSelected(obj: IList) {
    dispatch(setSort(obj));
    setIsVisible(false);
  }

  return (
    <div ref={sortRef} className={style.sort}>
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
});

export default Sort;
