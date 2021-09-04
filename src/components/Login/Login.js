import './Login.css';
import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import formValidator from '../../utils/FormValidator';

function Login(props) {

    const { values, handleChange, resetForm, errors, isValid } = formValidator();
    const { email, password } = values;

    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(values)
        isValid && props.handleLogin({ email, password }, () => {
            resetForm();
        })
    }

    return (
        <div className='content'>
            <section className="login">
                <Link to='/' className='logo-container'>
                    <img src={ logo } alt='Логотип' className='logo'/>
                </Link>
                <h2 className='login__title'>Рады видеть!</h2>
                <form className='form login__form' name='signInForm' onSubmit={handleSubmit} noValidate>
                    <div className="inputs">
                        <label className={`field ${errors.email && "field_invalid"} login__form-field`}>
                            <span className="field__preinput-span">Email</span>
                            <input
                                className="input"
                                id="email"
                                type="Email"
                                placeholder=""
                                name="email"
                                minLength='2'
                                required
                                value={email || ''}
                                onChange={handleChange} />
                            <span className="field__input-error">{errors.email}</span>
                        </label>

                        <label className={`field ${errors.password && "field_invalid"} login__form-field`}>
                            <span className="field__preinput-span">Пароль</span>
                            <input
                                type='password'
                                className='input'
                                id='password'
                                name='password'
                                minLength='8'
                                placeholder=''
                                required
                                value={password || ''}
                                onChange={handleChange} />
                            <span className="field__input-error">{errors.password}</span>
                        </label>
                    </div>

                    <button className={ isValid ? 'btn submit login__form-submit' :
                        'btn submit submit__disabled login__form-submit' }
                            type='submit'
                            disabled={!isValid && true}>
                        Войти
                    </button>
                    <div className="form__underSubm-link">Ещё не зарегистрированы?
                        <Link className='link' to='/signup'>Регистрация</Link>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default Login;