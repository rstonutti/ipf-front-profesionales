import React, { useState, useContext } from 'react'

import imagen from "../../Login_v4/images/bg-01.jpg"

import { AuthContext } from '../../auth/AuthContext';

import { useForm } from 'react-hook-form';
import { startRegister } from '../../actions/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
	username: yup.string().required('El nombre de usuario es requerido'),
	email: yup.string().email('El correo debe ser válido').required('El correo es requerido'),
	password: yup.string().min(8, 'La contraseña debe tener 8 caracteres').required('La contraseña es requerida')
}).required();

const Registro = () => {

	//Llamamos al dispach usando el context
	const { dispatch } = useContext(AuthContext);
	
	//Establezco un estado de error para los errores del db
	const [error, setError] = useState('');

	//Me ayudo de react hook form para el manejo de inputs y errores
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema)
	});

	//Funcion encargada de registrar al usuario
	const submitForm = async (e) => {

		//El back nos pide que establezcamos nosotros el rol, esta fue la forma en que lo hice
		e.rol = 'admin';

		//Enviamos el evento y el dispach
		const resp = await startRegister(e, dispatch);

		setError(resp);
	};

	return (
		<div className="limiter">
			<div className="container-login100" style={{ backgroundImage: `url(${imagen})` }}>
				<div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
					<form className="login100-form validate-form" onSubmit={handleSubmit(submitForm)}>
						<span className="login100-form-title p-b-49">
							REGISTRO
						</span>

						<div className="wrap-input100 validate-input m-b-23" data-validate="Usuario es requerido">
							<span className="label-input100">Nombre de Usuario</span>
							<input
								className="input100"
								type="text"
								placeholder="Nombre de Usuario"
								{...register("username")}
							/>
							<span className="focus-input100" data-symbol="&#xf206;"></span>
						</div>

						<div className="wrap-input100 validate-input m-b-23" data-validate="Correo Electronico es requerido">
							<span className="label-input100">Corro Elecrónico</span>
							<input
								className="input100"
								type="text"
								placeholder="Correo Electrónico"
								{...register("email")}
							/>
							<span className="focus-input100" data-symbol="&#xf206;"></span>
						</div>

						<div className="wrap-input100 validate-input" data-validate="Contraseña es requerido">
							<span className="label-input100">Contraseña</span>
							<input
								className="input100"
								type="password"
								placeholder="Contraseña"
								{...register("password")}
							/>
							<span className="focus-input100" data-symbol="&#xf190;"></span>
						</div> <br></br>

						<div className="container-login100-form-btn">
							<div className="wrap-login100-form-btn">
								<div className="login100-form-bgbtn"></div>
								<button className="login100-form-btn">
									REGISTRARSE
								</button>
							</div>
							<span className="error" style={{ color: "red" }}> {errors.username?.message} </span>
							<span className="error" style={{ color: "red" }}> {errors.email?.message} </span>
							<span className="error" style={{ color: "red" }}> {errors.password?.message} </span>
							<span className="error" style={{ color: "red" }}> {error} </span>
						</div>
					</form>
				</div>
			</div>
		</div>
	)

}

export default Registro