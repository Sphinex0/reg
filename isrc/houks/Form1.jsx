import { useState } from "react";
function Form1(){
    const [nom,setNom]=useState("RAmi");
    const [prenom,setPrenom]=useState("Ali");
    const [information,setInformation]=useState()
    function inscrire(ev) {
        ev.preventDefault();
       setInformation(`bon jour ${nom}  ${prenom}`)
    }
    return(
        <div>
            <h1>Formulaire inscription</h1>
            <form onSubmit={(ev)=>inscrire(ev)}>
            <p>
                <label>Nom</label>
                <input type="text" name="nom"  value={nom} onChange={(ev)=>setNom(ev.target.value)} />
                <label>prenom</label><br/>
                <input type="text" name="prenom" value={prenom} onChange={(ev)=>setPrenom(ev.target.value)} />
                <input type="submit" value="S'inscrire" />
            </p>
            <p>{information}</p>

            </form>
        </div>
    )
}
export default Form1;