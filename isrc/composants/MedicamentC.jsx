import React from "react";

class MedicamentC extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
       
            
        <tr>
    <td>{this.props.medicament.ID}</td>
    <td>{this.props.medicament.Label}</td>
    <td>{this.props.medicament.prix}</td>
    <td>{this.props.medicament.categorie}</td>
    </tr>

 )
    }
}
export default MedicamentC;