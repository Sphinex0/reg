import React from "react";
import './FormCoC.css';

class FormConexionC extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      usernameError: '',
      passwordError: '',
      isConnected: false,
    };

    this.data = [
      { username: "user1", password: "pass1" },
      { username: "user2", password: "pass2" }
    ];

    this.errors = {
      invalidUsername: "Votre identifiant est incorrect.",
      invalidPassword: "Votre mot de passe est incorrect."
    };
  }

   connecter (ev)  {
    ev.preventDefault();
    this.setState({
      usernameError: '',
      passwordError: ''
    });

    const user = this.data.find((use) => use.username === this.state.username);

    user ?  user.password === this.state.password 
       ? this.setState({ isConnected: true })
      : this.setState({ passwordError: this.errors.invalidPassword })
      : this.setState({ usernameError: this.errors.invalidUsername });
  };


  render() {
    

    return (
      <div className="login-form">
        {this.state.isConnected ? (
          <div className="affichage">
            <p className="title">Accueil</p>
            <p>Bonjour {this.state.username}</p>
          </div>
        ) : (
          <div className="form">
            <form onSubmit={(ev)=> this.connecter(ev)}>
              <div className="input-container">
                <label>L'identifiant</label>
                <input type="text" name="username" value={this.state.username} required 
                onChange={(ev) => this.setState({ username: ev.target.value })}/>
                {<div className="error">{this.state.usernameError}</div>}
              </div>
              <div className="input-container">
                <label>Mot de passe</label>
                <input type="password" name="password" value={this.state.password} required 
                onChange={(ev)=>this.setState({ password: ev.target.value })} />
                {<div className="error">{this.state.passwordError}</div>}
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
}

export default FormConexionC;