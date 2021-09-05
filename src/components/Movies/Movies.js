import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {

    return (
        <div className='content'>
                <SearchForm
                handleSearch={props.handleSearch}
                setShortMovies={props.setShortMovies}
                />
                    <MoviesCardList
                        btnClass={'addToFav'}
                        onMovieLike={ props.handleCardLike }
                        onMovieDislike={ props.handleMovieDelete }
                        checkLike={props.checkLike}
                    />
        </div>
    );
}

export default Movies;