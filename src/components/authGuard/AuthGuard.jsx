import React from 'react'
<<<<<<< Updated upstream
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const AuthGuard = ({ children }) => {
    const accessToken = localStorage.getItem('accessToken');
    const isAuthenticated = accessToken ? true : false
    const location = useLocation()
    return (
        isAuthenticated ? (children) : (<Navigate to='/login' state={{ from: location }} />)
=======
import { Navigate, useNavigate, useNavigation } from 'react-router-dom';

const AuthGuard = ({ children }) => {
    const isAuthenticated = false;

    return (
        isAuthenticated ? ({ children }) : (<Navigate to="/login" />)
>>>>>>> Stashed changes
    )
}

export default AuthGuard