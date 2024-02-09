import React, { useState } from "react";

function GestionM() {
    const [code, setCode] = useState('');
    const [marque, setMarque] = useState('');
    const [datedeconstruction, setDatedeconstruction] = useState('');
    const [resultat, setResultat] = useState([]);

    function afficher(ev) {
        ev.preventDefault();
        var t=   {
            code: code,
            marque: marque,
            datedeconstruction: datedeconstruction
        }
        setResultat([
            ...resultat,t
         
        ]);

        
    }

    return (
        <div>
            <h1>Gestion des matériels</h1>
            <form onSubmit={(ev) => afficher(ev)}>
                <label>Id</label>
                <input type="text" name="code" value={code} onChange={(ev) => setCode(ev.target.value)} />

                <label>Marque</label>
                <input type="text" name="marque" value={marque} onChange={(ev) => setMarque(ev.target.value)} />

                <label>Date de construction</label>
                <input type="text" name="datedeconstruction" value={datedeconstruction} onChange={(ev) => setDatedeconstruction(ev.target.value)} />

                <input type="submit" value="Afficher" />
            </form>

            <h2 style={{ color: 'red' }}>Résultats</h2>
            {resultat.map((res, index) => (
                <ul key={index}>
                    <li>Code: {res.code}</li>
                    <li>Marque: {res.marque}</li>
                    <li>Date de construction: {res.datedeconstruction}</li>
                </ul>
            ))}
        </div>
    );
}

export default GestionM;