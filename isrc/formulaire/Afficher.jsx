
function Afficher({formData}){

return(
    <div >
        <h1>informations inscrire</h1>
        <p>{`nom: ${formData.nom},password: ${formData.password},date: ${formData.dateNaissance}, 
        ville: ${formData.ville},genre ${formData.genre} ,loisir: ${formData.loisirs} `} </p>
    </div>
    
)
}
export default Afficher;