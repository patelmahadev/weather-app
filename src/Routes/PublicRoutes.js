import React from 'react';
import { Navigate } from 'react-router';

const PublicRoutes = [
    {
      path: "*",
      element: <MissingRoute />,
    },
]

/**
 * @NAVIGATE_TO_LOGIN
 * Below method will redirect to login page if path is missing/not defined
 */
function MissingRoute() {
  return <Navigate to={{pathname: '/'}} />
 }

export default PublicRoutes;