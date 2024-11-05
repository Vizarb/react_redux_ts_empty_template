import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from './authSlice';

const LogoutButton: React.FC = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        // Optionally, clear local storage or perform other cleanup actions.
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
