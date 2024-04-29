import React from "react";
import '../myStyle.scss'
import { toast } from 'react-toastify';


class ListTodos extends React.Component{
    state = {
        title: '',
        id:'',  
        editor: '', 
        isEditor: true, 
        listTodos: [
            {id:'1', title:'Doing homework'}, 
            {id:'2', title:'Relaxing Music '}, 

        ]
    }
    handleInput = (event)=>{
        this.setState({
            title: event.target.value, 
        })
    }
    counter = 3; 
    handleAdd = ()=>{
        if(!this.state.title){
            toast.error("Missing the parameter !", {position: toast.POSITION.BOTTOM_CENTER})
            return; 
        }
        let currentTodos = this.state.listTodos; 
        currentTodos.push({
            id: this.counter++, 
            title:this.state.title, 
        }); 
        
        this.setState({ 
            id:'', 
            title:'', 
            listTodos: currentTodos, 
        })
        toast.success('Successed !!', {position: toast.POSITION.BOTTOM_CENTER})
    }
    handleDelete = (job)=>{
        let currentTodos = this.state.listTodos; 
        this.setState({ 
            listTodos: currentTodos.filter(item =>item.id !==job), 
        })
    }
    handleEdit = (todos)=>{
        this.setState({
            editor: todos, 
            isEditor: false, 
        })
    }
    handleSave = (todos)=>{
        if(!this.state.editor.title){
        toast.error("Missing the parameter", {position: toast.POSITION.BOTTOM_CENTER}); 
            return ; 
        } else {
            let listTodosCopy = [...this.state.listTodos]; 
            let objIndex = listTodosCopy.findIndex(item => item.id === todos.id); 
            listTodosCopy[objIndex].title = this.state.editor.title; 
            this.setState({
                isEditor: true, 
                listTodos: listTodosCopy, 
        })
        }
        
        
        
    }
    handleInputSave = (event)=>{
        let editorCopy = {...this.state.editor}; 
        editorCopy.title = event.target.value; 
        this.setState({
            editor:editorCopy, 
        })
    }
    render(){
        let {listTodos, isEditor, editor} = this.state; 
        return(
           <>
            <p>Todos App &amp; Meo </p>
            <div className="list-todos-container">
                <div className="add-todo">
                    <input type="text"
                    value={this.state.title}
                    onChange={(event)=>{this.handleInput(event)}}/>

                    <button type="button"
                    onClick={()=>this.handleAdd()}>Add</button>
                </div>
                <div className="list-todo-content">
                    <table className="table">
                    <tr>
                        <th>Todos</th>
                        <th>Title</th>
                        <th>Editor</th>
                    </tr>
                    {
                        listTodos.map((item, index)=>{
                            return(
                                <tr>
                                    <td>{index+1}</td>
                                    { isEditor ?
                                    <>
                                        <td>{item.title}</td>
                                        <button className="edit"
                                        onClick={()=> this.handleEdit(item)}>Edit</button>
                                    </>
                                    :
                                    <>{this.state.editor.id === item.id ?
                                        <>
                                        <td><input type="text" 
                                        value={editor.title}
                                        onChange={(event)=>this.handleInputSave(event, item.title)}/></td>
                                        <button
                                        onClick={() => this.handleSave(item)}>Save</button>
                                        </>
                                        :
                                       <>
                                        <td>{item.title}</td>
                                        <button className="edit"
                                        onClick={()=> this.handleEdit(item)}>Edit</button>
                                       </>
                                      }                                     
                                    </>
                                    }

                                    
                                    <button className="delete" onClick={()=> this.handleDelete(item.id)}>Delete</button>
                                    
                                </tr>
                            )
                        })
                    }
                    </table>
                  

                </div>
            </div>
           </>
        )
    }

}

export default ListTodos; 