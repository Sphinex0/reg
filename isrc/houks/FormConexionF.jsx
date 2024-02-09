
import './FormCoF.css';
import React, { useState } from "react";

function FormConexionF() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isconetcted, setIsConected] = useState(false);

  const data = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" }
  ];

  const errors = {
    invalidUsername: "Votre identifiant est incorrect.",
    invalidPassword: "Votre mot de passe est incorrect."
  };

  function connecter(ev){
    ev.preventDefault();
  setUsernameError('');
  setPasswordError('');

  const user = data.find((user) => user.username === username);

  user ? user.password === password
      ? setIsConected(true)
      : setPasswordError(errors.invalidPassword)
    : setUsernameError(errors.invalidUsername);

  };

  return (
    <div className="login-form">
      {isconetcted ? (
        <div className="affichage">
          <p className="title">Accueil</p>
          <p>Bonjour {username}</p>
        </div>
      ) : (
        <div className="form">
          <form onSubmit={(ev)=> connecter(ev)}>
            <div className="input-container">
              <label>L'identifiant</label>
              <input type="text" name="username" value={username} required onChange={(ev) => setUsername(ev.target.value)}  />
              { <div className="error">{usernameError}</div>}
            </div>
            <div className="input-container">
              <label>Mot de passe</label>
              <input type="password" name="password" value={password} required onChange={(ev) => setPassword(ev.target.value)}  />
              { <div className="error">{passwordError}</div>}
            </div>
            <div className="button-container">
              <input type="submit" value="Se connecter" />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default FormConexionF;