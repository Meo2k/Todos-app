import React from "react";
import {withRouter} from "react-router-dom"; 
import axios from 'axios'; 
class DetailUser extends React.Component{
    state = {
        first_name: '', 
        last_name: '', 
        email:'', 
        image: '', 
    }
    async componentDidMount(){
       let res = await axios.get(`https://reqres.in/api/users/${this.props.match.params.id}`)
       this.setState({
           first_name: res.data.data.first_name, 
           last_name: res.data.data.last_name, 
           email: res.data.data.email,
           image: res.data.data.avatar, 
       })

    }
    handleBack = ()=>{
        this.props.history.push('/user')
    }
    render(){
        let {first_name, last_name, email, image} = this.state; 
        return(
            <>
            <div>{first_name} &nbsp; {last_name}</div>
            <br/>
            <img src={image}></img>
            <div>{email}</div>
            <br/>
            <button style={{cursor:'pointer'}} 
            onClick={()=>this.handleBack()}>Back</button>
            </>
        )
    }
}
export default withRouter(DetailUser); 
