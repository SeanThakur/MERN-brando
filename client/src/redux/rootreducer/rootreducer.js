import {combineReducers} from "redux";
import authGuestReducer from '../reducers/authGuestReducer';
import errorReducer from '../reducers/errorReducer';
import authAdminReducer from '../reducers/authAdminReducer';
import accountReducer from '../reducers/Guest/accountReducer';
import adminProfileReducer from '../reducers/Admin/adminProfileReducer';
import adminTieupProfileReducer from '../reducers/Admin/adminTieupProfileReducer';

export default combineReducers({
    auth: authGuestReducer,
    error: errorReducer,
    adminAuth: authAdminReducer,
    account: accountReducer,
    adminProfile: adminProfileReducer,
    adminTieupProfile: adminTieupProfileReducer
});