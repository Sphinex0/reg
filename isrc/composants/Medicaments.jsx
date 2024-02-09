import Medicament from "./Medicament"

function Medicaments(props){
    return(
           <table>
                <thead>
                    <tr>
                    <th>id</th>
                        <th>Label</th>
                        <th>prix</th>
                        <th>categorie</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listeM.map((m,i)=>{
                        return (
                        <Medicament key={i} medicament={m}/>
                        )})
                    }
                
                </tbody>
           </table> 
        
    )
}
export default Medicaments; 
// <Medicaments listeM={listemedicaments}/> fichier app.js