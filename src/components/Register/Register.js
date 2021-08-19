import './Register.css';
import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';

function Register() {

    return (
        <div className='content'>
            <section className="registration">
                <Link to='/' className='logo-container'>
                    <img src={ logo } alt='Логотип' className='logo'/>
                </Link>
                <h2 className='registration__title'>Добро пожаловать!</h2>
                <form className='form registration__form' name='signUpForm'>

                    <div className="inputs">
                        <label className="field registration__form-field">
                            <span className="field__preinput-span">Имя</span>
                            <input className="input" id="name" type="text" placeholder=""
                                   name="name" minLength='2' required  />
                            <span className="field__input-error"></span>
                        </label>

                        <label className="field registration__form-field">
                            <span className="field__preinput-span">Email</span>
                            <input className="input" id="email" type="Email" placeholder=""
                                   name="email" minLength='2' required  />
                            <span className="field__input-error"></span>
                        </label>

                        <label className="field registration__form-field">
                            <span className="field__preinput-span">Пароль</span>
                            <input type='password' className='input input_error' id='password' name='password' minLength='8'
                                   placeholder='' required  />
                            <span className="field__input-error field__input-error_visible">Что-то пошло не так...</span>
                        </label>
                    </div>

                    <button className='btn submit registration__form-submit' type='submit'>Зарегистрироваться</button>
                    <div className="form__underSubm-link">Уже зарегистрированы?
                        <Link className='link' to='/signin'>Войти</Link>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Register;