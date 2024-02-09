import { Link, useParams } from "react-router-dom"
function Details(props) {
    const {id,title} = useParams();
    const produits = props.produits.find((p)=> p.id===parseInt(id) && p.title==title);
    return (
        <div>
            <h1>{produits.title}</h1>
            <img src={`/images1/${produits.img}`} alt="" />
                <h2>prix: {produits.prix}</h2>
                <Link to={"/"}>Aller vers la page d'accuiel</Link>
            
        </div>
    )
}
export default Details