import './Footer.css';
import React from 'react';
import {Link, Route} from "react-router-dom";

function Footer() {
    return(
        <Route exact path={['/', '/movies', '/saved-movies', '/profile']}>
            <footer className="footer">
                <p className="footer__message">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <nav className="footer__nav">
                    <p className="footer__year">@ 2021</p>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <Link to={{ pathname: 'https://practicum.yandex.ru/' }} target='_blank' rel='noopener noreferrer'
                                  className='link footer__link'>
                                Яндекс.Практикум
                            </Link>
                        </li>
                        <li className="footer__item">
                            <Link to={{ pathname: 'https://github.com/' }}  target='_blank' rel='noopener noreferrer'
                                  className='link footer__link'>
                                Github
                            </Link>
                        </li>
                        <li className="footer__item">
                            <Link to={{ pathname: 'https://ru-ru.facebook.com/' }} target='_blank' rel='noopener noreferrer'
                                  className='link footer__link'>
                                Facebook
                            </Link>
                        </li>
                    </ul>
                </nav>
            </footer>
        </Route>
    );
}

export default Footer;