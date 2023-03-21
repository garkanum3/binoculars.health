const initState = {
    profile: {},
    preferences: {}
}

export default (state = initState, action)=>{
    if (action.type === "USER_ACCOUNT"){
        return action.payload;
    }else if((action.type === "LOGOUT_ACTION") || (action.type=== "NEW_VERSION")){
        return {};
    }else{
        return state;
    }
};