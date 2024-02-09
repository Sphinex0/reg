import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import UserListe from "./components/userList";
import AddUser from "./components/addUser";
import UpdateUser from "./components/updateUser";

// import { BrowserRouter, Route,Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <h1>Application d'utilisateurs</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserListe/>}/>
        <Route path='/add-user' element={<AddUser/>}/>
        <Route path='/update-user/:id' element={<UpdateUser/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
