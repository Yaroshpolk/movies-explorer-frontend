import React from "react";
import './MoviesCardList.css';
import MoviesCard from "./MoviesCard/MoviesCard";
import {AppContext} from "../../contexts/AppContext";
import {Route} from "react-router-dom";
import WindowSize from "../../utils/WindowSize";
import {
    LARGE_ADD_CARDS,
    LARGE_COUNT,
    LARGE_SCREEN,
    MEDIUM_ADD_CARDS,
    MEDIUM_COUNT,
    MEDIUM_SCREEN, SMALL_ADD_CARDS, SMALL_COUNT, SMALL_SCREEN
} from "../../utils/constants";

function MoviesCardList(props) {

    const [cardsCount, setCardsCount] = React.useState(0);
    const [cards, setCards] = React.useState(0);
    const screenSize = WindowSize();
    const context = React.useContext(AppContext);

    function increment() {
        setCardsCount(cardsCount + cards);
    }

    React.useEffect(() => {
        function resize() {
            if (screenSize >= LARGE_SCREEN) {
                setCardsCount(LARGE_COUNT);
                setCards(LARGE_ADD_CARDS);
            }
            if (screenSize < LARGE_SCREEN && screenSize > MEDIUM_SCREEN) {
                setCardsCount(MEDIUM_COUNT);
                setCards(MEDIUM_ADD_CARDS);
            }
            if (screenSize <= SMALL_SCREEN) {
                setCardsCount(SMALL_COUNT);
                setCards(SMALL_ADD_CARDS);
            }
        }
        resize();
    }, [screenSize]);

    return(
        <section className="movies">
            <Route path='/movies'>
                    <div className="movies__list">
                        {context.movies.length > cardsCount && context.movies.slice(0, cardsCount)
                            .map(movie => (
                                <MoviesCard
                                    key={movie.id}
                                    movie={movie}
                                    onMovieLike={props.onMovieLike}
                                    onMovieDislike={props.onMovieDislike}
                                    checkLike={props.checkLike}
                                    btnClass={ props.btnClass }
                                />
                            ))}
                        {context.movies.length <= cardsCount && context.movies.map((movie) => (
                                <MoviesCard
                                    key={movie.id}
                                    movie={movie}
                                    onMovieLike={props.onMovieLike}
                                    onMovieDislike={props.onMovieDislike}
                                    checkLike={props.checkLike}
                                    btnClass={ props.btnClass }
                                />
                            ))}
                    </div>

                {cardsCount <= context.movies.length && (
                    <div className="movies__more">
                        <button className="btn movies__more-btn" onClick={increment}>Ещё</button>
                    </div>
                )}
            </Route>
            <Route path='/saved-movies'>
                <div className="movies__list">
                    {context.savedMovies.length > cardsCount && context.savedMovies.slice(0, cardsCount)
                        .map(movie => (
                            <MoviesCard
                                key={movie.id}
                                movie={movie}
                                onMovieDislike={props.onMovieDislike}
                                checkLike={props.checkLike}
                                btnClass={ props.btnClass }
                            />
                        ))}
                    {context.savedMovies.length <= cardsCount && context.savedMovies.map((movie) => (
                        <MoviesCard
                            key={movie.id}
                            movie={movie}
                            onMovieDislike={props.onMovieDislike}
                            checkLike={props.checkLike}
                            btnClass={ props.btnClass }
                        />
                    ))}
                </div>

                {cardsCount <= context.savedMovies.length && (
                    <div className="movies__more">
                        <button className="btn movies__more-btn" onClick={increment}>Ещё</button>
                    </div>
                )}
            </Route>
        </section>
    );
}

export default MoviesCardList;