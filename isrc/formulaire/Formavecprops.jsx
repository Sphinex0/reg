import React, { useState } from "react";
import Afficher from "./Afficher";

function Formavecprops() {
    const [nom, setNom] = useState("");
    const [password, setPassword] = useState("");
    const [dateNaissance, setDateNaissance] = useState("");
    const [ville, setVille] = useState("");
    const [genre, setGenre] = useState("");
    const [loisirs, setLoisirs] = useState([]);
    const [formData,setFormData]=useState()
    const [envoyer,setEvoyer]=useState("block")
    function inscrire(e) {
            e.preventDefault();
        setEvoyer("none")
        setFormData( {
            nom: nom,
            password: password,
            dateNaissance: dateNaissance,
            ville: ville,
            genre: genre,
            loisirs: loisirs
        });

    
    }

    function Loisirs(ev) {
        // Utilisez des callbacks avec useState pour garantir la mise à jour correcte de l'état
        setLoisirs(prevLoisirs => {
            if (!prevLoisirs.includes(ev.target.value)) {
                return [...prevLoisirs, ev.target.value];
            } else {
                return prevLoisirs.filter(l => l !== ev.target.value);
            }
        });
    }
    
    return (
        <div >
            <h1>Formulaire d'inscription</h1>
            <form style={{display: envoyer}} >
           
                <label>Nom</label>
                <input type="text" name="nom" value={nom} onChange={(ev) => setNom(ev.target.value)} /><br/>
          
                <label>Mot de passe</label>
                <input type="password" name="password" value={password} onChange={(ev) => setPassword(ev.target.value)} /><br/>
            
                <label>Date de naissance</label>
                <input type="date" name="dateNaissance" value={dateNaissance} onChange={(ev) => setDateNaissance(ev.target.value)} /><br/>
            
                <label>Ville</label>
                <select name="ville" value={ville} onChange={(ev) => setVille(ev.target.value)}>
                    <option>Choisir une ville</option>
                    <option value="agadir">Agadir</option>
                    <option value="tiznit">Tiznit</option>
                </select><br/>
            
                <label>Genre</label>
                <input type="radio" name="genre" value="homme" checked={genre === "homme"} onChange={(ev) => setGenre(ev.target.value)} />homme
                <input type="radio" name="genre" value="femme" checked={genre === "femme"} onChange={(ev) => setGenre(ev.target.value)} />femme<br/>
            
                <label>Loisirs</label>
                <input type="checkbox" name="loisirs" value="sport" checked={loisirs.includes("sport")} onChange={Loisirs}/>sport
                <input type="checkbox" name="loisirs" value="lecture" checked={loisirs.includes("lecture")} onChange={Loisirs}/>lecture
                <input type="checkbox" name="loisirs" value="musique" checked={loisirs.includes("musique")} onChange={Loisirs}/>musique<br/>
            
                <button onClick={(e)=>inscrire(e)}>inscrire</button>
            </form>
            {formData?<Afficher formData={formData} envoyer={envoyer}/>:null}

        </div>
    );
}

export default Formavecprops;
