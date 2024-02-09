import { useState } from "react";
function IncrementerF(){
    const [compt,setCompt]=useState(0);
    function incrementer(){
        setCompt(compt+1)
    };
     function decrementer(){
        setCompt(compt-1);

    };
    return(
        <div>
            <h2>{compt}</h2>
            <button onClick={()=>incrementer()}>incrementer</button>
                <button onClick={()=>decrementer()}>decrementer</button>
        </div>
    )





}
export default IncrementerF;
