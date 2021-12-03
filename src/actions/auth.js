import { fetchSinToken } from "../helpers/fetch";

const startLogin = async (values, dispatch) => {
    console.log(values)
    const resp = await fetchSinToken('api/login', values, 'POST');
    const body = await resp.json();

    console.log(body)

    if (!body.msg) {
        localStorage.setItem('token', body.data.token);
        localStorage.setItem('token-init-date', new Date().getTime());

        dispatch({
            type: '[auth] Login',
            payload: body.data.token
        });
    } else {
        return body.msg
    }
};

const startRegister = async (values, dispatch) => {
    const resp = await fetchSinToken('api/register', values, 'POST');
    const data = await resp.json();

    console.log(data)

    console.log(data.msg)

    if (!data.errors) {
        return data.msg;

    } else {
        return data.errors;
    };
};

const startChecking = async (dispatch) => {
    const token = localStorage.getItem('token');

    if (token) {
        dispatch({
            type: '[auth] Login',
            payload: token
        });
    } else {
        console.log('No posee token');

        dispatch({
            type: '[auth] Finish cheking login state'
        });
    }
}

const startLogout = (dispatch) => {
    localStorage.clear();
    dispatch({
        type: '[auth] Logout'
    })
}

export {
    startLogin,
    startRegister,
    startChecking,
    startLogout
};