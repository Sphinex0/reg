import { useState } from "react";

function FormulaireI() {
    const [nom, setNom] = useState("")
    const [password, setPassword] = useState("")
    const [dateNaissance, setDateNaissance] = useState("")
    const [ville, setVille] = useState("")
    const [genre, setGenre] = useState("")
    const [loisirs, setLoisirs] = useState([])
    function Loisirs(ev) {
        (!loisirs.includes(ev.target.value))?
            (setLoisirs([...loisirs, ev.target.value])):
        
            ( setLoisirs([...loisirs.filter((l)=>l!==ev.target.value)]))
        
    }
    function inscrire(ev) {
        
        alert(`${nom}, ${password}, ${dateNaissance}, ${ville}, ${genre} ,${loisirs} `)
    }
    return(
        <div>
        <h1>Formulaire d'inscription</h1>
        <form onSubmit={(ev)=>inscrire(ev)}>
            
                <label>Nom</label>
                <input type="text" name="nom" onChange={(ev)=>setNom(ev.target.value)} /><br/>
            
          
                <label>Mot de passe</label>
                <input type="password" name="password" onChange={(ev)=>setPassword(ev.target.value)} /><br/>
           
            
                <label>Date de naissance</label>
                <input type="date" name="dateNaissance" onChange={(ev)=>setDateNaissance(ev.target.value)}/><br/>
            
           
                <label>Ville</label>
                <select name="ville"  onChange={(ev)=>setVille(ev.target.value)}>
                    <option>Choisir une ville</option>
                    <option value="agadir">Agadir</option>
                    <option value="tiznit">Tiznit</option>
                </select><br/>
            
            
                <label>Genre</label>
                <input type="radio" name="genre" value="homme" onChange={(ev)=>setGenre(ev.target.value)}/>homme
                <input type="radio" name="genre" value="femme" onChange={(ev)=>setGenre(ev.target.value)}/>hemme<br/>
            
                <label>Loisirs</label>
                <input type="checkbox" name="loisirs" value="sport" onChange={(ev)=>Loisirs(ev)}/>sport
                <input type="checkbox" name="loisirs" value="lecture" onChange={(ev)=>Loisirs(ev)}/>lecture
                <input type="checkbox" name="loisirs" value="musique" onChange={(ev)=>Loisirs(ev)}/>musique<br/>
            
                <input type="submit" value="S'inscrire" />
            
        </form>
        </div>
    )
}
export default FormulaireI;