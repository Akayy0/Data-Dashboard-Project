import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

import { MainLayout } from '../layouts';
import { Home, About } from '../pages';

function Routes() {
    const routes = useRoutes([
        {
            element: <MainLayout />,
            children: [
                { path: '/home', element: <Home /> },
                { path: '/mapas', element: <Home /> },
                { path: '/city/:cityName', element: <Home /> },
                { path: '/about', element: <About />}
            ]
        },
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