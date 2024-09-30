import React from 'react'
import { useNavigate } from 'react-router-dom';

const AuthGuard = ({ children }) => {
    const isAuthenticated = false;
    const navigate = useNavigate();
    return (
        isAuthenticated ? ({ children }) : (navigate('/login'))
    )
}

export default AuthGuard