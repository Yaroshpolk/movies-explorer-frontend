import React from "react";
import './AboutMe.css';
import photo from '../../../images/photo.jpg';

function AboutMe() {
    return (
        <section className="aboutMe" id='student'>
            <h3 className="aboutMe__title">Студент</h3>
            <div className="aboutMe__info">
                <div className="aboutMe__text">
                    <h3 className="aboutMe__name">Виталий</h3>
                    <p className="aboutMe__short">Фронтенд-разработчик, 30 лет</p>
                    <p className="aboutMe__tale">
                        Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                        С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
                        начал заниматься фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <ul className="aboutMe__links">
                        <li className="aboutMe__link">
                            <a href="https://ru-ru.facebook.com/" className="link">Facebook</a>
                        </li>
                        <li className="aboutMe__link">
                            <a href="https://github.com/Yaroshpolk" className="link">GitHub</a>
                        </li>
                    </ul>
                </div>
                <img className="aboutMe__photo" src={ photo } alt='Фото разработчика'/>
            </div>
        </section>
    );
}

export default AboutMe;