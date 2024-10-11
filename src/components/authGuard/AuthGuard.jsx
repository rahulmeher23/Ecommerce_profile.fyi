import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const AuthGuard = ({ children }) => {
    const accessToken = localStorage.getItem('accessToken');
    const isAuthenticated = accessToken ? true : false
    const location = useLocation()
    return (
        isAuthenticated ? (children) : (<Navigate to='/login' state={{ from: location }} />)
    )
}

export default AuthGuard