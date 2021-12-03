import React, { useContext, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';

import { AuthContext } from '../../auth/AuthContext';
import { startChecking } from '../../actions/auth';

import { AuthRouter } from './AuthRouter';
import { DashboardRouter } from './DashboardRouter';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import Navbar from '../layout/Navbar';

export const AppRouter = () => {

    const { state: { checking, logged }, dispatch } = useContext(AuthContext);

    useEffect(() => {
        startChecking(dispatch);
    }, [dispatch])

/*     if (checking) {
        return (<h1>Espere...</h1>)
    } */

    return (
        <>
            <Router>
                <Navbar />
                <div>
                    <Switch>
                        <PublicRoute
                            path="/auth"
                            component={AuthRouter}
                            isAuthenticated={logged}
                        />
                        <PrivateRoute
                            path="/"
                            component={DashboardRouter}
                            isAuthenticated={logged}
                        />
                    </Switch>
                </div>
            </Router>
        </>
    )
}