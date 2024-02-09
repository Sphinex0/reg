const initialeState={users:[
    {id:1,nom:"Atmane",prenom:"Zineb",email:"zineb.atmane@gmail.com",poste:"admin"},
    {id:2,nom:"Atmane",prenom:"Meryem",email:"meryem.atmane@gmail.com",poste:"admin"}
]}

const reducer=(state=initialeState,action)=>{
    switch(action.type){
        case "add_user" :
            return{
                ...state,
                users:[...state.users,action.payload]
            }
        case "update_user":
            const user=state.users.find(s=>s.id===parseInt(action.payload.id))
       if(user){
        user.nom=action.payload.nom;
        user.prenom=action.payload.prenom;
        user.email=action.payload.email;
        user.poste=action.payload.poste;
       }
       return state; 
       case 'delete_user':
            return{...state,users:[...state.users.filter(s=>s.id!==parseInt(action.payload))]}

        default:
            return state;
    }
       

}

export default reducer