import React from "react";

import { useHistory } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import imagen from "../../Login_v4/images/bg-01.jpg";
import { postPublicaciones } from "../../helpers/publicaciones";

export const Listar = () => {

  const history = useHistory();

  //Creamos el esquema de yup.
  //Le asignamos a cada valor su propio tipo de dato.
  const schema = yup.object().shape({
    fullname: yup.string().required('Este campo es requerido'),
    birthdate: yup.string().required('Este campo es requerido'),
    dni: yup.number('Debe ser un número').required('Este campo es requerido').positive().integer('Debe ser un número entero'),
    gender: yup.string().required('Este campo es requerido'),
    country: yup.string().required('Este campo es requerido'),
    state: yup.string().required('Este campo es requerido'),
    address: yup.string().required('Este campo es requerido'),
    hobbies: yup.string(),
    phone: yup.string().required('Este campo es requerido'),
    email: yup.string().email().required('Este campo es requerido'),
    social_media: yup.string(),
    primary: yup.string().required('Este campo es requerido'),
    secondary: yup.string().required('Este campo es requerido'),
    tertiary: yup.string().required('Este campo es requerido'),
    certifications: yup.string(),
    summary: yup.string().required('Este campo es requerido'),
    work_exp: yup.string().required('Este campo es requerido'),
    skills: yup.string().required('Este campo es requerido'),
    languages: yup.string().required('Este campo es requerido')
  });

  //Me ayudo de react form hook para el manejo de inputs
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  //Función encardada de agregar profesionales
  const submitForm = async ({ fullname, birthdate, dni, gender, country, state, address, hobbies, phone, email, social_media, primary, secondary, tertiary, certifications, summary, work_exp, skills, languages, ...e }) => {

    //Armamos el body para nuestra petición
    const values = {
      "personal_info": {
        fullname,
        birthdate,
        dni,
        gender,
        country,
        state,
        address,
        hobbies
      },
      "contact_info": {
        phone,
        email,
        "social_media": [
          social_media
        ]
      },
      "academic_info": {
        primary,
        secondary,
        tertiary,
        "certifications": [
          certifications
        ]
      },
      "professional_info": {
        summary,
        work_exp,
        skills,
        "languages": [
          languages
        ]
      }
    };

    //Enviamos lo datos
    const post = await postPublicaciones(values);

    //Si todo sale bien, nos agrega un profesional y nos envia al home
    if (post) {
      history.replace('/');
    };
  };

  //Los onchange de cada input manejan los estados de las dependencias de yup.
  return (
    <div className="limiter">
      <div
        className="container-login100"
        style={{ backgroundImage: `url(${imagen})` }}
      >

        <div className="pt-5"><span className="login100-form-title p-b-49 text-light">REGISTRAR NUEVO PROFESIONAL</span></div>
        <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54 col-md-12 pl-0 pr-0 row">
          <div className="container pl-0 pr-0">
            <form className="login100-form validate-form ml-0 mr-0 pl-0 pr-0" onSubmit={handleSubmit(submitForm)}>


              <div className="col-md-12 row align-items-start">
                {/* columna 1 */}
                <div className="col-md-4">
                  {/* inicio datos personales */}
                  <span className="login100-form-title p-b-49">
                    Información Personal
                  </span>
                  <div
                    className="wrap-input100 validate-input m-b-23"
                    data-validate="Usuario es requerido"
                  >
                    <span className="label-input100">Nombre <b>{errors.fullname?.message}</b></span>
                    <input
                      className="input100"
                      type="text"
                      name="fullname"
                      placeholder="Nombre"
                      {...register("fullname")}
                    />
                    <span className="focus-input100" data-symbol="&#xf206;"></span>
                  </div>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span className="label-input100">Fecha de Nacimiento <b>{errors.date?.message}</b></span>
                    <input
                      className="input100"
                      type="date"
                      name="birthdate"
                      {...register("birthdate")}
                    />
                    <span className="focus-input100" data-symbol=""></span>

                  </div>
                  <br></br>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span className="label-input100">Número de Documento <b>{errors.dni?.message}</b></span>
                    <input
                      className="input100"
                      type="text"
                      name="dni"
                      placeholder="Nro. de documento"
                      {...register("dni")}
                    />
                    <span className="focus-input100" data-symbol=""></span>
                  </div>
                  <br></br>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span className="label-input100">Género <b>{errors.gender?.message}</b></span>
                    <input
                      className="input100"
                      type="text"
                      name="gender"
                      placeholder="Género"
                      {...register("gender")}
                    />
                    <span className="focus-input100" data-symbol=""></span>
                  </div>
                  <br></br>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span className="label-input100">Provincia <b>{errors.state?.message}</b></span>
                    <input
                      className="input100"
                      type="text"
                      name="state"
                      placeholder="Provincia"
                      {...register("state")}
                    />
                    <span className="focus-input100" data-symbol=""></span>
                  </div>
                  <br></br>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span className="label-input100">Pais <b>{errors.country?.message}</b></span>
                    <input
                      className="input100"
                      type="text"
                      name="country"
                      placeholder="Pais"
                      {...register("country")}
                    />
                    <span className="focus-input100" data-symbol=""></span>
                  </div>
                  <br></br>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span className="label-input100">Dirección <b>{errors.address?.message}</b></span>
                    <input
                      className="input100"
                      type="text"
                      name="address"
                      placeholder="Dirección"
                      {...register("address")}
                    />
                    <span className="focus-input100" data-symbol=""></span>
                  </div>
                  <br></br>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span className="label-input100">Hobbys <b>{errors.hobbies?.message}</b></span>
                    <input
                      className="input100"
                      type="text"
                      name="hobbies"
                      placeholder="Hobbies"
                      {...register("hobbies")}
                    />
                    <span className="focus-input100" data-symbol=""></span>
                  </div>
                  <br></br>
                  {/* fin de datos personales */}
                </div>

                {/* columna 2 */}
                <div className="col-md-4">
                  {/* inicio de datos segunda columna */}
                  <span className="login100-form-title p-b-49">
                    Información de Contacto
                  </span>
                  <div
                    className="wrap-input100 validate-input m-b-23"
                    data-validate="Usuario es requerido"
                  >
                    <span className="label-input100">Teléfono <b>{errors.phone?.message}</b></span>
                    <input
                      className="input100"
                      type="text"
                      name="phone"
                      placeholder="Teléfono"
                      {...register("phone")}
                    />
                    <span className="focus-input100" data-symbol=""></span>
                  </div>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span className="label-input100">E-mail <b>{errors.email?.message}</b></span>
                    <input
                      className="input100"
                      type="email"
                      name="email"
                      placeholder="Correo electrónico"
                      {...register("email")}
                    />
                    <span className="focus-input100" data-symbol=""></span>
                  </div>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span className="label-input100">Redes Sociales (link) <b>{errors.social_media?.message}</b></span>
                    <input
                      className="input100"
                      type="text"
                      name="social_media"
                      placeholder="Redes sociales"
                      {...register("social_media")}
                    />
                    <span className="focus-input100" data-symbol=""></span>
                  </div>
                  <br></br>

                  <br></br>
                  <br></br>

                  {/* fin info contacto */}

                  {/* info academica */}

                  <span className="login100-form-title p-b-49">
                    Información Academica
                  </span>
                  <div
                    className="wrap-input100 validate-input m-b-23"
                    data-validate="Usuario es requerido"
                  >
                    <span className="label-input100">Primaria <b>{errors.primary?.message}</b></span>
                    <input
                      className="input100"
                      type="text"
                      name="primary"
                      placeholder="Escuela primaria"
                      {...register("primary")}
                    />
                    <span className="focus-input100" data-symbol=""></span>

                  </div>
                  <div
                    className="wrap-input100 validate-input m-b-23"
                    data-validate="Usuario es requerido"
                  >
                    <span className="label-input100">Colegio secundario <b>{errors.secondary?.message}</b></span>
                    <input
                      className="input100"
                      type="text"
                      name="secondary"
                      placeholder="Colegio secundario"
                      {...register("secondary")}
                    />
                    <span className="focus-input100" data-symbol=""></span>

                  </div>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span className="label-input100">Terciaria <b>{errors.tertiary?.message}</b></span>
                    <input
                      className="input100"
                      type="text"
                      name="tertiary"
                      placeholder="Institución terciaria"
                      {...register("tertiary")}
                    />
                    <span className="focus-input100" data-symbol=""></span>

                  </div>

                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span className="label-input100">certificados <b>{errors.certifications?.message}</b></span>
                    <input
                      className="input100"
                      type="text"
                      name="certifications"
                      placeholder="Certificaciones"
                      {...register("certifications")}
                    />
                    <span className="focus-input100" data-symbol=""></span>

                  </div>

                  {/* fin info academica */}
                  {/* fin de datos segunda columna */}
                </div>

                {/* columna 3 */}
                <div className="col-md-4">
                  {/* inicio tercer columna */}
                  <span className="login100-form-title p-b-49">
                    Información Profesional
                  </span>
                  <div
                    className="wrap-input100 validate-input m-b-23"
                    data-validate="Usuario es requerido"
                  >
                    <span className="label-input100">Sumario <b>{errors.sumary?.message}</b></span>
                    <input
                      className="input100"
                      type="text"
                      name="summary"
                      placeholder="Sumario"
                      {...register("summary")}
                    />
                    <span className="focus-input100" data-symbol=""></span>
                  </div>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span className="label-input100">Experiencia laboral <b>{errors.work_exp?.message}</b></span>
                    <input
                      className="input100"
                      type="text"
                      name="work_exp"
                      placeholder="Experiencia laboral"
                      {...register("work_exp")}
                    />
                    <span className="focus-input100" data-symbol=""></span>
                  </div>
                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span className="label-input100">Habilidades <b>{errors.skills?.message}</b></span>
                    <input
                      className="input100"
                      type="text"
                      name="skills"
                      placeholder="Habilidades"
                      {...register("skills")}
                    />
                    <span className="focus-input100" data-symbol=""></span>
                  </div>

                  <div
                    className="wrap-input100 validate-input"
                    data-validate="Contraseña es requerido"
                  >
                    <span className="label-input100">Lenguajes <b>{errors.languages?.message}</b></span>
                    <input
                      className="input100"
                      type="text"
                      name="languages"
                      placeholder="Idiomas"
                      {...register("languages")}
                    />
                    <span className="focus-input100" data-symbol=""></span>
                  </div>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>

                  <div className="container-login100-form-btn">
                    <div className="wrap-login100-form-btn">
                      <div className="login100-form-bgbtn"></div>
                      <button className="login100-form-btn btn btn-warning"

                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                  {/* fin tercer columna */}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};