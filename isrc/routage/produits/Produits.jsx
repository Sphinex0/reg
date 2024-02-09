import Produit from "./Produit";
function Produits(props) {
    return (
      <div className="container">
        <div className="row">
          {
            props.produits.map((p, i)=>{
              return <Produit key={i} contenu={p} />
            })
          }
        </div>
      </div>
    )
}
export default Produits;