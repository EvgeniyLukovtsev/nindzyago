import { useState } from "react";

import style from "./Categories.module.css";

export default function Categories({ value, onClickCategory }) {
  const categories = [
    "Все",
    "Марафонки",
    "Полумарафонки",
    "Трейловые",
    "Кроссовые",
    "Карбоновые",
  ];

  return (
    <div className={style.Categories}>
      <ul>
        {categories.map((categoryName, index) => (
          <li
            onClick={() => onClickCategory(index)}
            className={value === index ? style.active : style.unactive}
            key={index}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}
