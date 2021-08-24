import React from "react";
import './MoviesCard.css';
import img from "../../../images/card-img.jpg";

function MoviesCard(props) {
    return(
        <div className="movies__card">
            <div className="movies__card-header">
                <div className="movies__card-text">
                    <p className="movies__card-title">33 слова о дизайне</p>
                    <span className="movies__card-time">1ч 47м</span>
                </div>
                <button className={`btn movies__card-btn movies__card-btn_${props.btnClass}`} onClick={props.onBtnClick}>
                </button>
            </div>
            <img src={ img } alt="Обложка карточки" className="movies__card-img"/>
        </div>
    );
}

export default MoviesCard;