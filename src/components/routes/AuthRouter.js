import React from 'react';
import {
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

import Login from '../pages/Login';
import Registro from"../pages/Registro";

export const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/auth/login' component={Login} />
                <Route exact path='/auth/registro' component={Registro} />

                <Redirect to='/auth/login' />
            </Switch>
        </div>
    )
}
