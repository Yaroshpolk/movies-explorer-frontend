import React from "react";
import './MoviesCard.css';
import img from "../../../images/card-img.jpg";


function MoviesCard(props) {

    const data = props.movie;
    const imgLink = `https://api.nomoreparties.co${data.image.url}`;
    const isLiked = props.checkLike(data);

    const timeConverter = (time) => {
        const hours = Math.floor(time / 60);
        const minutes = time % 60;
        return `${hours ? hours + 'ч' : ''} ${minutes}м`;
    };

    function handleLike() {
        props.onMovieLike(data);
    }

    function handleDislike() {
        props.onMovieDislike(data);
    }

    return(
        <div className="movies__card">
            <div className="movies__card-header">
                <div className="movies__card-text">
                    <p className="movies__card-title">{data.nameRU}</p>
                    <span className="movies__card-time">{timeConverter(data.duration)}</span>
                </div>
                <button className={`btn movies__card-btn ${isLiked && 'movies__card-btn_active'} movies__card-btn_${props.btnClass}`}
                        onClick={props.btnClass === 'addToFav' ? (isLiked ? handleDislike : handleLike) : handleDislike}>
                </button>
            </div>
            <a href={data.trailerLink} className='link'>
                <img src={props.btnClass === 'addToFav' ? imgLink : data.image} alt={data.name} className="movies__card-img"/>
            </a>
        </div>
    );
}

export default MoviesCard;