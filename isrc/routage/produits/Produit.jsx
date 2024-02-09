import { Link } from "react-router-dom";

function Produit(props){
    return (
        <div className="col">
        <div className="card shadow-sm">
            <Link to={`/produit/${props.contenu.id}/${props.contenu.title}`}>
                <img className="bd-placeholder-img card-img-top" src={`images1/${props.contenu.img}`} alt="" />
            </Link>
            <div className="card-body">
                <p className="card-title">{props.contenu.title}</p>
                <p className="card-text">{props.contenu.prix}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Ajouter au panier</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Produit;