import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import { Home } from '../pages';

function Routes() {

    const routes = useRoutes([
        { path: "/home", element: <Home /> },
        { path: "/", element: <Navigate to='/home' /> },
        { path: "*", element: <Navigate to='/home' /> }
    ]);

    return (
        <React.Fragment>
            {routes}
        </React.Fragment>
    );
}

export default Routes;