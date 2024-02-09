var elemens=["element1","element2","element3"];
function Liste(){
    return(<ul>{
        elemens.map((e,i)=>{
            return <li key={i}>{e}</li>
        })}</ul>)
}
export default Liste;