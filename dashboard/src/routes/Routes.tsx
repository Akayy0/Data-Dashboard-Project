import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';

import { MainLayout } from '../layouts';
import { Home, Municipality } from '../pages';

function Routes() {
    const routes = useRoutes([
        {
            element: <MainLayout />,
            children: [
                { path: '/home', element: <Home /> },
                { path: '/mapas', element: <Home /> },
                { path: '/city/:cityName/:cityId', element: <Municipality /> }
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