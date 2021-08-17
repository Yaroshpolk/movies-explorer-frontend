import React from "react";
import './Techs.css';

function Techs() {
    return (
        <section className="techs" id='techs'>
            <h3 className="techs__title">Технологии</h3>
            <div className="techs__text">
                <div className="techs__subtitle">7 технологий</div>
                <p className="techs__description">На курсе веб-разработки мы освоили технологии,
                    которые применили в дипломном проекте.</p>
            </div>
            <ul className="techs__list">
                <li className="techs__item">HTML</li>
                <li className="techs__item">CSS</li>
                <li className="techs__item">JS</li>
                <li className="techs__item">React</li>
                <li className="techs__item">Git</li>
                <li className="techs__item">Express.js</li>
                <li className="techs__item">mongoDB</li>
            </ul>
        </section>
    );
}

export default Techs;