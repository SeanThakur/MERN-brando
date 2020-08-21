import {SET_CURRENT_ADMIN_OFF,SET_CURRENT_ADMIN} from "../actions/types";

const initalState = {
    isAdmin: false,
    user: {}
}

export default function(state = initalState, action) {
    switch(action.type)
    {
        case SET_CURRENT_ADMIN:
            return {
                ...state,
                isAdmin: true,
                user: action.payload
            }
        case SET_CURRENT_ADMIN_OFF:
            return {
                ...state,
                isAdmin: false,
                user: {}
            }
        default:
            return state;
    }
}