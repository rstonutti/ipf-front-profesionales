import React from 'react';
import {
    Switch,
    Redirect,
    Route,
} from 'react-router-dom';

import Home from "../pages/Home";
import { Listar } from "../pages/AgregarProf";
import { Editar } from '../pages/VerPerfil';

export const DashboardRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/listar' component={Listar} />
                <Route exact path='/:proId' component={Editar} />

                <Redirect to='/' />
            </Switch>
        </>
    )
}
