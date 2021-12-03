import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getPublicaciones } from '../../helpers/publicaciones';

import imagen from "../../Login_v4/images/bg-01.jpg"

export const Editar = () => {

    //Traemos el id del profesional desde los parametros
    const { proId } = useParams();

    //Creamos un estado de cargando hasta que nos traiga los datos
    const [cargando, setCargando] = useState(true);

    //Guardamos la informacion que nos devuelva la api en otro estado
    const [publicacion, setPublicacion] = useState();

    useEffect(() => {
        const cargarPublicaciones = async () => {
            const resp = await getPublicaciones(`api/profesionales/${proId}`);

            setPublicacion(resp);

            setCargando(false)
        };
        cargarPublicaciones();
    }, [proId]);

    //El estado de cargando evita que nos tire error cuando el estado del profesional este vacio
    if (cargando) {
        return <div>Cargando, espere un momento...  </div>
    };

    //Manejamos las fechas para visualizarlo de forma correcta
    let fecha = new Date(publicacion.personal_info.birthdate)
    let fechaConvertida = fecha.toLocaleDateString();


    return (
        <div className="limiter">
            <div className="container-login100" style={{ backgroundImage: `url(${imagen})` }}>
                <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54" id="data">
                    <form className="login100-form validate-form">
                        <span className="login100-form-title p-b-49">
                            {publicacion.personal_info.fullname}
                        </span>

                        <div >
                            <div >
                                {/* <p>Cumpleaños: <b>{publicacion.personal_info.birthdate.substring(0,10)}</b></p> */}
                                <p>Cumpleaños: <b>{fechaConvertida}</b></p>
                                <p>DNI: <b>{publicacion.personal_info.dni}</b></p>
                                <p>Genero: <b>{publicacion.personal_info.gender}</b></p>
                                <p>Pais: <b>{publicacion.personal_info.country}</b></p>
                                <p>Provincia: <b>{publicacion.personal_info.state}</b></p>
                                <p>Direccion: <b>{publicacion.personal_info.address}</b></p>
                                <p>Hobby: <b>{publicacion.personal_info.hobbies}</b></p>
                                <h5 className="card-title mt-3 mb-3">Contacto</h5>
                                <p>Telefono: <b>{publicacion.contact_info.phone}</b></p>
                                <p>Email: <b>{publicacion.contact_info.email}</b></p>
                                <p>Perfil: <b>{publicacion.contact_info.social_media}</b></p>
                                <h5 className="card-title mt-3 mb-3">Informacion Academica</h5>
                                <p>Primaria: <b>{publicacion.academic_info.primary}</b></p>
                                <p>Secundaria: <b>{publicacion.academic_info.secondary}</b></p>
                                <p>Universidad: <b>{publicacion.academic_info.tertiary}</b></p>

                                {
                                    publicacion.academic_info.certifications.length > 0 ?
                                        publicacion.academic_info.certifications.map(elem => <p>{elem}</p>) : <p>Titulos: <b>no existe</b></p>
                                }
                                <h5 className="card-title mt-3 mb-3">Informacion Profesional</h5>
                                <p>Conocimientos: <b>{publicacion.professional_info.summary}</b></p>
                                <p>Experiencia Laboral: <b>{publicacion.professional_info.work_exp}</b></p>
                                <p>Habilidades: <b>{publicacion.professional_info.skills}</b></p>
                                {/* <p>Lenguajes: <b>{stateProfesionales.professional_info.languages}</b></p> */}
                                <p>Idiomas: </p>
                                {
                                    publicacion.professional_info.languages.length > 0 ? publicacion.professional_info.languages.map(elem => <p><b>{elem}</b></p>) : <p>Idiomas: No especificado</p>
                                }
                                <br />

                            </div>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )

}