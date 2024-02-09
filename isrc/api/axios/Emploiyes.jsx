import axios from 'axios';
import { useEffect, useState } from 'react';

function Employees() {
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
    <h1>les emploiyeurs</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>nom</th>
            <th>prenom</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          {tab.map((u, i) => (
            <tr key={i}>
              <td>{u.id}</td>
              <td>{u.name}</td> 
              <td>{u.username}</td> 
              <td>{u.address.street}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Employees;