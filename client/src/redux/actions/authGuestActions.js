import axios from "axios";
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from "jwt-decode";

import {GET_ERRORS, SET_CURRENT_USER, SET_CURRENT_USER_OFF} from "./types";

export const getRegister = (userData, location) => dispatch => {
    axios
      .post("/register", userData)
      .then(() => location.href = "/login")
      .catch(err => dispatch({
          type: GET_ERRORS,
          payload: err.response.data
      }));
}

export const getForgetPassword = (userData, location) => dispatch => {
    axios
      .put("/forget-password", userData)
      .then(() => location.href = "/login")
      .catch(err => dispatch({
          type: GET_ERRORS,
          payload: err.response.data
      }));
}

export const setLogin = (userData) => dispatch => {
    axios
      .post("/login", userData)
      .then(res => {
        const {token} = res.data;
        localStorage.setItem("jwtGuestToken", token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(setCurrentUser(decoded));
      })
      .catch(err => dispatch({
          type: GET_ERRORS,
          payload: err.response.data
      }));
}

export const setLogout = () => dispatch => {
    localStorage.removeItem("jwtGuestToken");
    setAuthToken(false);
    dispatch(setCurrentUserOff());
}

export const setCurrentUserOff = () => {
    return{
        type: SET_CURRENT_USER_OFF
    }
}

export const setCurrentUser = (decoded) => {
    return{
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

