import './Profile.css';
import React from 'react';
import formValidator from '../../utils/FormValidator';
import {AppContext} from "../../contexts/AppContext";

function Profile(props) {

    const { values, handleChange, resetForm, errors, isValid } = formValidator();
    const { email, name } = values;
    const context = React.useContext(AppContext);

    function handleSubmit(evt) {
        evt.preventDefault();
        isValid && props.updateUserInfo({ email, name }, () => {
            resetForm();
        })
    }

    return (
        <div className='content'>
            <div className="profile">
                <div className="profile__title">Привет, {context.userData.name}!</div>
                <form className="profile__form" name='profileForm' onSubmit={handleSubmit} noValidate>
                    <div className="fields">
                        <label className={`field ${errors.email && "field_invalid"} profile__field`}>
                            <p className="form__caption">Имя</p>
                            <input
                                className="profile__input"
                                id="name" type="text"
                                placeholder={context.userData.name}
                                name="name"
                                minLength='2'
                                required
                                value={name || ''}
                                onChange={handleChange}/>
                        </label>
                        <span className="field__input-error">{errors.name}</span>
                        <label className={`field ${errors.email && "field_invalid"} profile__field`}>
                            <p className="form__caption">E-mail</p>
                            <input className="profile__input"
                                   id="email"
                                   type="Email"
                                   placeholder={context.userData.email}
                                   name="email"
                                   minLength='2'
                                   required
                                   value={email || ''}
                                   onChange={handleChange} />
                            <span className="field__input-error">{errors.email}</span>
                        </label>
                        <span className="field__input-error">{errors.email}</span>
                    </div>
                    <div className="profile__controls">
                        <input type="submit" className="btn profile__btn" value='Редактировать'/>
                        <button
                            className='btn profile__btn'
                            onClick={props.handleLogout}>Выйти из аккаунта</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Profile;