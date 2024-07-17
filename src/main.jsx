import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Login from './Authentication/Login';
import SignUp from './Authentication/SignUp';
import AuthProviders from './Providers/AuthProviders';
import Dashboard from './Dashboard/Dashboard';
import PrivateRoute from './Route/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/Login',
        element: <Login></Login>
      },
      {
        path: '/Register',
        element: <SignUp></SignUp>
      },
      {
        path: '',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
        <div className=''>
          <RouterProvider router={router} />
        </div>
      </AuthProviders>
  </React.StrictMode>,
)
