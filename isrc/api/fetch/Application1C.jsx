import React, { Component } from 'react';
import './Application1.css';

class Application1C extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      utilisateur: {},
      address: {}
    };
  }

  componentDidMount() {
    this.fetchUser();
  }

  componentDidUpdate(Props, State) {
    if (State.id !== this.state.id) {
      this.fetchUser();
    }
  }

  fetchUser(){
    fetch(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          address: res.address,
          utilisateur: res,
        });
      });
  }



  render() {
    

    return (
      <div>
        <div>
          <h1>Details utilisateur</h1>
          <label>Entrez l'ID :</label>
          <input type="text" onChange={(ev)=>this.setState({ id: ev.target.value })} value={this.state.id} />
        </div>
        {this.state.utilisateur.id ? (
          <div className="child" key={this.state.utilisateur.id}>
            <h3>
              ID : {this.state.utilisateur.id} {this.state.utilisateur.name} {this.state.utilisateur.username}
            </h3>
            <p>Email : {this.state.utilisateur.email}</p>
            <p>Téléphone : {this.state.utilisateur.phone}</p>
            <p>Site web : {this.state.utilisateur.website}</p>
            <p>Rue : {this.state.address.street}</p>
            <p>Ville : {this.state.address.city}</p>
          </div>
        ) : (
          <p>Svp, veuillez choisir un ID valide</p>
        )}
      </div>
    );
  }
}

export default Application1C;