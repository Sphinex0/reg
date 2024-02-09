import React, { useEffect, useState } from 'react'; 

function Teste() { 
    const [count, setCount] = useState(0); 
    useEffect(() => { console.log('TEST!'); },[]); 
    const onClick = () => { setCount(count + 1); }; 
    return ( <div> <h1>Count: {count}</h1> 
    <button onClick={onClick}>Click me!</button> 
    </div> 
    )
    } 
    export default Teste;