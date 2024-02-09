import React from "react";

class UserC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState({ tab: users });
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
            {this.state.tab.map((u, i) => (
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

export default UserC;





