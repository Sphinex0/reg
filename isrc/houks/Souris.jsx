import { useEffect, useState } from "react";

function Souris(){
    const[x,setX]=useState(0)
    const[y,setY]=useState(0)
    useEffect(()=>{
        window.addEventListener('mousemove',Move)
    },[])
    function Move(event){
       setX(event.pageX)
       setY(event.pageY)
    }
    return(
        <div>
            <h1>les cordonnées de la souris</h1>
            <p>coordonnées X:{x} Y:{y}</p>
        </div>
    );

}
export default Souris;