import React from "react";
import style from "./CardService.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function CardService({
  character,
  functionChangue,
  number,
  isOpen,
}) {
  return (
    <div className={style.contentAll} data-isOpen={isOpen}>
      <div className={style.contentPrimary}>
        <input type="checkbox" />
        <h6 className={style.title}>{character}</h6>
        <IoIosArrowDown
          size="25"
          className={style.arrow}
          onClick={() => functionChangue(number)}
        />
      </div>

      <p className={style.infoMore}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos laborum
        fugiat facilis, rerum, minima
      </p>
    </div>
  );
}
