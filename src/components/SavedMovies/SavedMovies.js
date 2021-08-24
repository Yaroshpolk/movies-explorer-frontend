import './SavedMovies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {

    return (
        <div className='content'>
            <SearchForm />
            <MoviesCardList btnClass={'del'}/>
        </div>
    );
}

export default SavedMovies;
