import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox({ setShortMovies }) {

    const [isChecked, setChecked] = React.useState(false);

    function onChange(event) {
        setChecked(event.target.checked);
        setShortMovies();
    }

    return(
        <div className='filter-checkbox'>
            <label className='filter-checkbox__label'>
                <input
                    type='checkbox'
                    className='filter-checkbox__input'
                    name='filterCheckbox'
                    id='filterCheckbox'
                    checked={isChecked}
                    onChange={(e) => onChange(e)}
                />
                <span className='filter-checkbox__span'></span>
            </label>
            <p className='filter__title'>Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;