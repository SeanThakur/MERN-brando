import {CLEAR_CURRENT_ACCOUNT, GET_ACCOUNT,DELETE_ACCOUNT} from "../../actions/types";

const initialState = {
    account: null
}

export default function(state = initialState, action) {
    switch(action.type)
    {
        case GET_ACCOUNT:
            return{
                ...state,
                account: action.payload
            }
        case CLEAR_CURRENT_ACCOUNT:
            return{
                ...state,
                account: null
            }
        case DELETE_ACCOUNT:
            return{
                ...state,
                account: null
            }
        default:
            return state;
    }
}