import React, { useContext } from 'react';
import { AuthContext } from './Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

  const {user, loading} = useContext(AuthContext);

  if(loading) {
    <span className="loading loading-bars loading-lg text-primary"></span>
  }

  if(user) {
    return children;
  }
    
  return (
    <Navigate to='/login'></Navigate>
  );
};

export default PrivateRoute;