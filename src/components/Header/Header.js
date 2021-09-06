import './Header.css';
import React from 'react';
import { Link, Route } from 'react-router-dom';
import logo from '../../images/logo.svg';
import Navigation from "../Navigation/Navigation";

function Header() {

    return (
        <>
            <Route exact path='/'>
                <header className='header'>
                    <div className="header__menu">
                        <Link to='/' className='logo-container'>
                            <img src={ logo } alt='Логотип' className='logo'/>
                        </Link>
                        <Navigation />
                    </div>
                </header>
            </Route>

            <Route path={['/movies', '/saved-movies', '/profile']}>
                <header className='header header_logged'>
                    <div className="header__menu">
                        <Link to='/' className='logo-container'>
                            <img src={ logo } alt='Логотип' className='header__logo'/>
                        </Link>
                        <Navigation />
                    </div>
                </header>
            </Route>
        </>
    );
}

export default Header;