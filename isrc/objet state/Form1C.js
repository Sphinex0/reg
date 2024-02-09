import React from "react";
class Form1C extends React.Component{
    constructor(){
        super()
        this.state={
            nom:'rami',
            prenom:'al',
            information:[]
        }
    }
    envoiyer(ev){
        var t={nom:this.state.nom,prenom:this.state.prenom}
        this.setState([...this.state.information,])
       
        ev.preventDefault();
    }
        render() {
            return(
                <div>
                    <form onSubmit={(ev)=>this.envoiyer(ev)} >
                        <label>nom</label>
                        <input type='text' name='nom' value={this.state.nom} onChange={(ev)=>this.setState({ nom: ev.target.value })}/>
                        <br/>
                        <label>prenom</label>
                        <input type="text" name="prenom" value={this.state.nom} onChange={(ev)=>this.setState({ prenom: ev.target.value })}/>
                        <input type="submit" value='envoiyer'/>
                    </form>
                    
                        <div >
                        {this.state.information.map((info, index) => (
                        <div key={index}>
                            <p>Nom: {info.nom}</p>
                            <p>Prénom: {info.prenom}</p>
                        </div>
                    ))}
                        </div>
                    
                </div>
            )
        }
           

        
    }


export default Form1C;