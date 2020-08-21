import {
    GET_ADMIN_TIEUP_PROFILE, 
    GET_ADMIN_TIEUP_PROFILE_LOADING, 
    GET_ADMIN_TIEUP_MY_PROFILE,
    CLEAR_ADMIN_TIEUP_PROFILE
} from "../../actions/types";

const initialState = {
    isLoading: false,
    tieupProfile: null,
    tieupMyProfile: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ADMIN_TIEUP_PROFILE:
            return {
                ...state,
                isLoading: false,
                tieupProfile: action.payload
            }
        case GET_ADMIN_TIEUP_MY_PROFILE:
            return {
                ...state,
                isLoading: false,
                tieupMyProfile: action.payload
            }
        case CLEAR_ADMIN_TIEUP_PROFILE:
            return {
                ...state,
                isLoading: false,
                tieupMyProfile: null,
                tieupProfile: null
            }
        case GET_ADMIN_TIEUP_PROFILE_LOADING:
            return {
                ...state,
                isLoading: true
            }
        default: 
            return state
    }
}