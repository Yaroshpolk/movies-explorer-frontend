import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies() {

    const addToFavorite = (evt) => {
        const btn = evt.target;

        btn.classList.toggle('movies__card-btn_active');
    }

    return (
        <div className='content'>
            <SearchForm />
            <MoviesCardList btnClass={'addToFav'} btnAction={ addToFavorite } moreBtn={true}/>
        </div>
    );
}

export default Movies;