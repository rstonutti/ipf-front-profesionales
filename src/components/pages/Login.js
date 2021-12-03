import React, { useState, useContext } from 'react'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import imagen from "../../Login_v4/images/bg-01.jpg"

import { AuthContext } from '../../auth/AuthContext';
import { startLogin } from '../../actions/auth';

const schema = yup.object().shape({
	email: yup.string().email('El correo debe ser válido').required('El correo es requerido'),
	password: yup.string().required('La contraseña es requerida')
}).required();

const Login = () => {

	//Llamamos al dispach usando el context
	const { dispatch } = useContext(AuthContext);

	//Establezco un estado de error para los errores del db
	const [error, setError] = useState('')

	//Me ayudo de react hook form para el manejo de inputs y errores
	const { register, handleSubmit, formState: { errors } } = useForm({
		resolver: yupResolver(schema)
	});

	//Funcion encargada de registrar al usuario
	const submitForm = async (e) => {

		//Enviamos el evento y el dispach
		const resp = await startLogin(e, dispatch);

		setError(resp);
	};

	return (
		<div className="limiter">
			<div className="container-login100" style={{ backgroundImage: `url(${imagen})` }}>
				<div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
					<form className="login100-form validate-form" onSubmit={handleSubmit(submitForm)}>
						<span className="login100-form-title p-b-49">
							INICIAR SESIÓN
						</span>

						<div className="wrap-input100 validate-input m-b-23" data-validate="Usuario es requerido">
							<span className="label-input100">Correo electrónico</span>
							<input
								className="input100"
								type="text"
								placeholder="Correo electrónico"
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
								<button className="login100-form-btn">INICIAR</button>
							</div>
							<div>
								<br />
								<span className="error" style={{ color: "red" }}> {errors.email?.message} </span>
								<span className="error" style={{ color: "red" }}> {errors.password?.message} </span>
								<span className="error" style={{ color: "red" }}> {error} </span>
							</div>
						</div>

					</form>
				</div>
			</div>
		</div>
	)

}

export default Login;