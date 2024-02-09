import React, { useState } from "react"; 
import "./Post.css"
import U from "./User";
import UsePost from "./UsePost";
function ListUser(props){ 
    const [activeId,setActiveId]=useState(1)
    const users=props.utilisateurs
    function ActiveId(id){
        setActiveId(id)
    }
    return(
    <div className="App" >
        <h1>nombre d'utilisateurs: {props.utilisateurs.length}</h1>
        {users.map(user=>{ 
            return(<UsePost user={user} activeId={activeId}
                ActiveId={ActiveId}/>)
            })}
            </div>)
            }
export default ListUser;