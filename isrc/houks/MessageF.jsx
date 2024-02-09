import { useState } from "react";
function MessageF(){
    const [message,setMessage]=useState('bienvenu visiteur');
    const [btn,setBtn]=useState('inscription');
    function inscription(){
        setMessage('votre inscription est bien effictuer')
        setBtn('merci');
    }
    return(
       <div>
        <h1>{message}</h1>
        <button onClick={()=>inscription()}>{btn}</button>
       </div>
    )
}
export default MessageF;