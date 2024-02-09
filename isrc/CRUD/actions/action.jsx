export const addUser=(user)=>{
    return{type:"add_user",payload:user}
}
export const updateUser=(newUser)=>{
    return{type:"update_user",
    payload:newUser}
}
export const deleteUser=(id)=>{
    return{type:"delete_user",
    payload:id}
}