import './NavTab.css';
import React from "react";

function NavTab() {
    return (
        <section className="navtab">
            <ul className="navtab__list">
                <li className="navtab__item">
                    <a className='link navtab__link' href='#aboutProject'>О проекте</a>
                </li>
                <li className="navtab__item">
                    <a className='link navtab__link' href='#techs'>Технологии</a>
                </li>
                <li className="navtab__item">
                    <a className='link navtab__link' href='#student'>Студент</a>
                </li>
            </ul>
        </section>
    );
}

export default NavTab;