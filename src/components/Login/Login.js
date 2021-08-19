import './Login.css';
import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

function Login() {

    return (
        <div className='content'>
            <section className="login">
                <Link to='/' className='logo-container'>
                    <img src={ logo } alt='Логотип' className='logo'/>
                </Link>
                <h2 className='login__title'>Рады видеть!</h2>
                <form className='form login__form' name='signInForm'>

                    <div className="inputs">
                        <label className="field login__form-field">
                            <span className="field__preinput-span">Email</span>
                            <input className="input" id="email" type="Email" placeholder=""
                                   name="email" minLength='2' required  />
                            <span className="field__input-error"></span>
                        </label>

                        <label className="field login__form-field">
                            <span className="field__preinput-span">Пароль</span>
                            <input type='password' className='input' id='password' name='password' minLength='8'
                                   placeholder='' required  />
                            <span className="field__input-error">Что-то пошло не так...</span>
                        </label>
                    </div>

                    <button className='btn submit login__form-submit' type='submit'>Войти</button>
                    <div className="form__underSubm-link">Ещё не зарегистрированы?
                        <Link className='link' to='/signup'>Регистрация</Link>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Login;