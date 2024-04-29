import React, { useReducer } from "react"; 
import {withRouter} from 'react-router'; 
import Color from "../../HOC/color";
import logo from '../../../assets/images/photos3.png'
import {connect} from 'react-redux'; 
import './home.scss'; 

class Home extends React.Component{   
    state = {
        isEditor: false,
        editorTodo:[], 
    }
    handleDeleteUser = (user)=>{
        this.props.deleteUserRedux(user)
    }
    handleCreateUser = () =>{
        this.props.createUserRedux(); 
    }
    handleEditor = (todo,event) =>{
        event.stopPropagation(); 
        this.props.editorRedux(todo); 
    
    }
    handleInput = (event) =>{
        // let editorCopy = {...this.state.editorTodo}; 
        // // có sự khác nhau giữa = {...obj} và = obj
        // editorCopy.name = event.target.value; 
        // this.setState({
        //     editorTodo: editorCopy, 
        // })
        
        
        this.props.inputRedux(event)
    }
    handleInput_Body = (event) =>{
        event.stopPropagation(); 
    }
    handleSave = (todo) =>{
        this.props.saveRedux(todo)
    }
    render(){
        let listUser = this.props.dataRedux; 
        let isEditor = this.props.isEditor; 
        let editorTodo = this.props.editorTodo; 
        let isBody = this.props.isBody; 
        return(
            <>
            <div>
                Hello &nbsp; &nbsp; This is the homepage
            </div>
            <br/>
            <img style={{
                width: '300px', 
                height: '300px', 
                // borderRadius: '50%', 
                objectFit: 'contain'
            }} 
            src={logo}/>
            <div>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Editor</th>
                    </tr>
                {listUser && listUser.length > 0 &&
                    
                    <>
                        {listUser.map((item, index) =>{
                            return(
                                <>
                                <tr key={item.id}>
                                    <td>{index+1}</td>
                                
                                {isEditor === false?
                                <>
                                    <td>
                                        {item.name}
                                    </td> 
                                    <button onClick={(event)=> this.handleEditor(item,event)}>Edit</button> 
                                </>
                                :
                                <>
                                {isBody && editorTodo.id === item.id ?
                                   <>
                                   <td>
                                   <input type="text" value={editorTodo.name} onClick={(event)=> this.handleInput_Body(event)} onChange={(event) => this.handleInput(event)}></input>
                                   </td>
                                   <button onClick={()=> this.handleSave(item)}>Save</button> 
                                   </>
                                   :
                                   <>
                                   <td>{item.name}</td>
                                   <button onClick={(event)=> this.handleEditor(item,event)}>Edit</button> 
                                   </>
                                }
                                </>
                                
                                }
                                <button className="delete-btn" onClick={()=>this.handleDeleteUser(item)}>X</button> &nbsp; 
                                </tr>
                                </>
                            )
                        }) 
                        }
                    </>
                }
                </table>
                <button onClick={() => this.handleCreateUser()}>ADD</button>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        dataRedux: state.users, 
        isEditor: state.isEditor,
        editorTodo: state.editorTodo, 
        isBody: state.isBody, 
    }

}
const mapDispatchToProps =(dispatch)=>{
    return{
        deleteUserRedux: (userDelete) =>dispatch({type: "DELETE_USER", payload: userDelete}), 
        createUserRedux: () => dispatch({type: "CREATE_USER"}), 
        editorRedux: (userEditor) => dispatch({type: "EDITOR_USER", payload: userEditor }), 
        saveRedux: (userSave) => dispatch({type: "SAVE_USER", payload: userSave}), 
        inputRedux: (inputUser) => dispatch({type:"INPUT_USER", payload: inputUser})

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home)); 
