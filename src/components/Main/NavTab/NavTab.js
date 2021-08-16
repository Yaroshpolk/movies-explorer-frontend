import './NavTab.css';
import React from "react";
import { Link } from 'react-router-dom';

function NavTab() {
    return (
        <section className="navtab">
            <ul className="navtab__list">
                <li className="navtab__item">
                    <Link className='navtab__link' to=''>О проекте</Link>
                </li>
                <li className="navtab__item">
                    <Link className='navtab__link' to=''>Технологии</Link>
                </li>
                <li className="navtab__item">
                    <Link className='navtab__link' to=''>Студент</Link>
                </li>
            </ul>
        </section>
    );
}

export default NavTab;