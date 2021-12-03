import React, { useReducer } from 'react';
import { AppRouter } from './components/routes/AppRouter';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';
import './bootstrap/css/bootstrap.min.css';

const init = () => ({
    checking: true
});

export const ProfesionalesApp = () => {

    const [state, dispatch] = useReducer(authReducer, {}, init);

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    );
};