import './App.css';
import '../Main/Main';
import React from "react";
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { AppContext } from "../../contexts/AppContext";
import mainApi from "../../utils/MainApi";
import { useHistory } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import moviesApi from "../../utils/MoviesApi";
import {SHORT_MOVIE} from "../../utils/constants";

function App() {

    const [currentUser, setCurrentUser] = React.useState({});
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [userData, setUserData] = React.useState({});
    const [movies, setMovies] = React.useState([]);
    const [savedMovies, setSavedMovies] = React.useState([]);
    const [shortMovies, setShortMovies] = React.useState(false);
    const [savedShortMovies, setSavedShortMovies] = React.useState(false);

    const history = useHistory();

    React.useEffect(() => {
        setMovies([]);
        checkToken();
        mainApi.getSavedMovies()
            .then(movies => {
                setSavedMovies(movies)
                localStorage.setItem('savedMovies', JSON.stringify(movies))
            })
            .catch(err => {
                console.log(err)
            })
    }, [loggedIn])

    const handleRegister = ({name, email, password}, onSuccess) => {
        mainApi.register({name, email, password})
            .then(res => {
                alert('Вы успешно зарегистрировались');
                history.push('/signin');
                onSuccess();
                handleLogin({email, password}, onSuccess);
            })
            .catch(err => {
                alert(err)
            })
    }

    const handleLogin = ({email, password}, onSuccess) => {
        mainApi.login({email, password})
            .then(({token}) => {
                setCurrentUser(token);
                setLoggedIn(true);
                localStorage.setItem('jwt', token);
                onSuccess();
                alert('Вы успешно авторизовались!');
                history.push('/movies')
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleLogout = () => {
        localStorage.removeItem('jwt');
        setCurrentUser({});
        setLoggedIn(false);
        history.push('/');
    }


    const getUserInfo = () => {
        mainApi.getUserInfo()
            .then(data => {
                setUserData(data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const checkToken = () => {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
            getUserInfo();
            setLoggedIn(true);
        }
    }

    function checkLike(movie) {
        if (movie) {
            return savedMovies.some((item) => {
                return item.movieId === movie.id && item.owner === userData._id
                }
            );
        }
    }

    const updateUserInfo = ({email, name}, onSuccess) => {
        mainApi.updateUserInfo({name, email})
            .then(res => {
                setCurrentUser({
                    ...currentUser,
                    name: res.name,
                    email: res.email
                })
                alert('Профиль успешно редактирован');
                getUserInfo();
                onSuccess();
            })
            .catch(err => {
                console.log(err)
                alert(err)
            })
    }

    const getMovies = (key) => {
        if (loggedIn) {
            moviesApi.getCards()
                .then(data => {
                    localStorage.setItem('movies', JSON.stringify(data));
                    searchMovies(key)
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }
    
    const searchMovies = (key) => {
      if (!key) {
          alert('Необходимо ввести ключевое слово');
          return;
      }
      const moviesList = JSON.parse(localStorage.getItem('movies'));
      const searchList = moviesList.filter((movie) => {
            const nameEN = movie.nameEN ? movie.nameEN : movie.nameRU;
            return (
                movie.nameRU.toLowerCase().includes(key.toLowerCase()) ||
                nameEN.toLowerCase().includes(key.toLowerCase()) ||
                movie.description.toLowerCase().includes(key.toLowerCase())
            );
      });
      setMovies(searchList);
      localStorage.setItem('searchList', JSON.stringify(searchList));

      searchList == 0 && alert('Ничего не найдено');
      return searchList;
    }

    function searchSavedMovies(key) {
        if (!key) {
            alert('Необходимо ввести ключевое слово');
            return;
        }
        const savedMoviesList = JSON.parse(localStorage.getItem('savedMovies'));
        console.log(key)
        const searchSavedMoviesList = savedMoviesList.filter((movie) => {
            const nameEN = movie.nameEN ? movie.nameEN : movie.nameRU;
            return (
                movie.nameRU.toLowerCase().includes(key.toLowerCase()) ||
                nameEN.toLowerCase().includes(key.toLowerCase()) ||
                movie.description.toLowerCase().includes(key.toLowerCase())
            );
        });
        setSavedMovies(searchSavedMoviesList);
        localStorage.setItem('searchSavedMoviesList', JSON.stringify(searchSavedMoviesList));

        searchSavedMoviesList == 0 && alert('Ничего не найдено');
        return searchSavedMoviesList;
    }

    const toggleShortMovies = () => {
      shortMovies ? setShortMovies(false) : setShortMovies(true)
    }

    const toggleSavedShortMovies = () => {
        savedShortMovies ? setSavedShortMovies(false) : setSavedShortMovies(true)
    }

    function handleSaveMovie(movie) {
        const nameEN = movie.nameEN ? movie.nameEN : movie.nameRU;
        const country = movie.country ? movie.country : 'Неизвестно';
        mainApi
            .createMovie({
                country: country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: `https://api.nomoreparties.co${movie.image.url}`,
                trailer: movie.trailerLink,
                thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: nameEN,
            })
            .then((res) => {
                setSavedMovies([res, ...savedMovies]);
                localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleMovieDelete(movie) {
        const movieForDelete = savedMovies.find((i) => i.movieId === movie.id);
        mainApi
            .deleteMovie(movieForDelete._id)
            .then((res) => {
                const newSavedMovies = savedMovies.filter(
                    (i) => i.movieId !== movie.id
                );
                setSavedMovies(newSavedMovies);
                localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleSavedMovieDelete(movie) {
        mainApi
            .deleteMovie(movie._id)
            .then((res) => {
                const newSavedMovies = savedMovies.filter((i) => i._id !== movie._id);
                setSavedMovies(newSavedMovies);
                localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
            })
            .catch((err) => {
                console.log(err);
            });
    }

    React.useEffect(() => {
        const searchList = JSON.parse(localStorage.getItem('searchList'));
        shortMovies
            ? setMovies((state) => state.filter((i) => i.duration <= SHORT_MOVIE))
            : setMovies(searchList);
    }, [shortMovies]);

    React.useEffect(() => {
        const savedMoviesList = JSON.parse(localStorage.getItem('savedMovies'));
        savedShortMovies
            ? setSavedMovies((state) =>
                state.filter((i) => i.duration <= SHORT_MOVIE)
            )
            : setSavedMovies(savedMoviesList);
    }, [savedShortMovies]);

  return (
      <CurrentUserContext.Provider value={currentUser}>
          <AppContext.Provider value={{
              loggedIn: loggedIn,
              userData: userData,
              movies: movies,
              savedMovies: savedMovies,
          }}>
              <div className='App'>
                  <Header />
                  <Switch>
                      <Route exact path='/'>
                          <Main />
                      </Route>
                      <ProtectedRoute
                          component={Movies}
                          path='/movies'
                          setShortMovies={toggleShortMovies}
                          handleSearch={getMovies}
                          handleCardLike={handleSaveMovie}
                          handleMovieDelete={handleMovieDelete}
                          checkLike={checkLike}
                      />
                      <ProtectedRoute
                          component={SavedMovies}
                          path='/saved-movies'
                          handleSearch={searchSavedMovies}
                          setShortMovies={toggleSavedShortMovies}
                          handleCardDelete={handleSavedMovieDelete}
                          checkLike={checkLike}
                      />
                      <ProtectedRoute
                          component={Profile}
                          path='/profile'
                          updateUserInfo={updateUserInfo}
                          handleLogout={handleLogout}
                      />
                      <Route path='/signin'>
                          <Login
                              handleLogin={handleLogin}
                          />
                      </Route>
                      <Route path='/signup'>
                          <Register
                              handleRegister={handleRegister}
                          />
                      </Route>
                      <Route path='*'>
                          <PageNotFound />
                      </Route>
                  </Switch>
                  <Footer />
              </div>
          </AppContext.Provider>
      </CurrentUserContext.Provider>
  );
}

export default App;
