import MedicamentC from "./MedicamentC";
import React from "react";

class MedicamentsC extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <table>
                <thead>
                    <tr>
                    <th>ID</th>
                        <th>Label</th>
                        <th>prix</th>
                        <th>categorie</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.listeM.map((m,i)=>{
                            return (
                                <MedicamentC key={i} medicament={m}/>
                            )})
                    }
                
                </tbody>
            </table> 
        )
    }
}
export default MedicamentsC;