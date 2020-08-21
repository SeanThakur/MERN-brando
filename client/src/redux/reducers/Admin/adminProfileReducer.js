import {GET_ADMIN_PROFILE,CLEAR_ADMIN_PROFILE,DELETE_ADMIN_PROFILE} from '../../actions/types';

const initialState = {
    companyProfile: null
}

export default function(state = initialState, action) {
    switch(action.type)
    {
        case GET_ADMIN_PROFILE:
            return {
                ...state,
                companyProfile: action.payload
            }
        case CLEAR_ADMIN_PROFILE:
            return {
                ...state,
                companyProfile: null
            }
        case DELETE_ADMIN_PROFILE:
            return {
                ...state,
                companyProfile: null
            }
        default:
            return state;
    }
}