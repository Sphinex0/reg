import { useState } from "react";
function ListArticle(){
    const [id,setId]=useState(0);
    const [designation,setDesignation]=useState("");
    const [prix,setPrix]=useState(0);
    const [articles,setArticles]=useState([])
    function ajouter() {
      var t={id:id,de:designation,p:prix}
            setArticles([...articles,t]) 
            
       
        
    }
    return(
        <div>
            <h1>AJOUTER un articl</h1>
            <form >
            <p>
                <label>id</label>
                <input type="text" name="id"  value={id} onChange={(ev)=>setId(ev.target.value)} />
                <label>designation</label>
                <input type="text" name="designation" value={designation} onChange={(ev)=>setDesignation(ev.target.value)} />
                <label>prix</label>
                <input type="text" name="prix"  value={prix} onChange={(ev)=>setPrix(ev.target.value)} />
                <input type="button" value="ajouter" onClick={()=>ajouter()} />
            </p>

            </form>
            <div> <h3>liste Articles</h3> 
            <ul> 
                {
                    articles.map((ar,i)=>{return(<li key={i}>{ar.id}/{ar.d}/{ar.p}</li>)})
                }
                </ul> 
            </div>
        </div>
    )
}
export default ListArticle;

 