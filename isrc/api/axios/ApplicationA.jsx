import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Application1.css';

function ApplicationA() {
  const [id, setId] = useState();
  const [utilisateur, setUtilisateur] = useState({});
  const [address, setAddress] = useState({});

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        const user = response.data;
        setAddress(user.address);
        setUtilisateur(user);
      })
     
  }, [id]);

  return (
    <div>
      <div>
        <h1>Details utilisateur</h1>
        <label>Entrez l'ID :</label>
        <input type="text" onChange={(ev) => setId(ev.target.value)} value={id} />
      </div>
      {utilisateur.id ? (
        <div className="child" key={utilisateur.id}>
          <h3>
            ID: {utilisateur.id} {utilisateur.name} {utilisateur.username}
          </h3>
          <p>Email: {utilisateur.email}</p>
          <p>Téléphone: {utilisateur.phone}</p>
          <p>Site web: {utilisateur.website}</p>
          <p>Rue: {address.street}</p>
          <p>Ville: {address.city}</p>
        </div>
      ) : (
        <p>Svp, veuillez choisir un ID valide</p>
      )}
    </div>
  );
}

export default ApplicationA;