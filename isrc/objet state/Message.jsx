import React from "react";

class Message extends React.Component{
    constructor(){
        super()
        this.state={
        message:'bien venue visiteur',
        messagebt:'inscription'
        }
    }
    inscription(){
        this.setState(
            {message:'votre inscription est bien effictuer',
            messagebt:'merci'}
        )
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.inscription()}>{this.state.messagebt}</button>
            </div>
        )
    }
}


export default Message;