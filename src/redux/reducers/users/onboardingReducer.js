
export default (state = {}, action)=>{
    if (action.type === "ONBOARDING_ANSWERS"){
        return action.payload;
    }else if((action.type === "LOGOUT_ACTION") || (action.type=== "NEW_VERSION")){
        return {};
    }else{
        return state;
    }
};
