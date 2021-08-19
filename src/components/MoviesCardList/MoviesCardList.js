import React from "react";
import './MoviesCardList.css';
import MoviesCard from "./MoviesCard/MoviesCard";

function MoviesCardList(props) {

    return(
        <section className="movies">
            <div className="movies__list">
                <MoviesCard onBtnClick={props.btnAction} btnClass={ props.btnClass }/>
                <MoviesCard onBtnClick={props.btnAction} btnClass={ props.btnClass }/>
                <MoviesCard onBtnClick={props.btnAction} btnClass={ props.btnClass }/>
                <MoviesCard onBtnClick={props.btnAction} btnClass={ props.btnClass }/>
                <MoviesCard onBtnClick={props.btnAction} btnClass={ props.btnClass }/>
                <MoviesCard onBtnClick={props.btnAction} btnClass={ props.btnClass }/>
                <MoviesCard onBtnClick={props.btnAction} btnClass={ props.btnClass }/>
                <MoviesCard onBtnClick={props.btnAction} btnClass={ props.btnClass }/>
                <MoviesCard onBtnClick={props.btnAction} btnClass={ props.btnClass }/>
                <MoviesCard onBtnClick={props.btnAction} btnClass={ props.btnClass }/>
                <MoviesCard onBtnClick={props.btnAction} btnClass={ props.btnClass }/>
                <MoviesCard onBtnClick={props.btnAction} btnClass={ props.btnClass }/>
            </div>
            {props.moreBtn && (
                <div className="movies__more">
                    <button className="btn movies__more-btn">Ещё</button>
                </div>
            )}
        </section>
    );
}

export default MoviesCardList;