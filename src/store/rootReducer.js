import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const initState = {
    isEditor: false,
    editorTodo:'', 
    isBody: false, 
    users:[
        {id: 1, name:'Chicken'}, 
        {id: 2, name:'Horse'}
    ]
}

const rootReducer = (state=initState, action)=>{
    switch(action.type){
        case "DELETE_USER": 
            let users = state.users; 
            users = users.filter(item => item.id !== action.payload.id); 
            console.log(">>>run into delete user : ", action); 

            return {
                ...state,users
            }; 
            break; 
        case "CREATE_USER": 
            let id = Math.floor(Math.random() * 1000); 
            let user = {id, name: `Name${id}`}; 
            toast.success("Successed !")
            return{
                ...state, users: [...state.users, user]
            }
            break; 
        case "EDITOR_USER":
            return {
                ...state,
                isEditor: true, 
                isBody: true, 
                editorTodo: action.payload

            }; 
            break; 
        case "INPUT_USER": 
        let editorCopy = {...state.editorTodo}; 
        editorCopy.name = action.payload.target.value; 
            return {
                ...state, editorTodo:editorCopy,
            }
            break; 
        case "SAVE_USER": 
            if(!state.editorTodo.name){
                toast.error("Missing parameter")
                return state; 
            } else{
            let listObj = state.users; 
            let objIndex = listObj.findIndex(item => item.id === action.payload.id); 
            listObj[objIndex].name = state.editorTodo.name; 
            return {
                ...state, 
                isEditor: false, 
                users: listObj
            }
            }
            break; 
        case "BODY_USER": 
            return {
                ...state, isBody: false
            }
            break; 
        default: 
            return state; 
    }
}

export default rootReducer; 