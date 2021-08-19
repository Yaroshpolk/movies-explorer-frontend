import './PageNotFound.css';
import React from 'react';
import { useHistory } from "react-router-dom";

function PageNotFound() {

    const history = useHistory();

    return (
        <div className='content'>
            <div className="pageNotFound">
                <div className="message">
                    <h1 className="message__title">404</h1>
                    <p className="message__subtitle">Страница не найдена</p>
                </div>
                <button className="btn" onClick={history.goBack}>Назад</button>
            </div>
        </div>
    );
}

export default PageNotFound;