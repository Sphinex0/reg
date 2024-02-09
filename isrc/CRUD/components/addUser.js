import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {addUser}from "../actions/action";
import { useNavigate } from "react-router-dom";

function AddUser(){
    const count=useSelector(data=>data.users.length)
    const [nom,setNom]=useState('')
    const [prenom,setPrenom]=useState('')
    const [email,setEmail]=useState('')
    const [poste,setPoste]=useState('')
    const dispatch=useDispatch()
   
    const navigate=useNavigate()

const handleClick=()=>{
    dispatch(addUser({
        id:count+1,
        nom:nom,
        prenom:prenom,
        email:email,
        poste:poste
    }))
    navigate('/')

}
return(
    <div>
        <form>
            <label>Nom</label>
            <input type="text" value={nom} placeholder="saisir votre nom"
             onChange={(e)=>setNom(e.target.value)} /> <br/>
            <label>prénom</label>
            <input type="text" value={prenom} placeholder="saisir votre prénom"
             onChange={(e)=>setPrenom(e.target.value)} /><br/>
            <label>email</label>
            <input type="email" value={email} placeholder="exemple@gmail.com"
            onChange={(e)=>setEmail(e.target.value)} /><br/>
            <label>poste</label>
            <input type="text" value={poste} placeholder="Admin/user"
            onChange={(e)=>setPoste(e.target.value)} /><br/>
            <button onClick={handleClick}>Enregidtrer</button>
        </form>
    </div>
)
}
export default AddUser;