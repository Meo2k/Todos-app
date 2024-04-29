import React from "react";

class AddComponents extends React.Component{
    state={
        title: '', 
        salary: '', 
    }

    handleChangetitleJob = (event) =>{
        this.setState({
            title: event.target.value, 
        })
    }

    handleChangeSalary = (event) =>{
        this.setState({
            salary: event.target.value, 
        })
    }
    handleSubmit = (event) =>{
        event.preventDefault(); 
        if(!this.state.title || !this.state.salary){
            alert('Missing requiredd parameters ')
            return ; 
        }
        console.log(">>> check data input ", this.state); 
        this.props.addNewJob({
            id: Math.floor(Math.random() * 100), 
            title: this.state.title, 
            salary: this.state.salary, 
        })
        this.setState({
            title: '', 
            salary: '', 
        })
    }

    render(){
        return(
            <>
            <div>
                <form action="/action_page.php">
                    <label htmlFor="fname">title Job</label><br/>
                    <input type="text" 
                    value={this.state.title}
                    onChange={(event)=>{ this.handleChangetitleJob(event)}}/><br/>
                    <label htmlFor="lname">Salary</label><br/>
                    <input type="text" 
                    value={this.state.salary}
                    onChange={(event)=>{this.handleChangeSalary(event)}}/><br/><br/>
                    
                    <input type="submit" value="Submit"
                    onClick={(event) => this.handleSubmit(event)}/>
                </form> 
            </div>
            </>
        )
    }
}

export default AddComponents; 