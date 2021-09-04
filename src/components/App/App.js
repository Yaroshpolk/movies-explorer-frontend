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
    const history = useHistory();

    const handleRegister = ({name, email, password}, onSuccess) => {
        mainApi.register({name, email, password})
            .then(res => {
                alert('Вы успешно зарегистрировались')
                onSuccess();
                mainApi.login({email, password})
                    .then(res => {
                        alert('Вы успешно авторизовались')
                        setCurrentUser(res);
                        setLoggedIn(true);
                        onSuccess();
                        history.push('/movies');
                    })
                    .catch(err => {
                        alert(err)
                    })
            })
            .catch(err => {
                alert(err)
            })
    }

    const handleLogin = ({email, password}, onSuccess) => {
        mainApi.login({email, password})
            .then(res => {
                alert('Вы успешно авторизовались')
                setCurrentUser(res);
                setLoggedIn(true);
                onSuccess();
                history.push('/movies');
            })
            .catch(err => {
                console.log(err)
                alert(err)
            })
    }

    const handleLogout = () => {
        setCurrentUser({});
        setLoggedIn(false);
    }

    const updateUserInfo = ({email, name}, onSuccess) => {
        mainApi.updateUserInfo({email, name})
            .then(res => {
                setCurrentUser({
                    ...currentUser,
                    name: res.name,
                    email: res.email
                })
                alert('Профиль успешно редактирован')
                onSuccess();
            })
            .catch(err => {
                console.log(err)
                alert(err)
            })
    }

  return (
      <CurrentUserContext.Provider value={currentUser}>
          <AppContext.Provider value={{loggedIn: loggedIn}}>
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
