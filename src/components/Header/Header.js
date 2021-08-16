import './Header.css';
import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import logo from '../../images/logo.svg';
import illustration from '../../images/header-illustration.svg';

function Header() {
    return (
        <>
            <Route exact path='/'>
                <header className='header'>
                    <div className="header__menu">
                        <Link to='/'>
                            <img src={ logo } alt='Логотип' className='header__logo'/>
                        </Link>
                        <nav className='header__nav'>
                            <div className="header__links">
                                <NavLink to='signup' className='header__link' activeClassName='header__link_active'>
                                    Регистрация
                                </NavLink>
                                <NavLink to='signup' className='header__link' activeClassName='header__link_active'>
                                    <button className='header__signin-btn'>Войти</button>
                                </NavLink>
                            </div>
                        </nav>
                    </div>
                </header>
            </Route>

            <Route path={['/movies', '/saved-movies', '/profile']}>
                <header className='header header_logged'>
                    <div className="header__menu">
                        <Link to='/'>
                            <img src={ logo } alt='Логотип' className='header__logo'/>
                        </Link>
                        <nav className='header__nav'>
                            <div className="header__links">
                                <NavLink to='signup' className='header__link' activeClassName='header__link_active'>
                                    Регистрация
                                </NavLink>
                                <NavLink to='signup' className='header__link' activeClassName='header__link_active'>
                                    <button className='header__signin-btn'>Войти</button>
                                </NavLink>
                            </div>
                        </nav>
                    </div>
                </header>
            </Route>
        </>
    );
}

export default Header;