import React, { Component } from "react";
import axios from 'axios';

class UtilisateurC extends Component {
  constructor(props) {
    super(props);
    this.state = { utilisateurs: [] };
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        this.setState({ utilisateurs: res.data });
      });
  }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>nom</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.utilisateurs.map((u, i) => (
              <tr key={i}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default UtilisateurC;