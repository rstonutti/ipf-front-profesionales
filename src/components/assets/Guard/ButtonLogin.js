import React from 'react'

import { Link } from "react-router-dom";


export const ButtonLogin = () => {
    return(
        <div>
        <li className="nav-item active mx-2">
            <Link className ="btn btn-warning" type="button"  to='/login'><i className='bx bxs-user'></i> INICAR SESION </Link>
        </li>
        </div>
    )
 }
