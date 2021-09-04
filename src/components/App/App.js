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

function App() {

    const [currentUser, setCurrentUser] = React.useState({});
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [userData, setUserData] = React.useState({})

    const history = useHistory();

    React.useEffect(() => {
        checkToken();
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

  return (
      <CurrentUserContext.Provider value={currentUser}>
          <AppContext.Provider value={{
              loggedIn: loggedIn,
              userData: userData,
          }}>
              <div className='App'>
                  <Header />
                  <Switch>
                      <Route exact path='/'>
                          <Main />
                      </Route>
                      <ProtectedRoute
                          exact
                          component={Movies}
                          path='/movies'
                      />
                      <ProtectedRoute
                          exact
                          component={SavedMovies}
                          path='/saved-movies'
                      />
                      <ProtectedRoute
                          exact
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
