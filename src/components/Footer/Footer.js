import './Footer.css';
import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';

function Footer() {
    return(
        <footer className="footer">
            <p className="footer__message">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <nav className="footer__nav">
                <p className="footer__year">@ 2021</p>
                <ul className="footer__list">
                    <li className="footer__item">
                        <a href="https://practicum.yandex.ru/" className="link footer__link">Яндекс.Практикум</a>
                    </li>
                    <li className="footer__item">
                        <a href="https://github.com/Yaroshpolk" className="link footer__link">Github</a>
                    </li>
                    <li className="footer__item">
                        <a href="https://ru-ru.facebook.com/" className="link footer__link">Facebook</a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;