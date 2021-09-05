import './SavedMovies.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {AppContext} from "../../contexts/AppContext";

function SavedMovies(props) {

    const context = React.useContext(AppContext);

    return (
        <div className='content'>
            <SearchForm
                handleSearch={props.handleSearch}
            setShortMovies={props.setShortMovies}
            />

            {context.savedMovies && (
                <MoviesCardList
                    btnClass={'del'}
                    checkLike={props.checkLike}
                    onMovieDislike={props.handleCardDelete}
                />
            )}

        </div>
    );
}

export default SavedMovies;
