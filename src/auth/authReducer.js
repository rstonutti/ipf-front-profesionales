import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.authLogin:
            return {
                ...state,
                ...action.payload,
                checking:false,
                logged: true
            };
        case types.authCheckingFinish:
            return {
                ...state,
                checking:false,
                logged: false
            };
        case types.authLogout:
            return {
                checking:false,
                logged: false
            };
        default:
            return state;
    };
};