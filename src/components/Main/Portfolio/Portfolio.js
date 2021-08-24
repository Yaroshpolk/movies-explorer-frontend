import React from "react";
import './Portfolio.css';
import arrow from '../../../images/arrow.svg';

function Portfolio() {
    return (
        <section className="portfolio">
            <h3 className="portfolio__title">Портфолио</h3>
            <ul className="portfolio__list">
                <li className="portfolio__item">
                    <a href="https://github.com/Yaroshpolk/how-to-learn" className="link portfolio__link">
                        <p className="portfolio__item-name">Статичный сайт</p>
                        <img src={ arrow } alt="Переход по ссылке" className="portfolio__item-arrow"/>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a href="https://github.com/Yaroshpolk/russian-travel" className="link portfolio__link">
                        <p className="portfolio__item-name">Динамичный сайт</p>
                        <img src={ arrow } alt="Переход по ссылке" className="portfolio__item-arrow"/>
                    </a>
                </li>
                <li className="portfolio__item">
                    <a href="https://github.com/Yaroshpolk/react-mesto-api-full" className="link portfolio__link">
                        <p className="portfolio__item-name">Одностраничное приложение</p>
                        <img src={ arrow } alt="Переход по ссылке" className="portfolio__item-arrow"/>
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;