import React from "react";
import './Promo.css'
import illustration from "../../../images/header-illustration.svg";

function Promo() {
    return (
        <section className="promo">
            <img src={ illustration } alt='Логотип Я.Практикум' className='promo__img'/>
            <h2 className="promo__title">Учебный проект студента факультета Веб-разработки.</h2>
        </section>
    );
}

export default Promo;