import React from "react";
import './Navigation.css';
import { Link, NavLink } from "react-router-dom";
import { AppContext } from '../../contexts/AppContext';

function Navigation() {

    const context = React.useContext(AppContext);

    function burgerMenuAction () {
        document.querySelector('.burger-menu').classList.toggle('burger-menu_visible')
    }

    return (
        <>
            <nav className='navigation'>
                <div className="navigation__links">
                    {context.loggedIn && (
                        <>
                            <NavLink to='/movies' className='link' activeClassName='link_active'>
                                Фильмы
                            </NavLink>
                            <NavLink to='/saved-movies' className='link' activeClassName='link_active'>
                                Сохранённые фильмы
                            </NavLink>
                        </>
                    )}
                </div>

                {context.loggedIn ? (
                    <div className="navigation__user-links">
                        <NavLink to='/profile' className='link' activeClassName='link_active'>
                            Аккаунт
                        </NavLink>
                        <div className="navigation__user-icon">

                        </div>
                    </div>
                ) : (
                    <div className="navigation__auth-links">
                        <Link to='/signup' className='link'>
                            Регистрация
                        </Link>
                        <Link to='/signin' className='link'>
                            <button className='btn navigation__signin-btn'>Войти</button>
                        </Link>
                    </div>
                )}
            </nav>
            {context.loggedIn && (
                <nav className="navigation_mob">
                    <button className="btn navigation_mob__burger-btn" onClick={burgerMenuAction}>
                    </button>
                    <div className="burger-menu">
                        <div className="burger-menu__content">
                            <button className="btn burger-menu__close-btn" onClick={burgerMenuAction}>
                            </button>
                            <ul className="burger-menu__list">
                                <li className="burger-menu__item">
                                    <NavLink exact to='/' className='burger-menu__link' activeClassName='burger-menu__link_active'>
                                        Главная
                                    </NavLink>
                                </li>
                                <li className="burger-menu__item">
                                    <NavLink exact to='/movies' className='burger-menu__link' activeClassName='burger-menu__link_active'>
                                        Фильмы
                                    </NavLink>
                                </li>
                                <li className="burger-menu__item">
                                    <NavLink exact to='/saved-movies' className='burger-menu__link' activeClassName='burger-menu__link_active'>
                                        Сохранённые фильмы
                                    </NavLink>
                                </li>
                            </ul>
                            <div className="navigation__user-links">
                                <NavLink to='/profile' className='burger-menu__link' activeClassName='burger-menu__link_active'>
                                    Аккаунт
                                </NavLink>
                                <div className="navigation__user-icon">

                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            )}
        </>
    );
}

export default Navigation;