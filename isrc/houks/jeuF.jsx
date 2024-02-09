import { useState } from "react";
function JeuF(props){
    const [face,setFacef]=useState(null);
    const [stepf,setStepf]=useState(0);
    const [nbressaif,setNbressaif]=useState(0);
    const [resultatf,setResultatf]=useState(false);
    function jouer(){
        var facevarf = Math.floor(Math.random()*6+1);
        setFacef(facevarf);
        setStepf(stepf+1);
            if( facevarf == props.succef)
            setResultatf(true) 
    }
    return(
        <div>
            <img src={
                face==null
                ?"images2/init.png"
                :`images2/face${face}.PNG`
                }  />
                <h1>jeu de DE...</h1>
                <p>face:{face}</p>
                <p>Nombre d'essais: {nbressaif}</p>
                {
                   resultatf
                   ?<div><p>bravo vous avez gagné</p></div> 
                   :<button onClick={jouer}>jouer</button>
                }
        </div>
    )
}
export default JeuF;
//  la composant existe dans le app.js avec le variable succe <JeuF succef={2}/>
    