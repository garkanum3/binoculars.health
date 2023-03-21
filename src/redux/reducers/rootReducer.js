import { combineReducers } from 'redux';
import authReducer from './users/authReducer';
import onboardingReducer from './users/onboardingReducer';
import userAccountReducer from './users/userAccountReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    userAccount: userAccountReducer,
    onboardingReducer: onboardingReducer
})

export default rootReducer;
