
import React from "react"
class Jeu extends React.Component{
    constructor(props){
        super(props)
        this.state={
            titre:'jeu de de...' ,
            face:null ,
            step:0 ,
            nbressai:0,
            resultat:false

        }
        
    }

    jouer(){
        var facevar = Math.floor(Math.random()*6+1);
        this.setState(
            {
                face:facevar ,
                step:this.state.step+1 
            })
            if( facevar == this.props.succe)
            this.setState({resultat:true}) 
    }
    render(){
        return(
            <div>
                <img src={
                this.state.face==null
                ?"images/init.png"
                :`images/face${this.state.face}.PNG`
                }  />

                <h1>Jeu de DE...</h1>
                <p>face:{this.state.face} </p>
                <p>Nombre d'essais: {this.state.step}</p>
                {
                   this.state.resultat
                   ?<div><p>bravo vous avez gagné</p></div> 
                   :<button onClick={()=>this.jouer()}>jouer</button>
                }
                
                
            </div>
        )
    }
}

export default Jeu;