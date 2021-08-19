import React from "react";
import './Navigation.css';
import { Link, NavLink } from "react-router-dom";

function Navigation() {
    const [isLogged, setIsLogged] = React.useState(false);

    React.useState(() => {
        setIsLogged(true);
    })

    return (
        <nav className='navigation'>
            <div className="navigation__links">
                {isLogged && (
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

            {isLogged ? (
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
    );
}

export default Navigation;