
import { useState } from "react";
function FruitLegumes(){
    const list=[ {nom:"banane",type:"fruit"},
    {nom:"orange",type:"fruit"},
     {nom:"pomme",type:"fruit"}, 
     {nom:"raisins",type:"fruit"}, 
     {nom:"kiwi",type:"fruit"}, 
     {nom:"tomate",type:"legume"}, 
     {nom:"carotte",type:"legume"}, 
     {nom:"pomme de terre",type:"legume"} ]

     const [type,setType]=useState('');
     const [resultat,setResultat]=useState([]);
     function chercher(ev){
        ev.preventDefault();
            
            setResultat(list.filter(function(t){return t.type.toUpperCase()==type}))
    
     }


    return(
       <div>
        <h1>chercher votre type</h1>
        <form onSubmit={(ev)=>chercher(ev)}>
        <label>type</label>
                <input type="text" name="type"   onChange={(ev)=>setType(ev.target.value.toUpperCase())} />
                <button type='submit'>chercher</button>
                </form>
                
                <h2 style={{ color: 'red' }}>resultat</h2>
                {resultat.length === 0  ? (<p>aucun resultat trouver </p>) 
                 
                : ( 
                    <ul>
                        {resultat.map((ev, i) => {return <li key={i}>{ev.nom}</li>;})}
                    </ul> )} 
       </div>
    )
}
export default FruitLegumes;