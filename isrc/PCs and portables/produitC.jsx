import React from "react";
class Produit extends React.Component{
    render(){
       return (
         <div className="col">
            <div className="card shadow-sm">
                <img className="bd-placeholder-img card-img-top" src={`images1/${this.props.contenu.image}`} alt="" />
                <div className="card-body">
                    <p className="card-title">{this.props.contenu.marque}</p>
                    <p className="card-text">{this.props.contenu.caracteristique}</p>
                    <p className="card-text">{this.props.contenu.prix}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">acheter</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
  }
  export default Produit;