import './Movies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import {AppContext} from "../../contexts/AppContext";

function Movies(props) {

    const context = React.useContext(AppContext);

    return (
        <div className='content'>
                <SearchForm
                handleSearch={props.handleSearch}
                setShortMovies={props.setShortMovies}
                />
                {context.isLoading && <Preloader/>}
                {context.movies && (
                    <MoviesCardList
                        btnClass={'addToFav'}
                        onMovieLike={ props.handleCardLike }
                        onMovieDislike={ props.handleMovieDelete }
                        checkLike={props.checkLike}
                    />
                )}
        </div>
    );
}

export default Movies;