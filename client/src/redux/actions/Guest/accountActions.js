import axios from 'axios';
import {GET_ACCOUNT, GET_ERRORS, CLEAR_CURRENT_ACCOUNT,DELETE_ACCOUNT} from '../../actions/types';

export const setAccount = (userAccount, location) => dispatch => {
    axios
      .post("/my-account", userAccount)
      .then(() => location.href = "/account")
      .catch(err => dispatch({
          type: GET_ERRORS,
          payload: err.response.data
      }));
}

export const getCurrentAccount = () => dispatch => {
    axios
      .get("/my-account")
      .then(res => dispatch({
          type: GET_ACCOUNT,
          payload: res.data
      }))
      .catch(() => dispatch({
          type: GET_ACCOUNT,
          payload: {}
      }));
}

export const clearCurrentAccount = () => {
    return {
        type: CLEAR_CURRENT_ACCOUNT
    }
}

export const deleteCurrentAccount = () => dispatch => {
    axios
      .delete("/my-account")
      .then(() => dispatch({
        type: DELETE_ACCOUNT
      }));
}
