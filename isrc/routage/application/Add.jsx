import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add(props) {
  const [name, setName] = useState("")
  const [filier, setFilier] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate()
  function ajouter (ev) {
    ev.preventDefault();

    const newStagiaire = {
      id: props.stagiaires.length + 1,
      name: name,
      filier:filier,
      email: email,
    };
    const addStagiaire = [...props.stagiaires, newStagiaire];
    props.onAddStagiaire(addStagiaire);
    navigate('/');
  };

  return (
    <div>
      <h2>Add Stagiaire</h2>
      <form onSubmit={ajouter}>
        <label>
          Name:
          <input type="text" name="name" value={name} onChange={(ev) => setName(ev.target.value)} />
        </label>
        <br />
        <label>
          Filier:
          <input type="text" name="filier" value={filier} onChange={(ev) => setFilier(ev.target.value)} />
        </label><br />
        <label>
          Email:
          <input type="text" name="email" value={email} onChange={(ev) => setEmail(ev.target.value)} />
        </label>
        <br />
        <button type="submit">Add Stagiaire</button>
      </form>
    </div>
  );
}

export default Add;