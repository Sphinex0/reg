import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {updateUser}from "../actions/action";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser(){
    const {id}=useParams()
    const user=useSelector(data => data.users.find(u=>u.id===parseInt(id)))
    const [nom,setNom]=useState(user.nom)
    const [prenom,setPrenom]=useState(user.prenom)
    const [email,setEmail]=useState(user.email)
    const [poste,setPoste]=useState(user.poste)
    const dispatch=useDispatch()
   
    const navigate=useNavigate()

const handleClick=()=>{
    dispatch(updateUser({
        id:id,
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
export default UpdateUser;