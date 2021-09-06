import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AppContext } from '../../contexts/AppContext';


const ProtectedRoute = ({ component: Component, ...props }) => {
    const context = React.useContext(AppContext);

    return (
        <Route>
            {() =>
                context.loggedIn ? <Component {...props} /> : <Redirect to='/' />
            }
        </Route>
    );
};

export default ProtectedRoute;