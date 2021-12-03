import React from 'react'
import { Link } from "react-router-dom";
export const ButtonListar = () => {
    return(
    <li className="nav-item active mx-2">
        <Link className ="btn btn-warning" type="button"  to='/listar'><i className='bx bxs-add-to-queue'></i> LISTAR </Link>
    </li>
    )
  }
