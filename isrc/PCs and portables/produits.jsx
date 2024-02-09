import Produit from "./produit"
var ordinateurs=[
    {id:1,marque:'hp',caracteristique:'ssd 16g-ram 5eme generation',prix:'3000Dh',image:'image1.jpg'},
    {id:2,marque:'dell',caracteristique:'ssd 8g-ram 7eme generation',prix:'4000Dh',image:'image2.jpg'},
    {id:3,marque:'lenovo',caracteristique:'ssd 16g-ram 5eme generation',prix:'2000Dh',image:'image3.jpg'},
    {id:4,marque:'compag',caracteristique:'ssd 8g-ram 6eme generation',prix:'3500Dh',image:'image4.jpg'},
]

function Produits(props) {
    return (
      <div class="container">
        <div class="row">
          {
           ordinateurs.map((p, i)=>{
              return ( <Produit key={i} contenu={p} />
            )})
          }
        </div>
      </div>
    )
  } 
  export default Produits;