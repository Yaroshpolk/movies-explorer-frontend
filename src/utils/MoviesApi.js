class MoviesApi {
    constructor({apiUrl, headers}) {
        this._apiUrl = apiUrl;
        this._headers = headers;
    }

    _checkResponse = (res) => {
        return res.ok ? res.json() : Promise.reject(`Ошибка соединения с сервером: ${res.status}`);
    };

    getCards = () => {
        return fetch(`${this._apiUrl}`, {
                headers: this._headers,
            })
            .then(this._checkResponse)
    }
}

const moviesApi = new MoviesApi({
    apiUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default moviesApi;