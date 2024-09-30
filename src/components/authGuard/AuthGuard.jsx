import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const AuthGuard = ({ children }) => {
    const isAuthenticated = false;
    return (
        isAuthenticated ? ({ children }) : (<Navigate to='/login' />)
    )
}

export default AuthGuard