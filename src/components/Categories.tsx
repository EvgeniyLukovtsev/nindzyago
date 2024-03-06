import React from "react";

import style from "./Categories.module.css";

interface CategoriesProps {
  value: number;
  onClickCategory: (i: number) => void;
}

const categories = [
  "Все",
  "Марафонки",
  "Полумарафонки",
  "Трейловые",
  "Кроссовые",
  "Карбоновые",
];

const Categories: React.FC<CategoriesProps> = ({ value, onClickCategory }) => {
  return (
    <div className={style.Categories}>
      <ul>
        {categories.map((categoryName, i) => (
          <li
            onClick={() => onClickCategory(i)}
            className={value === i ? style.active : style.unactive}
            key={i}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
