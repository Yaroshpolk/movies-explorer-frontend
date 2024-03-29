import React from "react";
import './SearchForm.css';
import icon from '../../images/search-icon.svg';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import formValidator from "../../utils/FormValidator";
import {AppContext} from "../../contexts/AppContext";

function SearchForm(props) {

    const { values, handleChange, isValid } = formValidator();
    const { key } = values;

    const context = React.useContext(AppContext);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        isValid && !context.isLoading && props.handleSearch(key);
    }


    return(
        <section className="search">
            <form className="search__form" name='search' onSubmit={handleSubmit} noValidate>
                <div className="search__block">
                    <img src={ icon } alt="Поиск" className="search__img"/>
                    <input
                        type="text"
                        className="search__input"
                        placeholder='Фильм'
                        id='key'
                        name='key'
                        value={key || ''}
                        required
                        onChange={handleChange}
                        disabled={context.isLoading}
                    />
                    <input
                        type='submit'
                        className={`btn search__submit ${!isValid && 'search__submit_disabled'}`}
                        value=''
                        disabled={!isValid && !context.isLoading && true}
                    >

                    </input>
                </div>
                <FilterCheckbox
                    setShortMovies={props.setShortMovies}
                />
            </form>
        </section>
    );
}

export default SearchForm;