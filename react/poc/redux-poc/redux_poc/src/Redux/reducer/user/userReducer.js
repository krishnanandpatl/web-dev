let initialstate={
    user:"",
    loading:true,
}
function userReducer(state=initialstate,action){
switch(action.type){
    case "success_user":
        return{
            user:action.payload,
            loading:false
        }
    default:
        return state;
}
}
export default userReducer;