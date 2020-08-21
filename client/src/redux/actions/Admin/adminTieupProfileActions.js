import axios from 'axios';
import {
    GET_ERRORS,
    GET_ADMIN_TIEUP_PROFILE,
    GET_ADMIN_TIEUP_PROFILE_LOADING, 
    GET_ADMIN_TIEUP_MY_PROFILE,
    CLEAR_ADMIN_TIEUP_PROFILE
} from "../../actions/types";

export const setAdminTieupProfile = (id, tieupProfile, location) => dispatch => {
    axios
      .post(`/tieup-company/${id}`, tieupProfile)
      .then(() => location.href = "/admin/alltieups")
      .catch(err => dispatch({
          type: GET_ERRORS,
          payload: err.response.data
      }));
}

export const setAdminTieupProfileProduct = (id, tieupProfileProduct, location) => dispatch => {
    axios
      .post(`/tieup-company/product/${id}`, tieupProfileProduct)
      .then(() => location.href = "/admin")
      .catch(err => dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      }));
}

export const getAdminTieupMyProfile = () => dispatch => {
    dispatch(tieupProfileLoading());
    axios
      .get("/tieup-company/my")
      .then(res => dispatch({
        type: GET_ADMIN_TIEUP_MY_PROFILE,
        payload: res.data
      }))
      .catch(() => dispatch({
        type: GET_ADMIN_TIEUP_MY_PROFILE,
        payload: null
      }));
}

export const getAdminTieupProfile = () => dispatch => {
    dispatch(tieupProfileLoading());
    axios
        .get('/tieup-company')
        .then(res => dispatch({
            type: GET_ADMIN_TIEUP_PROFILE,
            payload: res.data
        }))
        .catch(() => dispatch({
            type: GET_ADMIN_TIEUP_PROFILE,
            payload: null
        }))
}

export const setDeleteAdminTieupProfile = () => dispatch => {
    axios
      .delete("/tieup-company")
      .then(res => dispatch({
        type: GET_ADMIN_TIEUP_PROFILE,
        payload: res.data
      }));
}

export const setClearAdminTieupProfile = () => {
    return {
        type: CLEAR_ADMIN_TIEUP_PROFILE
    }
}

export const tieupProfileLoading = () => {
    return {
        type: GET_ADMIN_TIEUP_PROFILE_LOADING
    }
}