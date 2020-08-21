import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../../utils/setAuthToken";

import {SET_CURRENT_ADMIN, SET_CURRENT_ADMIN_OFF, GET_ERRORS} from "./types";

export const getAdminRegister = (userData, location) => dispatch => {
    axios
      .post("/register", userData)
      .then(() => location.href = "/admin/login")
      .catch(err => dispatch({
          type: GET_ERRORS,
          payload: err.response.data
      }));
}

export const setAdminLogin = (userData) => dispatch => {
    axios
      .post("/login", userData)
      .then(res => {
        const {token} = res.data;
        localStorage.setItem("jwtAdminToken", token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(setCurrentAdminUser(decoded));
      })
      .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }));
}

export const setAdminLogout= () => dispatch => {
    localStorage.removeItem("jwtAdminToken");
    setAuthToken(false);
    dispatch(setCurrentAdminUserOff());
}

export const setCurrentAdminUserOff = () => {
    return{
        type: SET_CURRENT_ADMIN_OFF
    }
}

export const setCurrentAdminUser = (decoded) => {
    return {
        type: SET_CURRENT_ADMIN,
        payload: decoded
    }
}