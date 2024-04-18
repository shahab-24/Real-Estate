import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import NotFound from './Components/NotFound.jsx';
import Home from './Components/Home/Home.jsx';
import LogIn from './Components/LogIn.jsx';
import Register from './Components/Register.jsx';
import EstateDetails from './Components/EstateDetails.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import PrivateRoute from './PrivateRoute.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        
      },
      {
        path:'/login',
        element: <LogIn></LogIn>
      },
      {
        path:'/register',
        element: <Register></Register>
      },

       {
        path: '/estate/:id',
        element: <PrivateRoute><EstateDetails></EstateDetails>,</PrivateRoute>,
        
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
