import React, { useContext } from 'react'
import { Link } from "react-router-dom";

import "../../Login_v4/vendor/bootstrap/css/bootstrap.min.css";
import "../../Login_v4/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
import "../../Login_v4/fonts/iconic/css/material-design-iconic-font.min.css";
import "../../Login_v4/vendor/animate/animate.css";
import "../../Login_v4/vendor/css-hamburgers/hamburgers.min.css";
import "../../Login_v4/vendor/css-hamburgers/hamburgers.min.css";
import "../../Login_v4/vendor/animsition/css/animsition.min.css";
import "../../Login_v4/vendor/select2/select2.min.css";
import "../../Login_v4/vendor/daterangepicker/daterangepicker.css";
import "../../Login_v4/css/util.css";
import "../../Login_v4/css/main.css";

import { ButtonLogin } from '../assets/Guard/ButtonLogin'

import { ButtonCerrarSesion } from '../assets/Guard/ButtonCerrarSesion';

import { ButtonListar } from '../assets/Guard/ButtonListar';

import { ButtonRegister } from '../assets/Guard/ButtonRegister';
import { AuthContext } from '../../auth/AuthContext';

const Navbar = () => {

  const { state: { logged } } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div className="container">
        <a className="navbar-brand" href="/#">Profesionales</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
          aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active mx-2" key={'1'}>
              {/* //Mediante Link enviamos ese mismo dato en forma de objeto a la ruta “/”. */}
              {logged && <Link class="btn btn-warning" type="button" to='/'
              >INICIO
              </Link>}
            </li>
            {logged
              ? <ButtonListar />
              : <ButtonLogin />}
            {logged
              ? <ButtonCerrarSesion />
              : <ButtonRegister />}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
