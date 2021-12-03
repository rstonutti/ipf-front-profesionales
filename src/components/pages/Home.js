//Importamos los Hooks.
import React, { useEffect, useState } from 'react';
import imagen from "../../Login_v4/images/bg-01.jpg"
import '../assets/css/tarjetas.css';
import { Link, useHistory } from 'react-router-dom';
import { deletePublicaciones, getPublicaciones } from '../../helpers/publicaciones';

const Home = () => {
    //Uso el history para volver a renderizar la pagina al eliminar un dato
    const history = useHistory()

    //Establezco un estado de error para los errores del db
    const [cargando, setCargando] = useState(true);

    //Guardamos la informacion que nos devuelva la api
    const [publicaciones, setPublicaciones] = useState([]);

    useEffect(() => {
        const cargarPublicaciones = async () => {
            const resp = await getPublicaciones('api/profesionales');
            if (resp) {
                setPublicaciones(resp);
            };
            setCargando(false);
        };
        cargarPublicaciones();
    }, []);

    const submitForm = async (id) => {

        const resp = await deletePublicaciones(`api/profesionales/${id}`)

        //Si la eliminacion sale bien, nos vuelve a renderizar el componente
        if (resp) {
            history.replace('/');
        };
    }

    if (cargando) {
        return <div>Cargando, espere un momento...  </div>
    };

    if (!publicaciones.length) {
        return <div>Nada por aquí...  </div>
    };

    return (
        //Creamos una tarjeta para mostrar los datos.
        //mediante el método “map” iteramos sobre el array para mostrar los datos correspondientes.
        <div className="container-login100" style={{ backgroundImage: `url(${imagen})` }}>
            <div className="container mt-2">
                <div className="row" id="data">
                    {
                        publicaciones.length > 0 ? publicaciones.map(item => {
                            return (
                                <div key={item._id} className="col-md-3 col-sm-6">
                                    <div className="card card-block mx-3 mb-5">
                                        <figure>
                                            <img src="https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/foto-de-perfil-para-instagram-1024x538.png" alt="Perfil" />
                                            <div className="capa">
                                                <Link to={`/${item._id}`}
                                                ><button className="bt btn-success">DETALLE</button>
                                                </Link>
                                            </div>
                                        </figure>
                                        <h5 className="card-title mt-3 mb-3">{item.personal_info.fullname}</h5>


                                        <p>DNI: <b>{item.personal_info.dni}</b></p>
                                        <p>Genero: <b>{item.personal_info.gender}</b></p>

                                        <p>Email: <b>{item.contact_info.email}</b></p>

                                        <div className="buttonDelete">
                                            <button className="bt btn-danger" onDoubleClick={() => (submitForm(item._id))}>ELIMINAR</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : <h1 style={{ margin: 'auto', color: 'white' }}><b>NO SE HAN CARGADO LOS DATOS</b></h1>

                    }
                </div>
            </div>

        </div>

    )
}

export default Home;

