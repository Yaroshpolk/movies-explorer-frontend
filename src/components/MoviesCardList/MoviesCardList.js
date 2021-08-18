import React from "react";
import './MoviesCardList.css';
import MoviesCard from "./MoviesCard/MoviesCard";

function MoviesCardList() {

    const addToFavorite = (evt) => {
        const btn = evt.target;

        btn.classList.toggle('movies__card-btn_active');
    }

    return(
        <section className="movies">
            <div className="movies__list">
                <MoviesCard onBtnClick={addToFavorite}/>
                <MoviesCard onBtnClick={addToFavorite}/>
                <MoviesCard onBtnClick={addToFavorite}/>
                <MoviesCard onBtnClick={addToFavorite}/>
                <MoviesCard onBtnClick={addToFavorite}/>
                <MoviesCard onBtnClick={addToFavorite}/>
            </div>
            <div className="movies__more">
                <button className="btn movies__more-btn">Ещё</button>
            </div>
        </section>
    );
}

export default MoviesCardList;