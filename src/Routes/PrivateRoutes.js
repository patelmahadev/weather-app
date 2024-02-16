import React from 'react';
const Dashboard = React.lazy(() => import("../Pages/Dashboard"));
const PageNotFound = React.lazy(() => import("../Components/System/PageNotFound"));

const PrivateRoutes = [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
]
export default PrivateRoutes;