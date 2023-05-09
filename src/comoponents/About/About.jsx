import React from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import CardReview from "../CardReview/CardReview";
import style from "./About.module.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function About({ receiveDataAbout }) {
  //Animation scroll Navbar
  const aboutRef = useRef();

  useEffect(() => {
    const animationScroll = () => {
      const title = aboutRef.current;
      const { y } = title.getBoundingClientRect();
      receiveDataAbout(y);
    };
    window.addEventListener("scroll", animationScroll);
  }, []);
  //Animation scroll Navbar

  const [reviw, setReview] = useState(0);
  let reviews = [
    <CardReview
      reviewText={
        "Muy buen servicio, me ayudo a conseguir mi primer trabajo luego de la revision de mi CV."
      }
      nameUser={"kevin correa"}
      key={1}
    />,
    <CardReview
      reviewText={"Muy buen servicio, me ayudo a conseguir mi primer trabajo."}
      nameUser={"Uvi-user"}
      key={2}
    />,
    <CardReview
      reviewText={
        "Me ayudo a conseguir mi primer trabajo luego de la revision de mi CV."
      }
      nameUser={"Uvi-user02"}
      key={3}
    />,
  ];

  function changuePlanLeft() {
    const lengthReviws = reviews.length;
    setReview(reviw === 0 ? lengthReviws - 1 : reviw - 1);
  }

  function changuePlanRight() {
    const lengthReviws = reviews.length;
    setReview(reviw === lengthReviws - 1 ? 0 : reviw + 1);
  }

  return (
    <div className={style.contentAll} id="about" ref={aboutRef}>
      <div className={style.barra}></div>
      <h3>Nosotros</h3>
      <p className={style.description}>
        ¡Consigue el trabajo de tus sueños con nuestra ayuda! Somos una
        plataforma especializada en la corrección y confección de CV y perfil de
        LinkedIn, además de ofrecer consejos personalizados y simulacros de
        entrevistas para mejorar tus habilidades en el proceso de selección. Te
        brindamos una guía completa para la búsqueda de empleo y mucho más.
        ¡Únete a nosotros y maximiza tus oportunidades laborales hoy mismo!
      </p>
      <h4>Algunas recomendaciones de nuestos clientes en linkedin</h4>
      {window.innerWidth < 970 ? (
        <div className={style.contentReviws}>
          <IoIosArrowBack
            size="40"
            className={style.arrow}
            onClick={() => changuePlanLeft()}
          />
          {reviews[reviw]}
          <IoIosArrowForward
            size="40"
            className={style.arrow}
            onClick={() => changuePlanRight()}
          />
        </div>
      ) : (
        <div className={style.contentReviws}>
          {reviews.map((element) => element)}
        </div>
      )}
    </div>
  );
}
