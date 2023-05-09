import React from "react";
import style from "./Services.module.css";
import { Reorder } from "framer-motion";
import { useState } from "react";
import CardService from "../CardService/CardService";

export default function Services() {
  const [items, setItems] = useState([0, 1, 2, 3]);
  const [isOpen, setIsOpen] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  function changueOpen(number) {
    setIsOpen({
      0: false,
      1: false,
      2: false,
      3: false,
      [number]: !isOpen[number],
    });
  }

  return (
    <div className={style.contentAll} id="services">
      <div className={style.barra}></div>
      <h3 className={style.title}>Servicios</h3>
      <div className={style.card}>
        <h5 className={style.titleCard}>Caracteristicas</h5>
        <p className={style.subtitleCard}>Descripcion de seleccion</p>
        <Reorder.Group
          axis="y"
          values={items}
          onReorder={setItems}
          className={style.contentCards}
        >
          {items.map((item) => (
            <Reorder.Item key={item} value={item}>
              <CardService
                isOpen={isOpen[item]}
                number={item}
                functionChangue={changueOpen}
                character={"caracter 1"}
              />
            </Reorder.Item>
          ))}
        </Reorder.Group>
        <span>
          Donacion mas popular <br />
          $$$
        </span>
        <button className={style.buttonDonate}>Donar</button>
      </div>
    </div>
  );
}
