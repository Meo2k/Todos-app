import React from 'react'; 
import ChildComponents from './childComponents'; 
import AddComponents from './AddComponents';
class MyComponents extends React.Component{

    state ={
       arrJobs: [
           {id: 'abcJob1', title: 'Developers',  salary:'500'}, 
           {id: 'abcJob2', title: 'Testers',  salary:'400'}, 
           {id: 'abcJob3', title: 'Project Manager',  salary:'1000'}
       ]
    }


    addNewJob = (job) => {
        console.log('check job from parent: ', job); 
        let currentJob = this.state.arrJobs; 
        currentJob.push(job); 
        this.setState({
           arrJobs: currentJob, 
        })
    }
    deleteAJob = (job) =>{
        let currentJob = this.state.arrJobs; 
        this.setState({
            arrJobs: currentJob.filter(item => item.id !== job.id ), 
        })
        
    }

    render() {
         
        return (
        <>
            <div>
    
                <AddComponents
                addNewJob = {this.addNewJob}
                />
                <ChildComponents 
                arrJobs={this.state.arrJobs}
                deleteAJob = {this.deleteAJob}
                /> 
               
            </div>
        </>
        )
    }
}

export default MyComponents ; 