class MainApi {
    constructor({apiUrl, headers}) {
        this._apiUrl = apiUrl;
        this._headers = headers;
    };

    _checkResponse = (res) => {
        return res.ok ? res.json() : Promise.reject(`Ошибка соединения с сервером: ${res.status}`);
    };

    getSavedMovies = () => {
        return fetch(`${this._apiUrl}/movies`, {
            method: 'GET',
            headers: this._headers,
        })
            .then(this._checkResponse);
    };

    createMovie = (
            country, director, duration, year, description, image,
            trailer, thumbnail, movieId, nameRU, nameEN,
        ) => {
        return fetch(`${this._apiUrl}/movies`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(
                country, director, duration, year, description, image,
                trailer, thumbnail, movieId, nameRU, nameEN,
            ),
        })
            .then(this._checkResponse);
    };

    deleteMovie = (movieId) => {
        return fetch(`${this._apiUrl}/movies/${movieId}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(this._checkResponse);
    }

    register = ({name, email, password}) => {
        return fetch(`${this._apiUrl}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name,
                email,
                password,
            })
        })
            .then(this._checkResponse);
    }

    login = ({email, password}) => {
        return fetch(`${this._apiUrl}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                email,
                password,
            })
        })
            .then(this._checkResponse);
    }

    getUserInfo = () => {
        return fetch(`${this._apiUrl}/users/me`,
            {
                method: 'GET',
                headers: this._headers,
            })
            .then(this._checkResponse);
    }

    updateUserInfo = ({name, email}) => {
        return fetch(`${this._apiUrl}/users/me`,
            {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name: name,
                    email: email,
                }),
            })
            .then(this._checkResponse);
    }
}

const mainApi = new MainApi({
    apiUrl: 'http://localhost:3001/api/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    }
});

export default mainApi;