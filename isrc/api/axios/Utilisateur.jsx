import axios from 'axios';
import { useEffect, useState } from 'react';

function Utilisateur() {
  const [tab, setTab] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res.data);
        setTab(res.data);
      });
  }, []);

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
          {tab.map((u, i) => (
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

export default Utilisateur;