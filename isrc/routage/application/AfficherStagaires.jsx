import React from "react";
import { Link } from "react-router-dom";
import Add from "./Add";

function Afficher(props) {
   
  function supprimer (id) {
    const supprimer = props.stagiaires.filter((stagiaire) => stagiaire.id !== id);
    props.onDeleteStagiaire(supprimer);
  };

  return (
    <div>
         <div>
            <h1>Application de gestion des stagaires</h1>
   <Link to='/add-stagaires'>
    <button>Add stagaires</button>
    </Link>
   </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>filier</th>
            <th>Email</th>
            <th>Action</th>
           
          </tr>
        </thead>
        <tbody>
          {props.stagiaires.map((stagiaire) => (
            <tr key={stagiaire.id}>
              <td>{stagiaire.id}</td>
              <td>{stagiaire.name}</td>
              <td>{stagiaire.filier}</td>
              <td>{stagiaire.email}</td>
             
              <td>
                <button onClick={() => supprimer(stagiaire.id)}>
                  Delete
                </button>
                <Link to={`/modifier-stagiaire/${stagiaire.id}`}>
                    <button>Edit</button>
                </Link> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     
    </div>
  );
}

export default Afficher;