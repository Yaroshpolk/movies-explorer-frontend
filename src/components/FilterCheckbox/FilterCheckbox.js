import React from "react";
import './FilterCheckbox.css';

function FilterCheckbox() {
    return(
        <div className='filter-checkbox'>
            <label className='filter-checkbox__label'>
                <input type='checkbox' className='filter-checkbox__input' name='filterCheckbox'
                    id='filterCheckbox' />
                <span className='filter-checkbox__span'></span>
            </label>
            <p className='filter__title'>Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;