import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../actions/action";


function UserListe(){
    const users=useSelector((data)=>data.users)
    const dispatch=useDispatch()
    
    function hundleDelete(id){
        dispatch(deleteUser(id))
    }
    
   
    return(
       <div>
       
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Nom</td>
                    <td>prénom</td>
                    <td>email</td>
                    <td>poste</td>
                    <td>action</td>
                </tr>
            </thead>
            <tbody>
                {users.map((user,index)=>{
                  return( 
                    <tr key={index}>
                        <td>{user.id}</td>
                        <td>{user.nom}</td>
                        <td>{user.prenom}</td>
                        <td>{user.email}</td>
                        <td>{user.poste}</td>
                        <td>
                            <Link to={`/update-user/${user.id}`}>
                            <button>Modifier</button></Link>
                            <button onClick={()=>hundleDelete(user.id)}>Supprimer</button>
                        </td>
                    </tr>)
                })
                }

            </tbody>
        </table>
        <Link to='/add-user'><button>Ajouter</button></Link>

       </div>

    )
}
export default UserListe;