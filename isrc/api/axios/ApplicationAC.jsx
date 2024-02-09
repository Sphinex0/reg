import React, { Component } from 'react';
import axios from 'axios';
import './ApplicationA.css';

class ApplicationAC extends Component {
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.id !== this.state.id) {
      this.fetchUser();
    }
  }

  fetchUser() {
    axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then((response) => {
        const user = response.data;
        this.setState({
          address: user.address,
          utilisateur: user,
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  render() {
    return (
      <div>
        <div>
          <h1>Details utilisateur</h1>
          <label>Entrez l'ID :</label>
          <input type="text" onChange={(ev) => this.setState({ id: ev.target.value })} value={this.state.id} />
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

export default ApplicationAC;