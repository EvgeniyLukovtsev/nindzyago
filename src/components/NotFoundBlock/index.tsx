import React from "react";
import style from "./NotFoundBlock.module.css";

const NotfoundBlock = () => {
  return (
    <h1 className={style.root}>
      <span>😕</span>
      <br />
      <h1>Ничего не найдено</h1>
    </h1>
  );
};

export default NotfoundBlock;
