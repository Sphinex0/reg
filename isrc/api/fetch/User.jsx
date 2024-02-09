import React, { useEffect, useState } from 'react';

function User(){
    const [tab,setTab]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{ console.log(response);return response.json()})
        .then((res)=>{console.log(res);setTab(res);})
    })
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
export default User;