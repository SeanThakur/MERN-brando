import {SET_CURRENT_USER, SET_CURRENT_USER_OFF} from "../actions/types";

const initalState = {
    isAuth: false,
    user: {}
}

export default function(state = initalState, action) {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuth: true,
                user: action.payload
            }
        case SET_CURRENT_USER_OFF:
            return {
                ...state,
                isAuth: false,
                user: {}
            }
        default:
            return state;
    }
}