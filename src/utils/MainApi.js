class MainApi {
    constructor({apiUrl}) {
        this._apiUrl = apiUrl;
    };

    _checkResponse = (res) => {
        return res.ok ? res.json() : Promise.reject(`Ошибка соединения с сервером: ${res.status}`);
    };

    getSavedMovies = () => {
        return fetch(`${this._apiUrl}/movies`, {
            method: 'GET',
            credentials: 'include',
            headers: getHeaders(),
        })
            .then(this._checkResponse);
    };

    createMovie = (
            country, director, duration, year, description, image,
            trailer, thumbnail, movieId, nameRU, nameEN,
        ) => {
        return fetch(`${this._apiUrl}/movies`, {
            method: 'POST',
            credentials: 'include',
            headers: getHeaders(),
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
            credentials: 'include',
            headers: getHeaders(),
        })
            .then(this._checkResponse);
    }

    register = ({name, email, password}) => {
        return fetch(`${this._apiUrl}/signup`, {
            method: 'POST',
            credentials: 'include',
            headers: getHeaders(),
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
            credentials: 'include',
            headers: getHeaders(),
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
                credentials: 'include',
                headers: getHeaders(),
            })
            .then(this._checkResponse);
    }

    updateUserInfo = ({name, email}) => {
        return fetch(`${this._apiUrl}/users/me`,
            {
                method: 'PATCH',
                credentials: 'include',
                headers: getHeaders(),
                body: JSON.stringify({
                    name: name,
                    email: email,
                }),
            })
            .then(this._checkResponse);
    }
}

function getHeaders() {
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    }
}

const mainApi = new MainApi({
    apiUrl: 'https://yar.movies.api.nomoredomains.monster/api',
});

export default mainApi;