import './Main.css';
import React from 'react';
import Promo from './Promo/Promo';
import NavTab from "./NavTab/NavTab";
import AboutProject from "./AboutProject/AboutProject";

function Main() {

    return (
        <div className='content'>
            <Promo/>
            <NavTab/>
            <AboutProject/>
        </div>
    );
}

export default Main;