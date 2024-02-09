import React from "react"
class Component extends React.Component{
    constructor(){
        super()
        this.state={num:0}
    }
    incrementer(){
        this.setState(
            { num:this.state.num+1
            }
        )
    };
    decrementer(){
        this.setState(
           { num:this.state.num-1
        }
        )
    };
    render(){
        return(
            <div>
                <h2>{this.state.num}</h2>
                <button onClick={()=>this.incrementer()}>incrementer</button>
                <button onClick={()=>this.decrementer()}>decrementer</button>
            </div>
        )
    }
}
export default Component;
