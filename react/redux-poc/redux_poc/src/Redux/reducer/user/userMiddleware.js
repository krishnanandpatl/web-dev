export default async function userMiddleware(dispatch){
    let res=await fetch("https://jsonplaceholder.typicode.com/users/1");
    let user=await res.json();
    dispatch({
        type:"success_user",
        payload:user
    });
}