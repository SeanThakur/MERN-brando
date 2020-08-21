import axios from 'axios';
import {GET_ERRORS,GET_ADMIN_PROFILE,CLEAR_ADMIN_PROFILE,DELETE_ADMIN_PROFILE} from "../types";

export const setAdminProfile = (adminProfileData, location) => dispatch => {
    axios
      .post("/company", adminProfileData)
      .then(() => location.href="/admin/profile")
      .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }));
}

export const getAdminProfile = () => dispatch => {
    axios
      .get("/company/my")
      .then(res => dispatch({
          type: GET_ADMIN_PROFILE,
          payload: res.data
      }))
      .catch(() => dispatch({
        type: GET_ADMIN_PROFILE,
        payload: {}
      }));
}

export const clearAdminProfile = () => {
    return {
        type: CLEAR_ADMIN_PROFILE
    }
}

export const deleteAdminProfile = () => dispatch => {
    axios
      .delete("/company")
      .then(() => dispatch({
          type: DELETE_ADMIN_PROFILE
      }));
}

export const setAdminProfileProduct = (newProduct, location) => dispatch => {
  axios
    .post("/company/product", newProduct)
    .then(() => location.href = "/admin")
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
}