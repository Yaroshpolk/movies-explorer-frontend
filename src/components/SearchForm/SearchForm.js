import React from "react";
import './SearchForm.css';
import icon from '../../images/search-icon.svg';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
    return(
        <section className="search">
            <form className="search__form" name='search'>
                <div className="search__block">
                    <img src={ icon } alt="Поиск" className="search__img"/>
                    <input type="text" className="search__input" placeholder='Фильм' required/>
                    <input type='submit' className="btn search__submit" value=''></input>
                </div>
                <FilterCheckbox />
            </form>
        </section>
    );
}

export default SearchForm;