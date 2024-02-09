
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css'

import Add from './routage/application/Add';
import Modifier from './routage/application/Modiffier';
import Afficher from './routage/application/AfficherStagaires';
/* const produits = [
  { id: 1, title: 'PC Portable Gamer HP VICTUS',prix: '7490 DH',img : '1.jpg'},
  { id: 2, title: 'PC Portable Gamer',prix: '2190 DH', img : '2.jpg'},
  { id: 3, title: 'Pc Portable Chromebook Acer',prix: '3640 DH',img: '3.jpg' },
  { id: 4, title: 'PC Portable - HUAWEI', prix: '1270 DH',img: '4.jpg' },
]; */

 
function App(props) {
  const [stagiaires, setStagiaires] = useState([
    { id: 1, name: "Zineb atmane",filier:"dd", email: "atman@gmail.com" },
    { id: 2, name: "ikram alahyene",filier:"dev", email: "alahyene@gmail.com"}
  ]);
  return (
    <div  className="app" >
      
    {/* <Routes>
      <Route path="/" element={<Produits produits={produits} />} />
      <Route path="/produit/:id/:title" element={<Details produits={produits} />} />
    </Routes>  */}
  
 {/*  <Routes>
    <Route path='/' element={<Employees/>}/>
    <Route path='chercher' element={<EmploiyesC/>}/>
  </Routes> */} 
  <Routes>
          <Route path='/' element={<Afficher stagiaires={stagiaires}
        onDeleteStagiaire={(miseajour) => setStagiaires(miseajour)} />} />
          <Route path='/add-stagaires' element={<Add  stagiaires={stagiaires} onAddStagiaire={setStagiaires}/>} />
          <Route  path="/modifier-stagiaire/:id" element={<Modifier stagiaires={stagiaires} setStagiaires={setStagiaires} />} />
        </Routes>
   
    </div>
  );
}

export default App; 
