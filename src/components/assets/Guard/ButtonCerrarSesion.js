import React, { useContext } from 'react'
import { startLogout } from '../../../actions/auth';
import { AuthContext } from '../../../auth/AuthContext';

export const ButtonCerrarSesion = () => {

  

 
  //Usamos RemoveItem para eliminar el token del localStorage
  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
      startLogout(dispatch);
  };

    return (
      <li className="nav-item active mx-2">
        <button className ="btn btn-warning"  onClick = {handleLogout}><i className='bx bxs-log-out'></i>
          CERRAR SESION
        </button>
      </li>
    )
}


