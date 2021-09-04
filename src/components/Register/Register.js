import './Register.css';
import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import formValidator from '../../utils/FormValidator';

function Register(props) {

    const { values, handleChange, resetForm, errors, isValid } = formValidator();
    const {name, email, password} = values;

    function handleSubmit(evt) {
        evt.preventDefault();
        isValid && props.handleRegister({ name, email, password }, () => {
            resetForm();
        })
    }

    return (
        <div className='content'>
            <section className="registration">
                <Link to='/' className='logo-container'>
                    <img src={ logo } alt='Логотип' className='logo'/>
                </Link>
                <h2 className='registration__title'>Добро пожаловать!</h2>
                <form className='form registration__form' name='signUpForm' onSubmit={handleSubmit} noValidate>
                    <div className="inputs">
                        <label className={`field ${errors.name && "field_invalid"} registration__form-field`}>
                            <span className="field__preinput-span">Имя</span>
                            <input className='input'
                                   id="name"
                                   type="text"
                                   placeholder=""
                                   name="name"
                                   minLength='2'
                                   required
                                   value={name || ''}
                                   onChange={handleChange}/>
                            <span className="field__input-error">{errors.name}</span>
                        </label>

                        <label className={`field ${errors.email && "field_invalid"} registration__form-field`}>
                            <span className="field__preinput-span">Email</span>
                            <input className='input'
                                   id="email"
                                   type="Email"
                                   placeholder=""
                                   name="email"
                                   minLength='2'
                                   required
                                   value={email || ''}
                                   onChange={handleChange}/>
                            <span className="field__input-error">{errors.email}</span>
                        </label>

                        <label className={`field ${errors.password && "field_invalid"} registration__form-field`}>
                            <span className="field__preinput-span">Пароль</span>
                            <input className='input'
                                   type="password"
                                   id="password"
                                   name="password"
                                   minLength="8"
                                   placeholder=""
                                   required
                                   value={password || ''}
                                   onChange={handleChange}/>
                            <span className="field__input-error">{errors.password}</span>
                        </label>
                    </div>

                    <button className={ isValid ? 'btn submit registration__form-submit' :
                        'btn submit submit__disabled registration__form-submit' }
                            type='submit'
                            disabled={!isValid && true}>
                        Зарегистрироваться
                    </button>
                    <div className='form__underSubm-link'>Уже зарегистрированы?
                        <Link className='link' to='/signin'>Войти</Link>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Register;