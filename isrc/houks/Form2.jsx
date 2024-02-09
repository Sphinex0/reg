import { useState } from "react";

function Form2(){
    const [nom,setNom]=useState('Hajar');
    const [motdepass,setMotdepass]=useState('');
    const [date,setDate]=useState('');
    const [vill,setVill]=useState('');
    const [genre,setGenre]=useState('')
    function inscrire(ev){
        alert(`je suis : ${nom}  mon mot de pass est:  ${motdepass}  je sui neé le:  ${date} j'habite a ${vill}`)
    }

    return(
        <div>
            <form onSubmit={(ev)=>{inscrire(ev)}} >
            <label>Nom</label>
                <input type="text" name="nom" onChange={(ev)=>setNom(ev.target.value)} /><br/>

                 <label>mot de pass</label>
                 <input type="password" name="password" onChange={(ev)=>setMotdepass(ev.target.value)} /><br/>
                 
                 <label>date naissance</label>
                 <input type="date" name="date" onChange={(ev)=>setDate(ev.target.value)} /><br/>

                 <label >vill</label>
                 <select name="vill"  onChange={(ev)=>setVill(ev.target.value)}>
                 <option>Choisir une ville</option>
                    <option value="agadir">Agadir</option>
                    <option value="tiznit">Tiznit</option>
                 </select><br/>

                 <label>Genre</label>
                <input type="radio" name="genre" value="homme" onChange={(ev)=>setGenre(ev.target.value)}/>homme
                <input type="radio" name="genre" value="femme" onChange={(ev)=>setGenre(ev.target.value)}/>hemme<br/>
                 

                 <br/><input type="submit" value='inscrire' /> 
                
            </form>
        </div>
    )
}
export default Form2;