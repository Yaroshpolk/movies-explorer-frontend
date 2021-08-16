import React from "react";
import './AboutProject.css'

function AboutProject() {
    return (
        <section className="aboutProject">
            <h3 className="aboutProject__title">О проекте</h3>
            <div className="aboutProject__descriptions">
                <div className="aboutProject__description">
                    <h4 className="aboutProject__description-title">Дипломный проект включал 5 этапов</h4>
                    <p className="aboutProject__description-text">Составление плана, работу над бэкендом,
                        вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="aboutProject__description">
                    <h4 className="aboutProject__description-title">На выполнение диплома ушло 5 недель</h4>
                    <p className="aboutProject__description-text">У каждого этапа был мягкий и жёсткий дедлайн,
                        которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="aboutProject__timing">
                <div className="aboutProject__timing-item">
                    <div className="aboutProject__timing-bar">1 неделя</div>
                    <p className="aboutProject__timing-txt">Back-end</p>
                </div>
                <div className="aboutProject__timing-item">
                    <div className="aboutProject__timing-bar">4 недели</div>
                    <p className="aboutProject__timing-txt">Front-end</p>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;