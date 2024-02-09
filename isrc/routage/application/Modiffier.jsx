import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Modifier(props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [stagaireEdit, setStagaireEdit] = useState({
    name: "",
    filier: "",
    email: "",
  });
  const stagiaireToEdit = props.stagiaires.find(
    (stagiaire) => stagiaire.id === parseInt(id)
  );
  if (stagiaireToEdit) {
    setStagaireEdit({
      name: stagiaireToEdit.name,
      filier: stagiaireToEdit.filier,
      email: stagiaireToEdit.email,
    });
  } =


  function modifier(ev) {
    ev.preventDefault();
  

  /*   if (stagiaireToEdit) {
      setStagaireEdit({
        name: stagiaireToEdit.name,
        filier: stagiaireToEdit.filier,
        email: stagiaireToEdit.email,
      });
    } */

    const updatedStagiaires = props.stagiaires.map((stagiaire) =>
      stagiaire.id === parseInt(id) ? { ...stagiaire, ...stagaireEdit } : stagiaire
    );
    props.setStagiaires(updatedStagiaires);
    navigate('/');
  }

  return (
    <div>
      <h2>Edit Stagiaire</h2>
      <form onSubmit={(ev) => modifier(ev)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={stagaireEdit.name}
            onChange={(ev) =>
              setStagaireEdit({ ...stagaireEdit, name: ev.target.value })
            }
          />
        </label>
        <br />
        <label>
          Filier:
          <input
            type="text"
            name="filier"
            value={stagaireEdit.filier}
            onChange={(ev) =>
              setStagaireEdit({ ...stagaireEdit, filier: ev.target.value })
            }
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={stagaireEdit.email}
            onChange={(ev) =>
              setStagaireEdit({ ...stagaireEdit, email: ev.target.value })
            }
          />
        </label>
        <br />
        <button type="submit">Update Stagiaire</button>
      </form>
    </div>
  );
}

export default Modifier;
