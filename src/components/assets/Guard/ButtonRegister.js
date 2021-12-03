import React from 'react'
import { Link } from "react-router-dom";
export const ButtonRegister = () => {
    return( 
        <li className="nav-item active mx-2">
            <Link className ="btn btn-warning" type="button"  to='/auth/registro'><i className='bx bxs-user'></i> REGISTRO </Link>
        </li>
 )
 }
