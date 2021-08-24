import './Profile.css';
import React from 'react';

function Profile() {

    return (
        <div className='content'>
            <div className="profile">
                <div className="profile__title">Привет, Виталий!</div>
                <form className="profile__form" name='profileForm'>
                    <div className="fields">
                        <div className="profile__field">
                            <p className="form__caption">Имя</p>
                            <input className="profile__input" id="name" type="text" placeholder=""
                                   name="name" minLength='2' value='Виталий' required  />
                        </div>
                        <div className="profile__field">
                            <p className="form__caption">E-mail</p>
                            <input className="profile__input" id="email" type="Email" placeholder=""
                                   name="email" minLength='2' value='pochta@yandex.ru' required  />
                        </div>
                    </div>
                    <div className="profile__controls">
                        <input type="submit" className="btn profile__btn" value='Редактировать'/>
                        <button className='btn profile__btn'>Выйти из аккаунта</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Profile;