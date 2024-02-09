
function Medicament(props){
return (
      
    
            
            <tr>
        <td>{props.medicament.ID}</td>
        <td>{props.medicament.Label}</td>
        <td>{props.medicament.prix}</td>
        <td>{props.medicament.categorie}</td>
        </tr>
    
   
    
)
}
export default Medicament;